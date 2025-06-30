import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Shield,
  // Chrome,
  // Facebook,
} from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onLogin = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert(`Welcome back! Logged in with: ${data.email}`);
    loginForm.reset();
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center p-8 pb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl mb-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-white/70 text-lg">
            Sign in to continue your journey
          </p>
        </div>
        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Login Form */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-white/90 text-sm font-semibold mb-3">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-violet-400 transition-colors" />
                  <input
                    {...loginForm.register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    placeholder="Enter your email"
                  />
                </div>
                {loginForm.formState.errors.email && (
                  <div className="flex items-center mt-2 text-red-400 text-sm animate-fade-in">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {loginForm.formState.errors.email.message}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-white/90 text-sm font-semibold mb-3">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-violet-400 transition-colors" />
                  <input
                    {...loginForm.register('password', {
                      required: 'Password is required',
                    })}
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <div className="flex items-center mt-2 text-red-400 text-sm animate-fade-in">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {loginForm.formState.errors.password.message}
                  </div>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center group cursor-pointer">
                  <input
                    {...loginForm.register('rememberMe')}
                    type="checkbox"
                    className="w-4 h-4 text-violet-600 bg-white/10 border-white/30 rounded focus:ring-violet-500 focus:ring-2 focus:ring-offset-0"
                  />
                  <span className="ml-3 text-white/80 text-sm group-hover:text-white transition-colors">
                    Remember me
                  </span>
                </label>
                <button className="text-violet-300 hover:text-violet-200 text-sm font-medium transition-colors focus:outline-none focus:underline">
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                onClick={loginForm.handleSubmit(onLogin)}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-purple-800 hover:to-pink-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Signing In...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Shield className="w-5 h-5 mr-3" />
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </div>
                )}
              </button>

              {/* Divider */}
              {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-white/60 font-medium">
                    Or continue with
                  </span>
                </div>
              </div> */}

              {/* Social Login */}
              {/* <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white/80 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                  <Chrome className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white/80 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                  <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Facebook</span>
                </button>
              </div> */}

              {/* Sign Up Link */}
              <div className="text-center pt-4">
                <p className="text-white/70">
                  Don't have an account?{' '}
                  <button className="text-violet-300 hover:text-violet-200 font-semibold transition-colors focus:outline-none focus:underline">
                    Sign up for free
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center text-white/60 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            <span>Protected by 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
