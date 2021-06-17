import React from 'react';
import { StyleSheet, View, FlatList, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { imagesData } from '../Helpers/UiConst';


const UserImages = () => {

    return (
        <FlatList
            numColumns={3}
            data={imagesData}
            keyExtractor={item => item.id}
            contentContainerStyle={{ justifyContent: "space-evenly" }}
            renderItem={({ item, index }) => (
                <View style={{}}>
                    <ImageBackground style={{ width: wp(33.3), height: wp(40) }} source={{ uri: item.url }} />
                </View>
            )}
        />
    )
}

export default UserImages

const styles = StyleSheet.create({})
