import { useEdges, useNodes } from '@xyflow/react';
import React from 'react';
import { FaSave, FaSpinner } from 'react-icons/fa';

interface WorkflowEditorBarProps {
  workflowName: string;
  isSaving: boolean;
  onSave: () => void;
  saveSuccessful: boolean;
}

export const WorkflowEditorBar: React.FC<WorkflowEditorBarProps> = ({
  workflowName,
  isSaving,
  onSave,
  saveSuccessful
}) => {

  const nodes = useNodes();
  const edges = useEdges();

  return (
    <div className="flex justify-between items-center h-16 bg-gray-800 border-b border-gray-700 px-6 shadow-md flex-shrink-0">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-white truncate max-w-sm mr-4">
          {workflowName}
        </h2>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${saveSuccessful ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-400'}`}>
          {saveSuccessful ? 'Saved' : 'Unsaved Changes'}
        </span>
      </div>

      <button
        onClick={() => {
          console.log(nodes, edges);
          onSave();
        }}
        disabled={isSaving}
        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${isSaving
            ? 'bg-indigo-700 text-indigo-300 cursor-not-allowed'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
      >
        {isSaving ? (
          <FaSpinner className="animate-spin mr-2" />
        ) : (
          <FaSave className="mr-2" />
        )}
        {isSaving ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
};
