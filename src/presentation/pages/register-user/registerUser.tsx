import { Box } from "@mui/material";
import useCreateUserForm from "./hooks/UseCreateUserForm";
import FormButton from "../../../shared/components/form-button/FormButton";
import FormInput from "../../../shared/components/form-input/FormInput";

import FormAlert from "../../../shared/components/form-alert/FormAlert";

export default function RegisterUser() {
    const { register, handleSubmit, errors, onSubmit, alertOpen, handleCloseAlert } = useCreateUserForm();
  
  return (
    <Box width={100}>
        <FormAlert open={alertOpen} onClose={handleCloseAlert} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="firstName"
          label="First Name"
          type="text"
          register={register('firstName', { required: true })}
          error={!!errors.firstName}
          errorMessage="First Name is required"
        />
        <FormInput
          id="lastName"
          label="Last Name"
          type="text"
          register={register('lastName', { required: true,minLength: 3 })}
          error={!!errors.lastName}
          errorMessage="Last Name is required"
        />
        <FormInput
          id="email"
          label="Email"
          type="email"
          register={register('email', { required: true })}
          error={!!errors.email}
          errorMessage="Email is required"
        />
        <FormInput
          id="jobArea"
          label="Job Area"
          type="text"
          register={register('jobArea', { required: true })}
          error={!!errors.jobArea}
          errorMessage="Job Area is required"
        />
        <FormButton onClick={handleSubmit(onSubmit)} />
        
      </form>
    </Box>
  )
}


