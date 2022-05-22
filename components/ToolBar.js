import { View,TextInput,Button,StyleSheet } from "react-native"
import { useState } from "react";


function ToolBar({onAddGoal}) {
    const [text,setText]=useState('');

    const goalInputH =(enteredText)=>{
        // console.log(enteredText);
        setText(enteredText);
      } 
    const addGoalH = ()=>{

    onAddGoal(text);
    setText('');
  }

  return (
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
  )
}

export default ToolBar

const styles = StyleSheet.create({
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
    }
  });