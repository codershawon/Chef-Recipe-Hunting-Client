import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import FoodRecipes from '../FoodRecipes/FoodRecipes';
import { ToastContainer } from 'react-toastify';

const ChefRecipes = () => {
    const chefRecipes=useLoaderData()
    console.log(chefRecipes)
    const{id,name, picture, experience, recipes, likes,description}=chefRecipes;
    const foodRecipes=chefRecipes.featured_recipe;
    return (
        <div>
        <div className='flex justify-around items-center mt-5  mb-5'>
            <img className='w-[500px] rounded-lg' src={picture} 
            alt="" />
            <div className='leading-7'>
            <h2 className="border-s-4 border-pink-500 rounded mb-3"><span className="ml-2 font-bold">Name:</span> <span className="text-[#757575] font-semibold">{name}</span></h2>
            <p className='w-[500px] mb-3'><span className="font-bold border-s-4 border-pink-500 rounded"> <span className='ml-2'>Description:</span> </span> <span className="text-[#757575] font-semibold">{description}</span></p>
            <p className="border-s-4 border-pink-500 rounded mb-3"><span className="ml-2 font-bold">Likes: <span className="text-[#757575] font-semibold">{likes}</span> </span></p>
            <p className="border-s-4  border-pink-500 rounded mb-3"><span className="ml-2 font-bold">Number Of Recipes:</span> <span className="text-[#757575] font-semibold">{recipes}</span></p>
            <p className="border-s-4 border-pink-500 rounded"><span className="ml-2 font-bold">Years Of Experience: </span><span className="text-[#757575] font-semibold">{experience}</span></p>
            </div>
            </div>
            <div>
            <h1 className='text-center text-5xl font-bold mt-20'>About Selected Chef</h1>
                <div className='grid grid-cols-3 gap-4 ml-40 mr-36 mb-4 mt-7'>
                {
                    foodRecipes.map(recipes=><FoodRecipes key={recipes.id} recipes={recipes}></FoodRecipes>)
                }
                </div>
                <Link to="/"><button className="btn btn-active ml-40">Go Back</button></Link>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ChefRecipes;
