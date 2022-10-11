import { View, Text,StyleSheet ,Image, TouchableOpacity,Modal} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import {Dialog} from "react-native-dialog";

const RequiredIcons =[
    {
        name : 'Like',
        url0: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
        url1 : 'https://cdn-icons-png.flaticon.com/128/2589/2589175.png',
    },
    {
        name : 'Comment',
        url : 'https://cdn-icons-png.flaticon.com/128/3031/3031126.png',
    },
    {
        name : 'Share',
        url : 'https://cdn-icons-png.flaticon.com/512/5728/5728145.png',

    },
    {
        name : 'Save',
        url0 : 'https://cdn-icons-png.flaticon.com/512/5662/5662990.png',
        url1 : 'https://cdn-icons-png.flaticon.com/512/5668/5668020.png'
    }


]

const Post = ({post}) => {
  return (
    <View style = {{marginBottom : 30}}>
     

      
        <Divider width={1} orientation = 'vertical'/>
        <PostHeader post ={post}/>
        <PostImage post ={post}/>
        <View style ={{marginHorizontal :7,marginTop :10}}>
        <PostFooter/>
        </View>
        <LikeCount post= {post}/>
        <Caption post={post}/>
        <CommentSection post={post}/>
        <Comments post={post}/>
         </View>
  )
}

const PostHeader = ({post}) =>
{
    return(
    <View style = {
        {flexDirection:'row', 
        justifyContent: 'space-between',
        margin:5,alignItems :'center'}}>
            
        <View style ={{flexDirection:'row',alignItems:'center'}}>
            <Image source ={{uri: post.dp}} style ={styles.story}/>
            <Text style ={{marginLeft : 5,fontWeight:700}}>{post.username}</Text>
        
        </View>
        <TouchableOpacity>
            <Image source={{uri : "https://cdn-icons-png.flaticon.com/512/2311/2311524.png"}} style ={{height:22,width:22}}/>
        </TouchableOpacity>
 
    </View>
    )
}
const PostImage =({post}) =>
{
    return (
        <View style ={{ width : '100%',height : 450}}>        
        <Image source={{uri:post.picture}} 
        style={{height : '100%',resizeMode : 'cover'}}/>
        </View>

    )
}
const PostFooter=() =>(
    <View style = {{flexDirection:'row',justifyContent : 'space-between'}}>
    <View style ={styles.LeftfooterIcons}>
    <Icon imgstyle={styles.footerIcon} imgurl={RequiredIcons[0].url0}/>
    <Icon imgstyle={styles.footerIcon} imgurl={RequiredIcons[1].url}/>
    <Icon imgstyle={styles.footerIcon} imgurl={RequiredIcons[2].url}/>
    </View>
    <View >
    <Icon imgstyle={styles.footerIcon} imgurl={RequiredIcons[3].url0}/>
    </View>
    </View>

)
const Icon = ({imgstyle,imgurl})=>
(
    
    <TouchableOpacity>
        <Image style= {imgstyle} source ={{uri:imgurl}}/>
    </TouchableOpacity>
    
)
const LikeCount =({post}) =>
(
    <View style ={{marginTop :4 ,flexDirection:'row'}}>
    <Text style= {{fontWeight:'700',paddingLeft:6}}>{post.likecount} likes </Text>
    </View>
)
const Caption=({post})=>
(
    <View style ={{flexDirection:'row',marginTop : 4,marginLeft:4}}>
    <Text style ={{fontWeight:'700',marginRight : 5}}>{post.username}</Text>
    <Text>{post.caption}</Text>
    </View>
) 
const CommentSection=({post}) =>
(
    <TouchableOpacity style ={{marginTop:5,marginLeft:4}}>
    
        {!!post.comments.length &&( <Text style ={{color:'gray'}}>View{post.comments.length > 1 ? ' all' : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? 'comments' : "comment"}</Text>)}
    </TouchableOpacity>
)
const Comments =({post}) =>
(
    <>
            {post.comments.map((comment,index)=>
            (
            <View key={index} style={{flexDirection:'row',marginTop:4}}>           
             <Text>
            <Text style={{fontWeight :'700',marginLeft : 4}}>{comment.user} </Text>
                {comment.comment}
            </Text>
            </View>


            
            ))}
        
        </>
)
const styles =  StyleSheet.create({
    story : 
    {
        width :35,
        height : 35,
         borderRadius : 50,
         marginLeft : 6,
         borderWidth : 1,
         borderColor : '#ff8501',
    },
    footerIcon :
    {
        width : 33,
        height : 33,
    },
    LeftfooterIcons :
    {
        flexDirection:'row',
        width : '32%',
        justifyContent : 'space-between',
    }

}
)

export default Post