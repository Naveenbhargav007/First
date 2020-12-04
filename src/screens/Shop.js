// import React, { useState } from "react";
// import {StyleSheet,Text,SectionList} from "react-native";
// import ElementUI from "../components/ElementUI";

// const Shop = () => {

//     const [data, setData] = useState([
//         {
//             title: "Academy Sports",
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
//                <Text style={styles.header}>{section.title}</Text>)}
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

// export default Shop;


import React from "react";
import {StyleSheet, TextInput, Image,  Text, View,  ScrollView } from "react-native";

const Shop = () => {
  return(
   <View style={styles.container}>
     <ScrollView>
       <TextInput style={styles.header}
        placeholder="search"
        placeholderTextColor="black"
       />
       <View style={styles.header1}>
          <Image
            source={require('../screens/img/academy.png')}
            style={styles.logo1}
          />
          
          <View style={styles.align}>
            <Text style={styles.text}>Academy Sports</Text>
        
          
             
              <View style={styles.align1}>
              <Image
                source={require('../screens/img/loc.png')}
                style={styles.logo}
              
              />
              
              <Text>275{"\n"}New Byhalia Rd,{"\n"}Collierville,{"\n"}TN 38017{"\n"}</Text>
            </View>
             <View style={styles.align1}>
             <Image
                    source={require('../screens/img/globe.png')}
                    style={styles.logo}
                  
                  />
                   <Text>Visit Website</Text>
             </View>
        
         </View>
        </View>
              
    
          
  
        <View style={styles.header2}>
          <Image
            source={require('../screens/img/amish.png')}
            style={styles.logo1}
      
          />
          
          <View style={styles.align}>
            <Text style={styles.text}>Amish Excellence of{"\n"}Memphis</Text>
            
            <View style={styles.align1}>
              <Image
                source={require('../screens/img/loc.png')}
                style={styles.logo}
              />
           
               <Text>3601 S Houston{"\n"}Levee Rd Ste,{"\n"}106,Collierville,{"\n"}TN 38017</Text>
            </View>
                <View style={styles.align1}>
                  <Image
                    source={require('../screens/img/globe.png')}
                    style={styles.logo}
                  />
                  <Text>Visit Website</Text>
               </View>
          </View>
        </View>
      
        <View style={styles.header2}>
          <Image
            source={require('../screens/img/buff.png')}
            style={styles.logo1}
      
          />
          
          <View style={styles.align}>
            <Text style={styles.text}>Buff city Soaps</Text>
            
            <View style={styles.align1}>
              <Image
                source={require('../screens/img/loc.png')}
                style={styles.logo}
              />
           
               <Text>3615 S Houston{"\n"}Levee Rd {"\n"}suite 102,Collierville,{"\n"}TN 38017</Text>
            </View>
                <View style={styles.align1}>
                  <Image
                    source={require('../screens/img/globe.png')}
                    style={styles.logo}
                  />
                  <Text>Visit Website</Text>
               </View>
          </View>
        </View>
        
        <View style={styles.header2}>
          <Image
            source={require('../screens/img/carriage.png')}
            style={styles.logo1}
      
          />
          
          <View style={styles.align}>
            <Text style={styles.text}>Carriage Crossing</Text>
            
            <View style={styles.align1}>
              <Image
                source={require('../screens/img/loc.png')}
                style={styles.logo}
              />
           
               <Text>4674 marchantes park{"\n"}circle {"\n"}suite 433,Collierville,{"\n"}TN 38017</Text>
            </View>
                <View style={styles.align1}>
                  <Image
                    source={require('../screens/img/globe.png')}
                    style={styles.logo}
                  />
                  <Text>Visit Website</Text>
               </View>
          </View>
        </View>
      </ScrollView>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },

  logo: {
    width:30,
    height:30,
    resizeMode:"stretch",
    margin:1
  },
  header:{
    marginVertical:10,
    margin:8,
    height: 50,
    borderColor: 'orange',
    borderWidth: 2, 
    padding: 10, 
    backgroundColor:"white",
    fontSize:16
  },
  header1:{
    flexDirection: "row",
    margin:8,
    height: 220,
    borderColor: 'white',
    borderWidth: 2, 
    padding: 10, 
   
  },
  header2:{
    flexDirection: "row",
    margin:8,
    height: 230,
    borderColor: 'white',
    borderWidth: 2, 
    padding: 10, 
   
  },
  logo1:{
    width: 120,
    height: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    margin:20
  },
  text:{
    fontWeight:"bold",
    fontSize:18,
  },
  align:{

   flexDirection:"column",
 },
  align1:{
    flexDirection:"row",
    margin:10
  }
 
});
export default Shop;


// import React, { useState } from "react";
// import {StyleSheet,Text,SectionList} from "react-native";
// import ElementUI from "../components/ElementUI";

// const Shop = () => {

//     const [data, setData] = useState([
//         {
//             title: "Academy Sports",
//             data: ["Amda 275 New Byhalia Rd" ,"Collierville", "TN 38017"," United States"],
        
//          },
//         {
//             title: "B",
//             data: ["Beach Crane", "Berry Watkins", "Boone Mcgee"],
            
//         },
//         {
//             title: "C",
//             data: ["Carolyn Colon", "Cathryn Pearson", "Chrystal Watson","Compton Luna"],
            
//         },
//         {
//             title: "D",
//             data: ["Denise", "Daniel"],
            
//         }
//         ]);
    
//      return (
//         <SectionList
//           sections={data}
//           renderItem={({ item }) => <ElementUI varible={item} />}
//           renderSectionHeader={({ section }) => (
//                <Text style={styles.header}>{section.title}</Text>)}
//                StickySectionHeaderEnabled={true}
//         />
        
//     );

// }

   
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//    // marginTop: 10,
//     //marginHorizontal: 16,
//     backgroundColor:"white",
//     padding:"10"
//   },
//   item: {
//     backgroundColor: "white",
//     padding: 20,
//     //marginVertical: 8
//   },
//   header: {
//     fontSize: 20,
//     backgroundColor: "orange",
//     padding:15

//   },
//   title: {
//     fontSize: 16
//   }
// });

// export default Shop;