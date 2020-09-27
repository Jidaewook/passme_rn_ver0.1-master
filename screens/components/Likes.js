import React from 'react';
import {Text, StyleSheet} from 'react-native';
// import styled from "styled-components";

// const Container = styled.Text`
//     color: black;
//     margin-bottom: 7px;
//     font-weight: 500;
//     font-size: 16px;

// `;

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