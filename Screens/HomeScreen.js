import { View, Text ,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView} from 'react-native-web'
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories'
import Post from '../Components/Home/Post'
import { posts } from '../Data/Posts'
import BottomTab, { bottomicons } from '../Components/BottomTab'



const HomeScreen = () => {
  return (
    
     
        <View style={{flex:1}}>
            <Header/>
            <ScrollView>
                
    <Stories/>
    
        {posts.map((post,index) => 
        (
            <Post post={post} key= {index}/>

        ))}
        </ScrollView>
        
        <BottomTab icons ={bottomicons}/>
        
</View>
    

    

  )
}
const styles =StyleSheet.create(
    {
        container :{
            backgroundColor : 'black',
            flex :1,

        }
    }
)

export default HomeScreen