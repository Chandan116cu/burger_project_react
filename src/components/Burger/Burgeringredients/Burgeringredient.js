import React,{Component} from 'react';
import PropsTypes from 'prop-types';
import classes from './Burgeringredient.css';
class Burgeringredient extends Component{
    render(){
        let ingredient=null;
        switch(this.props.type){
            case('BreadBottom'):
            ingredient=<div className={classes.BreadBottom}/>;
            break;
            case('BreadTop'):
            ingredient=(
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
    
            );
            break;
            case('Meat'):
            ingredient=<div className={classes.Meat}/>;
            break;
            case('Cheese'):
            ingredient=<div className={classes.Cheese}/>;
            break;
            case('Salad'):
            ingredient=<div className={classes.Salad}/>;
            break;
            case('Bacon'):
            ingredient=<div className={classes.Bacon}/>;
            break;
            default:
                ingredient=null;
        }
        return ingredient;
    }
}
Burgeringredient.propTypes={
    type:PropsTypes.string.isRequired
}
export default Burgeringredient;