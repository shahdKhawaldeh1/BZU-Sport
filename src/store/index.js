import {configureStore,createSlice} from '@reduxjs/toolkit'
import Form from '../Components/Form/Form';
const showSlice=createSlice({
    name:'show',
    initialState:{show:false},
    reducers:{
        showForm(state,action){
            state.show =true;
        },
        unshow(state,action){
            state.show =false;
        },
    }
})

export const actions =showSlice.actions;
 const store=configureStore({
    reducer:showSlice.reducer
 })
 export default store;
