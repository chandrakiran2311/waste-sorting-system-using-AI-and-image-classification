import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Recycle, Leaf, Trash2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(76, 175, 80, 0.7), rgba(76, 175, 80, 0.7)), url('https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            Snap Bin
          </h1>
          <p className="text-2xl md:text-3xl mb-8 drop-shadow-md">
            Sort your waste. Save the planet.
          </p>
          <Link
            to="/classify"
            className="inline-flex items-center space-x-3 bg-white text-green-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <Camera className="h-6 w-6" />
            <span>Start Classifying</span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How Snap Bin Works
            </h2>
            <p className="text-xl text-gray-600">
              Smart waste classification made simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-200 shadow-lg">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Capture</h3>
              <p className="text-gray-600">
                Take a photo or upload an image of your waste item
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 shadow-lg">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Analyze</h3>
              <p className="text-gray-600">
                Our AI model processes and classifies your waste instantly
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200 shadow-lg">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Sort</h3>
              <p className="text-gray-600">
                Get instant results and dispose responsibly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Waste Categories
            </h2>
            <p className="text-xl text-gray-600">
              We classify waste into three main categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Biodegradable</h3>
              <p className="text-gray-600 text-center">
                Organic waste that decomposes naturally like food scraps, leaves, and paper
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Recyclable</h3>
              <p className="text-gray-600 text-center">
                Materials that can be processed and reused like plastic bottles, cans, and cardboard
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trash2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">Trash</h3>
              <p className="text-gray-600 text-center">
                Non-recyclable waste that goes to landfill or requires special disposal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;