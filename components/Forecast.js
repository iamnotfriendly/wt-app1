import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textMain}>{this.props.main}</Text>
        <Text style={styles.textDescription}>{this.props.description}</Text>
        <View style={styles.flexTemp}> 
          {/*<Text style={styles.textTemp}>{this.props.temp}</Text>*/}
          <Text style={styles.TextSymboltemp}> °C</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textMain: {
    fontSize: 40,
    marginTop: 10,
    flex: 1,
    color: "white",
    paddingRight: 20,
    textAlign: "right"
  },
  textDescription: {
    fontSize: 20,
    flex: 1,
    color: "white",
    paddingRight: 20,
    textAlign: "right"
  },
  textTemp: {
    fontSize: 30,
    color: "white",
    textAlign: "right",
    paddingRight: 20,
  },
  flexTemp: {
    flex: 1,
    flexDirection: "row",
    paddingRight: 20,
    justifyContent: "flex-end"
  },
  TextSymboltemp: {
    fontSize: 20,
    color: "white",
    textAlign: "right",
    marginTop: 5
  }
});