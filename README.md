# 🎤 GymWhisper — Voice-Powered Workout Tracking

This repository implements a **frontend web application** that enables hands-free workout logging through natural language voice input. Users tap a microphone, describe their workout in spoken words, and the application converts speech into structured workout data using AI, all running entirely in the browser with no backend persistence.

---

## 🎯 Project Overview

The goal of this project is to:
- Enable **hands-free workout logging** through voice input, allowing users to log exercises while at the gym without typing.
- Convert **natural language descriptions** into structured workout data (exercise type, reps, weight) using AI-powered transcription and reasoning.
- Provide a **clean, minimal, mobile-friendly UI** optimized for quick voice interactions.
- Operate as a **client-side only application** with no database or persistent backend, making it lightweight and privacy-focused.

This project focuses on **demonstrating AI integration in frontend applications**, showcasing how modern web APIs (speech recognition) can be combined with AI services (Google Gemini) to create intuitive user experiences.

---

## ✨ Key Features

- **Voice-based workout input** using browser speech recognition API for hands-free logging.
- **AI-powered transcription and parsing** via Google Gemini API, converting natural language into structured CSV workout data.
- **Bilingual support** with language toggle (English/French) for international users.
- **Animated microphone interface** with visual feedback during recording sessions.
- **Workout panel** for reviewing, editing, and finalizing workout entries before export.
- **Workout history page** for viewing past sessions and generating AI-powered performance reports.
- **Client-side only application** with no backend dependencies, ensuring privacy and fast performance.
- **Responsive design** optimized for mobile devices and desktop browsers.

---

## 🧱 Repository Structure

```
GymWhisper/
│
├── public/                                  # Static assets served by the app
│   ├── index.html                           # Main HTML template
│   ├── favicon.ico                          # App favicon
│   └── og-image.svg                         # Open Graph image
│
├── src/                                     # Application source code
│   ├── components/                          # React components
│   │   ├── app.jsx                          # Main app router and state manager
│   │   ├── HomePage.jsx                     # Home page with microphone interface
│   │   ├── historyPage.jsx                  # Workout history and performance reports
│   │   ├── Microphone-button.jsx            # Voice recording component
│   │   ├── WorkoutPanel.jsx                 # Workout review and finalization panel
│   │   ├── WorkoutFinalizeView.jsx          # Final workout export view
│   │   ├── Side-bar.jsx                     # Navigation sidebar
│   │   ├── Header-.jsx                      # App header with language toggle
│   │   ├── GeminiBanner.jsx                 # Banner for missing API key
│   │   ├── Toast.jsx                        # Toast notification component
│   │   ├── ToggleSwitch.jsx                 # Language toggle switch
│   │   ├── ConfirmationDialog.jsx           # Confirmation dialogs
│   │   └── App.css                          # Component styles
│   │
│   ├── contexts/                            # React contexts
│   │   └── LanguageContext.js               # Language state and translation provider
│   │
│   ├── llm/                                 # AI integration
│   │   └── gemini.js                        # Google Gemini API client and prompts
│   │
│   ├── locales/                             # Internationalization
│   │   └── translations.js                  # English and French translations
│   │
│   ├── assets/                              # Image assets
│   │   ├── logoblue.png                     # App logo
│   │   └── transparent-Photoroom.png        # Branding image
│   │
│   ├── index.js                             # Application entry point
│   ├── globals.css                          # Global styles
│   ├── App.test.js                          # App component tests
│   └── setupTests.js                        # Test configuration
│
├── .github/                                 # GitHub configuration
│   └── workflows/
│       └── deploy.yml                       # GitHub Actions deployment workflow
│
├── docs/                                    # Project documentation
│   └── [AI declaration PDFs]                # Academic declarations
│
├── .gitignore
├── package.json
├── eslint.config.js
└── README.md
```

> 🗒️ **Note:**  
> The application is built as a **single-page application (SPA)** using React Router with HashRouter for GitHub Pages compatibility. All workout data is stored in React state and localStorage — there is no backend database. The `public/` directory contains static assets, while `src/` contains all application logic organized into components, contexts, and utilities.

---

## 🧰 Run Locally

You can run this project on your machine using **Node.js** and `npm`.

### 1️⃣ Clone the repository

**HTTPS (recommended for most users):**
```bash
git clone https://github.com/florykhan/GymWhisper.git
cd GymWhisper
```

**SSH (for users who have SSH keys configured):**
```bash
git clone git@github.com:florykhan/GymWhisper.git
cd GymWhisper
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables (optional)

The app will work without a Gemini API key, but AI voice transcription features will be disabled. A banner will appear at the top indicating Gemini AI is disabled.

To enable Gemini AI features locally:

1. In the **project root**, create a file named `.env.local` (or `.env`).
2. Add exactly this variable (replace the placeholder with your real key):

```bash
REACT_APP_GEMINI_API_KEY=YOUR_API_KEY_HERE
```

**Variable name:** `REACT_APP_GEMINI_API_KEY` — the app reads the key only from this environment variable.

> ⚠️ **Important:** Never commit the API key. `.env` and `.env.local` are listed in `.gitignore`; keep it that way.  
> 📥 **Get your API key:** Visit [Google AI Studio](https://makersuite.google.com/app/apikey) to generate a Gemini API key.

### 4️⃣ Start the development server

```bash
npm start
```

This will launch the application on http://localhost:3000

The app will automatically open in your default browser. You can now:
- Tap the microphone button to start recording
- Speak your workout description (e.g., "I did 3 sets of bench press with 135 pounds, 10 reps each")
- View the structured workout data in the workout panel
- Navigate to the history page to see past workouts

---

## 🚀 Deployment

The app is automatically deployed to **GitHub Pages** via GitHub Actions when changes are pushed to the `main` branch.

- **Live Website:** https://florykhan.github.io/GymWhisper/
- **GitHub Repo:** https://github.com/florykhan/GymWhisper

### Initial Setup (One-Time)

**⚠️ IMPORTANT:** Before the first deployment, configure GitHub Pages settings:

1. Go to: **https://github.com/florykhan/GymWhisper/settings/pages**
2. Under **"Source"**, select: **"GitHub Actions"** (NOT "Deploy from a branch")
3. Click **Save**

After this one-time setup, deployments will happen automatically on every push to `main`.

### Build Process

The deployment workflow:
1. Runs tests to ensure code quality
2. Builds the React application using `npm run build:no-lint`
3. Sets `PUBLIC_URL=/GymWhisper` to ensure correct asset paths on GitHub Pages
4. Uploads the `build/` directory as a Pages artifact
5. Deploys to GitHub Pages

### Base Path Configuration

The application uses **HashRouter** (instead of BrowserRouter) for client-side routing, ensuring compatibility with GitHub Pages static hosting. The `homepage` field in `package.json` (`https://florykhan.github.io/GymWhisper`) configures the base path for asset resolution.

### Note on GitHub Pages Deployment

The GitHub Pages deployment runs **without** the Gemini API key for security reasons. This means:
- The app will load and function normally
- A banner will appear at the top indicating Gemini AI is disabled
- Voice transcription features will be disabled
- All other features (manual workout entry, history viewing, etc.) work normally

To use Gemini features locally, set up `.env.local` (or `.env`) as described in Step 3 above.

---

## 🔐 Environment Variables

The application requires the following environment variable for full functionality:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `REACT_APP_GEMINI_API_KEY` | Google Gemini API key for AI transcription and parsing | No | `undefined` |

**Missing API Key Behavior:**
- The application will load and function normally
- A banner will appear indicating Gemini AI is disabled
- Voice transcription features will be unavailable
- Users can still view workout history and use manual entry features

**Security Note:**
- Never commit API keys to version control
- The `.gitignore` file excludes `.env` and `.env.local` files
- For production deployments on static hosting, API keys should be proxied through a secure backend to avoid exposing them in client-side code

---

## ⚠️ Limitations

This project is designed as a **demo/prototype** and has the following limitations:

- **No backend persistence:** All workout data is stored in browser localStorage and React state. Data is lost when the browser cache is cleared.
- **API key exposure:** When using the Gemini API key in client-side code, it is exposed in the browser. For production use, API calls should be proxied through a secure backend.
- **Static hosting constraints:** GitHub Pages deployment cannot securely store API keys, so AI features are disabled in the live deployment.
- **Browser compatibility:** Speech recognition requires a modern browser with Web Speech API support (Chrome, Edge, Safari).
- **No user accounts:** The application does not support multiple users or data synchronization across devices.

---

## 🚀 Future Directions (Beyond This Project)

Although this version focuses on core voice-to-workout functionality, there are several **advanced directions** worth exploring in future iterations:

- **Secure backend proxy:** Implement a backend API to proxy Gemini API calls, keeping API keys secure and enabling usage tracking and rate limiting.

- **Workout history storage:** Add cloud database integration (Firebase, Supabase, or custom backend) to persist workout data across sessions and devices.

- **User accounts and authentication:** Implement user registration and login to support multiple users and personalized workout tracking.

- **Expanded exercise understanding:** Enhance AI prompts to recognize more exercise variations, supersets, rest periods, and advanced workout patterns.

- **Data export and sharing:** Add functionality to export workouts as CSV, JSON, or PDF, and share workout plans with others.

- **Progress visualization:** Implement charts and graphs to visualize strength progression, volume trends, and workout frequency over time.

- **Workout templates and plans:** Allow users to create and save workout templates, and generate AI-suggested workout plans based on goals.

- **Social features:** Add social sharing, workout challenges, and community features for motivation and accountability.

---

## 🧠 Tech Stack

- **Frontend Framework:** React 19.0.0  
- **Build Tool:** Create React App (react-scripts 5.0.1)  
- **Routing:** React Router DOM 7.7.1 (HashRouter for GitHub Pages compatibility)  
- **AI Integration:** Google Gemini API (@google/genai 1.10.0)  
- **Speech Recognition:** react-speech-recognition 4.0.1 (Web Speech API wrapper)  
- **Animations:** Framer Motion 12.23.9  
- **Icons:** Lucide React 0.526.0, Material Icons 1.13.14  
- **Styling:** CSS (custom styles, no CSS framework)  
- **Deployment:** GitHub Pages via GitHub Actions  
- **Version Control:** Git + GitHub

---

## 🧾 License

MIT License, feel free to use and modify with attribution. See the [`LICENSE`](./LICENSE) file for full details (if present).

---


## 👤 Authors

**Ilian Khankhalaev**  
_BSc Computing Science, Simon Fraser University_  
📍 Vancouver, BC  |  [florykhan@gmail.com](mailto:florykhan@gmail.com)  |  [GitHub](https://github.com/florykhan)  |  [LinkedIn](https://www.linkedin.com/in/ilian-khankhalaev/)

**Nikolay Deinego**  
_BSc Computing Science, Simon Fraser University_  
📍 Vancouver, BC  | [GitHub](https://github.com/Deinick)  |  [LinkedIn](https://www.linkedin.com/in/nikolay-deinego/)

**Sven Jensen**
_BSc Computing Science, Simon Fraser University_  
📍 Vancouver, ON  | [GitHub](https://github.com/svenweb)  |  [LinkedIn](https://www.linkedin.com/in/sven--jensen/)

**Parminder Rhandawa**  
_BSc Computing Science, Simon Fraser University_  
📍 Vancouver, BC  |  [LinkedIn](https://www.linkedin.com/in/parminder-randhawa-35a2912b4/)
