import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import { Home } from './Home.js';
import { Me } from './Me.js';
import { Graph } from './Graph.js';
import { Settings } from './Settings.js';
import { Chat } from './Chat.js';
import { show_graph } from 'wasm-graph-view';
import { defaultSettings, useGraphData } from './GraphDataContext.js';
const NavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;


  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md  ${
        isActive ? ' text-white' : 'text-slate-700  hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

const HomeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const GraphIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 16 16"  ><path fill-rule="evenodd" clip-rule="evenodd" fill='currentColor' d="M7.2757 4.82358C7.57934 4.71847 7.57934 4.53161 7.2757 4.41483L5.62905 3.78419C5.33709 3.67908 4.99842 3.3404 4.88164 3.03676L4.25101 1.39009C4.1459 1.08644 3.95905 1.08644 3.84226 1.39009L3.21163 3.03676C3.10653 3.32872 2.76786 3.6674 2.46422 3.78419L0.817572 4.41483C0.513934 4.51994 0.513934 4.70679 0.817572 4.82358L2.46422 5.45422C2.75618 5.55933 3.09485 5.898 3.21163 6.20165L3.84226 7.84832C3.94737 8.15196 4.13422 8.15196 4.25101 7.84832L4.88164 6.20165C4.98674 5.90968 5.32541 5.571 5.62905 5.45422L7.2757 4.82358ZM15.2991 10.5929C16.2334 10.3593 16.2334 9.9739 15.2991 9.74032L13.2321 9.22647C12.2978 8.9929 11.3402 8.03526 11.1066 7.10097L10.5928 5.03387C10.3592 4.09959 9.97382 4.09959 9.74025 5.03387L9.2264 7.10097C8.99283 8.03526 8.03521 8.9929 7.10094 9.22647L5.03387 9.74032C4.09961 9.9739 4.09961 10.3593 5.03387 10.5929L7.10094 11.1067C8.03521 11.3403 8.99283 12.2979 9.2264 13.2322L9.74025 15.2993C9.97382 16.2336 10.3592 16.2336 10.5928 15.2993L11.1066 13.2322C11.3402 12.2979 12.2978 11.3403 13.2321 11.1067L15.2991 10.5929Z"></path></svg>
);

const MeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SettingsIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const App: React.FC = () => {

  return (
    <Router>
      <div className="bg-slate-950 min-h-screen relative pt-40"> {/* Added pt-14 for top padding */}
        <nav className="p-1 fixed top-0 left-0 w-full z-10 bg-slate-950"> {/* Changed to fixed and added z-10 */}
          <div className="flex justify-between items-center">
            <div className="flex flex-row ">
              <NavLink to="/">
                <HomeIcon />
              </NavLink>
              <NavLink to="/chat">
                <GraphIcon />
              </NavLink>

            </div>
            <div className="flex flex-row ">
            <NavLink to="/settings">
              <SettingsIcon />
            </NavLink>
            <NavLink to="/me">
              <MeIcon />
            </NavLink>
            </div>
          </div>
          <canvas id="viz" className="focus:outline-none h-32 w-full"></canvas>
        </nav>
        <div className="mt-4">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};
