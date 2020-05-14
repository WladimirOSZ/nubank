import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8B10AE',
    },
    content:{
        flex:1,
        maxHeight:400,
        justifyContent:"center",
        //zIndex:5,
    },
    card:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius: 4,
        marginHorizontal: 20,
        marginVertical: 0,

    },
    cardHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,


    },
    cardContent:{
        flex: 1,
        paddingVertical:0,
        paddingHorizontal: 30,
        justifyContent: "center",

    },
    cardFooter:{
        padding: 30,
        backgroundColor: '#EEE',
        borderRadius: 4
    },
    title:{
        fontSize: 13,
        color: '#999',
    },
    description:{
        fontSize:32,
        marginTop: 3,
        color: '#333'
    },
    anottation:{
        fontSize: 13,
        color: '#333'
    },
})