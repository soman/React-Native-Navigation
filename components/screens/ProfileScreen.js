import React from "react";
import { TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Button, View, Text, Body, Left, Right, Title } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container>
          <Header>
            <Left/>
            <Body>
              <Title>Profile Page</Title>
            </Body>
            <Right />
          </Header>
        <Content>
          <Body>
            <Text style={{marginTop:20}}>Profile page content section!!!</Text>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Settings')}
              background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{backgroundColor: 'red', alignContent: 'center', marginTop:100}}>
                  <Text style={{width: 170, margin: 5, padding:5, alignContent: 'center'}}>Go to Settings screen</Text>
                </View>
            </TouchableNativeFeedback>
          </Body>
        </Content>
      </Container>
    );
  }
}

