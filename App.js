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
      <Text style={styles.Text_Style}>Bryan</Text>

      <Text>eTix</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Background_Style:{
    backgroundColor:'#223266',
    flex:1,
  },
  Text_Style:{
    fontFamily: Fonts.Sarpanch,
    textAlign: 'center',
    color:'#f7a804',
    fontSize:100,

  }
 
});

export default App;
