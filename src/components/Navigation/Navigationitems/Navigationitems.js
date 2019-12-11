import React from 'react';
import classes from '../Navigationitems/Navigationitems.css'
import Navigationitem from '../Navigationitem/Navigationitem';
const navigationItems=()=>(
    <ul className={classes.Navigationitems}>
        <Navigationitem link="/" active>Burger Builder</Navigationitem>
        <Navigationitem link="/">Checkout</Navigationitem>
    </ul>
);
export default navigationItems;