import React from 'react';
import Styles from './styles';
import {View, Text, ScrollView} from 'react-native';
import { styles } from '../../pages/main/style';
import Icon from '@expo/vector-icons/MaterialIcons';
export default function Tabs(){
    return (
        <View style={Styles.container}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabsContainer}
            >
                <View style={Styles.tabItem}>
                    <Icon name="person-add" size={24} color='#FFF' />
                    <Text style={Styles.tabText}>Indicar amigos</Text>
                </View>
                <View style={Styles.tabItem}>
                    <Icon name="chat-bubble-outline" size={24} color='#FFF' />
                    <Text style={Styles.tabText}>Cobrar</Text>
                </View>
                <View style={Styles.tabItem}>
                    <Icon name="arrow-downward" size={24} color='#FFF' />
                    <Text style={Styles.tabText}>Depositar</Text>
                </View>
                <View style={Styles.tabItem}>
                    <Icon name="arrow-upward" size={24} color='#FFF' />
                    <Text style={Styles.tabText}>Transferir</Text>
                </View>
                <View style={Styles.tabItem}>
                    <Icon name="lock" size={24} color='#FFF' />
                    <Text style={Styles.tabText}>Bloquear cartão</Text>
                </View>
                
            </ScrollView>

        </View>
    )
}