import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import Title from '../../components/Title';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");



const Solving = ({loading, notice, incruit, qna}) => {
    // notice : 공지사항
    // incruit : 채용공고
    // qna : 이용자 qna


    return (
        <ScrollView>
            <ScrollView>
                <View>
                    <Title title={"문제해결능력 문제해결"} >
                        
                    </Title>
                    {/* 좋아요, 업데이트 일자, 즐겨찾기 */}
                    <View>

                    </View>
                </View>
                <View>
                    <Text>
                        문제능력 문제해결
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

export default Solving;

const styles = StyleSheet.create({
    Container : {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
        
    }
});
