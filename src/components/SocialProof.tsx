import React from 'react'

function SocialProof() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-700 italic mb-4">"We are absolutely in love with our new bulldog puppy! He is healthy, playful, and has brought so much joy to our family. The breeders were incredibly knowledgeable and supportive throughout the entire process."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <p className="font-semibold">Sarah Miller</p>
                <p className="text-sm text-gray-500">Happy Bulldog Owner</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-700 italic mb-4">"From the first contact to picking up our puppy, the experience was exceptional. The breeders clearly care about the health and well-being of their dogs, and it shows. We highly recommend them to anyone looking for a quality English Bulldog."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <p className="font-semibold">David Johnson</p>
                <p className="text-sm text-gray-500">Loyal Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">Trusted by families across the country.</p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
