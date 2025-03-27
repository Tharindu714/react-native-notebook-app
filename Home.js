
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View, } from 'react-native';

export const HomeUI = ({ navigation, route }) => {


  // Check the condition using the parameter
  if (route.params === 'Hello from ScreenA') {
    Alert.alert("ll")
  } {
    dataget()
  }


  const [Firstname, setFirstname] = useState(null);
  const [Lastname, setLastname] = useState(null);
  const [UserType, setUserType] = useState(null);
  const [Active, setActive] = useState(false);


  return (

    // <SafeAreaView style={styles.container}>

    //   <View style={styles.container}>
    //     <View style={styles.userInfo}>
    //       <Text style={styles.userName}>User Name</Text>
    //       <Text style={styles.userType}>User Type</Text>
    //     </View>
    //     <Button title="Log Out" onPress={() => handleLogout()} color="#FF5733" />
    //   </View>

    //   <Text style={styles.text1}>Home</Text>
    //   <Button title='Sign In' onPress={goToSignin} />
    //   <Button title='Sign Up' onPress={goToSignup} />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      {/* Headers */}
      {Active ? (
        <View style={styles.headerContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>User Name : {Firstname} {Lastname}</Text>
            <Text style={styles.userType}>User Type : {UserType}</Text>
          </View>
          <Button title="Log Out" onPress={() => handleLogout()} color="#FF5733" />
        </View>
      ) : (
        <View style={styles.headerContainer}>
          <View style={styles.userInfo}>

          </View>
         
        </View>
      )}


      {/* Body (Kalas Ad) */}
      {Active ? (
        <View >
        <View style={styles.bodyContainer}>
          <Text style={styles.adText}>Create Note Ui</Text>
          <Button title='Create Note Now' onPress={goToCreate} color="#FF5733" />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.adText}>Load Note</Text>
          <Button title='Create Note Now' onPress={goToLoadNote} color="#FF5733" />
        </View>
        </View>
      ) : (
        <View >
          <View style={styles.bodyContainer}>
            <Text style={styles.adText}>Sign In</Text>
            <Button title='Sign In Now' onPress={goToSignin} color="#FF5733" />
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.adText}>Sign Up</Text>
            <Button title='Sign Up Now' onPress={goToSignup} color="#FF5733" />
          </View>
        </View>
      )}

    </SafeAreaView>
  );
  async function handleLogout() {
    await AsyncStorage.setItem('user', JSON.stringify(null));
    dataget()
  }

  function goToSignin() {

    const obj = { "name": "sahan" };
    navigation.navigate("Sign In", obj);
  }
  function goToCreate() {

    const obj = { "name": "sahan" };
    navigation.navigate("Create Note Ui", obj);
  }
  function goToLoadNote() {

    const obj = { "name": "sahan" };
    navigation.navigate("Load Note", obj);
  }
  function goToSignup() {

    const obj = { "name": "sahan" };
    navigation.navigate("Sign Up", obj);
  }
  async function dataget() {
    const value = JSON.parse(await AsyncStorage.getItem('user'));

    if (value !== null) {
      setActive(true)
      setFirstname(value.Firstname)
      setUserType(value.UserType)
      setLastname(value.Lastname)
    } else {
      setActive(false)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your background color for the whole screen
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FF5733', // Set your desired background color for headers
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: '#fff', // Text color for user info
  },
  userType: {
    fontSize: 14,
    color: '#fff', // Text color for user info
  },
  bodyContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Add margin to separate the ad from the edges
  },
  adText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  adDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
