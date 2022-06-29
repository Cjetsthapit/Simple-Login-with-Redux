import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = [
  {
    id: "1",
    email: "sthapitsrijeet@gmail.com",
    password: "123456",
  },
];

const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
      registerUser:{
        reducer:(state,action)=>{
          state.push(action.payload)
        },
        prepare(email,password){
          return{
            payload:{
              id:nanoid(),
              email,password
            }
          }
        }

      }
  },
});

export const selectAllUsers= (state)=>state.loginRegister;
export const{ registerUser} = loginRegisterSlice.actions;
export default loginRegisterSlice.reducer;
