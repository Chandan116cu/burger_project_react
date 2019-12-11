import React from 'react';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../../components/Logo/Logo';
import  Navigationitems from '../Navigationitems/Navigationitems'
import Drawtoggle from '../Sidedrawer/Drawtoggle/Drawtoggle'
const toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <Drawtoggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
         <Navigationitems/>
        </nav>
    </header>
);
export default toolbar;