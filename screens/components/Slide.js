import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import { apiImage } from '../../api';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

const Slide = ({id, title, desc, tag, thumbnail, uploadDate}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={{url: apiImage(thumbnail)}} />
            <View style={styles.content}>
                <Poster url={apiImage(thumbnail)} />
                
                 {/*  감싸서 고정을 시키고, 설명영역이 움직일 때, 버튼이 움직이지 않도록 영역을 둘로 나눠 구역화 */}
                <View style={styles.data}>
                    <Text style={styles.title}>
                        {title.slice(0, 30)}
                    </Text>
                    <Text style={styles.desc}>
                        {desc.slice(0, 120)}
                    </Text>
                    <TouchableOpacity>
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
        marginTop: 70,
        marginLeft: 70,
        width: 150,
        height: 30,
        alignItems: "center",
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