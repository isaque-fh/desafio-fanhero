import { useEffect } from "react";
import { useGetAllUsersQuery } from "../../../../application/services/userAPi";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../UsersStyle";

const useUsers = () => {
    const { data: users, error, isLoading } = useGetAllUsersQuery()
    const navigate= useNavigate();
    const classes = useStyles()
    const titles = ['First Name', 'Last Name', 'Job Area', 'Email', 'Created At']
    
    useEffect(() => {
      error && navigate('/create-user')
    }, [error, navigate]);
    
    return { users, isLoading, titles, classes,error };
  };
  
  export default useUsers;