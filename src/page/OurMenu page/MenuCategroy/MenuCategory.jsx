import React from 'react';
import Coversec from '../../Shared/Cover Sec/Coversec';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {

    return (
        <div className='pt-8'>
            {title && <Coversec title={title} img={img}></Coversec>}
            <div className="grid md:grid-cols-2 gap-4 pt-12">
                {
                    items.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='pt-7 w-1/4 mx-auto'>
                <Link to={`/shop/${title}`}>
                    <button className='bg-green-600 px-3 py-1 rounded'>
                        Click Me
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;