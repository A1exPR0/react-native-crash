import {Pressable, StyleSheet, Text, View} from 'react-native';


function GoalItem({index, text,onDelete}) {
    return (
        <Pressable onPress={()=>{onDelete(index-1)}}>
            <View style={
                    styles.goal
                }
                key={index}>
                <Text style={
                    styles.goalText
                }>
                    {
                    index+". "+ text
                }</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goal: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 3,
        borderLeftWidth: 2,
        borderLeftColor: 'cyan',
        borderRadius: 10,
        fontWeight: '900',
        backgroundColor: 'grey'

    },
    goalText: {
        color: 'white'
    }
});
