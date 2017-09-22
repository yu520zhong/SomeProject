import React, { Component } from "react";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    Button,
    ScrollView,
    Dimensions,
    ListView,
    Alert,
    Image,
    TouchableHighlight,
    StatusBar,
    RefreshControl
} from "react-native";
import Detail from './detail';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

//轮播指示器设置
const circleSize = 8;
const circleMargin = 5;

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            isRefreshing: false,
            searchText: '',
            advertisements: [
                {
                    image: require('./img/advertisement-image-01.jpg')
                },
                {
                    image: require('./img/advertisement-image-02.jpg')
                },
                {
                    image: require('./img/advertisement-image-03.jpg')
                },
            ],
            dataSource: ds.cloneWithRows([
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品1',
                    subTitle: '描述1'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品2',
                    subTitle: '描述2'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品3',
                    subTitle: '描述3'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品4',
                    subTitle: '描述4'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品5',
                    subTitle: '描述5'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品6',
                    subTitle: '描述6'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品7',
                    subTitle: '描述7'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品8',
                    subTitle: '描述8'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品9',
                    subTitle: '描述9'
                },
                {
                    image: require('./img/product-image-01.jpg'),
                    title: '商品10',
                    subTitle: '描述10'
                }
            ])
        };
    }

    render() {
        const advertisementCount = this.state.advertisements.length;
        const indicatorWidth = circleSize * advertisementCount + circleMargin * advertisementCount * 2;
        const left = (Dimensions.get('window').width - indicatorWidth) / 2;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'red'} barStyle={'default'}
                           networkActivityIndicatorVisible={true}></StatusBar>
                <View style={styles.searchbar}>
                    <TextInput style={styles.input} placeholder='搜索商品'
                               onChangeText={(text) => {
                                   this.setState({searchText: text});
                                   console.log('输入的内容是' + this.state.searchText);
                                   console.log(this.state.advertisements.length);
                               }}></TextInput>
                    <Button style={styles.button} title='搜索'
                            onPress={() => Alert.alert('搜索内容为:' + this.state.searchText, null, null)}></Button>
                </View>
                <View style={styles.advertisement}>
                    <ScrollView
                        ref="scrollView"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                    >
                        {this.state.advertisements.map((advertisement, index) => {
                            return (
                                <TouchableHighlight key={index} onPress={() => Alert.alert('你点击我干嘛,我是广告!', null, null)}>
                                    <Image style={styles.advertisementContent}
                                           source={advertisement.image}>
                                    </Image>
                                </TouchableHighlight>
                            )
                        })}
                    </ScrollView>
                    <View style={[
                        styles.indicator,
                        {left: left}
                    ]}>
                        {this.state.advertisements.map((advertisement, index) => {
                            return (
                                <View key={index}
                                      style={(index === this.state.currentPage) ? styles.circleSelected : styles.circle} />
                            )
                        })}
                    </View>
                </View>
                <View style={styles.products}>
                    <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}
                              renderSeparator={this._renderSeperator}
                              refreshControl={this._renderRefreshControl()} />
                </View>
            </View>
        );
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableHighlight onPress={() => {
                const {navigator} = this.props;
                if (navigator) {
                    navigator.push({
                        name: 'detail',
                        component: Detail,
                        params: {
                            productTitle: rowData.title
                        }
                    })
                }
            }}>
                <View style={styles.row}>
                    <Image source={rowData.image} style={styles.productImage}></Image>
                    <View style={styles.productText}>
                        <Text style={styles.productTitle}>{rowData.title}</Text>
                        <Text style={styles.productSubTitle}>{rowData.subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.divider}>
            </View>
        )
    }

    _renderRefreshControl() {
        return (
            <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                tintColor={'#FF0000'}
                title={'正在刷新数据,请稍后...'}
                titleColor={'#0000FF'}>
            </RefreshControl>
        )
    }

    _onRefresh = () => {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            const products = Array.from(new Array(10))
                                  .map((value, index) => ({
                                      image: require('./img/product-image-01.jpg'),
                                      title: '新商品' + index,
                                      subTitle: '新商品描述' + index
                                  }));
            this.setState({
                isRefreshing: false,
                dataSource: ds.cloneWithRows(products)
            });
        }, 2000);
    }

    componentDidMount() {
        this._startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    _startTimer() {
        this.interval = setInterval(() => {
            nextPage = this.state.currentPage + 1;
            if (nextPage >= 3) {
                nextPage = 0;
            }
            this.setState({currentPage: nextPage});
            const offSetX = nextPage * Dimensions.get("window").width;
            this.refs.scrollView.scrollResponderScrollTo({
                x: offSetX,
                y: 0,
                animated: true
            });
        }, 2000)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchbar: {
        height: 40,
        marginTop: Platform.OS === "ios" ? 20 : 0,
        flexDirection: "row"
    },
    input: {
        flex: 1,
        borderColor: "#eee",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 5
    },
    button: {
        flex: 1
    },
    advertisement: {
        height: 180
    },
    products: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    advertisementContent: {
        width: Dimensions.get('window').width,
        height: 180
    },
    productImage: {
        marginLeft: 10,
        width: 40,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center'
    },
    productText: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    productTitle: {
        flex: 3,
        fontSize: 16
    },
    productSubTitle: {
        flex: 2,
        fontSize: 14,
        color: 'gray'
    },
    divider: {
        height: 1,
        width: Dimensions.get('window').width - 5,
        marginLeft: 5,
        backgroundColor: '#eee'
    },

    //指示器
    indicator: {
        position: 'absolute',
        top: 160,
        flexDirection: 'row'
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'gray',
        marginHorizontal: circleMargin
    },
    circleSelected: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'white',
        marginHorizontal: circleMargin
    }

});
