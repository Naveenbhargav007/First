//{USER LOGIN  SCREEN}


// import React from "react";
// import { Text,TextInput,StyleSheet, View, Alert, TouchableOpacity, Image } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

// export default class Login extends React.Component  {
//   constructor(props){
//     super(props);
//     this.state={
//       username:"",
//       password:""

//     }
//   }
//   render(){
//     return(
//       <View>
//         <ScrollView>
//         <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",margin:20}}>Welcome to Login</Text> 
//         <Image
//          style={styles.logo}
//          source={{
//           uri: 'https://dwmszb351h4q.cloudfront.net/39/static/media/react-native-logo.79778b9e.png',
//         }}
//        />
//         <TextInput style={styles.header}
//           placeholder="Username"
//           placeholderTextColor="black"
//           value={this.state.username}
//           onChangeText={username =>this.setState({username})}
//         />
//         <TextInput style={styles.header}
//           placeholder="Password"
//           placeholderTextColor="black"
//           value={this.state.password}
//           onChangeText={password =>this.setState({password})}
//         />
//         <TouchableOpacity
//             style={styles.button}
//             onPress={() => Alert.alert('Logged in Successfully')}
//             onPress={() =>  
//               this.props.navigation.navigate('Dashboard', {  
//                   userName: this.state.username,  
//                   passWord: this.state.password,  
//               })  }
//               //Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function from First Screen
//         >
//         <Text>Login</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>Forgot Password/Username?</Text>
//         <Text style={styles.title}>--------------- OR ----------------</Text>
//         <Text style={styles.text1}>Don't have an account? Sign up</Text>
//         </ScrollView>
        
//       </View>
//     );
//   }  
// }

// const styles = StyleSheet.create({
//   header:{
//     height: 50,
//     borderColor: 'red',
//     margin:3,
//     borderWidth: 2, 
//     padding: 10, 
//     backgroundColor:"white",
//     fontSize:16
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "red",
//     padding: 10,
//     margin:3,
//     textAlign: 'center',
//     marginVertical: 10,
//     fontSize:16
//   },
//   logo: {
//     width: 430,
//     height: 470,
//     resizeMode:"stretch"
//   },
//     text1:{
//     height: 50,
//     borderColor: 'black',
//     margin:8,
//     borderWidth: 2, 
//     padding: 8, 
//     backgroundColor:"white",
//     fontSize:20,
//     textAlign: 'center',
//     },
//   title:{
//     textAlign: 'center',
//     marginVertical: 30,
//     fontSize:16
//   },
// }
// );

//{SHOP AND CONTACTS=sectionlist}

// import React from "react";
// import { Text,View, Button } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

// export default class Login extends React.Component  {
//   render(){
//     return(
//       <View>
       
//         <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",margin:20}}>Welcome to Login</Text> 
//            <Button title="Login"
//                     onPress={() =>this.props.navigation.navigate("Dashboard")}; />
//       </View>
//     );
//   }  
// }


//{ASYN STORAGE}

import React from "react";
import { Text,View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ScrollView } from "react-native-gesture-handler";

export default class Login extends React.Component  {

  componentDidMount(){// register Listners
    console.log("login screen Didmount")
    this.checkData();

  }
  componentWillUnmount(){// unregister Listners
    console.log("login screen unmount")
  }
//used to directly go to dashboard if there is no data in "userId"
// this is the use of componentdidmount
  checkData =async () =>{
    const id = await AsyncStorage.getItem("userId");
      if(id && id !="")
       this.props.navigation.navigate('Dashboard')

  }
  render(){
    return(
      <View>
       
        <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",margin:20}}>Welcome to Login</Text> 
           <Button title="Login"
                    onPress={() =>this.login()} />
      </View>
    );
  }  
  login =async () =>{
    try{
      await AsyncStorage.setItem("userId","NAVEEN");
      this.props.navigation.navigate("Dashboard");

    }
    catch(error){

    }
 
  }
}
