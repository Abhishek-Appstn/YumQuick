import {View, Text, Pressable, Image, Alert} from 'react-native';
import React, {useCallback, useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Layout from './Layout';
import Chat_Input from '../Common/Chat_Input';
import Dimensions from '../Global/Dimensions';
import {
  GiftedChat,
  Bubble,
  Time,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';
import Colors from '../Global/Colors';
import {
  Attachment,
  Microphone_On,
  Milkshake,
  Share_icon,
} from '../assets/Images';

const SupportChat = () => {
  const {height, width} = Dimensions;
  const [messages, setmessages] = useState([]);
  const onSend = useCallback((messages = []) => {
    setmessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: Colors.Orange_3,
          height: height * 0.12,
          width: width,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        renderComposer={composerprops => (
          <Composer
            {...composerprops}
            textInputStyle={{
              backgroundColor: Colors.White,
              borderRadius: 20,
              padding: 3,
              paddingLeft:10,
              maxHeight: width * 0.07,
              maxWidth: width * 0.8,
              fontSize: 12,
            }}
          />
        )}
        renderActions={() => (
          <Pressable
            style={{
              height: width * 0.09,
              width: width * 0.09,
              borderRadius: 10,
              backgroundColor: Colors.White,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={Attachment} />
          </Pressable>
        )}
        renderSend={props => {
          const {text, messageIdGenerator, onSend} = props;
          return (
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={{
                  height: width * 0.08,
                  width: width * 0.08,
                  borderRadius: 10,
                  backgroundColor: Colors.White,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 6,
                }}>
                <Image source={Microphone_On} />
              </Pressable>
              <Pressable
                style={{
                  height: width * 0.08,
                  width: width * 0.08,
                  borderRadius: 10,
                  backgroundColor: Colors.White,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 6,
                }}
                onPress={() => {
                  text.trim() !== ''
                    ? onSend({text: text.trim(), _id: messageIdGenerator}, true)
                    : Alert.alert(
                        'Empty Message',
                        'Cant send an Empty message',
                      );
                }}>
                <Image source={Share_icon} />
              </Pressable>
            </View>
          );
        }}
      />
    );
  };
  const renderBubble = props => {
    return (
      <View>
        <Bubble
          {...props}
          containerStyle={{width: width}}
          wrapperStyle={{
            left: {
              backgroundColor: Colors.White_Bg,
              borderWidth: 1,
              borderColor: Colors.orange_Base,
              width: width * 0.45,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 15,
              minHeight: 35,
            },
            right: {
              backgroundColor: Colors.yellow,
              width: width * 0.45,
              justifyContent: 'flex-end',
              borderBottomRightRadius: 0,
              borderTopRightRadius: 15,
              minHeight: 35,
            },
          }}
          textStyle={{
            left: {},
            right: {
              color: Colors.Font,
              textAlign: 'right',
            },
          }}
        />
        <View
          style={{
            alignSelf: props.position === 'left' ? 'flex-start' : 'flex-end',
            marginVertical: 5,
          }}>
          <Text
            style={{
              color: Colors.Font,
              fontSize: 14,
              fontFamily: 'LeagueSpartan-Light',
            }}>
            {props.currentMessage.createdAt.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </View>
      </View>
    );
  };

  const renderTime = props => {
    return null;
  };
  return (
    <View>
      <PageHeader Title="Support" />
      <Layout align={false}>
        <View style={{height: height * 0.75, width: width}}>
          <GiftedChat
            renderInputToolbar={renderInputToolbar}
            messagesContainerStyle={{width: width * 0.96}}
            placeholder={'Write Here....'}
            messages={messages}
            onSend={messages => {
              onSend(messages);
            }}
            user={{
              _id: 11,
            }}
            listViewProps={{
              showsVerticalScrollIndicator: false,
            }}
            renderBubble={renderBubble}
            renderTime={renderTime}
          />
        </View>
      </Layout>
    </View>
  );
};

export default SupportChat;
