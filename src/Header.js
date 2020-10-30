import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';

function Header() {
    return (
        <div className="header">
           <div className="header__left">
                <Avatar className="header__avatar"
                alt="Vijay Pal"
                src=""
                />
                <AccessTimeIcon />
           </div>
           <div className="header__search">
                <SearchIcon  />
                <input className="" placeholder="Search here..."/>
           </div>
           <div className="header__right">
               <HelpOutlinedIcon />
           </div>

        </div>
    )
}

export default Header;