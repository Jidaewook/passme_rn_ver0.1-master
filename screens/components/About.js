import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>
                ABOUT ME
            </Text>
            <Text style={styles.about}>
                {`
약력
개띠
흐엉엉`
                }
            </Text>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        margin: 32,
        backgroundColor: '#123121'
    },
    about: {
        fontSize: 15,
        fontWeight: "500",
        color: "black",
        marginTop: 8,
        lineHeight: 22,
        backgroundColor: 'grey'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'grey'
    }
})