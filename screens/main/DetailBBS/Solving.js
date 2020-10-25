import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button} from "react-native";
import * as WebBroswer from 'expo-web-browser';

import Title from '../../components/Title';
import Desc from '../../components/Desc';
import DescContent from '../../components/DescContent';
import ScrollContainer from '../../components/ScrollContainer';
import Poster from '../../components/Poster';
import Likes from '../../components/Likes';
import Comments from '../../components/Comments';
import ViewDetail from '../../components/Button/ViewDetail';
import Icon from '@expo/vector-icons/Ionicons';


// import {solvingApi} from '../../api';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");


const Solving = ({loading, notice, incruit, qna}) => {
    const [lecture, setLecture] = useState({
        loading: true
        // ncs: {},
        // ncsError: null
    })

   
    return (
        <ScrollView>
            <ScrollView>
                <View>
                    
                </View>
                
                
                <View style={{borderBottomWidth: 1, borderColor: 'gray', paddingBottom: 5, }}>
                    <View>
                        <Title title={"제목"}  />
                        <Likes 
                            styleOption={{alignSelf: 'flex-end', marginRight: 10, marginTop: 5}} 
                            likes={10} 
                        />
                        <Icon 
                            name="ios-add"
                            color="black"
                            size={26}
                            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 5}}
                        />
                    </View>
                    <View>
                        <DescContent desc={"설명"} />
                    </View>        
                </View>
                <View style={styles.Header}>
                    <Image style={[{backgroundColor: "white"}, styles.BG]}
                        source={require("../../../assets/applogo.png")}
                    />
                    
                </View>
                <View>
                    <Text
                        style={{alignSelf: 'center'}}
                    >
                        댓글란    
                    </Text> 
                    <TouchableOpacity 
                        onPress={{}}
                        style={{marginTop: 10}}
                    >
                        <Icon 
                            name="ios-add"
                            color="black"
                            size={26}
                            style={{alignSelf: 'center'}}
                        />
                    </TouchableOpacity>
                </View>  
            </ScrollView>
        </ScrollView>
    );
};

export default Solving;

const styles = StyleSheet.create({
    BG: {
        width: '100%',
        height: '100%',
        opacity: 0.4,
        position: 'absolute',
        backgroundColor: '#009387'
    },
    Header: {
        height: HEIGHT / 3,
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30 

    },
    Info: {
        width: '50%',
        marginLeft: '10%'
    },
    Title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        
    },
    TitleSub: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 30,
        backgroundColor: 'white'
    },
    Desc: {
        color: 'black',
        fontWeight: '300',
        fontSize: 18,
        marginLeft: 5
    },
    Tag: {
        width: '10%',
        height: '10%',
        color: 'black',
        flexDirection: 'row'
    },
    Image: {
        marginTop: 10,
        width: 50,
        height: 50,
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "row"
    },
    image: {
        flex: 1,
        height: 10,
        width: 10,
        marginTop: 10
    },
    TagContainer: {
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start",
        marginVertical: 4,
        width: "100%",
        height: 150
    }, 
    likes: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5
    },
    comments: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5
    }

})