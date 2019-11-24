import React, {
  Component, 
} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';

import SignUp from './src/components/Signup';
import SignIn from './src/components/SignIn';
import ChatScreen from './src/components/ChatScreen';
import Rooms from './src/screens/Rooms';
import SelectRoom from './src/screens/SelectRoom';

// 아래 import는 소현 & 희진 작품
import SignUpPage from './page/SignUp.js'
import LoginPage from './page/Login.js'
import LoginSuccessPage from './page/LoginSuccess'
import IdFindPage from './page/IdFind'
import PwFindPage from './page/PwFind'
import Mainpage from "./mypage/Mypagemain";

import Mypagemain from "./mypage/Mypagemain";
import ChangePw from "./mypage/ChangePw";
import AppInfo from "./mypage/AppInfo";


const AppNavigator = createStackNavigator(
  {
    Home,
    SignUp,
    SignIn,
    Rooms,
    ChatScreen,
    SelectRoom,

    //아래 희진
    SignUpPage,
    LoginPage,
    LoginSuccessPage,
    IdFindPage,
    PwFindPage,
    Mainpage,
    //아래 소현
    Mypagemain,
    ChangePw,
    AppInfo,

  },
  {
    initialRouteName: 'Home',
    // headerMode:"none"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component  {
  render(){
    return <AppContainer />;
  }
}

