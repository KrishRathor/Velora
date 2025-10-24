import React from 'react';
import { FaTimes, FaSpinner, FaPlus } from 'react-icons/fa';

interface CreateWorkflowDialogProps {
  isOpen: boolean;
  onClose: () => void;
  mutation: any;
}

export const CreateWorkflowDialog: React.FC<CreateWorkflowDialogProps> = ({ isOpen, onClose, mutation }) => {

  const { isPending, isError, error, mutateAsync, name, setName, description, setDescription } = mutation;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync();
      onClose();
      setName('');
      setDescription('');
    } catch (e) {
      console.error(e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center transition-opacity duration-300">
      <div className="bg-gray-800 rounded-lg shadow-xl w-11/12 md:max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 p-6">

        <div className="flex justify-between items-center pb-3 border-b border-gray-700 mb-4">
          <h3 className="text-xl font-semibold text-white">Create New Workflow</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <FaTimes className="text-lg" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="workflow-name" className="block text-sm font-medium text-gray-300 mb-2">
              Workflow Name
            </label>
            <input
              id="workflow-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Daily Report Generator"
              className="w-full bg-gray-700 border border-gray-600 rounded-md text-white p-2.5 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
              required
              disabled={isPending}
            />
          </div>

          {/* Description Field */}
          <div className="mb-6">
            <label htmlFor="workflow-description" className="block text-sm font-medium text-gray-300 mb-2">
              Description (Optional)
            </label>
            <textarea
              id="workflow-description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What does this workflow do?"
              className="w-full bg-gray-700 border border-gray-600 rounded-md text-white p-2.5 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
              disabled={isPending}
            />
          </div>

          {isError && (
            <div className="p-3 mb-4 text-sm text-red-300 bg-red-900/50 rounded-md">
              Error: {error?.message || 'Failed to create workflow.'}
            </div>
          )}

          <div className="flex justify-end pt-4 border-t border-gray-700">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors mr-3 disabled:opacity-50"
              disabled={isPending}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!name.trim() || isPending}
              className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center ${!name.trim() || isPending
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
            >
              {isPending ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Creating...
                </>
              ) : (
                <>
                  <FaPlus className="mr-2 text-xs" />
                  Create Workflow
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
