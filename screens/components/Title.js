import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Title = ({title}) => <Text style={styles.title}>{title}</Text>;

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;

const styles = StyleSheet.create({
    title: {
        color: "#000",
        fontWeight: "800",
        fontSize: 20,
        marginLeft: 5
    }
});

 