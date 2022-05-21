import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.toolBar}> 
      <TextInput style={styles.textInput} placeholder='Your course Goals'/>
      <Button title='Add Goal'/>
     </View>
     <View>
       <Text>List of goals...</Text>
     </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50
  },
  toolBar:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#ccc',
    width:'80%',
    marginRight:8
  }
});
