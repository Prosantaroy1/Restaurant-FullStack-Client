

const MenuItem = ({item}) => {
    const {image, name, price,recipe}=item;
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4">
                <img src={image} alt="" className="w-20 h-20 rounded-t-2xl rounded-e-2xl"/>
                <div>
                <h4>{name}</h4>
                <p>{recipe}</p>
                </div>
            </div>
            <h3 className="text-red-400 px-3 py-1">${price}</h3>
        </div>
    );
};

export default MenuItem;