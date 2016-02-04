'use strict';
var React = require('react-native');
var SecureView = require('./SecureView');
var SignUp = require('./SignUp');
var FBLogin = require('./FBLogin');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var {
    AppRegistry,
    StyleSheet,
    NativeModules,
    View,
    TouchableHighlight,
    Text,
    TextInput,
    Image
} = React;

var LoginPage=React.createClass({
getInitialState: function() {
    console.log('Login');
    return {
      username: '',
      password: ''
    }
  },
   render: function() {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    
                    <TextInput 
                        style={[styles.input, styles.whiteFont]}
                         onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        placeholder='Username'
                        placeholderTextColor='gray'
                        value={this.state.username}
                    />
                </View>
                <View style={styles.inputContainer}>
                    
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                         onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        placeholder='Password'
                        placeholderTextColor='gray'
                        value={this.state.password}
                    />
                </View>
                <View style={styles.forgotContainer}>
                    <Text style={styles.greyFont}>Forgot Password</Text>
                </View>
            </View>
            <TouchableHighlight
             onPress={this.handle}>
            <View style={styles.signin}>
                <Text style={styles.whiteFont}>Sign In</Text>
            </View>
            </TouchableHighlight>
            <View style={styles.signup}>
                <Text style={styles.greyFont}>Dont have an account?<Text style={styles.colorFont} onPress={this.onPressTitle}>Sign Up</Text></Text>
            </View>
            <TouchableHighlight
             onPress={this.handlePress}>
            <View style={styles.signin}>
                <Text style={styles.whiteFont}>FBLogin</Text>
            </View>
            </TouchableHighlight>
        </View>
    );
  },
  handle:function() {
    console.log(this.props.navigator)
    if(this.state.username != '' && this.state.password != ''){ 
        this.props.navigator.push({
            title: 'Secure Page',
            component: SecureView,
            passProps: {username: this.state.username, password: this.state.password},
        });
    }
    },
    handlePress:function() {
    console.log(this.props.navigator)
            this.props.navigator.push({
            title: 'Facebook Page',
            component: FBLogin,
            });
    },
    onPressTitle:function() {
    console.log(this.props.navigator)
            this.props.navigator.push({
            title: 'SignUp Page',
            component: SignUp,
            });
    }       
    });
    var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .25,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 50,
        height: 50
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 10,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25,
        
    },
    inputPassword: {
        marginLeft: 15,
        width: 40,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 40,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'relative',
        left: 20,
        top: 12,
        right: 20,
        height: 38,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 10,
    },
    greyFont: {
      color: '#000'
    },
    colorFont:{
        color:"FF3366"
    },
    whiteFont: {
      color: '#000'
    }
})
module.exports = LoginPage;