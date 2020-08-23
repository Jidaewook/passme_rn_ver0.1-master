// import React from 'react'
// import styled from "styled-components/native";
// import PropTypes from "prop-types";
// import Poster from "./Poster";
// import {TouchableOpacity, StyleSheet} from "react-native";
// import {useNavigation} from "@react-navigation/native";
// import {apiImage} from "../../api";
// import {trimText, formDate} from "../../Utils";


// const Container = styled.View`
//     width: 100%;
//     height: 100%;
// `;

// const BG = styled.Image`
//     width: 100%;
//     height: 100%;
//     opacity: 0.4;
//     position: absolute;
// `;

// const Content = styled.View`
//     height: 100%;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-around;
// `;

// const Data = styled.View`
//     width: 50%;
//     align-items: flex-start;
// `;

// const Title = styled.Text`
//     color: white;
//     font-weight: bold;
//     font-size: 20px;
//     margin-bottom: 10px;
// `;

// const Desc = styled.Text`
//     color: rgb(220, 220, 220);
//     font-size: 14px;
//     font-weight: 500;
// `;

// const Button = styled.View`
//     margin-top: 10px;
//     background-color: #e74c3c;
//     padding: 7px 10px;
//     border-radius: 3px;
// `;

// const ButtonText = styled.Text`
//     color: white;
// `;

// const TagItem = styled.Text`
//     color: white;
// `;

// const UploadDate = styled.Text`
//     color: white;
//     font-size: 12px;
//     margin-bottom: 5px;
// `;


// const Slide = ({id, title, desc, url, thumbnail, uploadDate, tag}) => {

//     const navigation = useNavigation();
//     const goToDetail = () => 
//         navigation.navigate("Detail", {
//             id,
//             title,
//             thumbnail, 
//             desc,
//             url,
//             uploadDate,
//             tag
//         });
    
//     return (
//         <Container> 
//             <BG source={{ url: apiImage(thumbnail) }} />
//             <Content>
//                 <Poster url={apiImage(thumbnail)}/>
//                 <Data>
//                     <Title>{trimText(title, 10)}</Title>
//                     {/* {tag.map((item, index) => {
//                         <TagItem key={index}>
//                             {item}
//                         </TagItem>
//                     })} */}
//                     {uploadDate ? <UploadDate>등록일: {formDate(uploadDate)}</UploadDate> : null}
//                     <Desc>{desc.slice(0, 120)}</Desc>
//                     <TouchableOpacity onPress={goToDetail}>
//                         <Button>
//                             <ButtonText>View Details</ButtonText>
//                         </Button>
//                     </TouchableOpacity>
//                 </Data>
//             </Content>
//         </Container>
//     )

    
// };

// Slide.propTypes = {
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired,
//     tag: PropTypes.array,
//     thumbnail: PropTypes.string.isRequired,
//     uploadDate: PropTypes.string.isRequired
// };

// export default Slide;


import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import { apiImage } from '../../api';

const Slide = ({id, title, desc, tag, thumbnail, uploadDate}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={{url: apiImage(thumbnail)}} />
            <View style={styles.content}>
                <View style={styles.data}>
                    <Text style={styles.title}>

                    </Text>
                </View>
            </View>
        </View>
    );
};


Slide.propTypes = {
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tag: PropTypes.array,
    thumbnail: PropTypes.string.isRequired,
    uploadDate: PropTypes.string.isRequired
}


export default Slide;



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    bg: {
        width: '100%',
        height: '100%',
        opacity: 0.4,
        position: "absolute"
    },
    content: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    data: {
        width: '50%',
        alignItems: 'flex-start'
    },
    title: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: '10px'

    }



});