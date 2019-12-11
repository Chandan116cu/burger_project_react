import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burgeringredients/Burger';
import BuildControls from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/Ui/Model/Model';
import OrderSummary from '../../components/Burger/Ordersummery/Ordersummery';
const prices={
    Salad:10,
    Cheese:20,
    Meat:50,
    Bacon:30
};
class Burgerbuilder extends Component{
    state={
        ingredient:{
            Salad:0,
            Meat:0,
            Bacon:0,
            Cheese:0
        },
        totalPrice:20,
        purchasable:false,
        purchasing:false,
    }
    updatePurchaseState(ingredient){
        const sum=Object.keys(ingredient)
        .map(igKey=>{
            return ingredient[igKey];
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0);
        this.setState({purchasable:sum>0})
    }
    addIngredientHandler=(type)=>{
       const oldCount=this.state.ingredient[type];
       const updatecount=oldCount+1;
       const updatedingredients={
           ...this.state.ingredient
       };
       updatedingredients[type]=updatecount;
       const priceAddition=prices[type];
       const oldPrice=this.state.totalPrice;
       const newPrice=oldPrice+priceAddition;
       this.setState({totalPrice:newPrice,ingredient:updatedingredients})
       this.updatePurchaseState(updatedingredients);
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        if(oldCount<=0)
        {
            return ;
        }
        const updatecount=oldCount-1;
        const updatedingredients={
            ...this.state.ingredient
        };
        updatedingredients[type]=updatecount;
        const priceDuction=prices[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDuction;
        this.setState({totalPrice:newPrice,ingredient:updatedingredients})
        this.updatePurchaseState(updatedingredients);
        
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    purchasCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        alert('You Continue');
    }
    render(){
        const disabledInfo={
             ...this.state.ingredient
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
       return(
           <Aux>
               <Modal show={this.state.purchasing} modalClosed={this.purchasCancelHandler}>
               <OrderSummary ingredient={this.state.ingredient}
               price={this.state.totalPrice}
               purchaseCancled={this.purchasCancelHandler}
               purchaseContinued={this.purchaseContinueHandler}/>
               </Modal>
              <Burger ingredient={this.state.ingredient}/>
               <BuildControls
               ingredientAdded={this.addIngredientHandler}
               ingredientRemove={this.removeIngredientHandler}
               disabled={disabledInfo}
               purchasable={this.state.purchasable}
               ordered={this.purchaseHandler}
               price={this.state.totalPrice}/>
           </Aux>
       )
    };
}
export default Burgerbuilder; 