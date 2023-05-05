import React from 'react';
import { Link } from 'react-router-dom';

const ImproveSkills = () => {
    return (
        <>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-28 mb-5 mt-14'>
            <img className='w-[640px] lg:w-[500px] h-[450px] ml-28 lg:-ml-[460px]' src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <div className='-ml-48 lg:ml-0'>
                <h1 className='text-5xl font-bold w-80 leading-snug'>Improve your culinary skills</h1>
                <p className="border-s-4 border-pink-500 rounded mb-3"><span className='ml-2 text-[#757575] font-semibold'>Experiment with food</span></p>
                <p className="border-s-4 border-pink-500 rounded mb-3"><span className='ml-2 text-[#757575] font-semibold'>Write your own recipes</span></p>
                <p className="border-s-4 border-pink-500 rounded mb-3"><span className='ml-2 text-[#757575] font-semibold'>Know nutrition facts</span></p>
                <p className="border-s-4 border-pink-500 rounded mb-3"><span className='ml-2 text-[#757575] font-semibold'>Get cooking tips</span></p>
                <p className="border-s-4 border-pink-500 rounded mb-5"><span className='ml-2 text-[#757575] font-semibold'>Get ranked</span></p>
                <Link to="/register" activeClassName><button className="btn btn-outline btn-secondary">SIGNUP NOW</button></Link>
            </div>
        </div>
        <p className='w-[550px] lg:w-[620px] mx-40  text-[#757575] font-semibold ml-12 lg:ml-40'><span className='font-bold text-5xl text-pink-500'>“</span>Food is everything we are. It’s an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It’s inseparable from those from the get-go.<br></br><span className='ml-96 mt-10'> -Anthony Bourdain</span></p>
        </>
    );
};

export default ImproveSkills;