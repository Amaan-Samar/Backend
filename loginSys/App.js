import React, { useState } from "react";
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
//         onChangeText={newText => setText(newText)}
function App() {
  return (
    <View>
      <View>
        <Text>Registeration</Text>
        <Text>User Name</Text>
        <TextInput placeholder="Name" />
        <Text>Password</Text>
        <TextInput secureTextEntry={true} />
        <TouchableOpacity>
          <Text> Register </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Registeration</Text>
        <TextInput placeholder="UserName" />
        <TextInput secureTextEntry={true} />
        <TouchableOpacity>
          <Text> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
