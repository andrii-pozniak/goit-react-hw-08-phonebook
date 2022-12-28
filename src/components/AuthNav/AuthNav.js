import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Button } from '@chakra-ui/react';


export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button bg='blue.100'>
        Log In
        </Button>
       
      </NavLink>
    </div>
  );
};
