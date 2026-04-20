import useStore from "@/store/useStore";
import { ScrollView, Text, View } from "react-native";


export default function Profile() {
    //const {user} = useContext(MyContext);
    const user= useStore ((state:any) => state.user);

   return (
    <ScrollView>
        <View>
            <Text>Welcome to the tabs profile page!</Text>
            <Text>
                Email: {user.email}
            </Text>
            <Text>
                Name: {user.name}
            </Text>
            <Text>
                Age: {user.age}
            </Text>
        </View>
    </ScrollView>
   )

}