import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
        style ={styles.logo}
        source ={{uri:require("../../assests/logo.png")}} />

        </TouchableOpacity>
        <View style ={styles.iconplace}>
            <TouchableOpacity>
                <Image style={styles.icon1}
                source ={{uri:"https://cdn-icons-png.flaticon.com/512/3161/3161837.png"}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.unreadBadge}>
                    <Text style = {styles.unreadBadgeText}> 12</Text>
                </View>
                <Image style={styles.icon}
                source ={{uri:"https://cdn-icons-png.flaticon.com/512/5948/5948514.png"}}/>
            </TouchableOpacity>
           


        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container :
    {
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        marginHorizontal :20,

    },
    logo :
    {
        width : 100,
        height : 50,
        resizeMode : 'contain'
        
    },
    iconplace:
    {
        flexDirection : "row",
    

    },
    icon :
    {
        
        width:30,
        height:30,
        marginLeft : 10,
        resizeMode : 'contain'
    },
    icon1 :
    {
        
        width:30,
        height:30,
        marginRight : 20,
        marginLeft : 10,
        resizeMode : 'contain'
    },
    unreadBadge :
    {
        backgroundColor : 'red',
        position : 'absolute',
        left :20 ,
        bottom : 18,
        width : 25, 
        height :20,
        borderRadius : 25,
        alignItems : 'center',
        justifyContent : 'center',
        zIndex : 100,

    },
    unreadBadgeText :
    {
        color : 'white',
        fontWeight : 500,
    }

})
export default Header