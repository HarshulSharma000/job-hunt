import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Provider, connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

import Routes from './config/routes';

import getStore from './store';

const AppNavigator = TabNavigator(Routes, {
    swipeEnabled: false,
    animationEnabled: false,
    lazyload: true
});

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
        nav: state.nav
}))
class AppWithNavigationState extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            BackHandler.exitApp();
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const store = getStore(navReducer);

export default function Root() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}
