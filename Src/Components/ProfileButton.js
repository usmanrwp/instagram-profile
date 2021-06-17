import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

const ProfileButton = (props) => {
    return (
        <TouchableOpacity style={{ borderWidth: .5, width: props.width, borderColor: "#656565", alignItems: "center", borderRadius: 3 }}>
            <Text style={{ paddingVertical: 4, fontWeight: "bold" }}>{props.title}</Text>
        </TouchableOpacity>

    )
}

export default ProfileButton
