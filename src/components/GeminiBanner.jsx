import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './App.css';

/**
 * Banner component that shows when Gemini API key is missing
 * Checks on mount if the API key is available
 */
export default function GeminiBanner() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if API key is missing
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    if (!apiKey) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className="gemini-banner"
      role="alert"
      aria-live="polite"
    >
      {t('geminiDisabled')}
    </div>
  );
}
