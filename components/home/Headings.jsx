import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import styles from './headings.style'
import {Ionicons} from '@expo/vector-icons'

const Headings = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}> New Rivals</Text>
            <TouchableOpacity>
                <Ionicons name='grid' size={24} color={COLORS.primary}/>
            </TouchableOpacity>

        </View>
      
    </View>
  )
}

export default Headings

