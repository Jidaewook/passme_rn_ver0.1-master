import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';


import Title from '../components/Title';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



const SettingScreen = ({loading}) => {
    const state = {
        image: null
    };

    return (
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title title={"Setting"} />
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Text>
                            Hello
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    cardContainer: {
        flexDirection: "row"
    },
    sliderContainer: {
        width: '100%',
        height: '33%',
        marginBottom: 40,
        // height: 300,
        // width: '90%',
        // marginTop: 20,
        // justifyContent: 'center',
        // alignSelf: 'center',
        // borderRadius: 8,
    },

    wrapper: {},

    content: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    data: {
        width: '50%',
        alignItems: 'flex-start'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        opacity: 0.4
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 7,
        color: '#de4f35',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        // shadowColor: '#999',
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        // borderRadius: 8,
        // borderBottomRightRadius: 0,
        // borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderLeftWidth: 0,
        // borderBottomRightRadius: 8,
        // borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    cardDetails: {
        fontSize: 13,
        color: '#444',
        marginTop: 10
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    }
});
