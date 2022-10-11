import { View, Text, ScrollView,Image,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { users ,account} from '../../Data/Users'


const Stories = () => {
  return (
    <View style = {{marginBottom : 13}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {account.map((own,index) =>(
                <View>
                <Image source={{uri:own.image}} style= {styles.story1}/>
                <Text style ={{marginLeft : 10}}>{
                    own.user.length >10 
                    ? own.user.slice(0,7).toLowerCase() + "..."
                    : own.user.toLowerCase()
                    }</Text>
                    </View>

            ))}
          
            {users.map((story,index) =>(
                <View key={index}>
                    <TouchableWithoutFeedback>
                <Image source ={{uri : story.image}} style = {styles.story}/>
                </TouchableWithoutFeedback>
                <Text style ={{marginLeft : 10}}>{
                    story.user.length >10 
                    ? story.user.slice(0,7).toLowerCase() + "..."
                    : story.user.toLowerCase()
                    }</Text>
                </View>
            ))}
        </ScrollView>

    </View>
  )
}
const styles =StyleSheet.create({
    story :
    {
        width:70,
        height:70,
        borderRadius : 50,
        marginLeft : 6,
        borderWidth : 4,
        borderColor : '#bc2a8d',
    },
    story1 :
    {
        width:70,
        height:70,
        borderRadius : 50,
        marginLeft : 6,
        borderWidth : 3,
        borderColor : 'gray',
    }

})



export default Stories