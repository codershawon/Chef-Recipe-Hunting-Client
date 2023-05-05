import React from "react";
import LazyLoad from "react-lazy-load";
import {  Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, name, picture, experience, recipes, likes } = chef;
  console.log(chef);
  return (
    <div className="flex">
      <div className="card w-[450px] bg-gray-300 shadow-xl">
          <LazyLoad>
            <figure>
              <img className="w-full" src={picture} alt="Shoes" />
            </figure>
          </LazyLoad>
        <div className="card-body leading-7">
          <h2 className="card-title border-s-4 border-pink-500 rounded">
            <span className="ml-2 font-bold">Name:</span>{" "}
            <span className="text-[#757575] font-semibold">{name}</span>
          </h2>
          <p className="border-s-4 border-pink-500 rounded">
            <span className="ml-2 font-bold">Years Of Experience: </span>
            <span className="text-[#757575] font-semibold">{experience}</span>
          </p>
          <p className="border-s-4  border-pink-500 rounded">
            <span className="ml-2 font-bold">Number Of Recipes:</span>{" "}
            <span className="text-[#757575] font-semibold">{recipes}</span>
          </p>
          <div className="card-actions justify-end">
            <p className="border-s-4 border-pink-500 rounded">
              <span className="ml-2 font-bold">
                Likes:{" "}
                <span className="text-[#757575] font-semibold">{likes}</span>{" "}
              </span>
            </p>
            <Link to={`/foodRecipes/${id}`} activeClassName="active">
              {" "}
              <button className="btn btn-outline btn-secondary -mt-2">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
