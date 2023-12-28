import React, {useState, useEffect, useRef} from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import NetInfo from '@react-native-community/netinfo';

Notifications.setNotificationHandler({
    handleNotifications: async() => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  
  async function registerForPushNotificationsAsync(){
    let token;
  
    if (Platform.OS === 'android'){
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice){
      const{status: existingStatus} = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted'){
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted'){
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });
      console.log(token);
    } else{
      alert('Must use physical device for Push Notifications');
    }
    return token.data;
  }

  const useNetworkStatus = () => {
    const [isConnected, setIsConnected] = useState(true);

    const handleConnectivityChange = (isConnected) => {
      setIsConnected(isConnected);
    };

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

      return () => {
        unsubscribe();
      };
    }, []);
    return isConnected;
  }
  

export default function Notification({ onNotificationReceived }){
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const isConnected = useNetworkStatus();

    useEffect(()=>{ 
      const registerAsync = async () => {
        try{
          const token = await registerForPushNotificationsAsync();
          setExpoPushToken(token);
        }
        catch (error){
          console.error('Error registering for push notifications:', error);
        }
      };

      const handleNotificationReceived = (notification) => {
        setNotification(notification);
        onNotificationReceived(notification);
        console.log({ notification });
      };

      const handleResponseReceived = (response) => {
        console.log(response);
      };

      const retryRegistration = () => {
        if (isConnected) {
          registerAsync();
        }
      };

      notificationListener.current = Notifications.addNotificationReceivedListener(handleNotificationReceived);
      responseListener.current = Notifications.addNotificationResponseReceivedListener(handleResponseReceived);

      if (!expoPushToken){
        retryRegistration();
      }

      const connectivityChangeSubscription = NetInfo.addEventListener(() => {
        retryRegistration();
      });

      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
        connectivityChangeSubscription();
      };
      /*(registerForPushNotificationsAsync().then(token=>setExpoPushToken(token));

      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
          onNotificationReceived(notification);
          console.log({notification});
      });

      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
      });

      return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
      } */
    }, [onNotificationReceived, expoPushToken, isConnected]);
    return null;
}