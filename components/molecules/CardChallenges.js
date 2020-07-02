import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function CardChallenges(props) {
    return(
        <View style={StyleSheet.CardChallenges}>
            <View style={StyleSheet.CardChallengesContent}>
                {props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CardChallenges:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor : '#000000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowColor: '#333',
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    CardChallengesContent : {
        marginHorizontal : 18
    }
});