import React from 'react';
import Markdown from 'react-markdown';

interface MessageProps {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const Message: React.FC<MessageProps> = ({ role, content }) => {
  if (role === 'system') {
    return null;
  }

  return (
    <div className={`mb-4 ${role === 'user' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-2 rounded-lg ${role === 'user' ? 'bg-sky-900' : 'bg-slate-900'}`}>
        <Markdown
        components={{
          img: ({node, ...props}) => <img {...props} style={{maxHeight: '1em'}} />  
        }}
        className="text-slate-200">{content}</Markdown>
      </div>
    </div>
  );
};
