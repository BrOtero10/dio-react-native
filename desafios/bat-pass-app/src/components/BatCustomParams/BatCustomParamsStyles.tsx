import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#111111',
        borderColor: '#e18e3a',
        borderWidth: 2,
        borderRadius: 10,
    },
    floatingInput: {
        borderColor: '#e5bf3c',
        borderWidth: 2,
        backgroundColor: '#fff',
        borderRadius: 5,
        textAlign: 'center',
    },
    floatingTextInput: {
        padding: 10,
    },
    floatingNumericInput: {

    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        paddingHorizontal: 25,
    },
    button: {
        padding: 5,
        flex: 1,
        borderRadius: 5,
    },
    confirmButton: {
        backgroundColor: '#004400',
    },
    cancelButton: {
        backgroundColor: '#520303',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }
});