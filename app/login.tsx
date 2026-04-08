import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';

export default function LoginScreen() {
  return (

    <View style={styles.container}>
        
      {/* Email Input with Placeholder */}
      <TextInput 
        style={styles.input}
        placeholder="Email" 
      />

      {/* Password Input with Placeholder */}
      <TextInput 
        style={styles.input}
        placeholder="Password" 
        secureTextEntry={true} />

      <TextInput
        style={styles.input}
        placeholder="Visible Password"
        keyboardType="visible-password"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderWidth: 5,
    borderColor: 'blue',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});