// import (link) from @react-navigation/native;
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Dashboard() {
    const navigation = useRouter();
   return (
    <ScrollView>
        <View>
            <Text>Welcome to the tabs main page!</Text>
             <Text>hello, world!</Text>
                        <Button onPressIn={() => {navigation.push
                            ('/')}}> 
                            Go to Home page
                            </Button>
        </View>
    </ScrollView>
   )

}