import React, { Component } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { MailComposer, Constants } from 'expo';
import { Input } from 'react-native-elements';

import { STYLES } from '../constants';

class ContactScreen extends Component {
  state = {
    subject: '',
    message: '',
  };

  static navigationOptions = {
    headerTitle: 'Contact'
  };

  handleSubjectChange = value => {
    this.setState({ subject: value });
  };

  handleMessageChange = value => {
    this.setState({ message: value });
  };

  onMailPress = async () => {
    const { message, subject } = this.state;

    await MailComposer.composeAsync({
      recipients: [Constants.manifest.extra.adminMail],
      subject: subject,
      body: message,
      isHtml: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contactInfoContainer}>
          <Input
            autoFocus={true}
            inputContainerStyle={styles.input}
            placeholder={'Type message subject'}
            returnKeyType={'next'}
            onSubmitEditing={() => this.messageInput.focus()}
            onChangeText={this.handleSubjectChange}
            value={this.state.subject}
            label={'Subject'} />

          <Input
            multiline={true}
            value={this.state.message}
            onSubmitEditing={this.onMailPress}
            placeholder={'Type your message'}
            ref={(input) => { this.messageInput = input }}
            label={'Message'}
            onChangeText={this.handleMessageChange} />
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button title="Send Mail" color={STYLES.COLORS.RED} onPress={this.onMailPress} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
  },
  buttonContainer: {
    bottom: 0,
    width: '100%'
  },
  input: {
    marginBottom: 20,
  },
});

export default ContactScreen;
