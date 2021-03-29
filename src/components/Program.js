import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Program = ({ title, program, theory }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{program.method_1.code}</Text>
            <Text>{theory.title}</Text>
            <Text>{theory.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Program