import React, { useState, useContext } from 'react';
import { assets } from '../../assets/assets';
import './Sidebar.css';
import { Context } from '../../context/Context';

export const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { prevPrompts } = useContext(Context);

  return (
    <aside className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => setExtended((p) => !p)}
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus" className="plus-icon" />
          {extended && <p>New chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, i) => (
              <div className="recent-entry" key={i}>
                <img src={assets.message_icon} alt="msg" />
                <p>{item}…</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom">
        {[
          ['question', 'Help'],
          ['history', 'History'],
          ['setting', 'Settings'],
        ].map(([icon, label]) => (
          <div className="bottom-item recent-entry" key={icon}>
            <img src={assets[`${icon}_icon`]} alt={icon} />
            {extended && <p>{label}</p>}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
