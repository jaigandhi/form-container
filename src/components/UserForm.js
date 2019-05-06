import React  from 'react';
import  FormUserDetails  from './FormUserDetails';

export class UserForm extends Component {
    State = {
        step: 1,
        FirstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { FirstName, lastName, email, occupation, city, bio } = this.State;
        const values = { FirstName, lastName, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return <h1> FormPersonalDetails </h1>
            case 3:
                return <h1> Confirm </h1>
            case 4:
                return <h1> Success </h1>
                }
    }
}

export default UserForm;

