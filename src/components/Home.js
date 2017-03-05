import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

class Home extends React.Component {
  constructor () {
    super ()
    this.state = {
      name: ''
    }
  }
  render () {
    return (
      <View>
        <Text>
        Welcome to react-native
        </Text>
        <Text style={styles.title}>
        Enter your name :
        </Text>
        <TextInput
        style={styles.nameInput}
        onChangeText={(text) => {
          this.setState({name: text})
        }}
        value={this.state.name}
        />
        <TouchableOpacity onPress={() => {
          alert(this.state.name)
        }}>
          <Text>
           Next
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  }
})

export default Home
