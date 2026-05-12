# 🌤️ Weather App

A beautiful and responsive weather application built with React.js that shows real-time weather data for any city in the world.

## 🚀 Live Demo
[Click here to view live](#) *(link coming soon)*

## 📸 Features

- 🔍 Search weather by city name
- 🌡️ Shows temperature, feels like, humidity, wind speed and visibility
- 🎨 Background changes based on weather condition (sunny, rainy, cloudy, snowy)
- ⛅ Weather icons based on current condition
- ⌨️ Press Enter to search
- 📱 Fully responsive design
- 🔒 API key secured with environment variables

## 🛠️ Tech Stack

- **Frontend:** React.js
- **API:** OpenWeatherMap API
- **Styling:** CSS3
- **Deployment:** Vercel

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vidhya-Majee/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your free API key**
   - Go to [openweathermap.org](https://openweathermap.org)
   - Sign up for a free account
   - Copy your API key from dashboard

4. **Create `.env` file in root folder**
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

5. **Run the app**
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🌍 How It Works

1. User enters a city name in the search bar
2. App sends a request to OpenWeatherMap API
3. API returns real-time weather data
4. App displays temperature, humidity, wind speed and more
5. Background and icon change based on weather condition

## 📝 What I Learned

- How to consume REST APIs using fetch
- React hooks (useState)
- Async/Await in JavaScript
- Securing API keys using .env files
- Deploying React apps on Vercel

## 👨‍💻 Author

**Vidhya Majee**
- GitHub: [@Vidhya-Majee](https://github.com/Vidhya-Majee)

## 📄 License

This project is open source and available under the MIT License.

---
⭐ If you like this project, give it a star on GitHub!