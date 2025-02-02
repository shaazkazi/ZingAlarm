# ZingAlarm - Smart Web Alarm

A modern, feature-rich web alarm application built with Flask and JavaScript. Set custom alarms with different sounds and get notifications right in your browser!

## Features

- Custom alarm time setter
- Multiple sound options (Bell, Digital, Gentle)
- Browser notifications
- Persistent storage
- Snooze functionality
- Visual countdown timer
- PWA support for mobile devices
- iOS compatibility
- Toast notifications
- Background alarm checking
- Service worker support

## Tech Stack

- Flask (Backend)
- JavaScript (Frontend)
- SQLite (Database)
- Bootstrap 5 (UI)
- Service Workers (Background Tasks)
- PWA (Progressive Web App)

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/zingalarm.git
cd zingalarm

Copy

Apply

README.md
Install dependencies
pip install -r requirements.txt

Copy

Execute

Run the application
flask run

Copy

Execute

Project Structure
zingalarm/
├── static/
│   ├── icons/
│   │   ├── icon512_maskable.png
│   │   └── icon512_rounded.png
│   ├── sounds/
│   │   ├── bell.mp3
│   │   ├── digital.mp3
│   │   └── gentle.mp3
│   ├── manifest.json
│   └── sw.js
├── templates/
│   └── index.html
├── app.py
├── requirements.txt
└── README.md

Copy

Apply

Usage
Enable notifications when prompted
Set alarm time using the time picker
Choose your preferred alarm sound
Click "Add Alarm" to set the alarm
Use snooze or delete options to manage alarms
Track upcoming alarms with the countdown timer
Test sounds before setting alarms
Install as PWA on mobile devices
Key Features Explained
Alarm Setting
Set multiple alarms with different sounds
Visual confirmation via toast notifications
Persistent storage in browser and database
Notifications
Browser notifications on desktop
Toast notifications on iOS
Vibration feedback when available
Service worker background notifications
Sound Options
Bell: Traditional alarm bell sound
Digital: Modern digital alarm tone
Gentle: Soft meditation bell sound
Test sound feature before setting alarms
PWA Features
Install on home screen
Offline capability
Native app-like experience
Responsive design for all devices
Storage
Local storage for offline access
SQLite database backup
Persistent across sessions
Automatic sync between tabs
Development
Prerequisites
Python 3.7+
Flask
Modern web browser
Basic knowledge of JavaScript/Python
Local Development
Clone repo
Install dependencies
Run Flask development server
Enable notifications in browser
Test all features locally
Building for Production
Ensure all static files are in place
Configure manifest.json
Test service worker
Verify all notification paths
Check PWA functionality
Contributing
Contributions welcome! Here's how:

Fork the repository
Create feature branch
Commit changes
Push to branch
Open pull request
License
MIT License

Contact
Create an issue for bugs/features

Acknowledgments
Flask team
Bootstrap team
Service Worker API
Notification API
PWA community
Roadmap
Multiple alarm sounds
Custom sound upload
Theme customization
Alarm categories
Smart wake up features
Weather integration
Calendar sync