import React from 'react';
import { View, Text } from 'react-native';
import {Container,Content, Card, CardHeader,CardContent, CardFooter,Title,Description,Anottation, styles} from './style';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Icon from '@expo/vector-icons/MaterialIcons';

export default function main(){
    return(
        <Container >
            <Header/>
            <Content>
                <Card>
                    {/* <Texto tamanho={30}>Teste</Texto> */}
                    <CardHeader>
                        <Icon name="attach-money" size={28} color='#666'/>
                        <Icon name="visibility-off" size={28} color='#666'/>
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>160.684,95</Description>
                    </CardContent>
                    <CardFooter>
                        <Anottation>
                            Transferencia de R$50,00 recebida de Lucas Moura hoje as 09:00h
                        </Anottation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs/>
        </Container>
    )

}