import React from 'react';
import MuiThemeProvider from 'material-ui/style/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import  {List, ListItem}  from  'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
                    <AppBar title="Confirm Use Data" />
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={firstname}
                        />
                         <ListItem
                        primaryText="Last Name"
                        secondaryText={lastname}
                        />
                         <ListItem
                        primaryText="Email"
                        secondaryText={email}
                        />
                         <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                        />
                         <ListItem
                        primaryText="City"
                        secondaryText={city}
                        />
                         <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
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

export default Confirm;
