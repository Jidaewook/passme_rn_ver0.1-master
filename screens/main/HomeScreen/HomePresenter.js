import React from 'react';

import {
    ScrollView,
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import styled from "styled-components/native";
import Swiper from 'react-native-swiper';
import Slide from '../../components/Slide';

// const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
    flex: 1;
    justify-content: center;
`;


const HomePresenter = ({ loading, ncs, psat, notice, bbs}) => {
    return (
        <Container>
            {loading ? (
                <ActivityIndicator color="black" size="large"  />
            ) : (
                <ScrollView style={styles.container}>
                    <View style={styles.sliderContainer}>
                        <Swiper
                            loop
                            timeout={3}
                            height={258}
                            activeDotColor='#fff'
                        >
                            {ncs.map(item => (
                                <View style={styles.container}>
                                    <Slide 
                                        key={item._id}
                                        id={item._id}
                                        title={item.title}
                                        desc={item.desc}
                                        thumbnail={item.thumbnail}
                                        uploadDate={item.updatedAt}

                                    />
                                </View>
                            ))}
                        </Swiper>
                    </View>
                </ScrollView>
            )}
        </Container>


        
    );
};

export default HomePresenter;


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});
