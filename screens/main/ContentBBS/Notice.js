import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import Title from '../../components/Title';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");



const Notice = ({loading, notice, incruit, qna}) => {
    


    return (
        <ScrollView>
            <ScrollView>
                <View>
                    <Title title={"공지사항"} >
                        
                    </Title>
                    {/* 좋아요, 업데이트 일자, 즐겨찾기 */}
                    <View>

                    </View>
                </View>
                <View>
                    <Text>
                        공지사항
                    </Text>
                </View>
                <View>
                    <Image>

                    </Image>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default Notice;


const styles = StyleSheet.create({
    Container : {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
        
    }
})