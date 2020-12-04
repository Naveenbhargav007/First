import React, { useState } from "react";
import {StyleSheet,Text,SectionList} from "react-native";
import ElementUI from "../components/ElementUI";

const Contact = () => {

    const [data, setData] = useState([
        {
            title: "A",
            data: ["Amda Hells", "Audrey Milli", "Austin Jack"],
        
         },
        {
            title: "B",
            data: ["Beach Crane", "Berry Watkins", "Boone Mcgee"],
            
        },
        {
            title: "C",
            data: ["Carolyn Colon", "Cathryn Pearson", "Chrystal Watson","Compton Luna"],
            
        },
        {
            title: "D",
            data: ["Denise", "Daniel"],
            
        }
        ]);
    
     return (
        <SectionList
          sections={data}
          renderItem={({ item }) => <ElementUI varible={item} />}
          renderSectionHeader={({ section }) => (
               <Text style={styles.header}>{section.title}</Text>)}
               StickySectionHeaderEnabled={true}
        />
        
    );

}

   
const styles = StyleSheet.create({
  container: {
    flex: 1,
   // marginTop: 10,
    //marginHorizontal: 16,
    backgroundColor:"white",
    padding:"10"
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    //marginVertical: 8
  },
  header: {
    fontSize: 20,
    backgroundColor: "white",
    padding:15

  },
  title: {
    fontSize: 16
  }
});

export default Contact;