'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface InteractiveStepSliderProps {
  steps: Step[];
}

const InteractiveStepSlider = ({ steps }: InteractiveStepSliderProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Main Content */}
      <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
        {/* Step Content with Animation */}
        <div className="flex-1">
          <div className="animate-fade-in-scale" key={currentStep}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-float">
                {steps[currentStep].number}
              </div>
              <div className="w-12 h-12 text-primary-600 animate-scale-in">
                {steps[currentStep].icon}
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-forest-700 mb-4">
              {steps[currentStep].title}
            </h3>
            
            <p className="text-neutral-600 text-lg leading-relaxed">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Progress Dots */}
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'w-8 bg-primary-600'
                    : 'w-2 bg-gray-300 hover:bg-primary-300'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2">
            <button
              onClick={prevStep}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-600 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous step"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextStep}
              className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Next step"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-purple-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default InteractiveStepSlider;
