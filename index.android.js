/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var tools = require('./util/tools.js')();

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

class chkGengi extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      dataSource: ds.cloneWithRows([
        'Type', 'Sub Type', 'Color', 'Registary Number',
         'Number', 'Factory Number', 'Registered At', 'Pollution',
          'Weight', 'Status', 'Next Check'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
      <Text style={{marginTop: 5, marginBottom: 25}}> Placeholders for car information: </Text> 
        <ListView style={{marginLeft: 50}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

var cars = carsApi('zp402');
console.log("The GET results: ", cars);

AppRegistry.registerComponent('chkGengi', () => chkGengi);