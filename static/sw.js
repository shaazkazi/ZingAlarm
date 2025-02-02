self.addEventListener('install', (event) => {
    console.log("Service Worker Installed");
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log("Service Worker Activated");
    event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'ALARM_TRIGGERED') {
        showNotification(event.data.time, event.data.sound);
    }
});

function showNotification(time, sound) {
    self.registration.showNotification("⏰ Alarm Time!", {
        body: `It's ${time}`,
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827379.png', // Using a public icon URL instead
        vibrate: [200, 100, 200],
        tag: 'alarm-notification',
        requireInteraction: true
    });
}

function checkAlarm(alarms) {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    alarms.forEach(alarm => {
        if (alarm.time === currentTime && alarm.active) {
            showNotification(alarm.time, alarm.sound);
        }
    });
}

setInterval(() => {
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage({type: 'REQUEST_ALARMS'});
        });
    });
}, 60000);
