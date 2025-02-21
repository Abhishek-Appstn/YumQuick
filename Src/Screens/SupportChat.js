import { View, Text, Pressable, Image, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import PageHeader from '../Common/PageHeader'
import Layout from './Layout'
import Chat_Input from '../Common/Chat_Input'
import Dimensions from '../Global/Dimensions'
import { GiftedChat,Bubble, Time, InputToolbar, Composer } from 'react-native-gifted-chat'
import Colors from '../Global/Colors';
import { Attachment, Microphone_On, Milkshake, Share_icon } from '../assets/Images'




const SupportChat = () => {
    const {height,width}=Dimensions
    const [messages, setmessages] = useState([])
    const onSend=useCallback((messages=[])=>{
      setmessages(previousMessages=>
        GiftedChat.append(previousMessages,messages)
      )
    },[])
    
const renderInputToolbar=(props)=>{
  return(
    <InputToolbar {...props}
    containerStyle={{backgroundColor:Colors.Orange_3,height:height*.1,width:width,padding:20,alignItems:"center",justifyContent:'center'}}

    renderComposer={(composerprops)=>(
      <Composer
      {...composerprops}
      textInputStyle={{backgroundColor:Colors.White,borderRadius:20,padding:5}}/>
  )}

    
    renderActions={()=>(

      <Pressable style={{height:width*.09,width:width*.09,borderRadius:10,backgroundColor:Colors.White,alignItems:'center',justifyContent:'center'}}>
      <Image source={Attachment}/>
      </Pressable>


  )}
  
  renderSend={(props) => {
    const { text, messageIdGenerator, onSend } = props;
    return (
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={{ height: width * .09, width: width * .09, borderRadius: 10, backgroundColor: Colors.White, alignItems: 'center', justifyContent: 'center', marginHorizontal: 6 }}
          >
          <Image source={Microphone_On} />
        </Pressable>
        <Pressable style={{ height: width * .09, width: width * .09, borderRadius: 10, backgroundColor: Colors.White, alignItems: 'center', justifyContent: 'center', marginHorizontal: 6 }} onPress={() => {
          text.trim()!==''?
          onSend({ text: text.trim(), _id: messageIdGenerator }, true):Alert.alert("Empty Message","Cant send an Empty message")
          }}>
          <Image source={Share_icon} />
        </Pressable>
      </View>
    )
  }}
  />)}
    const renderBubble = (props) => {
      return (
        <Bubble
          {...props}
          containerStyle={{width:width,backgroundColor:'red'}}
          wrapperStyle={{
            left: {
              backgroundColor: Colors.White_Bg, borderWidth:1,borderColor:Colors.orange_Base,width:width*.45,borderBottomLeftRadius:0,borderTopLeftRadius:15
            },
            right: {
              backgroundColor: Colors.yellow,width:width*.45,justifyContent:'flex-end',borderBottomRightRadius:0,borderTopRightRadius:15
            },
          }}
          textStyle={{
            left: {
         
            },
            right: {
              color: Colors.Font, textAlign:'right'
            },
          }}
        />
      );
    };
    
    const renderTime=(props)=>{
      return(
       
        <Time
      {...props}
      containerStyle={{
    
      }}
    />
      )
    }
  return (
    <View>
<PageHeader Title="Support"/>
<Layout align={false}>
  <View style={{height:height*.75,width:width}}>

<GiftedChat renderInputToolbar={renderInputToolbar} messagesContainerStyle={{width:width*.96}} placeholder={"Write Here...."}messages={messages} onSend={messages=>{onSend(messages)}} user={{
        _id: 106,
      }} 
      listViewProps={{
        showsVerticalScrollIndicator:false
      }}
      renderBubble={renderBubble}
      renderTime={renderTime}
      />

</View>

    
</Layout>
    </View>
  )
}

export default SupportChat