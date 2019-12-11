import React from 'react';
import classes from '../Buildcontrols/Buildcontrols.css';
import Buildcontrol from './Buildcontrol/Buildcontrol';
const controls=[
    {label:'Salad',type:'Salad'},
    {label:'Bacon',type:'Bacon'},
    {label:'Cheese',type:'Cheese'},
    {label:'Meat',type:'Meat'},
]
const Buildcontrols=(props)=>(
    
        <div className={classes.Buildcontrols}>
            <p>Current Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl=>(
            <Buildcontrol key={ctrl.label} 
            label={ctrl.label}
            added={()=>props. ingredientAdded(ctrl.type)}
            remove={()=>props.ingredientRemove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW !</button>
    </div>
)
export default Buildcontrols;