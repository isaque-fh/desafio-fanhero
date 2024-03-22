import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../../../application/services/userAPi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  jobArea: string;
}
const useCreateUserForm = () => {
    const [registerUser] = useCreateUserMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
      mode: 'all',
      criteriaMode: 'all',
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        jobArea: ''
      }
    });
    const [alertOpen, setAlertOpen] = useState(false);

    const navigate = useNavigate();
    const handleCloseAlert = () => {
      setAlertOpen(false);
      navigate('/users');
    };

    const onSubmit = async (data: FormValues) => {
      try {
        await registerUser(data);
        setAlertOpen(true);
      } catch (error) {
        navigate('/error')
      }
    };

    return {
      register,
      handleSubmit,
      errors,
      onSubmit,
      alertOpen,
      handleCloseAlert,
    };
  };
  export default useCreateUserForm;