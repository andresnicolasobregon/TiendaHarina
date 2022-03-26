
import React from 'react'
import { styles } from './styles'

import {
    View,
    Text,
    Button
} from "react-native"

const Category = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categoria</Text>
            <Button title='Ir a Home' onPress={()=>{navigation.navigate('Home')} }/>
        </View>
            
    )
}
export default Category