import React, { useState, useEffect } from 'react';

export const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [pinataApiKey, setPinataApiKey] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4NmJhNGFkNy1kMTg0LTQ3MGItYjIzOS1kZDk4ODAwMTk3NTgiLCJlbWFpbCI6ImJpbGx5QGludHVpdGlvbi5zeXN0ZW1zIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI4NGRkZTViNjM5ZDdkOWU5MmI2Iiwic2NvcGVkS2V5U2VjcmV0IjoiNGYwOTM0YjM4NjAwOWI4MjgwMGNkMDE4YzZhMWQ1ZjA0MmFmY2Y5OWUyNDVhY2U2ODM1YjFjOWE2OWQzYWJmMyIsImV4cCI6MTc1ODYyNDQyNH0.9n7-XOh6Q2IycJP7uweZCtsL4eqLHimsyBqf73Y8QgU');
const [showSystemPrompt, setShowSystemPrompt] = useState(false);

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openaiApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
    const savedPinataApiKey = localStorage.getItem('pinataApiKey');
    if (savedPinataApiKey) {
      setPinataApiKey(savedPinataApiKey);
    }
    const savedShowSystemPrompt = localStorage.getItem('showSystemPrompt');
    if (savedShowSystemPrompt) {
      setShowSystemPrompt(savedShowSystemPrompt === 'true');
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('openaiApiKey', apiKey);
    localStorage.setItem('pinataApiKey', pinataApiKey);
    localStorage.setItem('showSystemPrompt', showSystemPrompt.toString());
  };

  return (
    <div className="p-4 bg-slate-900 text-slate-200 min-h-screen">
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
        <label className="block mb-2">Pinata API Key:</label>
        <input
          type="password"
          value={pinataApiKey}
          onChange={(e) => setPinataApiKey(e.target.value)}
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
