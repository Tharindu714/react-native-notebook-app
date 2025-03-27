import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export function CreatenoteUi({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Study', value: '1' },
        { label: 'Work', value: '2' },
        { label: 'Travel', value: '3' },
        { label: 'Personal', value: '4' }
    ]);

    const [title, settitle] = useState(null);
    const [description, setdescription] = useState(null);
    const [category, setcategory] = useState(null);
    


    function send() {

        const userdata = {
            "title": title,
            "description": description,
            "category": category,
        }

        fetch("https://esales.server.dartcodes.com/note/note.php",
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
                    Alert.alert(data)
                } else {
                    Alert.alert(data)
                }

            }
        )
    }


    const ui = (


        <SafeAreaView style={styles.container}>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>Title</Text>
                <TextInput style={styles.input1} onChangeText={settitle} />
            </View>
            <View style={styles.viwe1}>
                <Text style={styles.text2}>Description</Text>
                <TextInput style={styles.input1} onChangeText={setdescription} />
            </View>
       
            <View style={styles.viwe1}>
                <Text style={styles.text2}>Category</Text>
                <DropDownPicker style={styles.input1}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={setcategory}
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