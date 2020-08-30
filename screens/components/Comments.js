import React from 'react';
import styled from "styled-components";

const Container = styled.Text`
    color: rgb(220, 220, 220);
    margin-bottom: 7px;
    margin-left: 15px;
    font-weight: 500;
    font-size: 12px;
`;

const Comments = ({comments}) => 
    <Container>
        ✍ {comments}
    </Container>

export default Comments;