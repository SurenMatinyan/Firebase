import React, { Component } from "react";
import { connect } from "react-redux";
import { setUsersAC } from "../../redux/users.reducer";
import Login from './Login';

class LoginContainer extends Component {

    
    render(){
        return(
            <div>
                <Login {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({users: state.users})
}

const mapDispatchToProps = (dispatch) => {
    return({setUsers: (users) =>  dispatch(setUsersAC)})
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);