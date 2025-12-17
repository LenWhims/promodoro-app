# Pomodoro Timer App

A simple and elegant Pomodoro timer built with Next.js, React, and Tailwind CSS. This app helps you manage your work sessions and breaks using the Pomodoro Technique.

## Features

- **Session and Break Timers**: Default 25-minute work sessions and 5-minute breaks.
- **Customizable Lengths**: Adjust session and break lengths between predefined ranges (session: 1-60 minutes, break: 1-30 minutes).
- **Start/Pause/Reset Controls**: Easily control the timer with intuitive buttons.
- **Automatic Mode Switching**: Automatically switches between session and break modes with alerts.
- **Alerts**: Notifications when it's time to take a break or return to work.
- **Responsive Design**: Works well on desktop and mobile devices.
- **Testing**: Comprehensive unit tests using Jest and React Testing Library.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pomodoro-app.git
   cd pomodoro-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage

- **Adjust Lengths**: Use the + and - buttons to set session and break lengths (disabled when timer is running).
- **Start/Pause**: Click "Start" to begin the timer, "Pause" to stop it.
- **Reset**: Click "Reset" to return to initial state.
- **Alerts**: Close alerts to continue after mode switches.

## Testing

Run the test suite:
```bash
npm test
```

For CI testing:
```bash
npm run test:ci
```

## Build

To build the app for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jest**: JavaScript testing framework.
- **React Testing Library**: Testing utilities for React components.
- **Heroicons**: Icon library for UI elements.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.