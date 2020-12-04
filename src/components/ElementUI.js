import React from "react";
import {StyleSheet,Text,View,} from "react-native";

const ElementUI = ({varible})=>{
    return(
        <View style={styles.item}>
        <Text style={styles.title}>{varible}</Text>
      </View>
    );
}   
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: 10,
      //marginHorizontal: 16
      //backgroundColor: "white",
    },
    item: {
      backgroundColor: "white",
      padding: 20,
      //marginVertical: 8
    },
    header: {
      padding:20,
      fontSize: 20,
     // backgroundColor: "brown"
    },
    title: {
      fontSize: 18
    }
  });
  
  export default ElementUI;