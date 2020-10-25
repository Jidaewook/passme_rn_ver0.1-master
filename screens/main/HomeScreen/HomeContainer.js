
import React, {useState, useEffect} from 'react';
import HomePresenter from "./HomePresenter";
import {View, Text} from 'react-native';
import {lectureApi, noticeApi, bbsApi} from '../../../api';


const HomeContainer = () => {

    const [lectures, setLectures] = useState({
        loading: true,
        ncs: [],
        psat: [],
        notice: [],
        bbs: [],
        ncsError: null,
        psatError: null,
        noticeError: null,
        bbsError: null
    });


    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
    //     const [notice, noticeError] = await noticeApi.notice();
    //     const [bbs, bbsError] = await bbsApi.bbs();

        setLectures({
            loading: false,
            ncs,
            ncsError,
            psat,
            psatError,
    //         notice,
    //         noticeError,
    //         bbs,
    //         bbsError
        });

        console.log(":::::::::::::::", psat);
    };

    useEffect(() => {
        getData();


    }, []);


    return (
        <HomePresenter {...lectures} />
        // <View>
        //     <Text>
        //         {lectures.ncs.length}

        //     </Text>
        // </View>
    );
};

export default HomeContainer;

