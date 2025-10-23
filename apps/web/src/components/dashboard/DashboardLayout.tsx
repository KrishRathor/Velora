import React, { useState } from 'react';
import { WorkflowsContent } from './Workflow';
import { CredentialsContent } from './Credentials';

type TabType = 'workflows' | 'credentials' | 'executions' | 'data_tables';

interface StatBoxProps {
  label: string;
  value: string;
  subText: string;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value, subText }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md w-1/6 min-w-[150px]">
    <p className="text-sm font-medium text-gray-400">{label}</p>
    <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
    <p className={`text-xs mt-2 ${subText.includes('0') ? 'text-gray-500' : 'text-green-500'}`}>{subText}</p>
  </div>
);

const PlaceholderContent: React.FC<{ tab: string }> = ({ tab }) => (
  <div className="p-8 text-center bg-gray-800 rounded-lg mt-8">
    <h3 className="text-xl font-medium text-white mb-4">{tab.replace('_', ' ').toUpperCase()} View</h3>
    <p className="text-gray-400">Content for the **{tab}** tab goes here.</p>
  </div>
);


export const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('workflows');

  const renderContent = () => {
    switch (activeTab) {
      case 'workflows':
        return <WorkflowsContent />;
      case 'credentials':
        return <CredentialsContent />;
      case 'executions':
        return <PlaceholderContent tab="executions" />;
      case 'data_tables':
        return <PlaceholderContent tab="data_tables" />;
      default:
        return <WorkflowsContent />;
    }
  };

  const TabButton: React.FC<{ tab: TabType; label: string; beta?: boolean }> = ({ tab, label, beta }) => (
    <div
      className={`pb-3 cursor-pointer transition-colors ${activeTab === tab
        ? 'text-white border-b-2 border-indigo-500 font-medium'
        : 'text-gray-400 hover:text-white'
        }`}
      onClick={() => setActiveTab(tab)}
    >
      {label}
      {beta && (
        <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-500 text-gray-900 rounded-full font-bold">
          Beta
        </span>
      )}
    </div>
  );

  return (
    <div className="flex-1 p-6 bg-gray-900 overflow-auto">

      <div className="flex justify-end mb-6">
        <button className="flex cursor-pointer items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors shadow-lg">
          Create Workflow
        </button>
      </div>

      <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        <StatBox label="Prod. executions" value="0" subText="Last 7 days" />
        <StatBox label="Failed prod. executions" value="0" subText="Last 7 days" />
        <StatBox label="Failure rate" value="0%" subText="Last 7 days" />
        <StatBox label="Time saved" value="0" subText="Last 7 days" />
        <StatBox label="Run time (avg.)" value="0s" subText="Last 7 days" />
      </div>

      <hr className="border-gray-700 mb-6" />

      <div className="flex space-x-6 border-b border-gray-700 mb-8">
        <TabButton tab="workflows" label="Workflows" />
        <TabButton tab="credentials" label="Credentials" />
        <TabButton tab="executions" label="Executions" />
        <TabButton tab="data_tables" label="Data tables" beta />
      </div>

      {renderContent()}

    </div>
  );
};
