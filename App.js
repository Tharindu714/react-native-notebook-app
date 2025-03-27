import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeUI } from './Home';
import { SigninUi } from './signin';
import { NavigationContainer } from '@react-navigation/native';
import { SignupUi } from './signup';
import { CreatenoteUi, createnoteUi } from './createnote';
import { LoadnoteUi, loadnoteUi } from './loadnote';

const Stack = createNativeStackNavigator();

function app() {
  const ui = (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeUI} />

        <Stack.Screen name='Sign In' component={SigninUi} />

        <Stack.Screen name='Sign Up' component={SignupUi} />
        <Stack.Screen name='Create Note Ui' component={CreatenoteUi} />
        <Stack.Screen name='Load Note' component={LoadnoteUi} />
      </Stack.Navigator>
    </NavigationContainer>
  //     <SafeAreaView style={styles.container}>
  //     <Text style={styles.text1}>Home</Text>
  //  <Button title='Go To Profile' onPress={goToProfile}/>
   
  //   </SafeAreaView>

  );

  return ui;
}

export default app;
