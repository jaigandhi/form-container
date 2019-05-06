import React from 'react';
import MuiThemeProvider from 'material-ui/style/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles';
export class FormPersonalDetails extends Component {
    Continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        hint Text="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        hint Text="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hint Text="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styleMedia.button}
                        onClick={this.Continue}
                        />
                        <RaisedButton
                        label="Back"
                        primary={false}
                        style={styleMedia.button}
                        onClick={this.Back}
                        />
                </React.Fragment>
            </MuiThemeProvider>
        );
        }
    }   

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;
