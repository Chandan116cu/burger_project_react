import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from '../Sidedrawer/Sidedrawer.css';
import Backdrop from '../../Ui/Backdrop/Backdrop';
import Aux from '../../../hoc/aux';
const sidedrawer=(props)=>{
   let attachedClasses=[classes.Sidedrawer,classes.Close];
   if(props.open){
       attachedClasses=[classes.Sidedrawer,classes.Open];
   }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <Navigationitems/>
            </nav>
        </div>
        </Aux>
    );
};
export default sidedrawer;