/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  UserPlus,
  Camera,
  Check,
  AlertCircle,
} from 'lucide-react';
import { useRegisterMutation } from '../redux/features/api/authApi';
import { Link, redirect } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  photoUrl: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const Registration: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [registerUser] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      photoUrl: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const password = watch('password');
  const watchedFields = watch();

  const onSubmit = async (data: FormData) => {
    const payload = {
      ...data,
      name: data.firstName + ' ' + data.lastName,
    };

    try {
      setIsSubmitting(true);

      const res = await registerUser(payload).unwrap();
      console.log('Registration successful:', res);

      alert('Registration successful!');
      redirect('/login');
      reset();
    } catch (error: any) {
      console.error('Registration failed:', error);
      alert(error?.data?.message || 'Something went wrong!');
    } finally {
      setIsSubmitting(false);
      setCurrentStep(1);
    }
  };

  const nextStep = async () => {
    if (currentStep === 1) {
      const isStep1Valid = await trigger(['firstName', 'lastName', 'email']);
      if (isStep1Valid) setCurrentStep(2);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getFieldStatus = (fieldName: keyof FormData) => {
    const field = watchedFields[fieldName];
    const error = errors[fieldName];
    const touched = touchedFields[fieldName];

    if (!touched || !field) return 'default';
    if (error) return 'error';
    return 'success';
  };

  const FieldIcon = ({ status }: { status: string }) => {
    if (status === 'success')
      return <Check className="w-4 h-4 text-green-500" />;
    if (status === 'error')
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    return null;
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStep >= 1
                  ? 'bg-purple-500 shadow-lg shadow-purple-500/50'
                  : 'bg-white/20'
              }`}
            ></div>
            <div
              className={`h-0.5 w-16 transition-all duration-300 ${
                currentStep >= 2 ? 'bg-purple-500' : 'bg-white/20'
              }`}
            ></div>
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStep >= 2
                  ? 'bg-purple-500 shadow-lg shadow-purple-500/50'
                  : 'bg-white/20'
              }`}
            ></div>
          </div>
          <div className="text-center mt-4">
            <p className="text-white/60 text-sm">
              Step {currentStep} of 2 -{' '}
              {currentStep === 1
                ? 'Personal Information'
                : 'Security & Preferences'}
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-3xl mb-6 shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-transform duration-300">
            <UserPlus className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold  mb-3 tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-gray-300 text-lg font-light">
            Join thousands of users and start your journey
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
          <div className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="block text-white/90 text-sm font-semibold mb-3"
                    >
                      First Name
                      <FieldIcon status={getFieldStatus('firstName')} />
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                      <input
                        {...register('firstName', {
                          required: 'First name is required',
                          minLength: {
                            value: 2,
                            message: 'First name must be at least 2 characters',
                          },
                        })}
                        type="text"
                        id="firstName"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        placeholder="Enter your first name"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="block text-white/90 text-sm font-semibold mb-3"
                    >
                      Last Name
                      <FieldIcon status={getFieldStatus('lastName')} />
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                      <input
                        {...register('lastName', {
                          required: 'Last name is required',
                          minLength: {
                            value: 2,
                            message: 'Last name must be at least 2 characters',
                          },
                        })}
                        type="text"
                        id="lastName"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        placeholder="Enter your last name"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-white/90 text-sm font-semibold mb-3"
                  >
                    Email Address
                    <FieldIcon status={getFieldStatus('email')} />
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Photo URL Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="photoUrl"
                    className="block text-white/90 text-sm font-semibold mb-3"
                  >
                    Profile Photo URL
                    <span className="text-xs ms-4 text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      Optional
                    </span>
                    <FieldIcon status={getFieldStatus('photoUrl')} />
                  </label>
                  <div className="relative group">
                    <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      {...register('photoUrl', {
                        pattern: {
                          value: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i,
                          message:
                            'Please enter a valid image URL (jpg, jpeg, png, gif, webp)',
                        },
                      })}
                      type="url"
                      id="photoUrl"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      placeholder="https://example.com/your-photo.jpg"
                    />
                  </div>
                  {errors.photoUrl && (
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.photoUrl.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-purple-200"
                >
                  Continue to Security Settings
                </button>
              </div>
            )}

            {/* Step 2: Security & Preferences */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                {/* Password Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-white/90 text-sm font-semibold mb-3"
                  >
                    Password
                    <FieldIcon status={getFieldStatus('password')} />
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                          message:
                            'Password must contain uppercase, lowercase, and number',
                        },
                      })}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors p-1"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.password.message}
                    </p>
                  )}
                  {/* Password Strength Indicator */}
                  {password && (
                    <div className="space-y-2">
                      <div className="flex gap-1">
                        <div
                          className={`h-1 flex-1 rounded ${
                            password.length >= 8
                              ? 'bg-green-400'
                              : 'bg-gray-200'
                          }`}
                        ></div>
                        <div
                          className={`h-1 flex-1 rounded ${
                            /[A-Z]/.test(password)
                              ? 'bg-green-400'
                              : 'bg-gray-200'
                          }`}
                        ></div>
                        <div
                          className={`h-1 flex-1 rounded ${
                            /[a-z]/.test(password)
                              ? 'bg-green-400'
                              : 'bg-gray-200'
                          }`}
                        ></div>
                        <div
                          className={`h-1 flex-1 rounded ${
                            /\d/.test(password) ? 'bg-green-400' : 'bg-gray-200'
                          }`}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-white/90 text-sm font-semibold mb-3"
                  >
                    Confirm Password
                    <FieldIcon status={getFieldStatus('confirmPassword')} />
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) =>
                          value === password || 'Passwords do not match',
                      })}
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors p-1"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <input
                      {...register('acceptTerms', {
                        required: 'You must accept the terms and conditions',
                      })}
                      type="checkbox"
                      id="acceptTerms"
                      className="mt-1 w-5 h-5 text-purple-600 bg-white border-2 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-sm text-gray-700 font-medium"
                    >
                      I agree to the{' '}
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-800 font-semibold underline underline-offset-2"
                      >
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-800 font-semibold underline underline-offset-2"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1 mt-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.acceptTerms.message}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-4 px-6 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 focus:ring-4 focus:ring-gray-200"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid || isSubmitting}
                    className={`flex-2 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 focus:ring-4 focus:ring-purple-200 ${
                      !isValid || isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                        Creating Account...
                      </div>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Sign In Link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600 font-medium">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-purple-600 hover:text-purple-800 font-semibold underline underline-offset-2 transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
