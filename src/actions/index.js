import { ADD, INCREASE, DECREASE, CLEAR, DELETE } from './types';


export const cartAdd = (...newVal) => ({type: ADD, value: newVal});
export const cartDecrease = (id) => ({type:DECREASE, value: id});
export const cartIncrease = (id) => ({type:INCREASE, value: id});
export const cartClear = () => ({type:CLEAR});
export const cartDelete = (id) => ({type:DELETE, value: id});
