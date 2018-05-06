import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  waperLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 230,
    resizeMode: 'contain',    
  },
  waperTextInput: {
    flex: 1,      
    width: 330,
    alignItems: 'center',
    justifyContent: 'center'  
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    width: 330,
    borderColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 10,
    fontSize: 13,
    color: 'white'
  },
  textREGISTER: {
    fontStyle: 'italic',
    fontSize: 13,
    alignSelf: 'flex-end',
    margin: 5, 
    backgroundColor: 'transparent'
  },
  waperButton: {
    alignItems:'center',
    justifyContent:'center',
    height: 50,
    width: 330,
    padding:10,
    backgroundColor: 'rgba(226,39,44,0.5)'
  },
  textDangNhapButton: {
    color: 'white',
    fontSize: 13,
  },


  header: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  center_LR: {
    flex: 1
  },
  center_Center: {
    flex: 8
  },
  center_Center_UnPw: {
    flex: 1
  },
  footer: {
    flex: 2,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles