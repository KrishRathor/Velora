import React from 'react';
import { FaEdit, FaToggleOn, FaToggleOff, FaRegClock } from 'react-icons/fa';
import type { WorkflowI } from './Workflow';

interface WorkflowCardProps {
  workflow: WorkflowI;
  onEdit: (id: string) => void;
  onToggle: (id: string, isActive: boolean) => void;
}

const formatDateTime = (isoString: string) => {
  if (!isoString) return 'N/A';
  return new Date(isoString).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
};

export const WorkflowCard: React.FC<WorkflowCardProps> = ({ workflow, onEdit, }) => {
  const isActive = workflow.isActive;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:border-indigo-600 transition-all flex flex-col md:flex-row justify-between items-start md:items-center">

      <div className="flex-1 min-w-0 mb-3 md:mb-0 md:mr-6">
        <div className="flex items-center mb-1">
          <span className={`w-3 h-3 rounded-full mr-3 ${isActive ? 'bg-green-500' : 'bg-gray-500'}`} title={isActive ? 'Active' : 'Inactive'}></span>

          <h4
            className="text-lg font-semibold text-white truncate cursor-pointer hover:text-indigo-400"
            onClick={() => onEdit(workflow.id)}
            title={workflow.name}
          >
            {workflow.name}
          </h4>
        </div>
        <p className="text-sm text-gray-400 truncate pl-6 pr-4">
          {workflow.description || 'No description provided.'}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-8 text-sm text-gray-400 flex-shrink-0 mb-3 md:mb-0">

        <div className="flex items-center space-x-2">
          {isActive ? (
            <FaToggleOn className="text-green-500" />
          ) : (
            <FaToggleOff className="text-gray-500" />
          )}
          <span className={`font-medium ${isActive ? 'text-green-400' : 'text-gray-500'}`}>
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>

        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <FaRegClock className="text-indigo-400" />
          <span>Updated: {formatDateTime(workflow.updatedAt)}</span>
        </div>
      </div>

      <div className="flex space-x-3 flex-shrink-0 pt-3 md:pt-0 border-t border-gray-700 md:border-t-0">

        <button
          onClick={() => onEdit(workflow.id)}
          className="ml-2 p-2 cursor-pointer rounded-full bg-indigo-700 hover:bg-indigo-600 text-white transition-colors"
          title="Edit Workflow"
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
};
