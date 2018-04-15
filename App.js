/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View, Dimensions
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>React Native is Awesome</Text>
                    <Text style={styles.text}>Là chương trình phần mềm trên điện thoại di động được viết dựa trên
                        nền
                        tảng web (html5, css3, javascript), bản chất hoàn toàn là ứng dụng web nhưng có thêm được
                        các
                        tính năng thao tác phần hệ điều hành như tập tin, truy cập máy ảnh, GPS hoặc các cảm biến
                        như
                        con quay hồi chuyển, gia tốc kế…Toàn bộ những thứ này đều được bao bọc bởi một lớp ứng dụng
                        Native mà nổi bật là Phonegap/Cordova.</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Decline</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window'); // device height and width
// ui được thiết kế cho size màn hình là (360x592)
// const standarWidth = 360;
// const standardHeight = 592;
// const boxWidth =  300/standarWidth * width;
// const boxHeight = 450/standardHeight * height;
// const textFontSize = 14/standarWidth * width;
// const buttonTextFontSize = 14/standarWidth * width;
// const titleFontSize = 20/standarWidth * width;
// const buttonWidth = 150/standarWidth * width;
// const buttonHeight = 49/standardHeight * height;
// const lineHeight = 25/standardHeight * height;
// const marginBottom = 10/standardHeight * height;
// const padding = 10/standarWidth * width;


//Chiều rộng và cao cho design chuẩn.
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: moderateScale(300),
        height: verticalScale(450),
        backgroundColor: 'white',
        borderRadius: 10,
        padding: scale(10),
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2
    },
    title: {
        textAlign: 'center',
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
        color: 'black'
    },
    text: {
        textAlign: 'center',
        fontSize: moderateScale(14),
        color: 'black',
        lineHeight: verticalScale(25)
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: moderateScale(150, 0.3),
        height: moderateScale(49, 0.3),
        borderRadius: 100,
        marginBottom: verticalScale(10),
        backgroundColor: '#41B6E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: moderateScale(14),
        color: 'white'
    }
});