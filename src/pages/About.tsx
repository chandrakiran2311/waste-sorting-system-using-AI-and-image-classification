import React from 'react';
import { Recycle, Leaf, Users, Target, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Recycle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Snap Bin</h1>
          <p className="text-xl text-gray-600">
            Making recycling smarter and more accessible through artificial intelligence
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Snap Bin is an intelligent waste-sorting system powered by machine learning.</strong> 
              Our aim is to make recycling smarter and more accessible by helping people classify waste 
              easily with just a picture.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              In a world where environmental consciousness is more important than ever, proper waste 
              disposal plays a crucial role in protecting our planet. However, many people struggle 
              with correctly identifying whether an item is biodegradable, recyclable, or should go 
              to landfill. This uncertainty often leads to contamination in recycling streams and 
              missed opportunities for proper composting.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Snap Bin bridges this knowledge gap by leveraging cutting-edge machine learning 
              technology to instantly classify waste items through image recognition. Our system 
              empowers users to make informed decisions about waste disposal, contributing to a 
              cleaner, more sustainable future for everyone.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To simplify waste classification and promote environmental responsibility through 
              innovative technology, making it easier for everyone to contribute to a sustainable future.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              A world where proper waste disposal is intuitive and accessible to all, leading to 
              reduced environmental impact and increased recycling efficiency globally.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Classification</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms trained to accurately identify waste categories
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">User-Friendly Interface</h3>
              <p className="text-gray-600">
                Simple, intuitive design that makes waste classification accessible to everyone
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Environmental Impact</h3>
              <p className="text-gray-600">
                Helping reduce contamination and improve recycling efficiency worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React with TypeScript for robust UI development</li>
                <li>• Tailwind CSS for responsive, modern styling</li>
                <li>• Camera API integration for real-time image capture</li>
                <li>• Progressive Web App capabilities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Backend & AI</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python Flask for lightweight API development</li>
                <li>• TensorFlow/Keras for machine learning models</li>
                <li>• Image preprocessing and classification pipeline</li>
                <li>• RESTful API design for seamless integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;