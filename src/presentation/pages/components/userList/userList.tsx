import { useGetAllUsersQuery,useDeleteUserMutation } from "../../../../application/services/userAPi";

export default function UserList(){
  const { data: users, isLoading } = useGetAllUsersQuery()
  const [deleteUser] = useDeleteUserMutation()
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.firstName}
            <button onClick={()=>deleteUser(user.id)}>delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}
