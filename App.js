import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text,setText]=useState('');
  const [listOfGoals,setListOfGoals]=useState([]);

  const goalInputH =(enteredText)=>{
    // console.log(enteredText);
    setText(enteredText);
  }

  const addGoalH = ()=>{
    setListOfGoals(currentListOfGoals=>[...currentListOfGoals,{text:text,key:currentListOfGoals.length+1}]);
    setText('');
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.toolBar}> 
      <TextInput 
      style={styles.textInput}
      onChangeText={goalInputH}
      placeholder='Your course Goals'
      value={text}
      />
      <Button 
      title='Add Goal'
      onPress={addGoalH}
      />
     </View>
     <View style={styles.list}>
       <FlatList 
       data={listOfGoals}
       keyExtractor={(item,index)=>{
         return item.key
       }}
       renderItem={goal=>{
          return (
            <View style={styles.goal} key={goal.item.key}>
            <Text style={styles.goalText}>{goal.item.key +". " + goal.item.text}</Text>
            </View>
        
          )
        }}
       />

      
     </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:30,
    paddingHorizontal:20,
    height:'100%'
  }, 
  list:{
    flex:5,
    // alignItems:'center',
    // padding:50,
    justifyContent:'flex-start'
  },
  toolBar:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#ccc',
    width:'60%',
    padding:5,
    marginRight:8
  },
  goal:{
    paddingVertical:5,
    paddingHorizontal:10,
    marginVertical:3,
    borderLeftWidth:2,
    borderLeftColor:'cyan',
    borderRadius:10,
    fontWeight:'900',
    backgroundColor:'grey'

  },
  goalText:{
    color:'white'
  }
});
