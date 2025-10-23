import { BiFile } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";

export const WorkflowsContent: React.FC = () => (
  <div className="flex flex-col items-center justify-center p-10 mt-16 text-center">
    <h3 className="text-xl font-medium text-white mb-6">Welcome Krish!</h3>
    <p className="text-gray-400 mb-10">Create your first workflow</p>

    <div className="flex space-x-8">
      <button className="flex flex-col items-center cursor-pointer justify-center w-64 h-48 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors p-4">
        <BiFile className="text-5xl text-indigo-500 mb-3" />
        <span className="text-lg text-white font-medium">Start from scratch</span>
      </button>

      <button className="flex flex-col items-center justify-center cursor-pointer w-64 h-48 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors p-4">
        <FaRunning className="text-5xl text-indigo-500 mb-3" />
        <span className="text-lg text-white font-medium text-center">Test a simple AI Agent example</span>
      </button>
    </div>
  </div>
);
