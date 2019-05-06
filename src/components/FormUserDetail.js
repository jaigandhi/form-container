import React  from 'react';
import MuiThemeProvider from 'material-ui/style/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles';
export class FormUserDetails extends Component {
    Continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hint Text="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hint Text="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('LastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hint Text="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styleMedia.button}
                        onClick={this.Continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
    
        );
}

 styles = {
    button: {
        margin: 15
    }
}
}
export default FormUserDetails;
