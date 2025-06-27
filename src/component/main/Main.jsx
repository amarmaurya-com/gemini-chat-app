import React, { useContext } from 'react';
import './Main.css';
import assets from '../../assets/assets';
import { Context } from '../../context/Context';

export const Main = () => {
  const { onSend, recentPrompt, showResult, loading, resultData, input, setInput } =
    useContext(Context);

  return (
    <div className="main">
      <header className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </header>

      <div className="main-content">
        {!showResult ? (
          <>
            <section className="greet">
              <p><span>Hello, Dear!</span></p>
              <p>How can I help you today?</p>
            </section>

            <section className="cards">
              {['compass', 'bulb', 'message', 'code'].map((icon, i) => (
                <div className="card" key={i}>
                  <p>Suggest beautiful place to see on an upcoming road trip</p>
                  <img src={assets[`${icon}_icon`]} alt={`${icon}_icon`} />
                </div>
              ))}
            </section>
          </>
        ) : (
          <section className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user_icon" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini_icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </section>
        )}

        <footer className="main-bottom">
          <div className="search-box">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSend(input)}
              placeholder="Hey, there!"
              type="text"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img src={assets.send_icon} alt="send_icon" onClick={() => onSend(input)} />
            </div>
          </div>
          <p className="bottom-info">Gemini can make mistakes, so double-check it</p>
        </footer>
      </div>
    </div>
  );
};

export default Main;
