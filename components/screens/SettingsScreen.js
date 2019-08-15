import React from "react";
import { TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Button, View, Text, Body, Left, Right, Title } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
          <Header>
            <Left/>
            <Body>
              <Title>Settings</Title>
            </Body>
            <Right />
          </Header>
        <Content>
          <Body>
            <Text style={{marginTop:20}}>Settings page content section!!!</Text>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Profile')}
              background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{backgroundColor: 'red', alignContent: 'center', marginTop:100}}>
                  <Text style={{width: 150, margin: 5, padding:5, alignContent: 'center'}}>Go to Profile screen</Text>
                </View>
            </TouchableNativeFeedback>
          </Body>
        </Content>
      </Container>
    );
  }
}

