import React from 'react';

const Gallery = () => {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold mt-7 mb-6'>Gallery</h1>
      <div className='grid grid-cols-3 mx-36 mb-10'>
        <img
          className='w-full hover:opacity-90 transition-opacity duration-300'
          src='https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <img
          className='w-full hover:opacity-90 transition-opacity duration-300'
          src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <img
          className='w-full hover:opacity-90 transition-opacity duration-300'
          src='https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <img
          className='w-full hover:opacity-90 transition-opacity duration-300'
          src='https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <img
          className='w-full hover:opacity-90 transition-opacity duration-300'
          src='https://images.unsplash.com/photo-1592945843838-c69fc7dacb08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <img
          className='w-full hover:opacity-90 transition-opacity duration-300'
          src='https://images.unsplash.com/photo-1618824137892-609d3f0bfe8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
      </div>
    </div>
  );
};

export default Gallery;
