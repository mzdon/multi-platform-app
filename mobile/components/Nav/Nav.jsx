import {NavigationActions, SafeAreaView} from 'react-navigation';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const NavItem = ({title, onPress}) => {
    return (
        <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={onPress}>
                {title}
            </Text>
        </View>
    )
};

export class Nav extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <SafeAreaView>
                        <NavItem onPress={this.navigateToScreen("HomeScreen")} title="Home" />
                        <NavItem onPress={this.navigateToScreen("NewPostScreen")} title="New Post" />
                    </SafeAreaView>
                </ScrollView>
               <NavItem onPress={this.navigateToScreen("LogoutScreen")} title="Logout" />
            </View>
        );
    }
}

Nav.propTypes = {
    navigation: PropTypes.object
};

export default Nav;
