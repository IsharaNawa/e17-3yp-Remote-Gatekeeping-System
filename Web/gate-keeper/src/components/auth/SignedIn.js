import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions';

export class SignedIn extends Component {
    state = {
        email:'',
        password:''
    }
    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit =(e)=>{
        
        e.preventDefault();
        this.props.signIn(this.state)
        //console.log(this.state);
        
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Login</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        signIn : (creads) => dispatch(signIn(creads))
    }
}

export default connect(null ,mapDispatchtoProps)(SignedIn);