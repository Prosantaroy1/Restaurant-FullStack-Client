import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='h-screen  flex-col gap-5 bg-white  flex justify-center items-center'>
            <h3 className='text-2xl'>This Is Page SomeThing Error !!</h3>
            <Link to='/' className='text-red-600 font-semibold'>Go Back HomePage</Link>
        </div>
    );
};

export default Errorpage;