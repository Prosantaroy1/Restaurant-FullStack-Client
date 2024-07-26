import FoodCard from "../../../Component/FoodCard/FoodCard";


const ShopTab = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-5'>
                        {
                            items.map(item=><FoodCard
                             key={item._id}
                             item={item}
                            ></FoodCard>)
                        }
                    </div>
        </div>
    );
};

export default ShopTab;