/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Fonts} from './src/utils/Fonts';





import React, {Fragment} from 'react';
import {
  SafeAreaView,
  fontFamily,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.Background_Style}>
      <View style={styles.Title}>

         <Text style={styles.Text_Style}>MTA</Text>

        <Text style={styles.Text_Style}>eTix</Text>

        
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  Background_Style:{
    backgroundColor:'#223266',
    flex:1,
  },
  Title:{
    flexDirection:'row',
  alignItems:'center',
  flex:1,
  justifyContent:'center',
  },
  Text_Style:{
    fontFamily: Fonts.Sarpanch,
    fontSize:70,
    textAlign: 'center',
    color:'#F7A804',
  

  }
 
});

export default App;
