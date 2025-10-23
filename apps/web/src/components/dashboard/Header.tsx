import { FaTimes, FaRedo } from 'react-icons/fa';

interface TabProps {
  label: string;
  active?: boolean;
}

const Tab: React.FC<TabProps> = ({ label, active = false }) => (
  <div className={`flex items-center p-2 text-sm cursor-pointer border-b-2 ${active ? 'border-indigo-500 text-white' : 'border-transparent text-gray-400 hover:border-gray-500 hover:text-white'}`}>
    <span>{label}</span>
    <FaTimes className="ml-3 text-xs hover:text-red-400" />
  </div>
);

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-10 bg-gray-900 text-white px-4">

      <div className="flex items-center">
        <span className="text-sm text-gray-400 mr-4">krishrathor.app.n8n.cloud/home/workflows</span>

        <div className="flex space-x-4">
          <Tab label="n8n" active />
          <Tab label="AI Workflow Automat..." />
          <Tab label="Workflows - n8n" />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-1 px-3 rounded transition-colors">
          <FaRedo className="mr-2 text-xs" />
          Re-launch to update
        </button>
      </div>
    </header>
  );
};
