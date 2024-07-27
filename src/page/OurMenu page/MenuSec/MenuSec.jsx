import Coversec from "../../Shared/Cover Sec/Coversec";
import img from '../../../assets/assets/menu/banner3.jpg'
import useMenu from "../../../hook/useMenu";
import TitleSec from "../../../Component/Title Sec/TitleSec";
import MenuCategory from "../MenuCategroy/MenuCategory";
import img1 from '../../../assets/assets/menu/salad-bg.jpg'
import img2 from '../../../assets/assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/assets/menu/soup-bg.jpg'

const MenuSec = () => {
    const [menu]=useMenu();
    // filter data 
    const offer=menu.filter(item=> item.category === 'offered')
    const popular=menu.filter(item=> item.category === 'popular')
    const drinks=menu.filter(item=> item.category === 'drinks')
    const dessert=menu.filter(item=> item.category === 'dessert')
    const salad=menu.filter(item=> item.category === 'salad')

    return (
        <div className="pb-14">
            <Coversec img={img} title='OUR Menu Page'/>
            {/* offer sec */}
            <TitleSec
             subtitle='cheekOut offer'
             title='OUR OFFER FOOD'
            ></TitleSec>
            <MenuCategory items={offer}></MenuCategory>
            {/* populer */}
            <MenuCategory items={popular} title='popular' img={img1}></MenuCategory>
            {/* drinks */}
            <MenuCategory items={dessert} title='drinks' img={img2}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title='salad' img={img3}></MenuCategory>
            {/* salad */}
            <MenuCategory items={drinks} ></MenuCategory>
        </div>
    );
};

export default MenuSec;