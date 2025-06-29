/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log('New Event:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center ">Add Event</h2>
        <input
          {...register('title')}
          placeholder="Event Title"
          className="w-full border p-2 rounded"
        />
        <input
          {...register('name')}
          placeholder="Organizer Name"
          className="w-full border p-2 rounded"
        />
        <input
          {...register('datetime')}
          type="datetime-local"
          className="w-full border p-2 rounded"
        />
        <input
          {...register('location')}
          placeholder="Location"
          className="w-full border p-2 rounded"
        />
        <textarea
          {...register('description')}
          placeholder="Description"
          className="w-full border p-2 rounded"
        ></textarea>
        <input
          {...register('attendeeCount')}
          type="number"
          defaultValue={0}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
