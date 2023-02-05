import React from 'react'
import { SafeAreaView, ActivityIndicator, FlatList, Text } from 'react-native'
import Config from "react-native-config";
import ProductCard from '../components/ProductCard';
import Error from '../components/Error';
import Loading from '../components/Loading';

import useFetch from '../hooks/useFetch';

const Products = () => {

    const { data, loading, error } = useFetch(Config.API_URL);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const renderProduct = ({ item }) => <ProductCard product={item} />

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </SafeAreaView>
    )
}

export default Products