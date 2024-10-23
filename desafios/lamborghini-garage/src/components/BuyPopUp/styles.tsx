import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 15,
        backgroundColor: '#1c1c22',
        zIndex: 2,
    },
    buyContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fefefe',
        borderRadius: 8
    },
    title: {
        color: '#e6c12f',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        
        marginVertical: 15,
        alignSelf: 'center',
    },
    carDataContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        maxHeight: '50%',
        gap: 40,
        paddingLeft: 30, 
        paddingRight: 15, 
        paddingBottom: 20,
    },
    lamborghiniText: {
        color: '#01a6b3',
        fontSize: 26, 
        fontWeight: 'bold',
    },
    carName: {
        color: '#01a6b3',
        fontSize: 20, 
        fontWeight: 'bold',
    },
    carReleaseYear: {
        fontSize: 20, 
    },
    carPrice: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e6c12f',
    },
    buttons: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    confirmedPurchaseContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
        width: '100%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: '#4ec994'
    },
    confirmedPurchaseText: {
        marginVertical: 25,
        fontSize: 26, 
        color: "#fff",
    }
});