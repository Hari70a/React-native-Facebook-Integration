'use strict';
import React,{
    AppRegistry,View,Text,StyleSheet,TextInput,ToolbarAndroid,TouchableHighlight
} from 'react-native';

/*var Parse = require('parse/react-native');
*/
var SignUp = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: '',
            passwordConfirmation: '',
            errorMessage: '',
            email: ''
        }
    },
    render: function () {
        return (
            <View style={styles.container}>
               
                 <View style={{marginLeft:20}}>
                    <TextInput
                      placeholder="Username"
                      value={this.state.username}
                      onChangeText={(text)=>this.setState({username:text})}
                      style={styles.input}/>
                  </View>
                  <View style={{marginLeft:20, marginRight:20}}>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={true}
                      value={this.state.password}
                      onChangeText={(text)=>this.setState({password:text})}
                      style={styles.input}/>
                   </View>
                 <View style={{marginLeft:20, marginRight:20}}>
                    <TextInput
                        placeholder="Confirm password"
                        secureTextEntry={true}
                        value={this.state.passwordConfirmation}
                        onChangeText={(text)=>this.setState({passwordConfirmation:text})}
                        style={styles.input}/>
                  </View>      
                <View style={{flexDirection:'column', padding:20}}>
                  <TouchableHighlight 
                     onPress={this.registerPress}>
                     <View style={styles.button}>
                        <Text style={styles.whiteFont}>Register</Text>
                     </View>
                  </TouchableHighlight>
                </View>
                <View style={{padding:20}}>
                   <TouchableHighlight 
                         onPress={this.backPress}>
                        <View style={styles.button}>
                          <Text style={styles.whiteFont}>Back</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Text style={styles.label}>{this.state.errorMessage}</Text>
            </View>
        )
    },
    registerPress: function () {
        if (this.state.password !== this.state.passwordConfirmation) {
            return this.setState({
                errorMessage: 'Your passwords do not match'
            })
        }
        else if(this.state.username!='' && this.state.password!='' && this.state.passwordConfirmation!=''){
            return this.setState({
                errorMessage:'Successfully registered'
               })
             this.props.navigator.pop();
           }
        else{
            return this.setState({
                errorMessage: 'Username  already exists'
            })
        }

        /*var user = new Parse.User();
        user.set('username', this.state.username);
        user.set('password', this.state.password);
        user.signUp(null, {
            success: (user)=> {
                this.setState({errorMessage: 'Successfully registered'});
                this.props.navigator.pop();
            },
            error: (error)=> {
                this.setState({errorMessage: 'Username  already exists'});
            }
        })*/
    },
    backPress: function () {
        this.props.navigator.pop();
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    label: {
        fontSize: 18
    },
    
    button: { 
        
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center',
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderRadius: 5,
        right:5,
        margin: 5,
        width: 500,
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    whiteFont: {
        color:"#fff"
    }
});
module.exports = SignUp;