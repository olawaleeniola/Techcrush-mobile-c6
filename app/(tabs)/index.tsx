import { Button } from '@react-navigation/elements';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
  const [greeting, setGreeting] = useState('Welcome')

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
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
});

const style = StyleSheet.create(

  {
    container:{
      backgroundColor:'white',
      height:'100%',
      padding:20,
    },
    Box:{
      borderRadius:10,
      backgroundColor:'blue',
      padding:20,
      margin:20,
      alignItems:'center',
    },
    Text:{
      color:'white',
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
    }
  
    
  }
)