
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
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser:User) => ({
        url: '/Users',
        method: 'POST',
        body: newUser
      })
      ,
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
  useCreateUserMutation,
  useDeleteUserMutation
} = userApi