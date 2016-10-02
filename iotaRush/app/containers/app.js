'use strict';

import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import NavigationBar from 'react-native-navbar';

import {Menu} from'../components/sidemenu';
import {Home} from '../screen/home';

export class App extends React.Component {
  render() {
    const menu = <Menu/>;

    return (
      <SideMenu menu={menu}>
        <Navigator
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <Home title={route.title}
            // Function to call when a new scene should be displayed
              onForward={ () => {
                  const nextIndex = route.index + 1;
                  navigator.push({
                    title: 'Scene ' + nextIndex,
                    index: nextIndex,
                  });
                }
              }
              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }
            }
            />
          }
        />
      </SideMenu>
    );
  }
}
