import {ADD, INCREASE, DECREASE, CLEAR, DELETE} from  '../actions/types';



const inittialCart = [];

export default function (state=inittialCart, action){
    switch(action.type) {
        case ADD:
            var newOject = {
                key: action.value[0],
                size: action.value[1],
                number: action.value[2],
                color: action.value[3],
            }

            for(let i=0; i<state.length;i++){
                if(state[i].key===newOject.key){
                    state[i].number = state[i].number + newOject.number;
                    return [...state];
                }
            }

            state.push(newOject);
            return [...state];
        case DECREASE:
            for(let i=0; i<state.length; i++){
                if(state[i].key===action.value){
                    if(state[i].number !== 1){
                        state[i].number = state[i].number - 1;
                        return [...state];
                    }
                   
                }
            }
            return [...state];
        case INCREASE:
            for(let i=0; i<state.length; i++){
                if(state[i].key===action.value){
                    state[i].number = state[i].number + 1;
                    return [...state];
                }
            }
            return [...state];
        case CLEAR:
            return state;
        case DELETE:
            for(let i=0; i<state.length; i++){
                if(state[i].key === action.value){
                    state.splice(i,1);
                    return [...state];
                }
            }
            return [...state];
        default: 
            return [...state];
    }
} 
