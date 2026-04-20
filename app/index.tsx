
// import (link) from @react-navigation/native;
import useStore from "@/store/useStore";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";

// import { link } from "expo-router";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    const navigator = useRouter();

    //const {user, setUser} = useContext(MyContext);
    const user= useStore ((state:any) => state.user)
    const setUser = useStore((state:any) => state.setUser)
        const handlelogin = () => {
            
        if (user.name === 'game'){

            alert('Welcome, game!');
        }
        else {navigator.push('/profile');
        }
    };
   return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1, padding: 16 }}>
        <View>
        
         <View style={styles.inputContainer}>
            <Text style={styles.Label}>Name:</Text>
            <TextInput value = {user.name} 
            onChangeText = {(value) => setUser({...user, name: value})} style = {styles.input}/>
           </View>

            <View style={styles.inputContainer}>
            <Text style={styles.Label}>Email:</Text>
            <TextInput value = {user.email} onChangeText = {(value) => setUser({...user, email: value})} style = {styles.input}/>
           </View>
        
            <View style={styles.inputContainer}>
            <Text style={styles.Label}>Age:</Text>
            <TextInput value = {user.age.toLocaleString()} onChangeText = {(value) => setUser({...user, age: Number(value) || 0})} style = {styles.input}/>
           </View>

            <Button onPressIn={() => {navigator.push('/profile')}}> </Button>
            <Button onPressIn={handlelogin}> Go to Profile </Button>
        </View>
    </ScrollView>
   );
}

const styles = StyleSheet.create({

Label: {fontSize: 16, fontWeight: 'bold', marginBottom: 8},
input : {borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 16},
inputContainer: {marginBottom: 16},
});