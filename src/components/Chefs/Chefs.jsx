import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Chefs = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/chef`)
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error.message))
    },[])
    return (
        <div>
            <h1 className='text-center text-5xl font-bold mt-10 mb-5'>OUR CHEFS</h1>
            <div className='grid grid-cols-3 gap-4 ml-40 mr-36 mb-4'>
            {
                chefs.map((chef=><Chef key={chef.id} chef={chef}></Chef>))
            }
            </div>
        </div>
    );
};

export default Chefs;