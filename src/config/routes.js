import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { BackHandler } from 'react-native';
import _ from 'lodash';

import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingScreen from '../screens/SettingScreen';


BackHandler.addEventListener('backPress', () => {
      this.goback();
      return true;
    });

const Routes = {
    Welcome: { screen: WelcomeScreen },
    Auth: { screen: AuthScreen },
    Main: {
        screen: TabNavigator({
            Map: { screen: MapScreen },
            Deck: { screen: DeckScreen },
            Other: { 
                screen: StackNavigator({
                    Review: { screen: ReviewScreen },
                    Setting: { screen: SettingScreen }
                })
            }
        })
    }   
};

export default Routes;
