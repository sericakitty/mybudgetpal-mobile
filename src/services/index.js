// axiosInstance.js
import axios from 'axios';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import { BACKEND_URL_EMULATOR, BACKEND_URL_DEVICE } from '@env';

let BACKEND_URL = null

if (Platform.OS === 'android') {
  if (Device.isDevice) {
    // Running on a physical Android device
    BACKEND_URL = BACKEND_URL_DEVICE;
  } else {
    // Running on an Android emulator
    BACKEND_URL = BACKEND_URL_EMULATOR;
  }
}

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'X-Client-Type': 'mobile',
  },
});
