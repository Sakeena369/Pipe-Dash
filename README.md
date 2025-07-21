# Pipe-Dash

# 🎮 Pipe-Dash

Pipe-Dash is a Mario-themed browser game built with HTML, CSS, JavaScript, and a Node.js/Express backend. Players help Mario jump over pipes to score points, with their scores saved to a leaderboard.

---

## 🚀 Features
- 🕹️ Smooth Mario jump mechanics
- 🎯 Real-time scoring system
- 📊 Leaderboard to track top players
- 🎵 Sound effects for immersive gameplay
- 🌐 Backend with MongoDB to store scores
- 🎨 Retro pixel-art UI inspired by Mario

---

## 📸 Screenshots

| Gameplay                     | Leaderboard                   |
|-----------------------------|---------------------------------|
| ![Game Screen](images/outputs/game.png) | ![Leaderboard Screen](images/outputs/leaderboard.png) |

---

## ⚙️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (Bootstrap 4 for responsiveness)
- JavaScript

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- TypeScript

---

## 🛠️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Pipe-Dash.git
cd Pipe-Dash
```

### 2️⃣ Install backend dependencies
```bash
cd Backend
npm install
Installed Dependencies (via npm install):
express – Web server framework

mongoose – MongoDB ODM (database layer)

cors – To handle Cross-Origin requests

dotenv – To load environment variables from .env file

Installed Dev Dependencies (via npm install --save-dev):
typescript – For TypeScript support

ts-node – To run TypeScript directly

ts-node-dev – For live-reloading TypeScript during development

@types/node – Type definitions for Node.js

@types/express – Type definitions for Express

@types/mongoose – Type definitions for Mongoose

@types/cors – Type definitions for CORS


```

### 3️⃣ Install frontend dependencies (if any)
_No dependencies required for frontend. Static HTML/CSS/JS._

---

## 🏃‍♂️ Running the Game

### 🌐 Start Backend Server
```bash
cd Backend
npm run dev
```

This starts the API at `http://localhost:5000/api/scores`.

### 🎮 Play the Game
Open `Frontend/index.html` in your browser.

---

## 📂 Project Structure
```
Pipe-Dash/
├── Backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── server.ts
│   ├── .env
│   ├── package.json
├── Frontend/
│   ├── images/
│   ├── images/outputs
│   ├── sound/
│   ├── index.html
│   ├── game.html
│   ├── leaderboard.html
│   ├── script.js
│   ├── style.css
```

---

## 🎮 How to Play
- 🕹️ **Jump**: Press the `Up Arrow` key.
- 🚀 **Avoid Pipes**: Don’t let Mario collide with obstacles.
- 📈 **Score**: Each pipe passed increases your score.

Your highest score is saved to the leaderboard automatically.

---

## 👩‍💻 Author
- **Syed Sakeena**  
  [GitHub](https://github.com/Sakeena369) • [LinkedIn](https://www.linkedin.com/in/syed-sakeena-hidayathulla/)

---
