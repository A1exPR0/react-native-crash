import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import ToolBar from './components/ToolBar';

export default function App() {
  
  const [listOfGoals,setListOfGoals]=useState([]);



  const addGoalH = (text)=>{

    setListOfGoals(currentListOfGoals=>[
      ...currentListOfGoals,
        {
          text:text, 
          key:Math.random().toString()
        }
      ]);
  }

  const deleteGoal=(index)=>{
    setListOfGoals((currentListOfGoals)=>{
      return currentListOfGoals.filter(
        goal => goal.key!==currentListOfGoals[index].key
        )
    })
  }
  return (
    <View style={styles.appContainer}>
     <ToolBar onAddGoal={addGoalH}/>
     <View style={styles.list}>
       <FlatList 
       data={listOfGoals}
      //  keyExtractor={(item,index)=>(item.key)}
       renderItem={goal=>{
          return <GoalItem 
          text={goal.item.text} 
          index={goal.index+1}
          onDelete={deleteGoal}/>
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
  }
});
