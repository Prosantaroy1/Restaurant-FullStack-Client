
import TitleSec from "../../../Component/Title Sec/TitleSec";
import useMenu from "../../../hook/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    //
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div className="mt-12">
            <TitleSec
                title='FROM OUR MENU'
                subtitle='cheek out Item'
            ></TitleSec>
            {/* popular data item */}
            <div className="grid md:grid-cols-2 gap-4 pt-12">
                {
                    popular.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className="bg-slate-500  px-1 rounded">VIEW FULL MENU</button>
            </div>

        </div>
    );
};

export default PopularMenu;