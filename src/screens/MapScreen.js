import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Map extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text> My map that leads to you.... There is nothing I can do.. MY MAP that leads to you... </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Map;
