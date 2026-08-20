importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDfLOGH0iNMNxuq-7kdZq4-FcZ0...",
  authDomain: "alertas-barrio42.firebaseapp.com",
  projectId: "alertas-barrio42",
  storageBucket: "alertas-barrio42.firebasestorage.app",
  messagingSenderId: "311506369120",
  appId: "1:311506369120:web:1b8367e87a55a232956105"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || '🚨 ALERTA VECINAL';
  const notificationOptions = {
    body: payload.notification.body || 'Se ha recibido una nueva alerta en el barrio.',
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
