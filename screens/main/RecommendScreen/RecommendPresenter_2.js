// import React, {useState, useEffect, useRef} from 'react';
// import {
//     Text,
//     View,
//     Image,
//     Dimensions,
//     FlatList,
//     Platform,
//     StyleSheet,
//     Animated,
//     StatusBar

// } from 'react-native';

// import {useNavigation} from "@react-navigation/native";

// import Backdrop from '../../components/Recommend/Backdrop';
// import Loading from '../../components/Recommend/Loading';
// import Genres from '../../components/Recommend/Genres';
// import Rating from '../../components/Recommend/Rating';
// import ViewDetail from "../../components/Button/ViewDetail";


// import {lectureApi} from '../../../api';

// const {width, height} = Dimensions.get('window');
// const ITEM_SIZE = Platform.OS = 'ios' ? width * 0.72 : width * 0.74;
// const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
// const SPACING = 10;


// const RecommendPresenter_2 = ({id, title, desc, tag, thumbnail, uploadDate}) => {
    
//   // 이 상태에서는 뷰디테일 온프레스로 넘어가지 못함
//     const navigation = useNavigation();
//     const goToDetail = () => 
//         navigation.navigate("DetailScreen", {name: title});

//     // const [ncs, setNCS] = useState([]);
//     // const [psat, setPSAT] = useState([]);

//     const [lecture, setLecture] = useState({
//       loading: true,
//       ncs: [],
//       ncsError: null
//     })

//     const getData = async () => {
//       const [ncs, ncsError] = await lectureApi.ncs();

//       // setLecture({
//       //   loading: false,
//       //   ncs, 
//       //   ncsError
//       // });

//       console.log("+++++++++++++++++++++++", ncs);
//     }

//     const scrollX = useRef(new Animated.Value(0)).current;
    
//     useEffect(() => {
//       getData();
//     }, [])

//     if(ncs.length === 0){
//         return <Loading />
//     }

//     return (
//       <View>
//         <Text>
//           null
//         </Text>
//       </View>
//     //     <View style={styles.container}>
//     //         <Backdrop ncs={ncs} scrollX={scrollX}  />
//     //   <Animated.FlatList 
//     //     showsHorizontalScrollIndicator={false}
//     //     data={ncs}
//     //     keyExtractor={(item) => item.key}
//     //     horizontal
//     //     bounces={false}
//     //     decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
//     //     renderToHardwareTextureAndroid
//     //     contentContainerStyle={{alignItems: 'center'}}
//     //     snapToInterval={ITEM_SIZE}
//     //     snapToAlignment='start'
//     //     onScroll={Animated.event(
//     //       [{nativeEvent: {contentOffset: {x: scrollX}}}],
//     //       {useNativeDriver: false}
//     //     )}
//     //     scrollEventThrottle={16}

//     //     renderItem={({item, index}) => {
//     //       if(!item.){
//     //         return <View style={{width: EMPTY_ITEM_SIZE}} />;
//     //       }

//     //       const inputRange = [
//     //         (index - 2) * ITEM_SIZE,
//     //         (index - 1) * ITEM_SIZE,
//     //         index * ITEM_SIZE,
//     //       ];

//     //       const translateY = scrollX.interpolate({
//     //         inputRange,
//     //         outputRange: [100, 50, 100],
//     //         extrapolate: 'clamp'
//     //       });

//     //       return (
//     //         <View style={{width: ITEM_SIZE}}>
//     //           <Animated.View
//     //             style={{
//     //               marginHorizontal: SPACING,
//     //               padding: SPACING * 2,
//     //               alignItems: 'center',
//     //               transform: [{translateY}],
//     //               backgroundColor: 'white',
//     //               borderRadius: 34,

//     //             }}
//     //           >
//     //             <Image  
//     //               // source={{uri: item.thumbnail}}
//     //               style={styles.posterImage}
//     //             />
//     //             <Text style={{fontSize: 24}} numberOfLines={1}>
//     //               {item.title}
//     //             </Text>
//     //             <Rating rating={item.rating} />
//     //             <Genres genres={item.genres} />
//     //             <Text style={{fontSize: 12}} numberOfLines={3}>
//     //               {item.desc}
//     //             </Text>
//     //             <ViewDetail onPress={goToDetail} />
//     //           </Animated.View>
//     //         </View>
//     //       )
//     //         }}
//     //     />
//     // </View>
//     );
// };

// export default RecommendPresenter_2;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1
//     },
  
//     posterImage: {
//       width: '100%',
//       height: ITEM_SIZE * 1.2,
//       resizeMode: 'cover',
//       borderRadius: 24,
//       margin: 0,
//       marginBottom: 10,
//     }
//   });


import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Platform, Animated} from 'react-native';
import {lectureApi} from '../../../api';


import {useNavigation} from "@react-navigation/native";

import Backdrop from '../../components/Recommend/Backdrop';
import ViewDetail from "../../components/Button/ViewDetail";
import Genres from '../../components/Recommend/Genres';
import Rating from '../../components/Recommend/Rating';
import ViewDetail from "../../components/Button/ViewDetail";



const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS = 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING = 10;

const RecommendPresenter_2 = ({id, title, desc, tag, thumbnail, uploadDate}) => {
  const navigation = useNavigation();
  const goToDetail = () => 
      navigation.navigate("DetailScreen", {name: title});



    const [lecture, setLecture] = useState({
      loading: true,
      ncs: [],
      ncsError: null
    })

    const getData = async () => {
      const [ncs, ncsError] = await lectureApi.ncs();

      setLecture({
        loading: false,
        ncs, 
        ncsError
      });

      console.log("+++++++++++++++++++++++", ncs);
    }

    const scrollX = useRef(new Animated.Value(0)).current;


    useEffect(() => {
      getData()
    }, []); 

    

  return (
    <View style={styles.container}>
      <Backdrop  ncs={lecture.ncs} scrollX={scrollX} />
      <Animated.FlatList 
        showsHorizontalScrollIndicator={false}
        data={lecture.ncs}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        scrollEventThrottle={16}

        renderItem={({item, index}) => {
          if(!item.thumbnail){
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp'
          });

          return (
            <View style={{width: ITEM_SIZE}}>
             <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  transform: [{translateY}],
                  backgroundColor: 'white',
                  borderRadius: 34,

                }}
              >
                 <Image  
                   source={require('../../../assets/blankpng.png')}
                   style={styles.posterImage}
                 /> 
                 <Text style={{fontSize: 24}} numberOfLines={1}>
                   {item.title}
                 </Text>
                 {/* <Rating rating={item.rating} />
                 <Genres genres={item.genres} />
                 <Text style={{fontSize: 12}} numberOfLines={3}>
                   {item.desc}
                 </Text> */}
                 <ViewDetail onPress={goToDetail} />
                </Animated.View>
               </View>
              )
            }}
        />


    </View>
  );
};

export default RecommendPresenter_2;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  }
});