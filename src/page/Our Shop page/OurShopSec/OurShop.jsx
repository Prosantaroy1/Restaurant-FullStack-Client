import { useState } from 'react';
import shopImg from '../../../assets/assets/shop/banner2.jpg'
import Coversec from '../../Shared/Cover Sec/Coversec';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hook/useMenu';
import ShopTab from '../ShopTab Sec/ShopTab';


const OurShop = () => {

    // 
    const [tabIndex, setTabIndex] = useState(0);
    // 
    const [menu]=useMenu();
    // console.log(menu);
    const offer=menu.filter(item=> item.category === 'offered')
    const popular=menu.filter(item=> item.category === 'popular')
    const drinks=menu.filter(item=> item.category === 'drinks')
    const dessert=menu.filter(item=> item.category === 'dessert')
    const salad=menu.filter(item=> item.category === 'salad')

    return (
        <div>
            <Coversec img={shopImg} title='OUR SHOP PAGE'></Coversec>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Popular</Tab>
                    <Tab>offer</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <ShopTab items={salad}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={popular}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={offer}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={dessert}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={drinks}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;