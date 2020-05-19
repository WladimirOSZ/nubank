import React from 'react';
import Styles from './styles';
import {View, Text, ScrollView} from 'react-native';
import { styles } from '../../pages/main/style';
import Icon from '@expo/vector-icons/MaterialIcons';
import {Container, TabItem,TabText} from './styles';


export default function Tabs(){
    return (
        <Container>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabsContainer}
            >
                <TabItem>
                    <Icon name="person-add" size={24} color='#FFF' />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color='#FFF' />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color='#FFF' />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color='#FFF' />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color='#FFF' />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
                
            </ScrollView>

        </Container>
    )
}