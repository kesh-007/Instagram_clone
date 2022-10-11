import { View, Text,Image ,StyleSheet} from 'react-native'
import React ,{useState}from 'react'
import { account } from '../Data/Users'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-web'
import { height } from '@mui/system'

export const bottomicons =[{
    name :'Home',
    inactive : 'https://cdn-icons-png.flaticon.com/128/1946/1946488.png',
    active : 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png'
},
{
    name :"Search",
    inactive : 'https://cdn-icons-png.flaticon.com/128/54/54481.png',
    active : 'https://cdn-icons-png.flaticon.com/128/149/149852.png',
},
{
    name : 'Reels',
    inactive : 'https://cdn-icons-png.flaticon.com/128/5948/5948543.png',
    active : 'https://cdn-icons-png.flaticon.com/128/7264/7264012.png',
},
{
    name : "Activity",
    inactive : 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
    active : 'https://cdn-icons-png.flaticon.com/128/1077/1077086.png',
},
{
    name: "Account",
    active : account[0].image,
    inactive : account[0].image,
}
]
const BottomTab = ({icons}) => {
    const [active,setactive]= useState('Home');
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={()=>setactive(icon.name)}>
            
            <Image source={{uri:icon.inactive}} style ={styles.icon}/>
        </TouchableOpacity>

    )
  return (
    <View style = {styles.wrapper}>
        <Divider width={1} orientation ='vertical'/>
    <View style={styles.container}>
{
    icons.map((icon,index)=>(
        <Icon key={index} icon ={icon}/>
    ))
}    
</View>
</View>
  )
}
const styles =StyleSheet.create({
    wrapper :
    {
        


    },
    container:
    {
        flexDirection:'row',
        justifyContent : 'space-around',
        height :45 ,
        paddingTop:10,
    },
    icon :
    {
        width :30,
        height : 30,
    }
})
export default BottomTab