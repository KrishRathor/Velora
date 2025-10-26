import React, { useMemo, useState } from 'react';
import { FaTimes, FaMousePointer, FaClock, FaCalendarAlt, FaEnvelopeOpenText, FaRunning, FaSearch, FaLink, FaArrowLeft, FaToggleOn, FaToggleOff } from 'react-icons/fa';

export enum SidebarView {
  MAIN_TRIGGERS,
  APP_SELECTION,
  OPERATION_CONFIG,
}

export enum Integration {
  GITHUB = "github",
  GMAIL = "gmail",
}

export enum Ops {
  CREATE_PR_TRIGGER = "create_pr_trigger",
  CREATE_ISSUE_TRIGGER = "create_issue_trigger",
  GET_PR_DETAILS = "get_pr_details",
  ADD_COMMENT_TO_PR = "add_comment_to_pr",
  MERGE_PR = "merge_pr",
  CREATE_ISSUE = "create_issue",
  LIST_USER_REPO = "list_user_repo",
}

export interface IWorkflowNodeConfig {
  integration: Integration;
  operation: Ops;
  repo?: string;
  prNumber?: string;
  comment?: string;
  issueTitle?: string;
  issueBody?: string;
  condition?: string;
}

const availableIntegrations = [
  { name: 'GitHub', value: Integration.GITHUB, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
  { name: 'Gmail', value: Integration.GMAIL, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
  { name: 'Airtable', value: 'airtable' as Integration, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
  { name: 'Notion', value: 'notion' as Integration, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
];

const integrationOps: Record<Integration, { title: string, value: Ops }[]> = {
  [Integration.GITHUB]: [
    { title: 'Create PR Trigger', value: Ops.CREATE_PR_TRIGGER },
    { title: 'Create Issue Trigger', value: Ops.CREATE_ISSUE_TRIGGER },
    { title: 'Get PR Details', value: Ops.GET_PR_DETAILS },
    { title: 'Add Comment to PR', value: Ops.ADD_COMMENT_TO_PR },
    { title: 'Merge PR', value: Ops.MERGE_PR },
    { title: 'Create Issue', value: Ops.CREATE_ISSUE },
    { title: 'List User Repos', value: Ops.LIST_USER_REPO },
  ],
  [Integration.GMAIL]: [
    { title: 'Send Email', value: 'send_email' as Ops },
    { title: 'Watch New Email', value: 'watch_email' as Ops },
  ],
};

interface NodeItem {
  type: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const mainTriggerItems: NodeItem[] = [
  { type: 'trigger-manual', icon: <FaMousePointer />, title: 'Trigger manually', description: 'Runs the flow when you press a button in n8n. Good for getting started quickly.' },
  { type: 'trigger-app-event', icon: <FaEnvelopeOpenText />, title: 'On app event', description: 'Runs the flow when something happens in an app like Telegram, Notion or Airtable.' },
  { type: 'trigger-schedule', icon: <FaClock />, title: 'On a schedule', description: 'Runs the flow every hour, day, or custom interval.' },
  { type: 'trigger-webhook', icon: <FaCalendarAlt />, title: 'On webhook call', description: 'Runs the flow on receiving an HTTPS request.' },
  { type: 'trigger-other', icon: <FaRunning />, title: 'Other ways...', description: 'Runs the flow on schedule, form submission, or other complex events.' },
];

interface NodeSelectorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  // Updated signature to include type for non-App triggers
  onAddNode: (config: IWorkflowNodeConfig | Partial<IWorkflowNodeConfig>, type: string) => void;
}

// --- DYNAMIC FORM INPUT COMPONENT ---

interface DynamicFormInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: 'text' | 'textarea';
  isDynamic: boolean;
  setIsDynamic: (isDynamic: boolean) => void;
}

const DynamicFormInput: React.FC<DynamicFormInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
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
          onChange={onChange} // Reusing onChange since value is handled by parent state
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


// --- NODE SELECTOR SIDEBAR COMPONENT ---

export const NodeSelectorSidebar: React.FC<NodeSelectorSidebarProps> = ({ isOpen, onClose, onAddNode }) => {

  const [view, setView] = useState<SidebarView>(SidebarView.MAIN_TRIGGERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentConfig, setCurrentConfig] = useState<Partial<IWorkflowNodeConfig>>({});
  // NEW STATE: Tracks which fields are currently toggled to be dynamic
  const [dynamicFields, setDynamicFields] = useState<Record<keyof IWorkflowNodeConfig, boolean>>({});

  const filteredApps = useMemo(() => {
    return availableIntegrations.filter(app =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredOps = useMemo(() => {
    if (!currentConfig.integration) return [];
    return integrationOps[currentConfig.integration as Integration].filter(op =>
      op.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, currentConfig.integration]);

  const handleMainTriggerClick = (type: string) => {
    if (type === 'trigger-app-event') {
      setView(SidebarView.APP_SELECTION);
      setSearchTerm('');
      setCurrentConfig({});
    } else {
      // Simple triggers just create a node
      onAddNode({}, type);
      onClose();
    }
  };

  const handleAppSelect = (integration: Integration) => {
    setCurrentConfig({ integration });
    setView(SidebarView.OPERATION_CONFIG);
    setSearchTerm('');
  };

  const handleOpSelect = (operation: Ops) => {
    setCurrentConfig(prev => ({
      ...prev,
      operation,
      // Only set the initial values for the form to ensure they exist in currentConfig
      repo: prev.repo ?? '',
      issueTitle: prev.issueTitle ?? '',
      comment: prev.comment ?? '',
      prNumber: prev.prNumber ?? '',
      issueBody: prev.issueBody ?? '',
    }));
  };

  const handleCreateNode = () => {
    const { integration, operation } = currentConfig;

    if (integration && operation) {
      // For App-based nodes, the type is usually the integration name
      const nodeType = currentConfig.integration;
      onAddNode(currentConfig as IWorkflowNodeConfig, nodeType);

      setCurrentConfig({});
      setDynamicFields({});
      setView(SidebarView.MAIN_TRIGGERS);
      onClose();
    } else {
      alert('Please select an integration and operation.');
    }
  };

  // Handler for the dynamic/static toggle
  const handleToggleDynamic = (key: keyof IWorkflowNodeConfig, isDynamic: boolean) => {
    setDynamicFields(prev => ({ ...prev, [key]: isDynamic }));
  };

  const renderHeaderTitle = () => {
    switch (view) {
      case SidebarView.MAIN_TRIGGERS:
        return 'What triggers this workflow?';
      case SidebarView.APP_SELECTION:
        return 'Select an App';
      case SidebarView.OPERATION_CONFIG:
        const appName = availableIntegrations.find(a => a.value === currentConfig.integration)?.name;
        const opTitle = integrationOps[currentConfig.integration as Integration]?.find(op => op.value === currentConfig.operation)?.title;
        return currentConfig.operation ? `Configure ${opTitle}` : `Select ${appName} Operation`;
    }
  };

  const renderContent = () => {
    switch (view) {
      case SidebarView.MAIN_TRIGGERS:
        return (
          <div className="flex-1 overflow-y-auto space-y-3 pb-4 custom-scroll">
            {mainTriggerItems.map((item) => (
              <div
                key={item.type}
                onClick={() => handleMainTriggerClick(item.type)}
                className="p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors border border-gray-700 hover:border-indigo-500"
              >
                <div className="flex items-start">
                  <div className="text-indigo-400 text-xl flex-shrink-0 pt-1 mr-3">{item.icon}</div>
                  <div>
                    <h5 className="text-white font-medium text-base mb-1">{item.title}</h5>
                    <p className="text-gray-400 text-xs leading-tight">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case SidebarView.APP_SELECTION:
        return (
          <div className="flex-1 overflow-y-auto space-y-3 pb-4 custom-scroll">
            {filteredApps.length > 0 ? (
              filteredApps.map((item) => (
                <div
                  key={item.value}
                  onClick={() => handleAppSelect(item.value as Integration)}
                  className="p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors border border-gray-700 hover:border-green-500"
                >
                  <div className="flex items-center">
                    <div className="text-green-400 text-xl flex-shrink-0 mr-3">{item.icon}</div>
                    <h5 className="text-white font-medium text-base">{item.name}</h5>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm p-3">No apps found matching "{searchTerm}".</p>
            )}
          </div>
        );

      case SidebarView.OPERATION_CONFIG:
        const { operation } = currentConfig;

        if (!operation) {
          return (
            <div className="flex flex-col h-full">
              <h5 className="text-white font-medium text-sm mb-3">
                Select an operation for {availableIntegrations.find(a => a.value === currentConfig.integration)?.name}:
              </h5>
              <div className="flex-1 overflow-y-auto space-y-3 pb-4 custom-scroll">
                {filteredOps.map(op => (
                  <div
                    key={op.value}
                    onClick={() => handleOpSelect(op.value)}
                    className="p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors border border-gray-700"
                  >
                    <h5 className="text-white font-medium text-base">{op.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          const opTitle = integrationOps[currentConfig.integration as Integration]?.find(op => op.value === operation)?.title || operation;

          const requiredFields = {
            repo: [Ops.CREATE_ISSUE, Ops.CREATE_PR_TRIGGER, Ops.CREATE_ISSUE_TRIGGER, Ops.LIST_USER_REPO, Ops.GET_PR_DETAILS].includes(operation),
            prNumber: [Ops.GET_PR_DETAILS, Ops.ADD_COMMENT_TO_PR, Ops.MERGE_PR].includes(operation),
            issueTitle: [Ops.CREATE_ISSUE].includes(operation),
            issueBody: [Ops.CREATE_ISSUE].includes(operation),
            comment: [Ops.ADD_COMMENT_TO_PR].includes(operation),
          };

          const handleFieldChange = (key: keyof IWorkflowNodeConfig, value: string) => {
            setCurrentConfig(prev => ({ ...prev, [key]: value }));
          };

          return (
            <div className="flex flex-col h-full space-y-4">
              <h5 className="text-white font-medium text-lg border-b border-gray-700 pb-2 mb-2">
                {opTitle}
              </h5>
              <div className="flex-1 overflow-y-auto space-y-4 pb-4 custom-scroll">
                {/* Conditional Input Fields using DynamicFormInput */}
                {requiredFields.repo && (
                  <DynamicFormInput
                    label="Repository Name"
                    value={currentConfig.repo || ''}
                    onChange={(e) => handleFieldChange('repo', e.target.value)}
                    isDynamic={dynamicFields.repo || false}
                    setIsDynamic={(isD) => handleToggleDynamic('repo', isD)}
                    placeholder="owner/repo-name"
                  />
                )}
                {requiredFields.prNumber && (
                  <DynamicFormInput
                    label="Pull Request Number"
                    value={currentConfig.prNumber || ''}
                    onChange={(e) => handleFieldChange('prNumber', e.target.value)}
                    isDynamic={dynamicFields.prNumber || false}
                    setIsDynamic={(isD) => handleToggleDynamic('prNumber', isD)}
                    placeholder="e.g., 42"
                  />
                )}
                {requiredFields.issueTitle && (
                  <DynamicFormInput
                    label="Issue Title"
                    value={currentConfig.issueTitle || ''}
                    onChange={(e) => handleFieldChange('issueTitle', e.target.value)}
                    isDynamic={dynamicFields.issueTitle || false}
                    setIsDynamic={(isD) => handleToggleDynamic('issueTitle', isD)}
                    placeholder="New Feature Idea"
                  />
                )}
                {requiredFields.issueBody && (
                  <DynamicFormInput
                    label="Issue Body"
                    type="textarea"
                    value={currentConfig.issueBody || ''}
                    onChange={(e) => handleFieldChange('issueBody', e.target.value)}
                    isDynamic={dynamicFields.issueBody || false}
                    setIsDynamic={(isD) => handleToggleDynamic('issueBody', isD)}
                    placeholder="Detailed description..."
                  />
                )}
                {requiredFields.comment && (
                  <DynamicFormInput
                    label="Comment Body"
                    type="textarea"
                    value={currentConfig.comment || ''}
                    onChange={(e) => handleFieldChange('comment', e.target.value)}
                    isDynamic={dynamicFields.comment || false}
                    setIsDynamic={(isD) => handleToggleDynamic('comment', isD)}
                    placeholder="Type your comment here..."
                  />
                )}
                {/* You can add a static condition field if needed: */}
                {/* <DynamicFormInput 
                                    label="Condition (Expression)" 
                                    value={currentConfig.condition || ''}
                                    onChange={(e) => handleFieldChange('condition', e.target.value)}
                                    isDynamic={true}
                                    setIsDynamic={() => {}}
                                    placeholder="{{ $json.status === 'approved' }}"
                                /> */}
              </div>

              <button
                onClick={handleCreateNode}
                className="flex justify-center items-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-md font-medium transition-colors mt-auto"
              >
                <FaLink className="mr-2" />
                Create Node
              </button>
            </div>
          );
        }
    }
  };

  return (
    <div
      className={`absolute top-0 right-0 h-full w-full max-w-sm bg-gray-800 shadow-2xl z-20 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex flex-col h-full p-4">

        <div className="flex items-center border-b border-gray-700 pb-3 mb-4">
          {view !== SidebarView.MAIN_TRIGGERS && (
            <button
              onClick={() => {
                if (view === SidebarView.APP_SELECTION) setView(SidebarView.MAIN_TRIGGERS);
                if (view === SidebarView.OPERATION_CONFIG) {
                  setCurrentConfig(prev => ({ integration: prev.integration }));
                  setView(SidebarView.APP_SELECTION);
                }
                setSearchTerm('');
              }}
              className="text-gray-400 hover:text-white mr-3 p-1 transition-colors"
            >
              <FaArrowLeft className="text-xl" />
            </button>
          )}
          <h4 className="text-white text-lg font-semibold flex-1">{renderHeaderTitle()}</h4>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <FaTimes className="text-xl" />
          </button>
        </div>

        {view !== SidebarView.MAIN_TRIGGERS && !currentConfig.operation && (
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search nodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md text-white p-2.5 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        )}

        {renderContent()}

      </div>
    </div>
  );
};
