import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserSettings {
  playGreeting: boolean;
}

type StorageResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      data: null;
    };

class Storage<T> {
  private defaultValues!: T;
  private storeKey!: string;

  constructor(storeKey: string, defaultValues: T) {
    this.storeKey = storeKey;
    this.defaultValues = defaultValues;
  }

  async getData(): Promise<StorageResponse<T>> {
    try {
      const jsonValue = await AsyncStorage.getItem(this.storeKey);
      const stored = jsonValue != null ? JSON.parse(jsonValue) : {};
      return { success: true, data: { ...this.defaultValues, ...stored } };
    } catch (e) {
      console.error(e);
      return { success: false, data: null };
    }
  }

  async storeData(value: Partial<T>): Promise<StorageResponse<T>> {
    try {
      const currentData = await this.getData();
      if (!currentData.success) {
        throw new Error('Failed to restore data.');
      }

      const updatedValue = { ...currentData.data, ...value };
      const jsonValue = JSON.stringify(updatedValue);

      await AsyncStorage.setItem(this.storeKey, jsonValue);

      return { success: true, data: { ...updatedValue } };
    } catch (e) {
      console.error(e);
      return { success: false, data: null };
    }
  }
}

const s = new Storage<UserSettings>('user_settings', {
  playGreeting: true
});

export default s;
