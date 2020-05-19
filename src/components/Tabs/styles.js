import {StyleSheet} from 'react-native';
import styled from 'styled-components';//Import do "css"

export const Container = styled.View`
    height:100px;
    marginTop:20px;
`;
export const TabItem = styled.View`
    width: 100px;
    height:100px;
    background-color:'rgba(255,255,255,0.2)';
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`;
export const TabText = styled.Text`
    color: #FFF;
`;
