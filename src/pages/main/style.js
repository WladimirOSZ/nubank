import {StyleSheet} from 'react-native';
import styled from 'styled-components';

// export const Texto = styled.Text`
//     color: #000;
//     font-size: ${ prop => prop.tamanho + 'px'};
//     text-decoration: underline;
// `;

export const Container = styled.View`
    flex: 1;
    background-color: #8B10AE;
`;
export const Content = styled.View`
    flex:1;
    max-height:400px;
    justify-content:center;

`;
export const Card = styled.View`
    flex:1;
    background-color:#fff;
    border-radius: 4px;
    margin-horizontal: 20px;
    margin-vertical: 0px;
`;
export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;
export const CardContent = styled.View`
    flex: 1;
    padding-vertical:0px;
    padding-horizontal: 30px;
    justify-content: center;
`;
export const CardFooter = styled.View`
    padding: 30px;
    background-color: #EEE;
    border-radius: 4px;
`;

export const Title = styled.Text `
    font-size: 13px;
    color: #999;
`;
export const Description = styled.Text `
    font-size:32px;
    margin-top: 3px;
    color: #333;
`;
export const Anottation = styled.Text `
    font-size: 13px;
    color: #333;
`;



export const styles = StyleSheet.create({
    // container:{
    //     flex: 1,
    //     backgroundColor: '#8B10AE',
    // },
    // content:{
    //     flex:1,
    //     maxHeight:400,
    //     justifyContent:"center",
    //     //zIndex:5,
    // },
    // card:{
    //     flex:1,
    //     backgroundColor:'#fff',
    //     borderRadius: 4,
    //     marginHorizontal: 20,
    //     marginVertical: 0,

    // },
    // cardHeader:{
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     padding: 30,


    // },
    // cardContent:{
    //     flex: 1,
    //     paddingVertical:0,
    //     paddingHorizontal: 30,
    //     justifyContent: "center",

    // },
    // cardFooter:{
    //     padding: 30,
    //     backgroundColor: '#EEE',
    //     borderRadius: 4
    // },
    // title:{
    //     fontSize: 13,
    //     color: '#999',
    // },
    // description:{
    //     fontSize:32,
    //     marginTop: 3,
    //     color: '#333'
    // },
    // anottation:{
    //     fontSize: 13,
    //     color: '#333'
    // },
})