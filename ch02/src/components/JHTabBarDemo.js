/**
 * 各种图片效果展示
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TabBarIOS} from 'react-native';

export default class JHTabBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTabItem: '第一页',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <Text style={styles.textStyle}>Tabl切换效果</Text>
                </View>
                <TabBarIOS barTintColor='black' translucent={true} tintColor='deeppink'>
                    <TabBarIOS.Item systemIcon='bookmarks' badge='2' onPress={() => {
                        this.setState({
                            selectedTabItem: '第一页'
                        })
                    }} selected={this.state.selectedTabItem === '第一页'}>
                        <View style={[{flex: 1, backgroundColor: 'purple'}, styles.viewStyle]}>
                            <Text style={styles.contentStyle}>首页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item systemIcon='most-viewed' onPress={() => {
                        this.setState({
                            selectedTabItem: '第四页'
                        })
                    }} selected={this.state.selectedTabItem === '第四页'}>
                        <View style={[{flex: 1, backgroundColor: 'purple'}, styles.viewStyle]}>
                            <Text style={styles.contentStyle}>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item systemIcon='downloads' onPress={() => {
                        this.setState({
                            selectedTabItem: '第二页'
                        })
                    }} selected={this.state.selectedTabItem === '第二页'}>
                        <View style={[{flex: 1, backgroundColor: 'purple'}, styles.viewStyle]}>
                            <Text style={styles.contentStyle}>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item systemIcon='contacts' onPress={() => {
                        this.setState({
                            selectedTabItem: '第三页'
                        })
                    }} selected={this.state.selectedTabItem === '第三页'}>
                        <View style={[{flex: 1, backgroundColor: 'purple'}, styles.viewStyle]}>
                            <Text style={styles.contentStyle}>第三页</Text>
                        </View>
                    </TabBarIOS.Item>

                </TabBarIOS>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff'
    },
    headerStyle: {
        flexDirection: 'row',
        height: 64,
        backgroundColor: 'deeppink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        marginTop:10,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    contentStyle: {
        fontSize: 25,
        color: 'white',
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

