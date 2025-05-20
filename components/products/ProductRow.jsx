import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
    const producs = [1,2,3,4]
  return (
    <View style={{marginTop: SIZES.medium}}>
      <FlatList
        data={producs}
        renderItem={({item}) => <ProductCardView/>}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
    </View>

  )
}

export default ProductRow




