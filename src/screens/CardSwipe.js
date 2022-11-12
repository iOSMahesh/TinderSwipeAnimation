import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ToastAndroid, Alert, Dimensions, Platform } from "react-native";
import { CommonIcon } from "../Assets/map";
const { width, height } = Dimensions.get('window');

import CardStack, { Card } from 'react-native-card-stack-swiper';



export default function CardSwipe() {
    let cardStacks = [{ key: 0, img: CommonIcon.img1 }, { key: 1, img: CommonIcon.img2 }, { key: 3, img: CommonIcon.img3 }]


    function showToastWith(msg) {
        if (Platform.OS === 'ios') {
            Alert.alert(
                msg,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK") }
                ]
            );

        } else {
            ToastAndroid.showWithGravityAndOffset(
                msg,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }

    }
    return (
        <View style={[styles.container]}>
            <View style={{ flex: 0.2, backgroundColor: 'white', justifyContent: 'center', borderTopColor: 'grey', borderTopWidth: 1, zIndex: 100 }} >
                <Text style={{ alignSelf: 'center', fontSize: 25 }}>Header</Text>

            </View>

            <View style={{ flex: 0.6 }}>
                <CardStack
                    style={styles.content}
                    renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards!</Text>}
                    disableTopSwipe={true}
                    disableBottomSwipe={true}
                    onSwiped={() => console.log('onSwiped')}
                    onSwipedLeft={() => showToastWith('Pass')}
                    onSwipedRight={() => showToastWith('Keep')}
                >
                    {
                        cardStacks.map((item) => {
                            return (
                                <Card style={{
                                    borderRadius: 20,
                                    borderWidth: 2,
                                    borderColor: "#E8E8E8",
                                    justifyContent: "center",
                                    overflow: 'hidden',
                                }} key={item.key}>
                                    <View style={{ overflow: 'hidden', width: width * 0.9, height: height * 0.5 }}>
                                        <Image source={item.img} resizeMode={'contain'} />
                                    </View>

                                </Card>

                            )
                        })
                    }
                </CardStack>
            </View>
            <View style={{ flex: 0.2, backgroundColor: 'white', justifyContent: 'center', borderTopColor: 'grey', borderTopWidth: 1 }} >
                <Text style={{ alignSelf: 'center', fontSize: 25 }}>Footer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey"
    },
    card: {
        // height: 350,
        // flex: 0.5,
        width: 350,
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        overflow: 'hidden',
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});