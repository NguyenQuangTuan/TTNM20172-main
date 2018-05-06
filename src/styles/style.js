import {
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        // resizeMode: 'stretch',
    },
    waperTree: {
        flex: 7,
    },
    waperButton: {
        flex: 1,
    },
    buttonXemCay: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 80,
        padding: 10,
        marginBottom: 20,
        marginLeft: 250,
        backgroundColor: 'rgba(226,39,44,1)'
    },
    buttonLayNuoc: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 80,
        padding: 10,
        marginBottom: 20,
        marginLeft: 250,
        backgroundColor: 'rgba(43,234,14,1)' 
    },
    textButtonXemCay: {
        color: 'white',
        fontSize: 13,
    },
    containerListTB: {
        flexDirection: 'row',
        margin: 5
    },
    imageTB: {
        height: 100,
        width: 70,
        resizeMode: 'contain',
        margin: 5
    },
    waperContainerTB: {
        flex: 1
    },
    tittle: {
        fontSize: 16
    },
    content: {
        fontSize: 12
    },

    toolbar: {
        height:50,
        backgroundColor: 'rgba(226,39,44,1)',
        
        // alignItems: 'center',
        flexDirection: 'row'
    },
    picker: {
        width: 70
    },
    viewToolBar: {
        height: 50,
        backgroundColor: 'blue'
    },




    viewHeader: {
        height: 70,
        
        backgroundColor: 'rgba(236,0,29,1)',
        flexDirection: 'row',
    },
    viewHeaderLeft: {
        height: 100,
        width:70,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    viewHeaderRight: {
        flex : 1,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageLeft: {
        // height: 30,
        // width:30,
        resizeMode: 'contain',
        margin: 5      
    },
    textRight: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'normal',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles