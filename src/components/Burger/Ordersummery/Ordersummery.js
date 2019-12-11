import React from 'react';
import Aux from '../../../hoc/aux';
import Button from '../../Ui/Button/Button'
const ordersummery=(props)=>{
    const ingredientSummary=Object.keys(props.ingredient)
    .map(igKey=>{
        return (
            <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredient[igKey]}
            </li>
        );
    });
  return(
       <Aux>
           <h3>Your Order</h3>
           <p>A delicious burger with the following ingredients :</p>
           <ul>
               {ingredientSummary}
           </ul>
  <p><strong>Total Price: {props.price}</strong></p>
           <p>Continue to Checkout?</p>
           <Button btnType="Danger" clicked={props.purchaseCancled}>CANCEL</Button>
           <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
       </Aux>
  );
};
export default ordersummery;