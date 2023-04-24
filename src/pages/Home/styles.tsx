import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        paddingVertical: 30,
        gap: 30
    },
    introduction: {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        // gap: 15
    },
    textCareer: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 36,
    },
    textMessage: {
        width: '65%',
        fontSize: 12,
        fontWeight: '600',
        maxWidth: 250,
        textAlign: 'center',
        color: '#504E54',
        lineHeight: 18
    },
    containerImages: {
        maxHeight: 50,
        maxWidth: '90%',
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    icones: {
        width: 30
    },
    boxIcones: {
        width: 59,
        height: 57,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9
    }
  });

export default styles;