import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace("Home")
        }
      })

      return unsubscribe
    }, [])

    const handleSignUp = () => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with '+ user.email);
      })
      .catch(error => alert(error.message))
    }

const handleLogin = () => {
  auth.signInWithEmailAndPassword(email,password)
  .then(userCredentials => {
    const user = userCredentials.user;
    console.log('Logged in with '+ user.email);
  })
  .catch(error => alert(error.message))
}

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button,styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>


      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    width: "80%"
  },
input: {
  backgroundColor:"white",
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 5,
},
button: {
  flex: 1,
  backgroundColor: '#0782F9',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
},
buttonText: {
  color:'white',
  fontWeight: '700',
  fontSize: 16,
},
buttonContainer: {
  width:"100%",
  justifyConent: 'center',
  alignItems: 'center',
  marginTop: 10,
  flexDirection: 'row',
},
buttonOutline: {
 flex: 1,
 backgroundColor: 'white',
 margin: 5,
 borderColor: '#0782F9',
 borderWidth: 2,

},
buttonOutlineText: {
  color:'#0782F9',
  fontWeight: '700',
  fontSize: 16,
},
})