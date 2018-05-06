import {
    StyleSheet,
} from 'react-native'

const newStyles = StyleSheet.create({
    viewHeader: {
        flex: 1,        
        backgroundColor: 'rgba(236,0,29,1)',
        flexDirection: 'row',
    },
    imageLeft: {
        // height: 30,
        // width:30,
        // resizeMode: 'contain',
        marginTop: 12,
        marginLeft: 10,      
    },
    textRight: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'normal',
        marginTop: 12,
        marginLeft: 20,
    },

    viewBody: {
        flex: 8,
    }
})
export default newStyles