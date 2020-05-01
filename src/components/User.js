import React, {Component} from "react";
import PropTypes from 'prop-types'
import './../index.css'
export class User extends Component{
    render() {
        const {name} = this.props
        return (
            <div>
                <h3 className="user">Hi {name}</h3>
            </div>
        )
    }
}

User.propTypes = {
    name:PropTypes.string.isRequired
}
