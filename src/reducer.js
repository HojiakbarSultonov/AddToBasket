import { cars } from "./datas";

export const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    loggedIn: false,
    state: 1
  };

  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return (state = {
          ...state,
          basket: [...state.basket, action.payload],
        });
      case "REMOVE_FROM_BASKET":
        const filteredBasket=state.basket.filter(car=>car.id !== action.payload)
        return (state = {
          ...state,
          basket:filteredBasket
        });
        case "LOGGED":
        return ( state = {
          ...state,
          loggedIn:true,
        })
        case "LOGGED_OUT":
        return ( state = {
          ...state,
          loggedIn:false,
        })
        case "REGISTER":
        return (state = {
          ...state,
          users: [...state.users, action.payload],
        });
      
        case "ADD_COUNT":
       return( state += 1)

      default:
        return state;
    }
  };
  