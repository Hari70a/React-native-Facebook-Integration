'use strict';
var React = require('react-native');
var LoginPage=require('./LoginPage');
var {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    } = React;

var BBCourt = React.createClass({
    
   render:function(){ 
    console.log('Inn');
    return(
        <Navigator
           initialRoute={{name: 'LoginPage', component: LoginPage}}
           renderScene={(route, navigator) =>{
           console.log(route,navigator);
        if(route.component){
        return React.createElement(route.component,{navigator});
     }
    }
    }
   ></Navigator>
  )
}
  });
AppRegistry.registerComponent('BBCourt', () => BBCourt);
// module.exports = BBCourt;
