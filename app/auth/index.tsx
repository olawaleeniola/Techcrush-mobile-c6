// import {link} from @react-navigation/native;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";


// import { link } from "expo-router";
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    const db = useSQLiteContext();
    const navigator = useRouter();
    
    interface User {
        name: string;
        email: string;
        age: number;
    }

    const [name, setName] = useState( "");
    const [email, setEmail] = useState( "");
    const [age, setAge] = useState( 0);
    const [users, setUsers] = useState<User[]>([]);


    const updateDb = async () => {
            await db.runAsync(
        'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
         name, email, age,
        );
        const result = await db.getAllAsync<User>('SELECT * FROM users');
        setUsers(result);
        setName('');
        setEmail('');
        setAge(0);
    }

        
    useEffect(() => {

   const fetchData = async () => {
    const initialName = await AsyncStorage.getItem('name');
    const initialEmail = await AsyncStorage.getItem('email');
    const initialAge = await AsyncStorage.getItem('age');

            if (initialName) setName(initialName);
            if (initialEmail) setEmail(initialEmail);
            if (initialAge) setAge(Number(initialAge));
    
        }
        fetchData();

    }, 
    []);

    const handlelogin = () => {      
        if (name === 'game') {
            alert('Welcome, game!');
        } else {
            navigator.push('/profile');
        }
    };

   return (
    
    <ScrollView style={{ backgroundColor: '#fff', flex: 1, padding: 16 }}>
        <View>
         <View style={styles.inputContainer}>
            <Text style={styles.Label}>Name:</Text>
            <TextInput value = {name} 
            onChangeText = {(value) => {
                setName (value);
                AsyncStorage.setItem('name', value);
                // AsyncStorage.setItem('user',  JSON.stringify({... user, name: value})); 
                }} 

                style = {styles.input}/>
           </View>
            <View style={styles.inputContainer}>
            <Text style={styles.Label}>Email:</Text>
            <TextInput 
            value = {email} 
            onChangeText = {(value) => {
                setEmail(value);
                AsyncStorage.setItem('email', value);
            }} 
            
            style = {styles.input}
            />
           </View>
            <View style={styles.inputContainer}>
            <Text style={styles.Label}>Age:</Text>
            <TextInput 
            value = {age.toLocaleString()} 
             onChangeText = {(value) => {
                setAge (Number(value));
                AsyncStorage.setItem('age', value);
            }} 


            style = {styles.input}
            />
           </View>
            <Button onPressIn={() => {navigator.push('/profile')}}> </Button>
            <Button onPressIn={()=> {
                updateDb();
                // handlelogin();
            }}
            > 
            Go to Profile 
            </Button >
        </View>

        <View>

        {users?.map((user:User, index) => {

        return (
       <View 
       style = {{borderBlockColor: "red", marginTop: 10, padding: 10}}
       key=
       {index}
       > 
            <Text>Email:{user.email}</Text>
            <Text>Name:{user.name}</Text>
            <Text>Age:{user.age}</Text>
           </View>
        )}
        )}

        </View> 
    </ScrollView>

   );
}

const styles = StyleSheet.create({

Label: {fontSize: 16, fontWeight: 'bold', marginBottom: 8},
input : {borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 16},
inputContainer: {marginBottom: 16},
});
