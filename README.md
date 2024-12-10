# **Biku Radio**

A **React Native** project for a radio streaming application. This app fetches radio station data from an external API and provides features like genre selection, artist-based exploration, favorites management, and trending stations.  

It uses **Firebase** for version management updates and **Google Analytics** to track active users.

<h2>Snapshots of the App:</h2>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/71a94d59-4ef2-4a2d-a4e2-e5570cd2799f" alt="1" width="200">
  <img src="https://github.com/user-attachments/assets/c5cb2501-91ad-47cd-9b40-1ad5fe281baa" alt="2" width="200">
  <img src="https://github.com/user-attachments/assets/6fb2926d-ab27-429b-af4c-fda1c4c6a7b0" alt="3" width="200">
  <img src="https://github.com/user-attachments/assets/19f8e711-543c-4a53-b908-0711373c56d5" alt="4" width="200">
  <img src="https://github.com/user-attachments/assets/11fcdedd-7e2b-4dfd-be21-906192cf474d" alt="5" width="200">
  <img src="https://github.com/user-attachments/assets/bdb4cc2a-7e16-4c92-9365-3041e34da587" alt="6" width="200">
  <img src="https://github.com/user-attachments/assets/462e8549-0473-4d0f-8471-9ec50b359e7e" alt="7" width="200">
  <img src="https://github.com/user-attachments/assets/a34b7424-736d-4993-b1e7-9e7ccdc42816" alt="8" width="200">
  <img src="https://github.com/user-attachments/assets/f5b9aaea-8b93-456b-b182-62646f4ddeaf" alt="9" width="200">
  <img src="https://github.com/user-attachments/assets/d0da0c3f-3061-4445-bd2e-5a00e1f3267d" alt="10" width="200">
</div>
---

## **Table of Contents**

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)

---

## **Getting Started**

To get started, ensure your development environment is configured as per the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide. Complete the setup up to the **"Creating a New Application"** step before proceeding.

### **Step 1: Start Metro Server**
Metro is the JavaScript bundler for React Native projects. Start it using the following command from the project’s root directory:

```bash
# Using npm
npm start

# OR using Yarn
yarn start
```


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

### **Step 2: Launch the Application**
With Metro Bundler running in one terminal, open another terminal and run the following commands to start the app on your target platform:

```bash
   # Using npm
   npm run android

   # OR using Yarn
   yarn android

```

## Project Structure

The project is structured as follows:

* android: Android-specific files
* ios: iOS-specific files
* src: Source code for the app
   + assets : Contain the assets
	+ components: Reusable UI components
   + navigation: contain the routing
	+ reducers: Redux reducers
   + screens : Contains all the screen in the app
	+ services: Audio control services and fetching the Radio playstation data
	+ utils: Utility functions
* tests: Unit tests and integration tests


## Features
**Radio Streaming**: Play live radio stations.
**Choose by Genre**: Filter and select radio stations by genre.
**Choose by Artist**: Explore and play stations based on artists.
**Favorites Management**: Add and manage favorite stations.
**Search Functionality**: Search for radio stations.
**Trending Stations**: View popular stations.
**Popular Stations**: Highlight most-listened stations.

## Dependencies

The project uses the following dependencies:

### 1. `react-native` (0.68.2)
React Native framework for building native mobile apps.

### 2. `react-native-track-player` (2.0.0)
Audio player library for React Native, providing a simple and efficient way to play audio files.

### 3. `react-redux` (7.2.6)
Redux library for state management, providing a predictable and efficient way to manage global state.

### 4. `redux-persist` (6.0.0)
Redux persistence library, providing a way to persist and rehydrate state across app restarts.

### 5. `@react-native-firebase/analytics` (12.0.0)
Firebase analytics library, providing a way to track app events and user behavior.

### 6. `@react-native-firebase/app` (12.0.0)
Firebase app library, providing a way to initialize and configure Firebase services.

### 7. `@react-native-firebase/firestore` (12.0.0)
Firebase Firestore library, providing a way to store and retrieve data in a NoSQL database.

### 8. `react-native-vector-icons` (9.1.0)
Icon library for React Native, providing a set of icons and a way to use them in the app.

### 9. `react-native-splash-screen` (3.2.0)
Splash screen library for React Native, providing a way to display a splash screen while the app is loading.

## Installation

To install the project, run the following command:

```bash
npm install
```

## Usage

To use the app, simply run the following command:

```bash
npm start
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

## Contributing
Contributions are welcome! To contribute:

- Fork the repository.
- Create a new branch for your feature/fix.
- Commit your changes with a clear message.
- Open a pull request with detailed changes.
- For major changes, please open an issue first to discuss what you would like to change.
