import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaSearch, FaChevronDown, FaLink } from 'react-icons/fa';

const availableIntegrations = [
  'Slack', 'Google Sheets', 'Airtable', 'Stripe', 'AWS S3',
  'Twilio', 'github', 'OpenAI', 'Salesforce', 'Discord',
  'Pipedrive', 'Asana', 'Jira', 'Mailchimp'
];

interface AddCredentialDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (integrationName: string) => void;
}

export const AddCredentialDialog: React.FC<AddCredentialDialogProps> = ({ isOpen, onClose, onConnect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredIntegrations = availableIntegrations
    .filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const handleSelect = (name: string) => {
    setSelectedIntegration(name);
    setSearchTerm(name);
    setIsDropdownOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center transition-opacity duration-300">

      <div
        className="bg-gray-800 rounded-lg shadow-xl w-11/12 md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 p-6"
        onClick={e => e.stopPropagation()} // Prevent click from closing modal immediately
      >

        <div className="flex justify-between items-center pb-3 border-b border-gray-700 mb-4">
          <h3 className="text-xl font-semibold text-white">Connect a New Service</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <FaTimes className="text-lg" />
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-6">Select a service to create a new credential for your workflows.</p>

        <div className="relative mb-6" ref={dropdownRef}>
          <label className="block text-sm font-medium text-gray-300 mb-2">Select Integration</label>
          <div
            className="flex items-center bg-gray-700 border border-gray-600 rounded-md text-white p-3 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search or select integration..."
              className="bg-transparent flex-1 text-white placeholder-gray-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsDropdownOpen(true);
                setSelectedIntegration('');
              }}
            />
            <FaChevronDown className={`text-gray-400 ml-3 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </div>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
              {filteredIntegrations.length > 0 ? (
                filteredIntegrations.map((name) => (
                  <div
                    key={name}
                    className={`p-3 text-sm cursor-pointer hover:bg-indigo-600 hover:text-white transition-colors ${selectedIntegration === name ? 'bg-indigo-700 text-white' : 'text-gray-300'}`}
                    onClick={() => handleSelect(name)}
                  >
                    {name}
                  </div>
                ))
              ) : (
                <div className="p-3 text-sm text-gray-400">No integrations found.</div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors mr-3"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (selectedIntegration) onConnect(selectedIntegration);
              onClose();
            }}
            disabled={!selectedIntegration}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center ${selectedIntegration
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
          >
            <FaLink className="mr-2" />
            Connect to {selectedIntegration || 'Service'}
          </button>
        </div>

      </div>
    </div>
  );
};
