import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticated)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>}
      
    </header>
  );
};

export default Header;
