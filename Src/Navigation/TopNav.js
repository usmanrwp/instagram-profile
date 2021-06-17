import React from 'react';
import { View, Text, styleSheet, FlatList, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import UserImages from '../Screens/UserImages';

const Tab = createMaterialTopTabNavigator();





function Screen2() {

    return (
        <Text style={{ fontSize: 20 }}> 2</Text>
    )
}
function Screen3() {

    return (
        <Text style={{ fontSize: 20 }}> 3</Text>
    )
}

export default function ProfileTopTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{ showIcon: true, showLabel: false }}

        >
            <Tab.Screen name="Home1" component={UserImages}
                options={{ tabBarLabel: 'f', tabBarIcon: () => (<SimpleLineIcons name="home" size={22} color="#900" />) }} />

            <Tab.Screen name="Home2" component={Screen2}
                options={{ tabBarIcon: () => (<Feather name="home" size={22} color="#900" />) }} />

            <Tab.Screen name="Home3" component={Screen3}
                options={{ tabBarIcon: () => (<Feather name="home" size={22} color="#900" />) }} />

            <Tab.Screen name="Settings" component={Screen3}
                options={{ tabBarIcon: () => (<Feather name="home" size={22} color="#900" />) }} />

        </Tab.Navigator>
    );
}