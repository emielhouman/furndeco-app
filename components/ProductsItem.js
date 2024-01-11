import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const ProductsItem = props => {
    return (
        <View>
            <Image source={{uri: props.img}}/>
            <Text>{props.title}</Text>
        </View>
    );
}

export default ProductsItem;