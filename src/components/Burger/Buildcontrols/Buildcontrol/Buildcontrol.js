import React from 'react';
import classes from '../Buildcontrol/Buildcontrol.css';
const Buildcontrol=(props)=>{
return(
    <div className={classes.BuildControl}>
<div className={classes.Label}>{props.label}</div>
<button className={classes.Less} onClick={props.remove} disabled={props.disabled}>Less</button>
<button className={classes.More} onClick={props.added}>More</button>
</div>
)
};
export default Buildcontrol;