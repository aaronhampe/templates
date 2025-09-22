import React from 'react';
import { HeartPulseIcon, ShieldCheckIcon, AwardIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Practice
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              A Legacy of Excellence in Healthcare
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2005, our medical practice brings together a team of
              highly qualified doctors committed to providing exceptional care.
              We combine advanced medical technology with compassionate service
              to ensure the best outcomes for our patients.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our state-of-the-art facility is designed to create a comfortable
              environment where patients receive personalized attention and the
              highest standard of medical care.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">15+</div>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">20+</div>
                <p className="text-sm text-gray-600">Specialist Doctors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">10k+</div>
                <p className="text-sm text-gray-600">Satisfied Patients</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <HeartPulseIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Patient-Centered Care
                  </h4>
                  <p className="text-gray-700">
                    We prioritize your needs, comfort, and wellbeing throughout
                    your healthcare journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Advanced Technology
                  </h4>
                  <p className="text-gray-700">
                    We utilize the latest medical technologies and techniques
                    for accurate diagnosis and treatment.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <AwardIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Team
                  </h4>
                  <p className="text-gray-700">
                    Our doctors are leaders in their fields with extensive
                    training and experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}