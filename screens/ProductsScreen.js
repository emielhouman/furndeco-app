import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getProducts } from '../graphQLRequest';

import ProductsItem from '../components/ProductsItem';

const ProductsScreen = ({ navigation }) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getProducts();
                setProducts(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <View>
            <Text>Explore our collection</Text>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <ProductsItem
                        id={item.id}
                        title={item.title}
                    />
                }}
            />
        </View>
    );
};

export default ProductsScreen;