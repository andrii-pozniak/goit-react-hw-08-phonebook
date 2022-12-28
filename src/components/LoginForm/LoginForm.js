import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
import css from 'components/LoginForm/LoginForm.module.css';
import { Button, Input, Stack, Box, Container } from '@chakra-ui/react';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box w={'90%'} py='5'>
      <Container>
      <Stack spacing={2}>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <Input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input type="password" name="password" />
      </label>
      <Button bg='blue.100' type="submit" _hover={{shadow: 'md'}}>Log In</Button>
    </form>
        </Stack>
      </Container>
        
    </Box>
    
  );
};
