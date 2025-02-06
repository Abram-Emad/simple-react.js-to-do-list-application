# Simple React.js To-Do List Application

A lightweight and intuitive to-do list application built with React.js. Organize tasks, mark them as complete, and filter through your list with ease. Perfect for personal task management or as a learning resource for React.js fundamentals.

## ✨ Features

- **Add New Todos**: Quickly input tasks with a text field and add them to your list.
- **Delete Todos**: Remove tasks individually or clear all completed ones in one click.
- **Mark as Complete**: Toggle tasks between active and completed states.
- **Task Filtering**: View all, active, or completed tasks using the filter buttons.
- **Local Storage**: Todos persist between sessions using browser local storage.
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices.

## 🛠 Technologies Used

- **React.js** (Core framework with Hooks & Context API)
- **React Icons** (SVG icons for UI elements)
- **UUID** (Unique ID generation for tasks)
- **HTML5/CSS3** (Structure and styling)
- **JavaScript ES6+** (Core functionality)
- **GitHub Pages** (Project deployment)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm (v6+ recommended)

### Installation
1. **Clone the repository**  
   `git clone https://github.com/Abram-Emad/simple-react.js-to-do-list-application.git`

2. **Install dependencies**  
   `npm install`

3. **Launch development server**  
   `npm start`  
   App will open at `http://localhost:3000`

### Available Scripts
- `npm test`: Launches test runner
- `npm run build`: Creates production build
- `npm run eject`: Ejects create-react-app configs (advanced)
- `npm run deploy`: Deploys to GitHub Pages

## 📂 Project Structure

- plaintext
- src/
- ├── components/           # Reusable UI components
- │   ├── TodoForm.js      # Task input component
- │   ├── TodoList.js      # Main task display component
- │   └── TodoItem.js      # Individual task component
- ├── context/             # State management
- │   └── TodoContext.js   # Context API implementation
- ├── hooks/               # Custom hooks
- │   └── useLocalStorage.js # Local storage integration
- ├── assets/              # Static files
- │   ├── styles/         # CSS files
- │   └── images/         # App images
- ├── App.js               # Root component
- └── index.js             # Application entry point


## 🎨 Customization Guide

### Style Modifications
1. Edit CSS variables in `src/assets/styles/main.css`:
css
:root {
  --primary-color: #61DAFB;      /* Change accent color */
  --background-color: #282c34;   /* Modify background */
  --text-color: #ffffff;         /* Adjust text color */
}


### Feature Enhancements
1. **Add Due Dates**  
   Modify `TodoContext.js` to include date properties and update the UI with date pickers.

2. **Task Categories**  
   Extend the todo object with a `category` field and implement filtering logic.

3. **Animations**  
   Add CSS transitions or integrate a library like Framer Motion for interactive effects.

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. Fork the repository
2. Create a feature branch:  
   `git checkout -b feature/your-idea`
3. Commit your changes:  
   `git commit -m 'Add awesome feature'`
4. Push to branch:  
   `git push origin feature/your-idea`
5. Open a Pull Request

Please ensure your code follows existing patterns and includes relevant tests.

## 🙏 Acknowledgments

- React Documentation Team
- FreeCodeCamp for educational resources
- Open-source community for inspiration
