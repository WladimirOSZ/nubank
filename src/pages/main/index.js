import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Icon from '@expo/vector-icons/MaterialIcons';

export default function main(){
    return(
        <View style= {styles.container} >
            <Header/>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Icon name="attach-money" size={28} color='#666'/>
                        <Icon name="visibility-off" size={28} color='#666'/>
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Saldo disponível</Text>
                        <Text style={styles.description}>160.684,95</Text>
                    </View>
                    <View style={styles.cardFooter}>
                        <Text style={styles.anottation}>
                            Transferencia de R$50,00 recebida de Lucas Moura hoje as 09:00h
                        </Text>
                    </View>
                </View>
            </View>
            <Tabs/>
        </View>
    )

}