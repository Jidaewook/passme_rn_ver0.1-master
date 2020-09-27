import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button} from "react-native";
import * as WebBroswer from 'expo-web-browser';

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
            console.log("DetailTest", ncs.likes.length)

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
                <>
                    <Text style={styles.Title}>
                        카테고리
                    </Text>
                    <Text style={styles.Desc}>
                        의사소통, 자료해석
                    </Text>

                </>
                <>
                    <Text style={styles.Title}>
                        {lecture.ncs.title}
                    </Text>
                    <Text style={styles.Desc}>
                        {lecture.ncs.desc}

                    </Text>
                </>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.Title}>
                            댓글
                        </Text>

                        <Comments styleOption={styles.comments} comments={10} />

                    </View>
                    
                    <View style={{flexDirection: 'row', marginLeft: 50}}>
                        <Text style={styles.Title}>
                            좋아요
                        </Text>
                        
                        <Likes styleOption={styles.likes} likes={1}  />

                    </View>
                </View>
                <>
                    <Text style={styles.Title}>
                        가서보기
                    </Text>
                    <TouchableOpacity onPress={() => 
                        openBrowser(lecture.ncs.url)
                    }>
                        <Text>
                            영상보기
                        </Text>

                    </TouchableOpacity>
                </>


                {/* <Text style={{fontSize: 20, backgroundColor: 'white', color: 'black', fontWeight: 'bold'}} >
                    카테고리
                    <Text>
                        {lecture.ncs.category}    
                    </Text> 
                </Text>
           
                <Text 
                    style={{
                        backgroundColor: '#009387', 
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginTop: 30
                    }}>
                    {lecture.ncs.title}
                </Text>
                <Text style={styles.Desc}>
                    {lecture.ncs.desc}
                </Text>
                
                <View style={styles.TagContainer}>
                    <Text style={[styles.TitleSub, {flexDirection: "row"}]}>
                        관련과목(태그에 대한 이미지 넣을 공간)
                        
                    </Text>
                    <View style={styles.Image} >
                            태그에 따른 이미지와 텍스트가 연동되어야 함
                            <Image source={require("../../assets/favicon.png")} style={styles.image} resizeMode="center"></Image>

                    </View>
                </View>
                <View style={{width: "100%", height: 50, backgroundColor: "darkgray"}}>
                    <Text style={{marginTop: 0, fontSize: 15}}>
                        등록일-업데이트앳
                    </Text>
                </View>
                <Text style={{marginTop: 30, fontSize: 20, fontWeight: "bold"}}>
                    댓글
                </Text>
                <Text style={{margintop: 20, flexDirection: "column"}}>
                            댓글 수
                            코멘트 렝스
                </Text> */}
                
                
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
        fontSize: 20
    },
    comments: {
        fontSize: 20,
    

    }

})