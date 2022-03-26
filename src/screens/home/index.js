
import React from 'react'
import { styles } from './styles'

import {
    View,
    Text,
    Button
} from "react-native"

const Home = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio</Text>
            <Button title='Ir a categoria' onPress={()=>{navigation.navigate('Category')} }/>
        </View>
            
    )
}
export default Home