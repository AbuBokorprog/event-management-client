import { baseApi } from './baseApi';

export const joinEventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    joinEvent: builder.mutation({
      query: (data) => ({
        url: '/join-events',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['JoinEvent'],
    }),
    getMyJoinedEvents: builder.query({
      query: () => ({
        url: '/join-events/my-events',
        method: 'GET',
      }),
      providesTags: ['JoinEvent'],
    }),
  }),
});

export const { useJoinEventMutation, useGetMyJoinedEventsQuery } = joinEventApi;
