import React, {Component, PropTypes} from 'react';
import {
    Navigator,
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import NavigationBar from 'react-native-navbar';

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
        <NavigationBar
          title={{'title': "Nav Bar"}}
          rightButton={{title: 'you click me!', handler: ()=>alert('hello!')}} />
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>
            Tap me to load the next scene
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>
            Tap me to go back
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
