import * as React from 'react';
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StackHeaderTitleProps } from '@react-navigation/stack';
import { Audio } from 'expo-av';

import randomValueOfEnum from '@/utils/randomValueOfEnum';
import { MariaAssetFileNames } from '@/constants';

import pic from '@/assets/maria_48x48.png';

async function getAudioFile(filename: MariaAssetFileNames) {
  const { sound } = await Audio.Sound.createAsync(
    require(`../assets/${filename.toString()}`)
  );

  return sound;
}

export default function Header(props: StackHeaderTitleProps) {
  const textStyle = {
    ...(props.style as any),
    color: props.tintColor
  };

  async function onLogoPress() {
    const filename = randomValueOfEnum(MariaAssetFileNames);
    const voice = await getAudioFile(filename);
    await voice.playAsync();
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
