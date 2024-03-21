
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../domain/User';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  tagTypes:['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => '/Users',
      providesTags:['Users']
    }),
    getUserById: builder.query<User, string>({
      query: (id:string) => `/Users/${id}`,
      providesTags:['Users']
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser:User) => ({
        url: '/Users',
        method: 'POST',
        body: newUser
      })
      ,
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (updatedUser:User) => ({
        url: `/Users/${updatedUser.id}`,
        method: 'PATCH',
        body: updatedUser
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id:string) => ({
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