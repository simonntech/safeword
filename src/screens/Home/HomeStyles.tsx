import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#97a1c0ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection:"column",
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        padding: 20,
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'column'
    }
});

export default styles;