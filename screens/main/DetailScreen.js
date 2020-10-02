import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button} from "react-native";
import * as WebBroswer from 'expo-web-browser';

import Title from '../components/Title';
import Desc from '../components/Desc';
import ScrollContainer from '../components/ScrollContainer';
import Poster from '../components/Poster';
import Likes from '../components/Likes';
import Comments from '../components/Comments';
import ViewDetail from '../components/Button/ViewDetail';

import {lectureApi} from '../../api';


// const BG = styled.Image`
//     width: 100%;
//     height: 100%;
//     opacity: 0.4;
//     position: absolute;
// `;

// const Header = styled.View`
//     height: ${Dimensions.get("window").height / 3}px;
//     align-items: center;
//     justify-content: flex-end;
// `;

// const Container = styled.View`
//     flex-direction: row;
//     align-items: center;
//     top: 30px;
// `;

// const Info = styled.View`
//     width: 50%;
//     margin-left: 40px;
// `;

// const Title = styled.Text`
//     color: black;
//     font-weight: bold;
//     font-size: 25;
//     margin-top: 30px;
//     background-color: white;
// `;

// const TitleSub = styled.Text`
//     color: black;
//     font-weight: bold;
//     font-size: 18;
//     margin-top: 30px;
//     background-color: white;
// `;


// const Desc = styled.Text`
//     color: black;
//     font-weight: 300;
//     font-size: 18;
//     margin-Left: 5;
// `;

// const Tag = styled.Text`
//     width: 10%;
//     height: 10%;
//     color: black;
//     flex-direction: row;
// `;

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const DetailScreen = ({
    loading, navigation, 
    route: {
        params: {id}
    }
}) => {
    
    // 상태선언 useState, 
        const [lecture, setLecture] = useState({
            loading: true,
            ncs: {},
            ncsError: null
        })

    // 네트워킹 함수
        const getData = async () => {
            const [ncs, ncsError] = await lectureApi.ncsDetail(id);

            // console.log("ncs", ncs);
            setLecture({
                loading: false,
                ncs,
                ncsError
            });
            console.log("DetailTest", ncs.comments.text)

        }

    // useEffect
        useEffect(() => {
            getData()
        }, {})

        const openBrowser = async url => {
            await WebBroswer.openBrowserAsync(url);
        }


    return (
        
        <ScrollContainer
            loading={false}
            contentContainerStyle={{paddingBottom: 80}}
            style={styles.BG}
        >
            <>
                <View style={styles.Header}>
                    <Image style={[{backgroundColor: "white"}, styles.BG]}
                        source={require("../../assets/applogo.png")}
                    />
                    <View style={[{}, styles.Container]}>
                        <Poster url={require("../../assets/favicon.png")} />
                        <View style={styles.Info}>
                            
                        </View>
                    </View>
                </View>
                    <Title title={"카테고리"} />
                        
                    <Desc 
                        // desc={lecture.ncs.category}
                        desc={"의사소통, 자료해석"}
                    >
                        
                    </Desc>

                    <Title title={lecture.ncs.title} />
                        
                    <Desc desc={lecture.ncs.desc} />
                        
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Title title={"댓글"} />

                        <Comments styleOption={styles.comments} comments={10} />

                    </View>
                    
                    <View style={{flexDirection: 'row', marginLeft: 50}}>
                        <Title title={"좋아요"} />
                        
                        <Likes styleOption={styles.likes} likes={1}  />

                    </View>
                </View>
                <>
                    <Title title={"가서보기"} />
                        
                    <TouchableOpacity onPress={() => 
                        openBrowser(lecture.ncs.url)
                    }>
                        <Desc desc={"영상보기"} />
                    </TouchableOpacity>
                </>
                {lecture.ncs.comments && (
                    <View>
                        {lecture.ncs.comments.map(item => {
                            <Text>
                                {item.text}
                            </Text>
                        })}
                    </View>
                )}
            </> 
        </ScrollContainer>  

    );
};

export default DetailScreen;


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