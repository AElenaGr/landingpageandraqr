import React from 'react';
const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === 'url' ? 'active' : ''}`}
        onClick={() => setActiveTab('url')}
      >
        URL
      </button>
      <button
        className={`tab ${activeTab === 'geolocation' ? 'active' : ''}`}
        onClick={() => setActiveTab('geolocation')}
      >
        Geolocalización
      </button>
      <button
        className={`tab ${activeTab === 'text' ? 'active' : ''}`}
        onClick={() => setActiveTab('text')}
      >
        Texto
      </button>
    </div>
  );
};
export default Tabs;