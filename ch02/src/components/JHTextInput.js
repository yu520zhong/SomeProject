/**
 * 各种图片效果展示
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Image} from 'react-native';

export default class JHTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                <Image style={styles.iconStyle} source={require('../../img/icon.png')} />
                <TextInput style={styles.userInputStyle}
                           placeholder='请输入用户名'
                           numberOfLine={1}
                           autoFocus={true}
                           textAlign='center'
                />
                <View style={{height:1,backgroundColor:'#f4f4f4'}} />
                <TextInput style={styles.pwdInputStyle}
                           placeholder='请输入密码'
                           numberOfLine={1}
                           secureTextEntry={true}
                           textAlign='center'
                />
                <View style={styles.commitStyle}>
                    <Text style={{color:'#fff'}}>登录</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',marginTop:20}}>
                    <Text style={styles.unLoginViewStyle}>忘记密码</Text>
                    <Text style={styles.newUserStyle}>新用户</Text>
                </View>
                <View style={styles.bottomViewStyle}>
                    <Text style={{marginLeft:5,color:'#333',fontSize:15,fontWeight:'bold'}}>其他登录方式</Text>
                    <Image source={require('../../img/icon3.png')} style={styles.otherLoginStyle} />
                    <Image source={require('../../img/icon7.png')} style={styles.otherLoginStyle} />
                    <Image source={require('../../img/icon8.png')} style={styles.otherLoginStyle} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 70,
        height: 70,
        marginTop: 60,
        alignSelf: 'center',
        borderRadius: 35
    },
    userInputStyle: {
        backgroundColor: '#fff',
        height: 35,
        marginTop: 20
    },
    pwdInputStyle: {
        backgroundColor: '#fff',
        height: 35
    },
    commitStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        backgroundColor: '#63B8FF',
        marginTop: 30,
        marginLeft: 10,
        marginRight:10,
        borderRadius: 5
    },
    unLoginViewStyle: {
        fontSize: 12,
        color: '#63B8FF',
        marginLeft: 10
    },
    newUserStyle: {
        fontSize: 12,
        color:'#63B8FF',
        marginRight: 10,
        flex: 1,
        flexDirection:'row',
        textAlign: 'right'
    },
    bottomViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    otherLoginStyle: {
        width:40,
        height: 40,
        alignSelf: 'center',
        marginLeft: 8,
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 20
    }
})

