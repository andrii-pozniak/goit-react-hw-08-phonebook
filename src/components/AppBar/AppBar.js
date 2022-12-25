import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import css from 'components/AppBar/AppBar.module.css';

export const AppBar = () => {
  

  return (
    <header className={css.header}>
      <Navigation />
       {/* <UserMenu /> */}
      <AuthNav />
    </header>
  );
};