import React, {useState, useEffect, useRef} from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    Platform,
    StyleSheet,
    Animated,
    StatusBar

} from 'react-native';

import {useNavigation} from "@react-navigation/native";

import Backdrop from '../../components/Recommend/Backdrop';
import Loading from '../../components/Recommend/Loading';
import Genres from '../../components/Recommend/Genres';
import Rating from '../../components/Recommend/Rating';
import ViewDetail from "../../components/Button/ViewDetail";


import {getMovies} from '../../../api/MovieApi';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS = 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING = 10;


const RecommendPresenter = ({id, title, desc, tag, thumbnail, uploadDate}) => {
    
  // 이 상태에서는 뷰디테일 온프레스로 넘어가지 못함
    const navigation = useNavigation();
    const goToDetail = () => 
        navigation.navigate("DetailScreen", {name: title});

    const [movies, setMovies] = useState([]);
    const scrollX = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            setMovies([{key: 'empty-left'}, ...movies, {key: 'empty-right'}])
        };

        if(movies.length === 0){
            fetchData(movies);
        }
    }, [movies])

        if(movies.length === 0){
            return <Loading />
        }

    return (
        <View style={styles.container}>
            <Backdrop movies={movies} scrollX={scrollX}  />
      <Animated.FlatList 
        showsHorizontalScrollIndicator={false}
        data={movies}
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
          if(!item.poster){
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
                  source={{uri: item.poster}}
                  style={styles.posterImage}
                />
                <Text style={{fontSize: 24}} numberOfLines={1}>
                  {item.title}
                </Text>
                <Rating rating={item.rating} />
                <Genres genres={item.genres} />
                <Text style={{fontSize: 12}} numberOfLines={3}>
                  {item.description}
                </Text>
                <ViewDetail onPress={goToDetail} />
              </Animated.View>
            </View>
          )
            }}
        />
    </View>
    );
};

export default RecommendPresenter;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    posterImage: {
      width: '100%',
      height: ITEM_SIZE * 1.0,
      resizeMode: 'cover',
      borderRadius: 24,
      margin: 0,
      marginBottom: 10,
    }
  });