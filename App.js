import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
const App = () => {

  
  return ( 
    <View style={{flex: 1, backgroundColor: '#004170'}} >
     <StatusBar backgroundColor={'#004170'} barStyle="light-content"/>
     <View style={{justifyContent: "center", alignItems: "center"}}>
     
     <Image 
        source={require('./src/image/image1.png')}
        style={{width: 300, height: 300, marginTop: 70}}
      />

     <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 30}}>Help to Read Your Text
     </Text>

     <Text style={{fontSize: 12, marginTop: 15}}>An android-based text reader application from pdf and jpg files
     </Text>
     
     <Button title='SignUp' color="red" onPress={()=>alert("Let's Make an Account")} style={{marginTop: 40, padding: 50}}>Sign Up
     </Button>
 
    <TouchableOpacity 
    style={{
      backgroundColor: '#004170', 
      paddingVertical: 14,
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 15,
      elevation: 2,
    }}>
      <Text 
      style={{
        color: 'FFFFFF', 
        textAlign: 'center'
        }}>
          Sign Up
        </Text>
    </TouchableOpacity>

     </View>
    </View>
  );
};

export default App;