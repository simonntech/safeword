import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyles'
import { Logo } from "../../components/Logo/Logo";

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Logo />
            </View>
            <Text>Home page</Text>
            <StatusBar style='auto' />
        </View>
    )
}
