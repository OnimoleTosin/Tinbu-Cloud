// src/components/Tabs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
  ${({ active }) => active && `
    border-bottom: 2px solid #007bff;
    font-weight: bold;
  `}
`;

const TabContent = styled.div`
  padding: 20px;
`;

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            active={tab.label === activeTab}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsContainer>
      <TabContent>
        {tabs.map(
          (tab) =>
            tab.label === activeTab && <div key={tab.label}>{tab.content}</div>
        )}
      </TabContent>
    </div>
  );
};

export default Tabs;
