import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SigninUi({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Employee', value: '1' },
        { label: 'Student', value: '2' }
    ]);

    const [Mobile, setMobile] = useState(null);
    const [Password, setPassword] = useState(null);

    const ui = (


        <SafeAreaView style={styles.container}>

            <View style={styles.viwe1}>
                <Text style={styles.text2}>Mobile   </Text>
                <TextInput style={styles.input1} onChangeText={setMobile} inputMode='tel' />
            </View>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>Password   </Text>
                <TextInput style={styles.input1} secureTextEntry={true} onChangeText={setPassword} />
            </View>
            <Button title='Sign In' color="red" onPress={savedata} />

        </SafeAreaView>
    );
    return ui;

    function savedata() {
        // Alert.alert("Mass", Mobile);
        const userdata = {
            "Mobile": Mobile,
            "Password": Password,
        }

        fetch("https://esales.server.dartcodes.com/note/login.php",
            {
                method: "POST",
                body: JSON.stringify(userdata)
            }
        ).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                if (data.stetus=="ok") {
                    Alert.alert("Log In Success")
                    const userdata = {

                        "Firstname": data.Firstname,
                        "Lastname": data.Lastname,
                        "Mobile": data.Mobile,
                        "UserType": data.UserType,
                    }
                    login(userdata)
                }else{
                    Alert.alert(data.stetus)
                }

                


            }
        )
    }
    async function login(jsonValue) {
        await AsyncStorage.setItem('user', JSON.stringify(jsonValue));
        navigation.navigate("Home", { someData: 'Hello from ScreenA' });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: 18,
        color: "blue",
    },
    text2: {
        fontSize: 16,
    },
    input1: {
        fontSize: 16,
        height: 40,
        width: 300,
        borderWidth: 1,
        padding: 10,
        marginStart: 10,

    },
    viwe1: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3,
        marginBottom: 10,
    },
});