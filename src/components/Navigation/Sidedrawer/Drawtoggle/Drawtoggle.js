import React from 'react';
import classes from '../Drawtoggle/Drawtoggle.css';
const drawToggle=(props)=>(
   <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
       </div>
);
export default drawToggle;