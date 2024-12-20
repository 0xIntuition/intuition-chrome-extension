import React, { useState, useEffect } from 'react';

export const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openaiApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
    const savedShowSystemPrompt = localStorage.getItem('showSystemPrompt');
    if (savedShowSystemPrompt) {
      setShowSystemPrompt(savedShowSystemPrompt === 'true');
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('openaiApiKey', apiKey);
    localStorage.setItem('showSystemPrompt', showSystemPrompt.toString());
  };

  return (
    <div className="mt-6">
      <h1 className="text-xl mb-4">Settings</h1>

      <div className="mb-4">
        <label className="block mb-2">OpenAI API Key:</label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-2 bg-slate-800 text-slate-200 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Show System Prompt:</label>
        <input
          type="checkbox"
          checked={showSystemPrompt}
          onChange={(e) => setShowSystemPrompt(e.target.checked)}
          className="p-2 bg-slate-800 text-slate-200 rounded"
        />
      </div>

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};
