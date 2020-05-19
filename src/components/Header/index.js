import React from 'react';
import styles from './styles';
import {View, Text, Image} from 'react-native';
import Logo from '../../../assets/Nubank_Logo.png';
import Icon from '@expo/vector-icons/MaterialIcons';
import {Container,Top,Title} from './styles';

export default function Header(){
    return (
        <Container>
            <Top>
                <Image source={Logo}></Image>
                <Title>Brabo</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color='#FFF'/>
        </Container>
    )

}