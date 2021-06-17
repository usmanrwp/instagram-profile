import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'

const UserInfo = () => {
    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Ionicons name="person-circle" size={80} color="#000" />
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold" }}>2,474</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold" }}>540k</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold" }}>65</Text>
                    <Text>Following</Text>
                </View>
            </View>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Apple Hub</Text>
                <Text style={{}}>Blogger</Text>
                <Text style={{ fontWeight: "bold" }}>{'Apple news and rumors \nNot affiliated with Apple Inc.'}</Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://linktr.ee/theapplehub')}>
                    <Text style={{ color: 'blue' }}>linktr.ee/theapplehub</Text>
                </TouchableOpacity>
                <Text>
                    <Text>Followed by</Text>
                    <Text style={{ fontWeight: "bold" }}> itshaider01, saaadjavaid</Text>
                    <Text> and </Text>
                    <Text style={{ fontWeight: "bold" }}>2 others</Text>
                </Text>
            </View>
        </>

    )
}

export default UserInfo
