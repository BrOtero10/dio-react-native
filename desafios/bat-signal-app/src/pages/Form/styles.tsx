import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        position: 'relative',
    },
    formArea: {
        width: '80%',
        marginTop: 20,
        alignItems: 'center'
    },
    formTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    submitButton: {
        marginTop: 20,
        marginBottom: 50,
        backgroundColor: '#0F0F0F',
        borderColor: '#f59300dc',
        borderWidth: 1,
        color: 'white',
        padding: 18,
        width: '80%',
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 15,
    }
});