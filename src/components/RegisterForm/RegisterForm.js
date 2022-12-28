import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import css from 'components/RegisterForm/RegisterForm.module.css';
import { Button, Input, Stack, Box } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(register)
    form.reset();
  };

  return (
    <Box maxW={'xl'} py='5'>
         <Stack spacing={2}>
         <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <Input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <Input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input type="password" name="password" />
      </label>
      <Button bg='blue.100'  type="submit">Register</Button>
    </form>
    </Stack>
    </Box>
   
   
  );
};