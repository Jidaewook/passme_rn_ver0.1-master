import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const DetailContent = ({title, child}) => {
    return (
        <View>
           <Text style={styles.title}>
                {
                    title
                }
            </Text>
            <FlatList style={styles.child}>
                {child}
            </FlatList>
        </View>
        
    );
};


DetailContent.propTypes = {
    title: PropTypes.string.isRequired,
    child: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};


export default DetailContent;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "black",
        fontWeight: "600"
    },
    child: {
        marginTop: 25,
        display: 'flex',
        color: "black"
    }
})