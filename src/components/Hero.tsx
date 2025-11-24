import React from 'react'

function Hero() {
  return (
    <header className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Your Perfect English Bulldog Companion</h1>
        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed mb-12">
          We specialize in breeding healthy, happy English Bulldogs with exceptional temperaments. Our puppies are raised in a loving environment and are ready to become cherished members of your family.
        </p>
        <div className="flex items-center space-x-4">
          <a href="#" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">View Available Puppies</a>
          <a href="#" className="border-2 border-gray-300 hover:border-blue-500 px-6 py-3 rounded-xl text-lg transition-all duration-300">Learn More</a>
        </div>
      </div>
    </header>
  )
}

export default Hero
