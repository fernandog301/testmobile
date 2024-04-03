import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Photo from '../assets/IMG_4601.jpeg'
import React from 'react'

const StoriesComponents = () => {
  return (
    <ScrollView horizontal style={Styles.ScrollStyling}>
      <Image source={Photo} style={Styles.ImageStyling} />
      <Image source={Photo} style={Styles.ImageStyling} />
      <Image source={Photo} style={Styles.ImageStyling} />
      <Image source={Photo} style={Styles.ImageStyling} />
      <Image source={Photo} style={Styles.ImageStyling} />

    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  ImageStyling: {
    height: 70,
    width: 70,
    borderRadius:50,
    marginRight: 20,
     
  },
  ScrollStyling: {
    paddingTop: 10,
    paddingBottom: 5,
  }
})


export default StoriesComponents