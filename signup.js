import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export function SignupUi({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Employee', value: '1' },
        { label: 'Student', value: '2' }
    ]);
    const [Firstname, setFirstname] = useState(null);
    const [Lastname, setLastname] = useState(null);
    const [Mobile, setMobile] = useState(null);
    const [Password, setPassword] = useState(null);
    const [UserType, setUserType] = useState(null);
    function send() {

        const userdata = {
            "Firstname": Firstname,
            "Lastname": Lastname,
            "Mobile": Mobile,
            "Password": Password,
            "UserType": UserType,
        }
        fetch("https://esales.server.dartcodes.com/note/reg.php",
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
                if (data == "ok") {
                    const obj = { "name": "sahan" };
                    navigation.navigate("Sign In", obj);
                } else {
                    Alert.alert(data)
                }

            }
        )
    }


    const ui = (


        <SafeAreaView style={styles.container}>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>First name</Text>
                <TextInput style={styles.input1} onChangeText={setFirstname} />
            </View>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>Last name</Text>
                <TextInput style={styles.input1} onChangeText={setLastname} />
            </View>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>Mobile   </Text>
                <TextInput style={styles.input1} onChangeText={setMobile} inputMode='tel'/>
            </View>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>Password   </Text>
                <TextInput style={styles.input1} onChangeText={setPassword} />
            </View>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>User Type</Text>
                <DropDownPicker style={styles.input1}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={setUserType}

                />
            </View>
            <Button title='Register' color="red" onPress={send} />

        </SafeAreaView>
    );
    return ui;

    function savedata() {
        Alert.alert("Mass", UserType);
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