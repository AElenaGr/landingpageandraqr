import React from 'react';
const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`button ${activeTab === 'url' ? 'active' : ''}`}
        onClick={() => setActiveTab('url')}
      >
        URL
      </button>
      <button
        className={`button ${activeTab === 'geolocation' ? 'active' : ''}`}
        onClick={() => setActiveTab('geolocation')}
      >
        Geolocalización
      </button>
      <button
        className={`button ${activeTab === 'text' ? 'active' : ''}`}
        onClick={() => setActiveTab('text')}
      >
        Texto
      </button>
    </div>
  );
};
export default Tabs;