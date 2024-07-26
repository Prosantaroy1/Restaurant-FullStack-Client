import Banner from "../Banner Sec/Banner";
import Contactsec from "../Contact sec/Contactsec";
import OrderSec from "../Order Sec/OrderSec";
import PopularMenu from "../Popular Menu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner/>
            <OrderSec/>
            <PopularMenu/>
            <Contactsec/>
        </div>
    );
};

export default Home;