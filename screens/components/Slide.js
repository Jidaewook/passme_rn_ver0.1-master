import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import PropTypes from 'prop-types';
import SlidePoster from './SlidePoster';
import { apiImage } from '../../api';



const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

const Slide = ({id, title, desc, tag, likes, thumbnail, uploadDate}) => {

    const navigation = useNavigation();
    const goToDetail = () => 
        navigation.navigate("DetailScreen", {
            id, title, desc, thumbnail, tag
        });

    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={{url: apiImage(thumbnail)}} />
            <View style={styles.content}>
                <SlidePoster url={apiImage(thumbnail)} />
                
                 {/*  감싸서 고정을 시키고, 설명영역이 움직일 때, 버튼이 움직이지 않도록 영역을 둘로 나눠 구역화 */}
                <View style={styles.data}>
                    <View style={styles.data_box}>
                        <Text style={styles.title}>
                            {title.slice(0, 30)}
                        </Text>
                        <Text style={styles.desc}>
                            {desc.slice(0, 120)}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={goToDetail}>
                    
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>View Detail</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


Slide.propTypes = {
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tag: PropTypes.array,
    thumbnail: PropTypes.string.isRequired,
    uploadDate: PropTypes.string.isRequired
}


export default Slide;



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.4,
        position: "absolute"
    },
    content: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    data: {
        width: '50%',
        height: '80%',
        alignItems: 'flex-start'
    },
    data_box: {
        width: '100%',
        height: '37%'
    },
    title: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10

    },
    // Hex color는 rgb코드를 colorpicker에서 찾아와도 된다.
    desc: {
        color: "#dcdcdc",
        fontSize: 14,
        fontWeight: "500"
    },
    button : {
        // marginBottom: 5,
        // marginLeft: 15,
        // width: '100%',
        width: WIDTH / 3,
        height: HEIGHT / 20,
        alignItems: "center",
        marginTop: '40%',
        marginLeft: '30%',
        justifyContent: "center",
        backgroundColor: '#e74c3c',
        borderRadius: 10
    },
    buttonText : {
        color: 'white'
    },
    tagItem : {
        color: 'white'
    }


});