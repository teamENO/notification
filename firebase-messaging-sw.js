importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// ★ KenzoのFirebase設定に書き換える
firebase.initializeApp({
  apiKey: "AIzaSyA5X-J0s1SAgw8zXn4Y-_ekHao0c67sn-k",
    authDomain: "send-92385.firebaseapp.com",
    projectId: "send-92385",
    messagingSenderId: "912374083524",
    appId: "1:912374083524:web:a33e61f6f5bc71c207be91"
  };

});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});
