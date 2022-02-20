import React from 'react';

import {Text,View,StatusBar,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';

//! importing sound library.
//! Always import like this.
var Sound = require('react-native-sound');

//! Another way of importing assets, via an array.
const soundList =[
  require('./Assets/one.wav'),
  require('./Assets/two.wav'),
  require('./Assets/three.wav'),
  require('./Assets/four.wav'),
  require('./Assets/five.wav'),
  require('./Assets/six.wav'),
  require('./Assets/seven.wav'),
  require('./Assets/eight.wav'),
  require('./Assets/nine.wav'),
  require('./Assets/ten.wav'),
]
//! require() will give us an error whenever there is an issue in importing the assets.

const App = () =>{

const PlaySound =(SoundToPlay) =>{
  var PlayIt = new Sound(SoundToPlay,Sound.MAIN_BUNDLE,(error)=>{

    if(error){
 console.log("Unable To Play The Sound.");
 return;
    }


  })

  setTimeout(() => {
    PlayIt.play();
  }, 100);
 

  PlayIt.release();
}

return(
  <ScrollView style={styles.Container}>
  <Image source={require('./bull.png')}  style={styles.logo}/>
  <View style={styles.gridContainer}>
    
    {/* Writting javascript below. */}
    {soundList.map((EachSound)=>(
      <TouchableOpacity key={EachSound}  style={styles.box} onPress={()=>{PlaySound(EachSound)}}>

        <Text style={styles.text}>{EachSound - 1} in Spanish</Text>
      </TouchableOpacity>
    ))}
  </View>
  </ScrollView>
)
}

export default App;

const styles=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:"grey"
  },
  logo:{
    alignSelf:'center',
    marginTop:20,
    width:220,
    height:120
  },
  box:{
 justifyContent:'center',
 alignItems:'center',
 borderColor:"black",
 borderWidth:3,
 marginTop:15,
 marginBottom:15,
 borderRadius:15,
 height:80,
 backgroundColor:'rgb(95, 161, 201)',
 shadowColor:'white'
  },
  text:{
color:'yellow',
fontWeight:'bold',
fontSize:20,
paddingHorizontal:8,
paddingVertical:5,
textShadowColor:'black',
textShadowRadius:15,
textShadowOffset:{width:-1, height:2},
  },
  gridContainer:{
flex:1,
margin:5,
flexDirection:"row",
flexWrap:"wrap",
justifyContent:'space-around',
alignItems:'flex-start',
  }
})