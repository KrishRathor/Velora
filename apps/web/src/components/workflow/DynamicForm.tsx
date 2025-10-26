import React from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

interface DynamicFormInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: 'text' | 'textarea';
  onDynamicChange: (value: string) => void;
  isDynamic: boolean;
  setIsDynamic: (isDynamic: boolean) => void;
}

export const DynamicFormInput: React.FC<DynamicFormInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  onDynamicChange,
  isDynamic,
  setIsDynamic
}) => {

  const ToggleButton = () => (
    <button
      type="button"
      onClick={() => setIsDynamic(!isDynamic)}
      className="flex items-center text-xs font-medium text-gray-400 hover:text-white transition-colors"
      title={isDynamic ? 'Switch to Static Value' : 'Switch to Dynamic Expression'}
    >
      {isDynamic ? (
        <FaToggleOn className="text-green-500 mr-1 text-lg" />
      ) : (
        <FaToggleOff className="text-gray-500 mr-1 text-lg" />
      )}
      {isDynamic ? 'Expression' : 'Static'}
    </button>
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <ToggleButton />
      </div>

      {isDynamic ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onDynamicChange(e.target.value)} // Use onDynamicChange here
          placeholder={`e.g., {{ $json.pr_id }}`}
          className="bg-indigo-900/40 border border-indigo-500 rounded-md text-yellow-300 font-mono p-2 placeholder-indigo-300/70 focus:ring-indigo-500 focus:border-indigo-500"
        />
      ) : (
        type === 'textarea' ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={4}
            className="bg-gray-700 border border-gray-600 rounded-md text-white p-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-gray-700 border border-gray-600 rounded-md text-white p-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
          />
        )
      )}
    </div>
  );
};
