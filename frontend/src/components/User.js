import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, fetchUser } from '../actions/adduser';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            company: '',
            department: '',
            position: '',
            email: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            company: this.state.company,
            department: this.state.department,
            position: this.state.position,
            email: this.state.email,
        }
        this.props.addUser(user);
    }

    componentWillMount () {
        this.props.fetchUser()
    }

    render() {
        const userData = this.props.data.user[0];
        if(userData) {
            console.log('===', userData._id)
            return (
                <div className="container" style={{ marginTop: '50px', width: '700px'}}>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                            type="text"
                            name="firstname"
                            className="form-control"
                            value={userData.firstname}
                            onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            value={userData.lastname}
                            onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input
                            type="text"
                            name="company"
                            className="form-control"
                            value={userData.company}
                            onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <input
                            type="text"
                            name="department"
                            className="form-control"
                            value={userData.department}
                            onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Position</label>
                            <input
                            type="text"
                            name="position"
                            className="form-control"
                            value={userData.position}
                            onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={userData.email}
                            onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
            </div>
            )
        }
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input
                    type="text"
                    name="company"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <input
                    type="text"
                    name="department"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Position</label>
                    <input
                    type="text"
                    name="position"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.user
})

export default connect(mapStateToProps, { addUser, fetchUser})(User)
