import React from 'react';
import styled from "styled-components";

const Container = styled.Text`
    color: black;
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 16px;

`;

const Likes = ({likes}) => 
    <Container>
        👨‍🦰 {likes}
    </Container>;

export default Likes;
