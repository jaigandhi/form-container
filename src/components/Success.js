import React from 'react';
import MuiThemeProvider from 'material-ui/style/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    Continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: {firstName,lastName,email,occupation,city,bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank You For Your Submission</h1>
                 
                </React.Fragment>
            </MuiThemeProvider>
        );
        }
    }   



export default Success;
