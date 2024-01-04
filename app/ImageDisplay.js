// ImageDisplay.js

import React from 'react';
import { View,Image } from 'react-native';

const ImageDisplay = ({ route }) => {
  const { imageUrl } = route.params;
    console.log(imageUrl);
  return (
    <View>
      <Image style={{ width: 200, height: 200 }} source={{ uri: imageUrl }} />
      {/* <img style={{width:500, height:500}} src={`${imageUrl}`}/> */}
    </View>
  );
};

export default ImageDisplay;
