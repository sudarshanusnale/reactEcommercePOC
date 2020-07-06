import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import About from '../../../Pages/ProductDetail'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        
        <NavigationItem link="/allProducts">All Products</NavigationItem>
        <NavigationItem link="/profile">Profile</NavigationItem>
        <NavigationItem link="/cart">Cart</NavigationItem>
    </ul>
    
);

export default navigationItems;