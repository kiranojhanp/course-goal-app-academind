import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Hello, World");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
     
              sapiente nemo eligendi possimus delectus corrupti ad, assumenda,
 
                  minima nam facere ratione ea repudiandae incidunt distinctio maiores
  
                 sequi? Vitae consequuntur doloribus porro, dignissimos totam ducimus
   
                accusamus optio possimus reiciendis? Tempora voluptatibus quidem
    
               similique adipisci sapiente aspernatur fugiat beatae, officia fuga
      
             dolore nemo voluptas maiores architecto et exercitationem laudantium
       
            sit mollitia dolores ratione facere assumenda? Modi necessitatibus
        
           vitae, dolores reiciendis cum ad perferendis hic quaerat cupiditate!
         
          Quis veniam veritatis voluptatum harum obcaecati.
        </Text>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
