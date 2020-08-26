import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Title = ({title}) => <Text>{title}</Text>;

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 30
    }
});

 