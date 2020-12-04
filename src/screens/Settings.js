import React from "react";
import { Text,View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Settings extends React.Component  {
  render(){
    return(
      <View>
       
        <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",margin:20}}>Settings!</Text> 
    
      </View>
    );
  }  
}