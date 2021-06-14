import { Audio } from 'expo-av';

import { MariaAssetFileNames } from '@/constants';

function getFile(filename: MariaAssetFileNames) {
  switch (filename) {
    case MariaAssetFileNames.Greeting:
      return require(`../assets/greeting.mp3`);
    case MariaAssetFileNames.GoodMorning:
      return require(`../assets/good-morning.mp3`);
    case MariaAssetFileNames.HelpYou:
      return require(`../assets/ill-help-you.mp3`);
    case MariaAssetFileNames.GoodDay:
      return require(`../assets/im-sure-itll-be-a-good-day.mp3`);
    case MariaAssetFileNames.Lovely:
      return require(`../assets/its-lovely.mp3`);
    case MariaAssetFileNames.Preparations:
      return require(`../assets/preparations-complete.mp3`);
    case MariaAssetFileNames.UseAsYouLike:
      return require(`../assets/use-as-you-like.mp3`);
  }
}

export default async function getAudioFile(filename: MariaAssetFileNames) {
  const file = getFile(filename);
  const { sound } = await Audio.Sound.createAsync(file);
  return sound;
}
