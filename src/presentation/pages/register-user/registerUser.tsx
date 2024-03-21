import { Box, Typography } from '@mui/material'
import useCreateUserForm from './hooks/UseCreateUserForm'
import FormButton from '../../../shared/components/form-button/FormButton'
import FormInput from '../../../shared/components/form-input/FormInput'

import FormAlert from '../../../shared/components/form-alert/FormAlert'
import { theme } from '../../../shared/theme'

export default function RegisterUser() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    alertOpen,
    handleCloseAlert
  } = useCreateUserForm()

  return (
    <Box width={'100%'} sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(3) }}>
      <Typography variant='h1'>Register User</Typography>
      <FormAlert open={alertOpen} onClose={handleCloseAlert} />
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(3) }}>
        <FormInput
          id='firstName'
          label='First Name'
          type='text'
          register={register('firstName', { required: true, minLength: 3 })}
          error={!!errors.firstName}
          errorMessage={
            errors.firstName?.type === 'minLength'
              ? 'First Name must be at least 3 characters'
              : 'First Name is required'
          }
        />
        <FormInput
          id='lastName'
          label='Last Name'
          type='text'
          register={register('lastName', { required: true, minLength: 3 })}
          error={!!errors.lastName}
          errorMessage={
            errors.lastName?.type === 'minLength'
              ? 'Last Name must be at least 3 characters'
              : 'Last Name is required'
          }
        />
        <FormInput
          id='email'
          label='Email'
          type='email'
          register={register('email', { required: true, minLength: 3 })}
          error={!!errors.email}
          errorMessage={
            errors.email?.type === 'minLength'
              ? 'Email must be at least 3 characters'
              : 'Email is required'
          }
        />
        <FormInput
          id='jobArea'
          label='Job Area'
          type='text'
          register={register('jobArea', { required: true, minLength: 3 })}
          error={!!errors.jobArea}
          errorMessage={
            errors.jobArea?.type === 'minLength'
              ? 'Job Area must be at least 3 characters'
              : 'Job Area is required'
          }
        />
        <FormButton onClick={handleSubmit(onSubmit)} />
      </form>
    </Box>
  )
}
