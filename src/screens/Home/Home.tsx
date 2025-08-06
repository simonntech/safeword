import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyles'
import { Menu } from "../../components/Menu/Menu";

export default function Home() {
    return (
        <View style={styles.container}>
            <Menu />
            <Text>Home page</Text>
            <StatusBar style='auto' />
        </View>
    )
}
