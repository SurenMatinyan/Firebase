const SETUSERS = "SETUSERS";


const usersState = {
    isAuth: false,
    name: null,
    lastname: null
}



const userReducer = (state = usersState, action) => {
    switch(action.type){
        case SETUSERS: {
            return { ...state, users: {...action}  }
        }
            
        default: 
            return state;
    }
}


export const setUsersAC = (users) => ({type: SETUSERS, users});

export default userReducer;

