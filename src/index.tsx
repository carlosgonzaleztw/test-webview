import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <>
      <WebView
        style={styles.container}
        source={{ uri: 'https://registro-estancia-stg.vitamina.cl/' }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
