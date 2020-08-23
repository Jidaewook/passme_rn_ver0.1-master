import axios from "axios";

const makeRequest = (path) => 
    axios.get(`https://pure-retreat-35508.herokuapp.com${path}`);

const getAnything = async (path, params = {}) => {
    try{
        const {
            data: { results },
            data
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch (e) {
        console.log(e);
        return [null, e];
    }
};

export const lectureApi = {
    ncs: () => getAnything("/lecture/ncs"),
    psat: () => getAnything("/lecture/psat"),
    ncsDetail: id => getAnything(`/lecture/ncs/${id}`),
    psatDetail: id => getAnything(`/lecture/psat/${id}`)
};

export const noticeApi = {
    notice: () => getAnything("/notice"),
    noticeDetail: id => getAnything(`/notice/${id}`)
};

export const bbsApi = {
    bbs: () => getAnything("/bbs"),
    bbsDetail: id => getAnything(`/bbs/${id}`)
};

export const pageApi = {
    page: () => getAnything("/profile"),
    pageDetail: id => getAnything(`/profile/${id}`)
};

export const apiImage = path => `https://pure-retreat-35508.herokuapp.com/${path}`;
