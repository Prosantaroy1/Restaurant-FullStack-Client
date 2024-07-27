import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h3>This is Signup Page</h3>
            <Link to='/login'>Back Login</Link>
        </div>
    );
};

export default SignUp;