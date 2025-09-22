import React from 'react';
import { HeartIcon, BrainIcon, BoneIcon, StethoscopeIcon, BabyIcon } from 'lucide-react';
export function ServicesSection() {
  const services = [{
    title: 'Cardiology',
    icon: <HeartIcon className="h-8 w-8 text-blue-600" />,
    description: 'Comprehensive care for heart conditions including diagnostic testing, treatment, and preventive care.'
  }, {
    title: 'Neurology',
    icon: <BrainIcon className="h-8 w-8 text-blue-600" />,
    description: 'Specialized treatment for disorders of the nervous system, brain, and spinal cord.'
  }, {
    title: 'Orthopedics',
    icon: <BoneIcon className="h-8 w-8 text-blue-600" />,
    description: 'Expert care for musculoskeletal issues including joint replacement and sports medicine.'
  }, {
    title: 'General Medicine',
    icon: <StethoscopeIcon className="h-8 w-8 text-blue-600" />,
    description: 'Primary healthcare services including routine check-ups, preventive care, and health screenings.'
  }, {
    title: 'Pediatrics',
    icon: <BabyIcon className="h-8 w-8 text-blue-600" />,
    description: 'Specialized healthcare for children from birth through adolescence, focusing on development and wellness.'
  }, {
    title: 'Pulmonology',
    icon: <div className="h-8 w-8 text-blue-600" />,
    description: 'Diagnosis and treatment of respiratory conditions affecting the lungs and breathing.'
  }];
  return <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet the healthcare
            needs of your entire family.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}