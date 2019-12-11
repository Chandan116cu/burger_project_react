import React from 'react';
import classes from '../Burgeringredients/Burger.css';
import Burgeringredients from '../Burgeringredients/Burgeringredient';
const Burger=(props)=>{
    let transformedIngredients=Object.keys(props.ingredient)
    .map(ingKey=>{
        return[...Array(props.ingredient[ingKey])].map((_,i)=>{
            return <Burgeringredients key={ingKey+i} type={ingKey}/>
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
     },[]);
     if(transformedIngredients.length===0)
     {
         transformedIngredients=<p>Please Start Adding Ingredient</p>
     }
  //  console.log(transformedIngredients);
   return(
      <div className={classes.Burger}>
          <Burgeringredients type="BreadTop"/>
           {transformedIngredients}
          <Burgeringredients type="BreadBottom"/>
          
      </div>
   )
}
export default Burger;