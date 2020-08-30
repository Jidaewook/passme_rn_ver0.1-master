import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import {apiImage} from '../../api';
import {useNavigation} from '@react-navigation/native';
import Likes from './Likes';
import Comments from './Comments';
import {trimText, formDate} from '../../Utils';


const Vertical = ({id, thumbnail, title, likes, comments}) => {
    const navigation = useNavigation();
    const goToDetail = () => 
        navigation.navigate("Detail", {
            id, 
            thumbnail,
            title,
            likes,
            comments
        });
    

    return (
        <TouchableOpacity onPress={goToDetail} >
            <View style={styles.Container}>
                <Poster url={apiImage(thumbnail)} />
                <Text style={styles.TItle}>{trimText(title, 10)}</Text>
                <View style={styles.Data}>
                    <Likes likes={likes.length} />
                    <Comments commetns={comments.length} />
                </View>

            </View>

        </TouchableOpacity>
    );
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
        color: 'black',
        fontWeight: '500',
        

    }, 
    LikesContainer: {
        color: 'white',
        
    }, 
    Data: {
        marginTop: 5,
        width: '60%',
        alignItems: 'center',
        flexDirection: 'row'
    }
});