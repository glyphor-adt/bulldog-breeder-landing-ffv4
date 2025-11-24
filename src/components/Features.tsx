import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Unmatched Health Guarantees',
    description: 'We provide comprehensive health guarantees, ensuring your puppy is free from genetic defects. Your peace of mind is our priority.',
  },
  {
    icon: Shield,
    title: 'Rigorous Health Testing',
    description: 'All our breeding dogs undergo extensive health screening to ensure the highest quality puppies. We genetically test for common bulldog ailments.',
  },
  {
    icon: TrendingUp,
    title: 'Exceptional Temperament',
    description: 'Our bulldogs are known for their gentle and loving temperaments, making them perfect family pets. Socialized from birth, they are well-adjusted and friendly.',
  },
]

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Bulldogs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
