import React from 'react'
import PropTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';

const Poster = ({url}) => <Image source={{url: url}} style={styles.Poster}/>

Poster.propTypes = {
    url: PropTypes.string.isRequired
};

export default Poster;

const styles = StyleSheet.create({
    Poster: {
        width: 100,
        height: 160,
        borderRadius: 4        
    }
})