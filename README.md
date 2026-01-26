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

### Step 3 – Set Up Environment Variables (Optional)

The app will work without a Gemini API key, but AI voice transcription features will be disabled.

To enable Gemini AI features, create a `.env` file in the root directory:

```bash
REACT_APP_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

**Important:** Make sure this `.env` file is not committed to GitHub (it contains sensitive keys). The `.env` file should already be in `.gitignore`.

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

To use Gemini features locally, set up the `.env` file as described in Step 3 above.

## Project Links

- Live Website: https://florykhan.github.io/GymWhisper/
- GitHub Repo: https://github.com/florykhan/GymWhisper
