import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleClick = () => {
    const errs = {};
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!String(formData?.email).match(emailRegex))
      errs.email = 'Invalid email';
    if (!formData?.password) errs.password = 'Password is a required field';
    if (!formData?.confirmPassword)
      errs.confirmPassword = 'Confirm password is a required field';
    else if (formData?.confirmPassword !== formData?.password)
      errs.confirmPassword = 'Password does not matches';
    setErrors(errs);
  };

  return (
    <div className='App'>
      <div className='container'>
        <form name='login' onSubmit={(event) => event?.preventDefault()}>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              name='email'
            />
            {errors?.email && <p name='email'>{errors?.email}</p>}
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
            />
            {errors?.password && <p name='password'>{errors?.password}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='confirm-password' className='form-label'>
              Confirm Password
            </label>
            <input
              type='password'
              className='form-control'
              id='confirm-password'
              name='confirm-password'
            />
          </div>
          {errors?.confirmPassword && (
            <p name='confirm-password'>{errors?.confirmPassword}</p>
          )}
          <button
            type='submit'
            className='btn btn-primary'
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
