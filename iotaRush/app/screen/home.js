import React, {Component, PropTypes} from 'react';
import {
    Navigator,
    Text,
    View,
    StyleSheet
} from 'react-native';

export class Home extends Component {
  constructor(){
    super();
    propTypes = { 
        title: PropTypes.string.isRequired, 
        onForward: PropTypes.func.isRequired, 
        onBack: PropTypes.func.isRequired, 
    }}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});