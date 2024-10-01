import { View, Text, SafeAreaView , ScrollView } from 'react-native'
import React , {useState} from 'react'
import { styles } from './style.js'

import ProductSwipe from './ProductSwipe/index.jsx'
import Brand from './Brand/index.jsx'
import SimilarProduct from './SimilarProducts/index.jsx'
import Filter from '../../../Componets/Filter'
import {categories} from '../../../../Data'

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState();


  const handleCategoryPress = (option) => {
    setSelectedCategory(option);
    console.log(option)
  };
  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.filter}>
          <Filter
            options={categories}
            selectedOption={selectedCategory}
            onPress={handleCategoryPress}
          />
        </View>
        <View style={styles.Product}>
          <ProductSwipe/>
        </View>
        <View style={styles.Brand}>
          <Brand/>
        </View>
        <View style={styles.Brand}>
          <SimilarProduct/>
        </View>
        </View>
    </ScrollView>
  
  )
}

export default index