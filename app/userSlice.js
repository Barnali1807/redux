import {createSlice} from "@reduxjs/toolkit";

export const userSlice= createSlice ({
	name:"user",
	initialState:{
		userName:"I am Barnali Ghosh",
		sidebar1:"Home",
		sidebar2:"Manali",
		sidebar3:"Silong",
		sidebar4:"Darjeeling",
	},
	reducers:{
		update:(state,action) => {
			state.userName=action.payload.name;
			},
		},
	}
	);

export const{update} =userSlice.actions;
export default userSlice.reducer; 
