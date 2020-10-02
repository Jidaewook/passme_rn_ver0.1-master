import React, {useState, useEffect} from 'react';
import {View, Animated, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

import * as Icon from '@expo/vector-icons';
import { ThemeProvider } from '@react-navigation/native';

import {Block, Input, Text} from '../../components';
import {theme} from '../../constants';

// Api 불러와야 함

const {width, height} = Dimensions.get("window");


const SearchScreen = ({navigation}) => {

    const [search, setSearch] = useState({
        searchFocus: new Animated.Value(0.6),
        searchString: null
    })  
    
    const handleSearchFocus = (status) => {
        Animated.timing(search.searchFocus, {
            toValue: status ? 0.8 : 0.6, 
            duration: 150
        }).start();
    }

    const renderSearch = () => {
        const {searchFocus, searchString} = search;
        const isEditing = searchFocus && searchString;
    

        return (
        <Block animated middle flex={searchFocus} style={styles.search} >
            <Input 
                placeholder="Search"
                placeholderTextColor={theme.colors.gray2}
                style={styles.searchInput}
                onFocus={() => handleSearchFocus(true)}
                onBlur={() => handleSearchFocus(false)}
                OnChangeText={text => setSearch({searchString: text})}
                value={searchString}
            />
        </Block>
        )
    }
    const displayPopular = async () => {
        // const [popular, popularError] = await movieApi.popular();
        // setMovie({
        //   popularImage: popular,
        //   popularError: popularError, 
        //   loading: false
        // })
        
      };

      useEffect(() => {
        displayPopular()
      }, []) 
    
    
      const renderImage = (img, index) => {
        const sizes =  Image.resolveAssetSource(img);
        const fullWidth = width - theme.sizes.padding * 2.5;
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1; 
    
        return (
          <TouchableOpacity>
            <Image source={img} style={[styles.image, {minWidth: imgWidth, maxWidth: imgWidth}]} />
    
          </TouchableOpacity>
        )
      }


  const renderExplore = () => {

    // Api를 데려와야 한다.

    return (
      <Block style={{marginBottom: height / 3}}>

        <TouchableOpacity style={[styles.image, styles.mainImage]}>
    
        </TouchableOpacity>
        <Block row space="between" wrap >
        
        </Block>
      </Block>
    )
  }

  return (
   
      <Block style={{marginTop: 100}}>
        <Block flex={false} row center space="between" style={styles.header} >
          <Text h1 bold>
            Search
          </Text>
          {renderSearch()}
        </Block>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
          {renderExplore()}
        </ScrollView>
      </Block>
      

    
  );


};

export default SearchScreen;

const styles = StyleSheet.create({
    header: {
      paddingHorizontal: theme.sizes.base * 2,
      paddingBottom: theme.sizes.base * 2
    },
    search: {
      height: theme.sizes.base * 2,
      width: width - theme.sizes.base * 2
    },
    searchInput: {
      fontSize: theme.sizes.caption,
      height: theme.sizes.base * 2,
      backgroundColor: "rgba(142, 142, 147, 0.06)",
      borderColor: "rgba(142, 142, 147, 0.06)",
      paddingLeft: theme.sizes.base / 1.333,
      paddingRight: theme.sizes.base * 1.5
    },
    searchRight: {
      top: 0,
      marginVertical: 0,
      backgroundColor: "transparent"
    },
    searchIcon: {
      position: "absolute",
      right: theme.sizes.base / 1.333,
      top: theme.sizes.base / 1.6
    },
    explore: {
      marginHorizontal: theme.sizes.padding * 1.25
    },
    image: {
      minHeight: 100,
      maxHeight: 130,
      maxWidth: width - theme.sizes.padding * 2.5,
      marginBottom: theme.sizes.base,
      borderRadius: 4
    },
    mainImage: {
      minWidth: width - theme.sizes.padding * 2.5,
      minHeight: width - theme.sizes.padding * 2.5
    },
    footer: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      overflow: "visible",
      alignItems: "center",
      justifyContent: "center",
      height: height * 0.1,
      width,
      paddingBottom: theme.sizes.base * 4
    }
  });