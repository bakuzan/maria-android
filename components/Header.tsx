import * as React from 'react';
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StackHeaderTitleProps } from '@react-navigation/stack';

import randomValueOfEnum from '@/utils/randomValueOfEnum';
import { MariaAssetFileNames } from '@/constants';

import pic from '@/assets/maria_48x48.png';

function getAssetUrl(value: MariaAssetFileNames) {
  return `../assets/${value.toString()}`;
}

export default function Header(props: StackHeaderTitleProps) {
  const textStyle = {
    ...(props.style as any),
    color: props.tintColor
  };

  function onLogoPress() {
    const filename = randomValueOfEnum(MariaAssetFileNames);
    const assetUrl = getAssetUrl(filename);
    const voice = new Audio(assetUrl);
    voice.play();
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, textStyle]}>{props.children}</Text>
      <TouchableOpacity onPress={onLogoPress}>
        <Image source={pic} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    height: 60
  },
  image: {
    width: 48,
    height: 48
  },
  text: {
    padding: 4,
    paddingRight: 8,
    fontSize: 24,
    height: '100%'
  }
});
