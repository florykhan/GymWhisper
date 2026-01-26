# Gym Whisper

A voice-powered workout tracking application that uses AI to transcribe and organize your workout data.

## Local Deployment Instructions

Follow the steps below to run the application locally on your machine.

### Prerequisites

- Node.js
- npm (comes with Node.js)
- Git
- (Optional) A Gemini API key (via Google AI Studio) - required for AI voice transcription features

### Step 1 – Clone the Repository

```bash
git clone https://github.com/florykhan/GymWhisper.git
cd GymWhisper
```

### Step 2 – Install Dependencies

```bash
npm install
```

### Step 3 – Set Up Environment Variables (Optional, local development only)

The app will work without a Gemini API key, but AI voice transcription features will be disabled. The key is **required only for local development** when you want Gemini features.

To enable Gemini AI features locally:

1. In the **project root**, create a file named `.env.local` (or `.env`).
2. Add exactly this variable (replace the placeholder with your real key):

```bash
REACT_APP_GEMINI_API_KEY=YOUR_API_KEY_HERE
```

**Variable name:** `REACT_APP_GEMINI_API_KEY` — the app reads the key only from this env var.

**Important:** Never commit the key. `.env` and `.env.local` are listed in `.gitignore`; keep it that way.

### Step 4 – Start the Development Server

```bash
npm start
```

This will launch the application on http://localhost:3000

## GitHub Pages Deployment

The app is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

- **Live Website:** https://florykhan.github.io/GymWhisper/
- **GitHub Repo:** https://github.com/florykhan/GymWhisper

### Note on GitHub Pages Deployment

The GitHub Pages deployment runs **without** the Gemini API key for security reasons. This means:
- The app will load and function normally
- A banner will appear at the top indicating Gemini AI is disabled
- Voice transcription features will be disabled
- All other features (manual workout entry, history viewing, etc.) work normally

To use Gemini features locally, set up `.env.local` (or `.env`) as described in Step 3 above.

## Project Links

- Live Website: https://florykhan.github.io/GymWhisper/
- GitHub Repo: https://github.com/florykhan/GymWhisper
