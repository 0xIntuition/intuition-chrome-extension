import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

interface MessageProps {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const Message: React.FC<MessageProps> = ({ role, content }) => {
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);
    useEffect(() => {
    const bool = localStorage.getItem('showSystemPrompt');
    if (bool) {
      setShowSystemPrompt(bool === 'true');
    }
  }, []);
  if (role === 'system' && !showSystemPrompt) {
    return null;
  }

  return (
    <div className={`mb-4 ${role === 'user' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block  p-2 pb-0 rounded-lg ${role === 'user' ? 'bg-sky-900' : 'bg-slate-900'}`}>
        <Markdown
        components={{
          img: ({node, ...props}) => <img {...props} style={{maxHeight: '1em'}} />,
            p: ({ node, ...props }) => <p {...props} className="text-slate-200 mb-2 text-sm text-wrap break-words" />,
            h1: ({ node, ...props }) => <h1 {...props} className="text-slate-200 mt-2 text-xl text-wrap break-words" />,
            h2: ({ node, ...props }) => <h2 {...props} className="text-slate-200 mt-2 text-lg text-wrap break-words" />,
            h3: ({ node, ...props }) => <h3 {...props} className="text-slate-200 mt-2 text-md text-wrap break-words" />,
            h4: ({ node, ...props }) => <h4 {...props} className="text-slate-200 mt-1 text-sm text-wrap break-words" />,
            h5: ({ node, ...props }) => <h5 {...props} className="text-slate-200 mt-1 text-sm text-wrap break-words" />,
            h6: ({ node, ...props }) => <h6 {...props} className="text-slate-200 mt-1 text-sm text-wrap break-words" />,
            ul: ({ node, ...props }) => <ul {...props} className="text-slate-200 mt-1 list-disc list-inside ml-2 text-sm text-wrap break-words" />,
            ol: ({ node, ...props }) => <ol {...props} className="text-slate-200 mt-1 list-decimal list-inside ml-4 text-sm text-wrap break-words" />,

        }}
        className="text-slate-200 text-wrap break-words">{content}</Markdown>
      </div>
    </div>
  );
};
