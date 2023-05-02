import React from 'react';
import { useRouteError } from 'react-router-dom';
const RouteError = () => {
    const error=useRouteError()
    console.log(error)
    return (
        <div id="error-page" className='text-center mt-28'>
        <img className='w-96 h-96 mx-auto' src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png"  alt="" />
        <h1>Oops!</h1>
        <p>404 Error</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
    }

export default RouteError;
