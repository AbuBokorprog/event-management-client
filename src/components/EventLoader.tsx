import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const EventLoader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { icon: Calendar, text: 'Scheduling events...', color: 'text-purple-400' },
    { icon: Users, text: 'Gathering attendees...', color: 'text-blue-400' },
    { icon: MapPin, text: 'Finding venues...', color: 'text-green-400' },
    { icon: Clock, text: 'Setting reminders...', color: 'text-orange-400' },
    { icon: Sparkles, text: 'Adding magic...', color: 'text-pink-400' },
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 50);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-md">
        {/* Main Logo/Brand Area */}
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto shadow-2xl">
              <Calendar className="w-10 h-10 text-white animate-bounce" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            EventHub
          </h1>
          <p className="text-purple-200 text-sm">
            Your events, perfectly managed
          </p>
        </div>

        {/* Progress Circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2.51 * progress} 251.2`}
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Icon
                    key={index}
                    className={`w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      index === currentStep
                        ? `${step.color} scale-100 opacity-100`
                        : 'text-white/30 scale-75 opacity-0'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <p className="text-white text-lg font-medium mb-2 h-7">
            {steps[currentStep].text}
          </p>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-purple-200 text-sm font-medium">
          {Math.round(progress)}% Complete
        </p>

        {/* Feature Highlights */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-purple-200">
          <div className="flex items-center space-x-2 opacity-60">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Real-time sync</span>
          </div>
          <div className="flex items-center space-x-2 opacity-60">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Smart scheduling</span>
          </div>
          <div className="flex items-center space-x-2 opacity-60">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span>Auto reminders</span>
          </div>
          <div className="flex items-center space-x-2 opacity-60">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span>Team collaboration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLoader;
