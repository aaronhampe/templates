import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
export function TestimonialsSection() {
  const testimonials = [{
    text: 'The doctors here are exceptional. They took the time to listen to my concerns and developed a treatment plan that has significantly improved my quality of life.',
    name: 'Jennifer L.',
    role: 'Patient'
  }, {
    text: "I've been bringing my family to this practice for years. The care is always top-notch and the staff makes us feel comfortable and well-cared for.",
    name: 'Robert M.',
    role: 'Patient'
  }, {
    text: "After struggling with chronic pain for years, Dr. Wilson developed a comprehensive treatment approach that finally brought me relief. I'm forever grateful.",
    name: 'Sophia K.',
    role: 'Patient'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="absolute top-6 left-6 text-blue-300">
              <QuoteIcon size={40} />
            </div>
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-blue-100">
                <ChevronLeftIcon size={20} />
              </button>
              <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-blue-100">
                <ChevronRightIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}