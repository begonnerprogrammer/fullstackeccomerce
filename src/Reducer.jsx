export const initialState={
    basket:[
        {
        id:"241241",
        name:"Headphones",
        description:"Very good condition",
        img:"./images/Razor.jpg",
        category:"gaming",
        price:155
        }
    ],
    user:null,
}

export const getbaskettotal=(basket)=> basket?.reduce((amount,item) => item.price + amount,0) ;
const reducer=(state,action)=>{
    console.log(action)
         switch(action.type){
            case"SET_USER":
            return {
                ...state,
                user:action.user,
            }
        case"ADD_TO_CART":
        return {...state,
        basket:[...state.basket,action.item],
    };
        case"REMOVE_FROM_BASKET":
        let newcart=[...state.basket];
        const index=state.basket.findIndex((basketitem) => basketitem.id === action.id)
        if(index >= 0){
   newcart.splice(index, 1);
        }
        else{
            console.warn(`cant removE PRODUCT : ${action.is} as its not availaible`)
        }
        return {...state,basket:newcart,}
        default:
        return state;
     }
}


export default reducer;