import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FoodRecipes = ({ recipes }) => {
  const { image, name, id, ingredients, cooking_method, rating } = recipes;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(true);
    toast.success(`Added ${name} to favorites!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="card w-[450px] bg-gray-300 shadow-xl">
      <figure>
        <img className="w-full h-60" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="w-80 mb-3">
          <span className="font-bold border-s-4 border-pink-500 rounded">
            <span className="ml-2">Recipe Name: </span>{" "}
          </span>{" "}
          <span className="text-[#757575] font-semibold">{name}</span>
        </h2>
        <p className="w-96 mb-3">
          <span className="font-bold border-s-4 border-pink-500 rounded">
            <span className="ml-2">Ingredients:{" "}</span>
          </span>
          <ul className="list-disc ml-20 text-[#757575] font-semibold">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <p className="w-96 mb-3 mt-5">
          <span className="font-bold border-s-4 border-pink-500 rounded">
            <span className="ml-2">Cooking method:</span>{" "}
          </span>{" "}
          <span className="text-[#757575] font-semibold">{cooking_method}</span>
        </p>
        <p className="flex items-center gap-3 w-[500px] mb-3">
          <span className="font-bold border-s-4 border-pink-500 rounded">
            <span className="ml-2">Ratings:</span>{" "}
          </span>{" "}
          <span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </span>
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline btn-secondary"
            onClick={handleFavoriteClick}
            disabled={isFavorited}
          >
            {isFavorited ? "Favorited" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodRecipes;

