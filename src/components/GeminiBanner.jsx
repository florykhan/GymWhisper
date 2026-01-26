import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './App.css';

/**
 * Banner component that shows when Gemini API key is missing.
 * Reads only process.env.REACT_APP_GEMINI_API_KEY to check presence; never logs or exposes the key.
 */
export default function GeminiBanner() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
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
