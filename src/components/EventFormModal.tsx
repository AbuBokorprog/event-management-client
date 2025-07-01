/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import {
  useCreateEventMutation,
  useUpdateEventMutation,
} from '../redux/features/api/eventApi';
import { useAuth } from '../provider/AuthContext';
import moment from 'moment';

interface EventFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  event?: any;
}

const EventFormModal = ({ isOpen, onClose, event }: EventFormModalProps) => {
  const isEditMode = !!event;
  const { user } = useAuth();
  const [createEvent] = useCreateEventMutation();
  const [updateEvent] = useUpdateEventMutation();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditMode
      ? {
          title: event?.title,
          name: event?.name || user?.name,
          dateTime: event?.dateTime,
          location: event?.location,
          description: event?.description,
          attendeeCount: event?.attendeeCount || 0,
          photoUrl: event?.photoUrl,
        }
      : {
          title: '',
          name: '',
          dateTime: '',
          location: '',
          description: '',
          attendeeCount: 0,
          photoUrl: '',
        },
  });

  useEffect(() => {
    if (isOpen) {
      reset({
        title: event?.title || '',
        name: event?.name || '',
        dateTime: event?.dateTime || '',
        location: event?.location || '',
        description: event?.description || '',
        attendeeCount: event?.attendeeCount || 0,
        photoUrl: event?.photoUrl || '',
      });
    }
  }, [event, isOpen, reset]);

  const onSubmit = async (data: any) => {
    data.userId = user?.id;
    data.attendeeCount = Number(data.attendeeCount);
    data.dateTime = moment(event?.dateTime).toISOString();
    try {
      if (isEditMode) {
        await updateEvent({ id: event._id, body: data }).unwrap();
      } else {
        await createEvent(data).unwrap();
      }
      onClose();
    } catch (err) {
      console.error('Event Error:', err);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl space-y-4">
          <Dialog.Title className="text-xl font-bold text-center">
            {isEditMode ? 'Edit Event' : 'Add Event'}
          </Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <input
              {...register('title')}
              placeholder="Event Title"
              className="w-full border p-2 rounded"
            />
            <input
              {...register('name')}
              placeholder="Organizer Name"
              defaultValue={user?.name}
              className="w-full border p-2 rounded"
            />
            <input
              {...register('dateTime')}
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
            />
            <input
              {...register('attendeeCount')}
              type="number"
              className="w-full border p-2 rounded"
              defaultValue={0}
            />
            <input
              {...register('photoUrl')}
              type="text"
              placeholder="Photo URL"
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 text-white py-2 rounded"
            >
              {isEditMode ? 'Update Event' : 'Add Event'}
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EventFormModal;
