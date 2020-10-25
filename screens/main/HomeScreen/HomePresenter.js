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
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import Icon from '@expo/vector-icons/Ionicons';

import RecommendScreen from '../RecommendScreen/RecommendPresenter';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";
import { apiImage } from '../../../api';



const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const ContainerTitle = styled.View`
    /* justify-content: flex-end; */
    flex-direction: row;
    width: 100%;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding-left: 10px;
`;


const HomePresenter = ({ loading, ncs, psat, notice, bbs}) => {

    const navigation = useNavigation();
    const goToDetail = () => 
        navigation.navigate("DetailScreen");
    const goToIncruit = () => 
        navigation.navigate("Incruit");
    const goToHighscore = () => 
        navigation.navigate("Highscore")
    const goToMathqna = () => 
        navigation.navigate("Mathqna");
    const goToSolving = () => 
        navigation.navigate("Solving")
    return (
        <ScrollView
            style={{
                // backgroundColor: "black"
            }}
            justifyContent={{
                flex: 1,
                justifyContent: loading ? "center" : "flex-start"
            }}
        >
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
                                        id={item._id}
                                        title={item.title}
                                        desc={item.desc}
                                        thumbnail={item.thumbnail.url}
                                        uploadDate={item.uploadDate}
                                    />
                                </View>
                            ))}
                        </Swiper>
                    </View>
                    
                </ScrollView>
            )}
            <ContainerTitle>
                <View
                    style={styles.cardContainer}
                >
                    <Title title={"기관별 공고"}   />
                </View>
                <View style={{width: '75%', flex: 1}} >
                    <TouchableOpacity onPress={goToIncruit}>
                        <Icon 
                            name="ios-add" 
                            color="black" 
                            size={26}
                            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 5}}
                        />
                    </TouchableOpacity>
                </View>
            </ContainerTitle>
            <Container>
                <ScrollView
                    style={{marginTop: 20, width: '100%', height: '80%'}}
                    // contentContainerStyle={{paddingLeft: 0}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                
                     {ncs.map(item => (
                        <Vertical 
                            key={item._id}
                            thumbnail={item.thumbnail.url}
                            title={item.title}
                            
                        
                        />
                        
                    ))}
                    


                </ScrollView>
            </Container>
            <ContainerTitle>
                <View
                    style={styles.cardContainer}
                >
                    <Title title={"NCS 고득점 썰"}   />
                </View>

                <View style={{width: '75%', flex: 1}} >
                    <TouchableOpacity onPress={goToHighscore}>
                        <Icon 
                            name="ios-add" 
                            color="black" 
                            size={26}
                            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 5}}
                        />
                    </TouchableOpacity>
                </View>
            </ContainerTitle>
            <Container>
                <ScrollView
                    style={{marginTop: 20, width: '100%', height: '80%'}}
                    // contentContainerStyle={{paddingLeft: 0}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    
                    {ncs.map(item => (
                        <Vertical 
                            key={item._id}
                            thumbnail={item.thumbnail.url}
                            title={item.title}
                            likes={item.likes}
                            comments={item.comments}
                        
                        />
                        
                    ))}
                </ScrollView>
            </Container>
            <ContainerTitle>
                <View>
                    <Title title={"수리능력 Q&A"}   />
                </View>
                <View style={{width: '75%', flex: 1}} >
                    <TouchableOpacity onPress={goToMathqna}>
                        <Icon 
                            name="ios-add" 
                            color="black" 
                            size={26}
                            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 5}}
                        />
                    </TouchableOpacity>
                </View>
            </ContainerTitle>
            <Container>
                <ScrollView
                    style={{marginTop: 20, width: '100%', height: '80%'}}
                    // contentContainerStyle={{paddingLeft: 0}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {ncs.map(item => (
                        <Vertical 
                            key={item._id}
                            thumbnail={item.thumbnail.url}
                            title={item.title}
                            likes={item.likes}
                            comments={item.comments}
                        
                        />
                    ))}
                </ScrollView>
            </Container>
        </ScrollView>
        


        
    );
};

export default HomePresenter;


const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'flex-start'
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
