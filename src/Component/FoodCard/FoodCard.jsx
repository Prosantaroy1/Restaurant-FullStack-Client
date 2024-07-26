import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="card bg-base-100 w-72 h-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" 
                        />
                        
                </figure>
                <p className='right-0 absolute bg-orange-500 px-3 py-1 mr-3 mt-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;