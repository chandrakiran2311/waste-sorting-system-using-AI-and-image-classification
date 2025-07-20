import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Loader2, Leaf, Recycle, Trash2 } from 'lucide-react';
import { classifyWaste } from '../services/classificationService';

interface ClassificationResult {
  category: 'biodegradable' | 'recyclable' | 'trash';
  confidence: number;
}

const Classify: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please make sure you have granted camera permissions.');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (context) {
        context.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setSelectedImage(imageData);
        setResult(null);
        closeCamera();
      }
    }
  };

  const closeCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsCameraOpen(false);
  };

  const classifyImage = async () => {
    if (!selectedImage) return;
    
    setIsLoading(true);
    try {
      const classification = await classifyWaste(selectedImage);
      setResult(classification);
    } catch (error) {
      console.error('Classification error:', error);
      alert('Error classifying image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'biodegradable':
        return {
          icon: Leaf,
          color: 'text-green-600',
          bgColor: 'bg-green-100',
          borderColor: 'border-green-500',
          title: 'Biodegradable',
          description: 'This item can decompose naturally and should go in your compost or organic waste bin.'
        };
      case 'recyclable':
        return {
          icon: Recycle,
          color: 'text-blue-600',
          bgColor: 'bg-blue-100',
          borderColor: 'border-blue-500',
          title: 'Recyclable',
          description: 'This item can be recycled. Please clean it and place it in your recycling bin.'
        };
      case 'trash':
        return {
          icon: Trash2,
          color: 'text-red-600',
          bgColor: 'bg-red-100',
          borderColor: 'border-red-500',
          title: 'Trash',
          description: 'This item should go in your general waste bin as it cannot be recycled or composted.'
        };
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Classify Your Waste</h1>
          <p className="text-xl text-gray-600">
            Upload an image or take a photo to identify the correct disposal method
          </p>
        </div>

        {/* Upload/Camera Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {!selectedImage && !isCameraOpen ? (
            <div className="text-center">
              <div className="border-4 border-dashed border-gray-300 rounded-2xl p-12 mb-6">
                <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-6">
                  Choose how you'd like to add an image
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
                  >
                    <Upload className="h-5 w-5" />
                    <span>Upload Image</span>
                  </button>
                  
                  <button
                    onClick={openCamera}
                    className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                  >
                    <Camera className="h-5 w-5" />
                    <span>Use Camera</span>
                  </button>
                </div>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          ) : isCameraOpen ? (
            <div className="text-center">
              <video
                ref={videoRef}
                autoPlay
                className="w-full max-w-md mx-auto rounded-lg mb-4"
              />
              <canvas ref={canvasRef} className="hidden" />
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={capturePhoto}
                  className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
                >
                  <Camera className="h-5 w-5" />
                  <span>Capture Photo</span>
                </button>
                
                <button
                  onClick={closeCamera}
                  className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
                >
                  <X className="h-5 w-5" />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-md w-full h-auto rounded-lg shadow-md"
                />
                <button
                  onClick={clearImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={classifyImage}
                  disabled={isLoading}
                  className="flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Camera className="h-5 w-5" />
                  )}
                  <span>{isLoading ? 'Classifying...' : 'Classify Image'}</span>
                </button>
                
                <button
                  onClick={clearImage}
                  className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
                >
                  <X className="h-5 w-5" />
                  <span>Clear</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Classification Result
            </h2>
            
            {(() => {
              const categoryInfo = getCategoryInfo(result.category);
              if (!categoryInfo) return null;
              
              const { icon: Icon, color, bgColor, borderColor, title, description } = categoryInfo;
              
              return (
                <div className={`border-4 ${borderColor} ${bgColor} rounded-2xl p-8 text-center`}>
                  <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6 border-4 ${borderColor}`}>
                    <Icon className={`h-10 w-10 ${color}`} />
                  </div>
                  
                  <h3 className={`text-3xl font-bold ${color} mb-4`}>{title}</h3>
                  <p className="text-lg text-gray-700 mb-4">{description}</p>
                  
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Confidence: </span>
                    <span className={`font-bold ${color}`}>
                      {Math.round(result.confidence * 100)}%
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Classify;