import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import ProfileScreen from '../Screens/Profile/ProfileScreen'

const Tab = createBottomTabNavigator();


function Screen1() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> 1</Text>
        </View>
    )
}
function Screen2() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> 2</Text>
        </View>
    )
}
function Screen3() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> 3</Text>
        </View>
    )
}
function Screen4() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> 4</Text>
        </View>
    )
}

export default function BottomNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{ showIcon: true, showLabel: false }}

            >
                <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                    options={{ tabBarIcon: () => (<SimpleLineIcons name="home" size={22} color="#900" />) }} />
                <Tab.Screen name="Screen1" component={Screen1}
                    options={{ tabBarIcon: () => (<Feather name="search" size={23} color="#900" />) }} />
                <Tab.Screen name="Screen2" component={Screen2}
                    options={{ tabBarIcon: () => (<AntDesign name="plussquareo" size={22} color="#900" />) }} />
                <Tab.Screen name="Screen3" component={Screen3}
                    options={{ tabBarIcon: () => (<MaterialIcons name="favorite-border" size={24} color="#900" />) }} />
                <Tab.Screen name="Screen4" component={Screen4}
                    options={{ tabBarIcon: () => (<MaterialIcons name="person" size={23} color="#900" />) }} />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})