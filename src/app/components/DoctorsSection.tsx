import React from 'react';
export function DoctorsSection() {
  const doctors = [{
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Johnson has over 15 years of experience in cardiology and is board-certified in both internal medicine and cardiovascular disease.'
  }, {
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Chen specializes in neurological disorders and has published numerous research papers on advanced treatment methods.'
  }, {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: "With a passion for children's health, Dr. Rodriguez provides compassionate care for patients from infancy through adolescence."
  }, {
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Wilson is an expert in orthopedic surgery with specialized training in minimally invasive procedures and sports medicine.'
  }];
  return <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Doctors
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            Our team of highly qualified medical professionals is dedicated to
            providing exceptional care with expertise and compassion.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {doctor.specialty}
                </p>
                <p className="text-gray-700 text-sm">{doctor.bio}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}