import React, { createContext, useState } from 'react';
import main from '../config/gemini';

const Context = createContext();

export const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const onSend = async (prompt) => {
    if (!prompt.trim()) return;
    setResultData('');
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
    setPrevPrompts((prev) => [...prev, prompt]);
    const response = await main(prompt);
    setResultData(response);
    setLoading(false);
    setInput('');
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    onSend
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
export { Context };
