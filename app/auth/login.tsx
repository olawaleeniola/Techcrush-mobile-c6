import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>

        {/* Back arrow and title */}
        <TouchableOpacity onPress={() => router.back()}>
    <Ionicons
        name="chevron-back"
        size={24}
        color="#3b5bdb"
    />
    </TouchableOpacity>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.welcome}>Welcome</Text>

      {/* Email input */}
      <Text style={styles.label}>Email or Mobile Number</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="@olawale.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="*************"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => 
                setShowPassword(!showPassword)}>
            <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color="#aaa"
        />
    </TouchableOpacity>
      </View>

      {/* Forget password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forget Password</Text>
      </TouchableOpacity>

      {/* Login button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      {/* Fingerprint */}
      <TouchableOpacity style={styles.fingerprint}>
  <Ionicons
    name="finger-print"
    size={48}
    color="#3b5bdb"
  />
</TouchableOpacity>

      {/* Sign up link */}
      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/auth/signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b5bdb',
    textAlign: 'center',
    marginBottom: 8,
  },

  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3b5bdb',
    marginBottom: 24,
  },
  
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef0ff',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: '#333',
  },
 
  forgotText: {
    color: '#3b5bdb',
    textAlign: 'right',
    marginBottom: 24,
    fontSize: 13,
  },
  
  button: {
    backgroundColor: '#3b5bdb',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  orText: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 16,
  },
  fingerprint: {
    alignItems: 'center',
    marginBottom: 32,
  },
 
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#aaa',
    fontSize: 14,
  },
  signupLink: {
    color: '#3b5bdb',
    fontWeight: '700',
    fontSize: 14,
  },
});