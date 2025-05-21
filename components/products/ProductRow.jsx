import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'

const ProductRow = () => {
    const producs = [1,2,3,4]
  return (
    <View style={styles.container}>
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




