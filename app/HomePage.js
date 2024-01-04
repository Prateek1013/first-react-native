// HomePage.js

import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [url, setUrl] = React.useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    // You should add validation here to check if the URL is valid
    const response=await fetch(url);
    const imgUrl=await response.json();
    const urli=imgUrl.photo.url;
    navigation.navigate('ImageDisplay', { imageUrl: urli });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter URL"
        value={url}
        onChangeText={(text) => setUrl(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default HomePage;
