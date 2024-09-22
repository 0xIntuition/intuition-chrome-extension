import React, { useState, useEffect } from 'react';

export const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openaiApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('openaiApiKey', apiKey);
  };

  return (
    <div className="p-4 bg-slate-900 text-slate-200 min-h-screen">
      <h1 className="text-2xl mb-4">Settings</h1>
      
      <div className="mb-4">
        <label className="block mb-2">OpenAI API Key:</label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-2 bg-slate-800 text-slate-200 rounded"
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
