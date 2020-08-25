import {ADD, INCREASE, DECREASE, CLEAR, DELETE} from  '../actions/types';


const inittialCart = [
    // {
    //     key: 5,
    //     size: "L",
    //     number: "6",
    //     color: "blue"
    // },
    // {
    //     key: 12,
    //     size: "S",
    //     number: "4",
    //     color: "blue"
    // },
    // {
    //     key: 16,
    //     size: "L",
    //     number: "7",
    //     color: "blue"
    // }
];

export default function (state=inittialCart, action){
    switch(action.type) {
        case ADD:
            var newOject = {
                key: action.value[0],
                size: action.value[1],
                number: action.value[2],
                color: action.value[3],

            }
            state.push(newOject);
            return [...state];
        case DECREASE:
            return state;

        case INCREASE:
            return state;
        case CLEAR:
            return state;
        case DELETE:
            return state;
        default: 
            return state;
    }
} 
