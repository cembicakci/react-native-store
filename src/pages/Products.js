import React from 'react'
import { SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import Config from "react-native-config";
import ProductCard from '../components/ProductCard';
import Error from '../components/Error';
import Loading from '../components/Loading';

import useFetch from '../hooks/useFetch';

const Products = ({ navigation }) => {

    const { data, loading, error } = useFetch(Config.API_URL);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const handleProductSelect = (id) => {
        navigation.navigate('DetailPage', { id })
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />

    return (
        <FlatList
            data={data}
            renderItem={renderProduct}
        />
    )
}

export default Products