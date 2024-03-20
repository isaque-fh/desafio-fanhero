
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../domain/User';

const API_BASE_URL = 'https://65f9f44a3909a9a65b19b422.mockapi.io/users/';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes:['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => '/Users',
      providesTags:['Users']
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/Users/${id}`,
      providesTags:['Users']
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: '/Users',
        method: 'POST',
        body: newUser
      })
      ,
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (updatedUser) => ({
        url: `/Users/${updatedUser.id}`,
        method: 'PUT',
        body: updatedUser
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/Users/${id}`,
        method: 'DELETE',
        body:id
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = userApi