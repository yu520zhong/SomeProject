'use strict';

import React, {Component} from 'react';
import {ListView, Text, View, TouchableOpacity, Image, TouchableHighlight, ImageBackground} from 'react-native';
import JHImageDemo from './components/JHImageDemo';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class client extends Component {

    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
        this.state = {
            showDate: true,
            data1: ['zhangsan', 'lisi'],
            data2: ['zhangsan', 'sddfdf']
        };
    }

    handle() {
        this.setState({
            showDate: !this.state.showDate,
        });
    }

    _onPressButton() {
        console.log("You tapped the button!");
    }


    render() {
        var Dimensions = require('Dimensions');
        var {width, height, scale} = Dimensions.get('window');
        return (
            <View style={{paddingTop: 22}} style={{
                ...this.props.style,
            }}>
                <JHImageDemo />
                <ListView
                    dataSource={ds.cloneWithRows(this.state.showDate ? this.state.data1 : this.state.data2)}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
                <TouchableHighlight onPress={this._onPressButton}>
                    <Text>Button</Text>
                </TouchableHighlight>
                <Text>
                    当前的屏幕宽度: {width + '\n'}
                    当前的屏幕高度: {height + '\n'}
                    当前的屏幕分辨率: {scale + '\n'}
                </Text>

                <Image source={require('../img/img02.jpg')} style={{width: 120, height: 120, margin: 15}}/>

                <ImageBackground source={require('../img/img02.jpg')} style={{flex: 1, width: 200, height: 100}}>
                    <Text>你好啊</Text>
                </ImageBackground>

                <TouchableOpacity onPress={this.handle}>
                    <View style={{width: 200, height: 26, backgroundColor: 'red', marginTop: 100}}>
                        <Text style={{textAlign: 'center', lineHeight: 26}}>点击</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


/*'use strict';

import React, { Component } from 'React';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore'

function setup():React.Component {

    class Root extends Component {

        constructor() {
            super();
            this.state = {
                isLoading: false,
                store: configureStore(()=> this.setState({isLoading: false})),
            };
        }

        render() {
            return (
                <Provider store={this.state.store}>
                    <App store={this.state.store} />
                </Provider>
            );
        }
    }
    return Root
}

export default setup;*/
