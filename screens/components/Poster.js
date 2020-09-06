import React from 'react'
import PropTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';

const Poster = ({url}) => <Image source={require('../../assets/blankpng.png')} style={styles.Poster}/>

Poster.propTypes = {
    url: PropTypes.string.isRequired
};

export default Poster;

const styles = StyleSheet.create({
    Poster: {
        width: 180,
        height: 160,
        borderRadius: 4,
        marginLeft: 8      
    }
})