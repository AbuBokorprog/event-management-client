import { baseApi } from './baseApi';

export const eventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => ({
        url: '/events',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Event'],
    }),
    getMyEvents: builder.query({
      query: () => ({
        url: '/events/my-events',
        method: 'GET',
      }),
      providesTags: ['Event'],
    }),
    updateEvent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/events/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Event'],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Event'],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetMyEventsQuery,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventApi;
