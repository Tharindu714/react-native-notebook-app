import { useState } from 'react';
import { Alert, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

export function LoadnoteUi({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Employee', value: '1' },
        { label: 'Student', value: '2' }
    ]);

    const [data, setData] = useState([]);
    
      fetch("http://192.168.55.212/reactAssment/serchnote.php",
      {
          method: "POST",
          body: JSON.stringify()
      }
  ).then(
      response => {
          return response.json();
      }
  ).then(
      dataa => {
        setData(dataa);
       
    
      }
  )

    const ui = (


        <SafeAreaView style={styles.container}>
         <StatusBar hidden={true} />
         <FlatList data={data} renderItem={UserUI} />
          

        </SafeAreaView>
    );
    return ui;

    function UserUI({ item }) {
        return (
            <View style={styles.container}>
      
      <View style={styles.rectangle}>
     
        <View style={styles.circle}>
        <Image source={{ uri:item.category }} style={styles.image} />
        </View>
        
        <View style={styles.content}>
        <View style={styles.dateTimeContainer}>
        <Text style={styles.dateTime}>{item.date} {item.time}</Text>
      </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          
        </View>
      </View>
    </View>

        );
      }
    function savedata() {
        // Alert.alert("Mass", Mobile);
      
        fetch("https://esales.server.dartcodes.com/note/serchnote.php",
            {
                method: "POST",
                body: JSON.stringify()
            }
        ).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
           

                


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
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: '#f0f0f0',
      },
      
      dateTimeContainer: {
        marginRight: 20, // Spacing between date/time and rectangle
      
      },
      dateTime: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft:70,
     textAlign:'left',
    
        
      },
      rectangle: {
        marginTop:30,
        flexDirection: 'row',
        alignItems: 'center',
        width:320,
        height: 100,
        backgroundColor: '#e0e0e0',
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 10,
        marginTop: 10,
        position: 'relative',
      },
      circle: {
        width: 80,
        height: 80,
        backgroundColor: '#3498db',
        borderRadius: 50,
        marginRight:25,
        borderWidth:3,
        marginLeft:5
      },
      image: {
        flex: 1,
        width: null,
        height: null,
        borderRadius:50,
        borderWidth:10,
      },
      content: {
        flex: 1,
        justifyContent: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        
    
      },
      description: {
        fontSize: 16,
      },
    
});