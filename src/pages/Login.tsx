/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log('Login Data:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center ">Login</h2>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
