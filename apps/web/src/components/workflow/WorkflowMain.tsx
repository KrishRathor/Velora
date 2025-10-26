import React, { useState } from 'react';
import { WorkflowEditorBar } from './Navbar';
import type { WorkflowI } from '../dashboard/Workflow';
import { Editor } from './Editor';

interface WorkflowMainProps {
  workflow: WorkflowI
}

export const WorkflowMain: React.FC<WorkflowMainProps> = ({ workflow }) => {
  const [workflowName, _setWorkflowName] = useState<string>(workflow.name);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessful, setSaveSuccessful] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setSaveSuccessful(false);

    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccessful(true);
      console.log("Workflow Saved!");

      setTimeout(() => setSaveSuccessful(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-900 overflow-hidden">

      <WorkflowEditorBar
        workflowName={workflowName}
        isSaving={isSaving}
        onSave={handleSave}
        saveSuccessful={saveSuccessful}
      />

      <div className="flex-1 p-4 overflow-auto">
        <Editor workflow={workflow} />
      </div>
    </div>
  );
};
