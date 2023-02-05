import React from 'react'
import { Text, Image, StyleSheet, View, Dimensions } from 'react-native'
import Config from 'react-native-config'
import Error from '../components/Error'
import Loading from '../components/Loading'
import useFetch from '../hooks/useFetch'

const Detail = ({ route }) => {

    const { id } = route.params
    const { data, loading, error } = useFetch(`${Config.API_URL}/${id}`);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {},
    bodyContainer: {
        padding: 10
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    desc: {
        fontStyle: 'italic',
        marginVertical: 5
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right'
    }
});