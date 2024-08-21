# 🌦 Weather Application

**<span style="color:blue;">Test the website:** link </span>

<span style="color:green;">_Note: The public API key included in this project allows for 50 searches per day. If you require more usage or want to test the project without limitations, you can create your own API key, install the project locally, and continue testing as needed._
</span>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Weather Application is a responsive web application that provides real-time weather updates for any location worldwide. It allows users to search for current weather conditions, view forecasts, and save favorite locations for quick access. The application adapts its appearance based on weather conditions and time of day, offering both light and dark mode themes.

## Features

- ☁️ **Current Weather Data:** Displays real-time weather data for the selected location, including temperature, index, humidity, wind speed, and weather conditions.
- 🌤️ **5-Day Forecast:** Provides a detailed 5-day weather forecast with daily conditions and temperatures.
- 🔍 **Search Functionality:** Allows users to search for weather by city name with an autocomplete search engine to help the user.
- ❤️ **Favorites:** Users can save their favorite locations and quickly access the weather data for those locations.
- 📱 **Responsive Design:** The layout is fully responsive, ensuring a great experience on mobile, tablet, and desktop devices.
- 🎨 **Dynamic Backgrounds:** Adapts the UI based on current weather conditions.
- 🌗 **Light/Dark Mode:** Supports both light and dark themes, automatically switching based on the user's system preferences.

## Installation

To get started with the weather application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/noammirjani/weatherApp.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. Open your browser and visit "http://localhost:3000" to view the application.

## Usage

- **Search Weather:** Use the search bar to find weather information for any city.
- **View Forecast:** Click on the forecast tab to see weather predictions for the next 7 days.
- **Toggle Dark Mode:** Switch between light and dark themes using the toggle switch in the header.
- **Add to Favorites:** Click the "heart" icon to save a location to your favorites.

## Technologies

- **Frontend:** React, React-Bootstrap, CSS3
- **State Management:** React Context API
- **Data Fetching:** Axios, React Query
- **API:** [Weather API](https://developer.accuweather.com)

## Code Structure

```plaintext"
weather-app/
│
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├────── pages/       # Application pages (Home, Favorites)
│   ├── contexts/        # React Contexts for state management
│   ├── hooks/           # Custom hooks (useWeather, useFetch, etc.)
│   ├── styles/          # CSS files
│   ├── utils/           # Utility functions (helpers, API services, etc.)
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point
│   └── ...              # Other configuration files
│
└── package.json         # Project metadata and dependencies
```

## Customization

### Updating the API Key

To use the application with your own Weather API key:

1. create key from: https://developer.accuweather.com
1. Open "src/services/weatherService.js".
1. Replace the `API_KEY` variable with your own key:

   "const API_KEY = 'your_api_key_here';"

### Modifying Styles

You can customize the look and feel of the application by editing the CSS files located in the `src/styles` directory.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a new feature branch: "git checkout -b feature-name"
3. Commit your changes: "git commit -m 'Add some feature'"
4. Push to the branch: "git push origin feature-name"
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Thanks to the Weather API @accuweatherApis for providing the weather data.
