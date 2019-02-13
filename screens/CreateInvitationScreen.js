import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, Switch, TextInput, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { STYLES } from '../constants';

class CreateInvitationScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    genre: '',
    isVegetarian: false,
    allergens: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.titleStyle}>Basic Information</Text>

          <KeyboardAwareScrollView containerStyle={{ flex: 1 }} enableOnAndroid={true} enableAutomaticScroll={true}>
            <View style={{ padding: 10 }}>
              <TextInput
                placeholderTextColor={STYLES.COLORS.DARK}
                returnKeyType="next"
                value={this.state.firstName}
                style={styles.input}
                onSubmitEditing={() => this.lastNameInput.focus()}
                onChangeText={(firstName) => this.setState({ firstName })}
                underlineColorAndroid={STYLES.COLORS.LIGHT_RED}
                placeholder={'Type your first name'} />

              <TextInput
                placeholderTextColor={STYLES.COLORS.DARK}
                returnKeyType="next"
                value={this.state.lastName}
                style={styles.input}
                ref={(input) => { this.lastNameInput = input }}
                onSubmitEditing={() => this.usernameInput.focus()}
                onChangeText={(lastName) => this.setState({ lastName })}
                underlineColorAndroid={STYLES.COLORS.LIGHT_RED}
                placeholder={'Type your last name'} />

              <TextInput
                placeholderTextColor={STYLES.COLORS.DARK}
                returnKeyType="next"
                value={this.state.username}
                style={styles.input}
                onSubmitEditing={() => this.passwordInput.focus()}
                ref={(input) => { this.usernameInput = input }}
                onChangeText={(username) => this.setState({ username })}
                underlineColorAndroid={STYLES.COLORS.LIGHT_RED}
                placeholder={'Add your username'} />

              <TextInput
                placeholderTextColor={STYLES.COLORS.DARK}
                returnKeyType="next"
                value={this.state.password}
                style={styles.input}
                secureTextEntry={true}
                onSubmitEditing={() => this.confirmPasswordInput.focus()}
                ref={(input) => { this.passwordInput = input }}
                onChangeText={(password) => this.setState({ password })}
                underlineColorAndroid={STYLES.COLORS.LIGHT_RED}
                placeholder={'Create your password...'} />


              <TextInput
                placeholderTextColor={STYLES.COLORS.DARK}
                returnKeyType="next"
                secureTextEntry={true}
                value={this.state.confirmPassword}
                style={styles.input}
                onSubmitEditing={() => this.allergensInput.focus()}
                ref={(input) => { this.confirmPasswordInput = input }}
                onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                underlineColorAndroid={STYLES.COLORS.LIGHT_RED}
                placeholder={'Confirm your password...'} />

              <TextInput
                multiline={true}
                numberOfLines={3}
                placeholderTextColor={STYLES.COLORS.DARK}
                returnKeyType="done"
                value={this.state.allergens}
                style={styles.input}
                ref={(input) => { this.allergensInput = input }}
                onChangeText={(allergens) => this.setState({ allergens })}
                underlineColorAndroid={STYLES.COLORS.LIGHT_RED}
                placeholder={'Add allergens...'} />

              <Picker
                selectedValue={this.state.genre}
                style={styles.picker}
                prompt="Choose a genre"
                onValueChange={(itemValue) => this.setState({genre: itemValue})}>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>


              <View style={styles.switchContainer}>
                <Text>Are you vegetarian/vegan?</Text>
                <Switch
                  trackColor={{
                    false: STYLES.COLORS.LIGHT_DARK,
                    true: STYLES.COLORS.RED,
                  }}
                  value={this.state.isVegetarian}
                  thumbColor={STYLES.COLORS.LIGHT}
                  onValueChange={isVegetarian => this.setState({ isVegetarian })} />
              </View>
            </View>
          </KeyboardAwareScrollView>

        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Cancel" onPress={() => {}} color={STYLES.COLORS.RED}/>
          <Button style={styles.button} title="Continue" onPress={() => {}} color={STYLES.COLORS.DARK}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    height: 80,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  switchContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: STYLES.COLORS.LIGHT,
    padding: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

  },
  button: {
    width: '100%',
  }
});

export default CreateInvitationScreen;

