/**
 * 各种图片效果展示
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class JHImageDemo extends Component {
    render() {
        return (
            <View style={styles.mainPanel}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.domPanel}>
                        <Image source={require('../../img/img_01.jpg')} style={styles.imgStyle}/>
                        <Text style={styles.titleStyle}>东非大峡谷</Text>
                    </View>
                    <View style={styles.domPanel}>
                        <Image source={require('../../img/img_02.jpg')} style={styles.imgStyle}/>
                        <Text style={styles.titleStyle}>阿拉斯加</Text>
                    </View>
                    <View style={styles.domPanel}>
                        <Image source={require('../../img/img_03.jpg')} style={styles.imgStyle}/>
                        <Text style={styles.titleStyle}>长城</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.domPanel}>
                        <Image source={require('../../img/img01.jpg')} style={styles.imgStyle}/>
                        <Text style={styles.titleStyle}>阿拉斯加</Text>
                    </View>
                    <View style={styles.domPanel}>
                        <Image source={require('../../img/img02.jpg')} style={styles.imgStyle}/>
                        <Text style={styles.titleStyle}>坦桑尼亚草原</Text>
                    </View>
                    <View style={styles.domPanel}>
                        <Image source={require('../../img/img03.jpg')} style={styles.imgStyle}/>
                        <Text style={styles.titleStyle}>蒙古高原</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainPanel: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    domPanel: {
        backgroundColor: '#cccccc',
        width: 80,
        height: 100,
        marginTop: 15,
        marginRight: 15,
        marginBottom: 10
    },
    imgStyle: {
        alignSelf: 'center',
        width: 80,
        height: 80
    },
    titleStyle: {
        padding: 0,width: 80,
        lineHeight: 24,
        textAlign: 'center',
        color: 'orangered',
        fontSize: 13,
    }
})

