import { StyleSheet } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://registro-estancia-stg.vitamina.cl/' }} />
      <StatusBar style={'auto'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
