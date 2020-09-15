import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const ViewDetail = ({id, title}) => {
    
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>View Detail</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ViewDetail;

const styles = StyleSheet.create({
    button : {
        marginTop: 10,
        
        width: 150,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#e74c3c',
        borderRadius: 10
    },
    buttonText : {
        color: 'white'
    }
});