import React from 'react';
import { View,Text } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';


const Header = () => {
    return (
        <View style={{ height: 60, flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>theapplehub</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end", marginRight: 15, flexDirection: "row" }}>
                <FontAwesome name="bell-o" size={22} color="#000" />
                <Entypo name="dots-three-vertical" size={22} color="#000" style={{ marginLeft: 25 }} />
            </View>
        </View>
    )
}

export default Header;