import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Likes = ({likes, styleOption}) => 
    <Text style={[styles.Container, styleOption]}>
        👨‍🦰 {likes}
    </Text>;

export default Likes;

const styles = StyleSheet.create({
    Container : {
        color: 'black',
        marginBottom: 7,
        fontWeight: '500',
        fontSize: 20
    }
})