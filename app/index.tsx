
// import (link) from @react-navigation/native;
import { Button } from "@react-navigation/elements";
import { Link, useRouter } from "expo-router";

// import { link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Login() {
    const navigation = useRouter();
   return (
    <ScrollView>
        <View>
            <Text>hello, world!</Text>
            <Link href = '/profile' >Go to Profile</Link>
            <Button onPressIn={() => {navigation.push('/profile')}}> Go to Profile </Button>
        </View>
    </ScrollView>
   )

}