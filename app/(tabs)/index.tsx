import { Button } from '@react-navigation/elements';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  Box: {
    padding: 16,
    backgroundColor: 'blue',
    marginVertical: 8,
  },
  Text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 8,
    borderRadius: 5,
  },
});

export default function HomeScreen() {
  const [greeting, setGreeting] = useState("Welcome");
  const [inputValue, setInputValue] = useState("");

  const updateGreeting = () => {
    if (greeting === 'Welcome') {
      setGreeting('Goodbye');
    } else {
      setGreeting('Welcome');
    }
  };

  return (
    <SafeAreaView style={ style.container }>
      <ScrollView>
        <Image
          source={{ uri: 'https://cdn3.toonboom.com/wp-content/uploads/2025/05/13095403/Asset.png' }}
          style={{ width: 400, height: 500 }}
        />

        <View style={style.Box}>
          <Text style={style.Text}>{greeting} Techcrush 1</Text>
        </View>

        <Button onPress={updateGreeting}>Click me</Button>

        <View style={style.Box}>
          <Text style={style.Text}>{}</Text>
        </View>

        <View>
          <Text>Email</Text>
        <TextInput 
            onChangeText={(val)=> {
              setInputValue(val);
            }}
            keyboardType="numeric"
            autoCapitalize="characters"
            placeholder=""
            style={style.TextInput}
          />

          <Text>Password</Text>
          <TextInput 
            
            onChangeText={(val)=> {
              setInputValue(val);
            }}
            autoCapitalize="characters"
            placeholder=""
            style={style.TextInput}
/>

          <Text>Name</Text>
          <TextInput 
            onChangeText={(val)=> {
              setInputValue(val);
            }}
            autoCapitalize="characters"
            placeholder=""
            style={style.TextInput}
/>
        </View>

        <View style={style.Box}>
          <Text style={style.Text} >{} </Text>
          <Button
            onPress={() => {
              // Handle submit logic here 
              <Text>Name, Email, Password</Text>
            }}
          >
            Submit
          </Button>

        </View>

        <View style={style.Box}>
          <Text style={style.Text}>{} </Text>
        </View>

      </ScrollView>
    </SafeAreaView>

);

}

