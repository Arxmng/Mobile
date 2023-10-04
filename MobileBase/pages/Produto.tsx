import { Image, Text } from "@rneui/themed"
import React from "react"
import { StyleSheet } from "react-native"

export default function Produto({route, navigation}){
    const {produto} = route.params
    return(
        <>
        <Text>firstName: {produto.firstName}</Text>
        <Text>lastName: {produto.lastName}</Text>
        <Image source={{uri:produto.image}} containerStyle={styles.item}/>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    }
})