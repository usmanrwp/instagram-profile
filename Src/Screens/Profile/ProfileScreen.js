import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import PorfileTabs from '../../Navigation/TopNav';
import Header from '../../Components/Header';
import ProfileButton from '../../Components/ProfileButton';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { userProfileNames } from '../../Helpers/UiConst'
import UserInfo from './UserInfo';

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <UserInfo />
            <View style={styles.btnContainer}>
                <ProfileButton title="Following" width={widthPercentageToDP(25)} />
                <ProfileButton title="Message" width={widthPercentageToDP(25)} />
                <ProfileButton title="Email" width={widthPercentageToDP(25)} />
                <ProfileButton title="~" width={widthPercentageToDP(10)} />
            </View>
            <View style={styles.userContainer}>
                <ScrollView horizontal>
                    {userProfileNames.map(item =>
                        <TouchableOpacity style={{ alignItems: "center" }}>
                            <Ionicons name={item.iconName} size={70} color="#000" />
                    <Text style={{ textAlign: "center" }}>{item.userName}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
            <PorfileTabs />

        </View>
    )
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnContainer: { marginTop: 15, flexDirection: "row", marginHorizontal: 15, justifyContent: 'space-around' },
    userContainer: { flexDirection: 'row', paddingVertical: 15 }
})