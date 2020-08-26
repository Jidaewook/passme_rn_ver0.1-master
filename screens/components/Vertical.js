import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import {apiImage} from '../../api';
import {useNavigation} from '@react-navigation/native';
import Likes from './Likes';
import Comments from './Comments';

const Vertical = () => {
    return (
        <TouchableOpacity onPress={} >
            <View>
                <Poster url={apiImage()} />
                <Text></Text>
                <VIew>
                    <Likes />
                    <Comments />
                </VIew>

            </View>

        </TouchableOpacity>
    )
};

Vertical.propTypes = {
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.array,
    comments: PropTypes.array
}

export default Vertical;

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        marginRight: 20
    },
    TItle : {
        color: 'white',
        fontWeight: '500',
        

    }
});