import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './productCatdView.style'

const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                source = {{uri: "https://wallpapers.com/images/hd/beautiful-scenery-desktop-wallpaper-nvplcgidos8ovfn6.jpg"}}
                style={styles.image}
                />         
            </View>

            <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>Product shglhsrglshgls</Text>
            <Text style={styles.supplier} numberOfLines={1}>Product </Text>
            <Text style={styles.price} >$2553</Text>

            </View>

        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView
