import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const Auth = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticated) //state.auth is the auth: authSlice.Reducer

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login())
  }
  
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
