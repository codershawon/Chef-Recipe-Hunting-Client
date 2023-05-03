import React from 'react';
import { useLoaderData} from 'react-router-dom';

const ChefRecipes = () => {
    const chefRecipes=useLoaderData()
    console.log(chefRecipes)
    const{id,name, image, years_of_experience, number_of_recipes, likes,description,recipes}=chefRecipes;
    return (
        <div>
        <div className='flex justify-around items-center mt-5  mb-5'>
            <img className='w-[500px] rounded-lg' src={image} 
            alt="" />
            <div className='leading-7'>
            <h2 className="border-s-4 border-pink-500 rounded mb-3"><span className="ml-2 font-bold">Name:</span> <span className="text-[#757575] font-semibold">{name}</span></h2>
            <p className='w-[500px] mb-3'><span className="font-bold border-s-4 border-pink-500 rounded"> <span className='ml-2'>Description:</span> </span> <span className="text-[#757575] font-semibold">{description}</span></p>
            <p className="border-s-4 border-pink-500 rounded mb-3"><span className="ml-2 font-bold">Likes: <span className="text-[#757575] font-semibold">{likes}</span> </span></p>
            <p className="border-s-4  border-pink-500 rounded mb-3"><span className="ml-2 font-bold">Number Of Recipes:</span> <span className="text-[#757575] font-semibold">{number_of_recipes}</span></p>
            <p className="border-s-4 border-pink-500 rounded"><span className="ml-2 font-bold">Years Of Experience: </span><span className="text-[#757575] font-semibold">{years_of_experience}</span></p>
            </div>
            </div>
            <div>
                <h1>This is another section:{recipes}</h1>
            </div>
        </div>
    );
};

export default ChefRecipes;