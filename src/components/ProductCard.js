import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const ProductCard = ({ product, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} TL</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row'
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: '#fff'
    },
    bodyContainer: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14
    },
    price: {
        textAlign: 'right',
        fontSize: 14,
        fontStyle: 'italic'
    }
})