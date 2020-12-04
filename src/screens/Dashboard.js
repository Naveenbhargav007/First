//{GETTING DATA ON DASHBOARD}//


// import React from "react";
// import { Text, View,StyleSheet} from "react-native";
// //import { TextInput } from "react-native-gesture-handler";

// const Dashboard = ({route}) => { 
//   return(
//     <View style={{flex:1, alignItems:"center"}}>
//       <Text style={{fontSize:30,fontWeight:"bold",marginLeft:10}}>Welcome to Dashboard</Text>   
//       <Text style={styles.container}>Username: {route.params.userName}</Text> 
//       <Text style={styles.container}>Password: {route.params.passWord}</Text>
//     </View>
//   );//Read the params in your Second screen. Using:route.params.paramKey
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container:{
//     fontSize:20,
//     margin:15,
//   }
// // });


// {basics of Sectionlist}//


// import React, { useState } from "react";
// import {StyleSheet,Text,SectionList} from "react-native";
// import ElementUI from "../components/ElementUI";
// import AsyncStorage from "@react-native-async-storage/async-storage"

// const Dashboard = () => {
 

//     const [data, setData] = useState([
//         {
//             title: "Main dishes",
//             data: ["Pizza", "Burger", "Risotto"],
//             names:["naveen"]
//          },
//         {
//             title: "Sides",
//             data: ["French Fries", "Onion Rings", "Fried Shrimps"],
//             names:["naveen"]
//         },
//         {
//             title: "Drinks",
//             data: ["Water", "Coke", "Beer"],
//             names:["naveen"]
//         },
//         {
//             title: "Desserts",
//             data: ["Cheese Cake", "Ice Cream"],
//             names:["naveen"]
//         }
//         ]);
    
      

//      return (
//         <SectionList
//           sections={data}
//           renderItem={({ item }) => <ElementUI varible={item} />}
//           renderSectionHeader={({ section }) => (
//                <Text style={styles.header}>{section.names}</Text>)}
//         />
//     );

// }

   
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//     marginHorizontal: 16
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 24
//   }
// });

// export default Dashboard;


//{SHOP AND CONTACTS}//

// import React from "react";
// import { Text,View, Button } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage"
// import { ScrollView } from "react-native-gesture-handler";

// export default class Dashboard extends React.Component  {
//   render(){
//     return(
//       <View>
       
//         <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",margin:20}}>Welcome to Dashboard</Text> 
//            <Button title="Shop"
//                     onPress={() =>this.props.navigation.navigate("Shop")} />
//            <Button title="Contacts"
//                     onPress={() =>this.props.navigation.navigate("Contact")} />
//       </View>
//     );
//   }  
// }






//{ASYNC STORAGE}//

import React, { useState, useEffect } from "react";
import {StyleSheet,Text,SectionList,View, Button} from "react-native";
import ElementUI from "../components/ElementUI";
import AsyncStorage from "@react-native-async-storage/async-storage"

const Dashboard = () => {
 
  const [name, setName] = useState("");
  const [id, setId] = useState("");
    
    const [data, setData] = useState([
        {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"],
            names:["naveen"]
         },
        {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"],
            names:["naveen"]
        },
        {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"],
            names:["naveen"]
        },
        {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"],
            names:["naveen"]
        }
        ]);
    
        // with the help of useEffect component we can mount and unmount the data, it is only comp in functions
        useEffect(() =>{
          console.log("Dashboard Mount")
          return() =>(
            
            console.log("Dashboard Unmount")
          )
          
          
        }

        )
      
  const getData =async () =>{
  const id = await AsyncStorage.getItem("userId");
      alert(id);
  
}

     return (
       <View>
          <Button
          title="Click Here"
          onPress={()=>getData()}/>

        <SectionList
          sections={data}
          renderItem={({ item }) => <ElementUI varible={item} />}
          renderSectionHeader={({ section }) => (
               <Text style={styles.header}>{section.names}</Text>)}
        />
      </View>
        
            );

   
     
    

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default Dashboard;
