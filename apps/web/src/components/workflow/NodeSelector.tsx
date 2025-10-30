import React, { useMemo, useState } from 'react';
import {
  FaTimes,
  FaEnvelopeOpenText,
  FaSearch,
  FaLink,
  FaArrowLeft,
  FaToggleOn,
  FaToggleOff
} from 'react-icons/fa';
import { WalletAddressField } from './WalletInput';
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { BACKEND_URL } from "../../utils/constants";


export enum SidebarView {
  MAIN_TRIGGERS,
  APP_SELECTION,
  OPERATION_CONFIG,
}

export type Integration = 'github' | 'gmail' | 'airtable' | 'notion' | 'solana';

export type Ops =
  | "create_pr_trigger"
  | "create_issue_trigger"
  | "get_pr_details"
  | "add_comment_to_pr"
  | "merge_pr"
  | "create_issue"
  | "list_user_repo"
  | "sol_transfer"
  | "recieve_email"
  | "recieve_email_from_specific_account"
  | "send_mail";


export interface NodeQueuePayload {
  workflowId: string;
  node: string;
  prevNode?: string;
  prevNodeOperation?: | "create_pr_trigger"
  | "create_issue_trigger"
  | "get_pr_details"
  | "add_comment_to_pr"
  | "merge_pr"
  | "create_issue"
  | "list_user_repo"
  | "sol_transfer"
  | "sol_get_balance"
  | "recieve_email"
  | "recieve_email_from_specific_account"
  | "send_mail";
  integration: "github" | "gmail" | "solana";
  operation: | "create_pr_trigger"
  | "create_issue_trigger"
  | "get_pr_details"
  | "add_comment_to_pr"
  | "merge_pr"
  | "create_issue"
  | "list_user_repo"
  | "sol_transfer"
  | "sol_get_balance"
  | "recieve_email"
  | "recieve_email_from_specific_account"
  | "send_mail";
  accessToken: string;
  refreshToken?: string;
  config: IWorkflowNodeConfig;
  result?: {
    prNumber?: number,
    prId?: string | number,
    prUrl?: string,
    sol_transfer_from?: string,
    sol_transfer_to?: string,
    sol_transfer_balance?: number,
    token_transfer_from?: string,
    token_transfer_to?: string,
    token_transfer_amount?: number,
    current_sol_balance?: number,
    email_from?: string,
    email_subject?: string,
    email_body?: string
  };
}


export type ValueOrDynamic<T = any> =
  | { type: 'static'; value: T }
  | { type: 'dynamic'; nodeId: string; field: keyof NodeQueuePayload['result'] };

export interface IWorkflowNodeConfig {
  integration: Integration;
  operation:
  | 'create_pr_trigger'
  | 'create_issue_trigger'
  | 'get_pr_details'
  | 'add_comment_to_pr'
  | 'merge_pr'
  | 'create_issue'
  | 'list_user_repo'
  | "sol_transfer"
  | "sol_get_balance"
  | "recieve_email"
  | "recieve_email_from_specific_account"
  | "send_mail";
  repo?: string | ValueOrDynamic<string>;
  prNumber?: string | ValueOrDynamic<string>;
  comment?: string | ValueOrDynamic<string>;
  issueTitle?: string | ValueOrDynamic<string>;
  issueBody?: string | ValueOrDynamic<string>;
  condition?: string | ValueOrDynamic<string>;
  walletAddress?: string | ValueOrDynamic<string>
  fromEmail?: string | ValueOrDynamic,
  toEmail?: string | ValueOrDynamic<string>,
  subject?: string | ValueOrDynamic<string>,
  message?: string | ValueOrDynamic<string>,
}

const availableIntegrations = [
  { name: 'GitHub', value: 'github' as Integration, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
  { name: 'Gmail', value: 'gmail' as Integration, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
  { name: 'Airtable', value: 'airtable' as Integration, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
  { name: 'Notion', value: 'notion' as Integration, icon: <FaEnvelopeOpenText className="text-gray-400" /> },
];

const integrationOps: Record<Integration, { title: string; value: Ops }[]> = {
  github: [
    { title: 'Create PR Trigger', value: 'create_pr_trigger' },
    { title: 'Create Issue Trigger', value: 'create_issue_trigger' },
    { title: 'Get PR Details', value: 'get_pr_details' },
    { title: 'Add Comment to PR', value: 'add_comment_to_pr' },
    { title: 'Merge PR', value: 'merge_pr' },
    { title: 'Create Issue', value: 'create_issue' },
    { title: 'List User Repos', value: 'list_user_repo' },
  ],
  gmail: [
    { title: 'Send Email', value: 'send_mail' },
    { title: 'Watch New Email', value: 'recieve_email' },
  ],
  airtable: [
    { title: 'Watch Records', value: 'watch_email' as Ops }, // placeholder mapping
  ],
  notion: [
    { title: 'Watch Pages', value: 'watch_email' as Ops }, // placeholder mapping
  ],
  solana: [
    { title: 'On SOL Transfer', value: 'sol_transfer' as Ops },
    { title: 'On Token Transfer', value: 'token_transfer' as Ops },
    { title: 'Get Account Balance', value: 'get_balance' as Ops },
  ],

};

interface NodeItem {
  type: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}


const mainTriggerItems: NodeItem[] = [
  {
    type: 'trigger-app-event',
    icon: <FaEnvelopeOpenText />,
    title: 'On app event',
    description: 'Runs the flow when something happens in an app like GitHub, Gmail, or Notion.',
  },
  {
    type: 'trigger-solana-event',
    icon: <FaLink />,
    title: 'On Solana event',
    description: 'Runs the flow when a Solana on-chain event occurs, such as a transfer or balance change.',
  },
];


interface NodeSelectorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNode: (config: IWorkflowNodeConfig | Partial<IWorkflowNodeConfig>, type: string) => void;
}

interface DynamicFormInputProps {
  label: string;
  value?: string | ValueOrDynamic<string>;
  onChange: (val: string | ValueOrDynamic<string>) => void;
  placeholder?: string;
  type?: 'text' | 'textarea';
  isDynamic: boolean;
  setIsDynamic: (isDynamic: boolean) => void;
}

export const DynamicFormInput: React.FC<DynamicFormInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  isDynamic,
  setIsDynamic,
}) => {
  const staticValue =
    typeof value === 'string'
      ? value
      : value?.type === 'static'
        ? value.value
        : '';

  const dynamicField =
    typeof value === 'object' && value?.type === 'dynamic'
      ? value.field
      : 'prId';

  const handleStaticChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };

  const handleDynamicChange = (field: string) => {
    onChange({
      type: 'dynamic',
      nodeId: '', // nodeId removed from UI, but kept empty for schema consistency
      // @ts-ignore
      field,
    });
  };

  const handleToggle = () => {
    setIsDynamic(!isDynamic);
    if (!isDynamic) {
      // @ts-ignore
      onChange({ type: 'dynamic', nodeId: '', field: 'prId' });
    } else {
      onChange('');
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center text-xs font-medium text-gray-400 hover:text-white transition-colors"
        >
          {isDynamic ? (
            <>
              <FaToggleOn className="text-green-500 mr-1 text-lg" /> Dynamic
            </>
          ) : (
            <>
              <FaToggleOff className="text-gray-500 mr-1 text-lg" /> Static
            </>
          )}
        </button>
      </div>

      {!isDynamic ? (
        type === 'textarea' ? (
          <textarea
            value={staticValue}
            onChange={handleStaticChange}
            placeholder={placeholder}
            rows={4}
            className="bg-gray-700 border border-gray-600 rounded-md text-white p-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          />
        ) : (
          <input
            type="text"
            value={staticValue}
            onChange={handleStaticChange}
            placeholder={placeholder}
            className="bg-gray-700 border border-gray-600 rounded-md text-white p-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
          />
        )
      ) : (
        <select
          value={dynamicField}
          onChange={(e) => handleDynamicChange(e.target.value)}
          className="bg-indigo-900/40 border border-indigo-500 rounded-md text-yellow-300 font-mono p-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="prId">prId</option>
          <option value="prNumber">prNumber</option>
          <option value="prUrl">prUrl</option>
          <option value="sol_transfer_from">sol_transfer_from</option>
          <option value="sol_transfer_to">sol_transfer_to</option>
          <option value="sol_transfer_balance">sol_transfer_balance</option>
        </select>
      )}
    </div>
  );
};


export const NodeSelectorSidebar: React.FC<NodeSelectorSidebarProps> = ({ isOpen, onClose, onAddNode }) => {
  const [view, setView] = useState<SidebarView>(SidebarView.MAIN_TRIGGERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentConfig, setCurrentConfig] = useState<Partial<IWorkflowNodeConfig>>({});
  const [dynamicFields, setDynamicFields] = useState<Partial<Record<keyof IWorkflowNodeConfig, boolean>>>({});
  const [walletAddress, setWalletAddress] = useState<string>('');

  const { getToken } = useAuth();

  const fetchIntegrations = async () => {
    const token = await getToken();
    const res = await fetch(`${BACKEND_URL}/integrations/${token}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error("Failed to fetch integrations");
    return res.json();
  };

  const { data: integrationsData, isLoading: _integrationsLoading } = useQuery({
    queryKey: ["integrations", "user"],
    queryFn: fetchIntegrations,
  });

  const hasIntegration = (provider: string) => {
    console.log(integrationsData, provider);
    const integrations = integrationsData?.response || [];
    const providers = integrations.map((i: any) => i.provider);
    console.log(providers);
    const res = providers.includes(provider);
    console.log(res);
    return res;
  };



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
    } else if (type === 'trigger-solana-event') {
      setView(SidebarView.OPERATION_CONFIG);
      setCurrentConfig({ integration: 'solana' as Integration });
      setSearchTerm('');
    } else {
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
    // @ts-ignore
    setCurrentConfig(prev => ({
      ...prev,
      operation,
      // initialize editable plain strings so DynamicFormInput can show strings
      repo: prev.repo ?? '',
      issueTitle: prev.issueTitle ?? '',
      comment: prev.comment ?? '',
      prNumber: prev.prNumber ?? '',
      issueBody: prev.issueBody ?? '',
    }));
  };

  const handleCreateNode = () => {
    const { integration, operation } = currentConfig as IWorkflowNodeConfig;

    console.log(integration, operation, currentConfig);

    if (integration === "github" && !hasIntegration("github")) {
      alert("Please connect your GitHub account first in the Credentials tab.");
      return;
    }

    if (integration === "gmail" && !hasIntegration("gmail")) {
      alert("Please connect your Google account first in the Credentials tab.");
      return;
    }

    if (integration && operation) {
      const nodeType = currentConfig.integration as string;
      const finalConfig = { ...currentConfig, walletAddress };
      onAddNode(finalConfig as IWorkflowNodeConfig, nodeType);
      setCurrentConfig({});
      setDynamicFields({});
      setView(SidebarView.MAIN_TRIGGERS);
      onClose();
    } else {
      alert('Please select an integration and operation.');
    }
  };

  const handleToggleDynamic = (key: keyof IWorkflowNodeConfig, isDynamic: boolean) => {
    setDynamicFields(prev => ({ ...prev, [key]: isDynamic }));
    // also convert existing value shape when toggling
    setCurrentConfig(prev => {
      const existing = prev[key];
      if (isDynamic) {
        // if switching to dynamic and existing is string -> create a dynamic placeholder
        if (typeof existing === 'string' || existing === undefined) {
          return { ...prev, [key]: { type: 'dynamic', nodeId: '', field: 'prId' } as ValueOrDynamic<string> };
        }
        return prev;
      } else {
        // switching to static: if existing is ValueOrDynamic, set to its static string or empty
        if (existing && typeof existing !== 'string' && existing.type === 'static') {
          return { ...prev, [key]: String(existing.value) };
        }
        // if dynamic, convert to empty string
        if (existing && typeof existing !== 'string' && existing.type === 'dynamic') {
          return { ...prev, [key]: '' };
        }
        return prev;
      }
    });
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
        const { operation } = currentConfig as Partial<IWorkflowNodeConfig>;

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
          const opTitle = integrationOps[currentConfig.integration as Integration]?.find(op => op.value === operation)?.title || String(operation);


          const requiredFields = {
            repo: ['create_issue', 'create_pr_trigger', 'create_issue_trigger', 'list_user_repo', 'get_pr_details'].includes(operation as string),
            prNumber: ['get_pr_details', 'add_comment_to_pr', 'merge_pr'].includes(operation as string),
            issueTitle: ['create_issue'].includes(operation as string),
            issueBody: ['create_issue'].includes(operation as string),
            comment: ['add_comment_to_pr'].includes(operation as string),
            walletAddress: ['sol_transfer', 'token_transfer', 'get_balance'].includes(operation as string),
            fromEmail: ['send_mail'].includes(operation as string),
            toEmail: ['send_mail'].includes(operation as string),
            subject: ['send_mail'].includes(operation as string),
            message: ['send_mail'].includes(operation as string),
          };


          const handleFieldChange = (key: keyof IWorkflowNodeConfig, value: string | ValueOrDynamic<string>) => {
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
                    value={currentConfig.repo}
                    onChange={(val) => handleFieldChange('repo', val)}
                    isDynamic={!!dynamicFields.repo}
                    setIsDynamic={(isD) => handleToggleDynamic('repo', isD)}
                    placeholder="owner/repo-name"
                  />
                )}
                {requiredFields.prNumber && (
                  <DynamicFormInput
                    label="Pull Request Number"
                    value={currentConfig.prNumber}
                    onChange={(val) => handleFieldChange('prNumber', val)}
                    isDynamic={!!dynamicFields.prNumber}
                    setIsDynamic={(isD) => handleToggleDynamic('prNumber', isD)}
                    placeholder="e.g., 42"
                  />
                )}
                {requiredFields.issueTitle && (
                  <DynamicFormInput
                    label="Issue Title"
                    value={currentConfig.issueTitle}
                    onChange={(val) => handleFieldChange('issueTitle', val)}
                    isDynamic={!!dynamicFields.issueTitle}
                    setIsDynamic={(isD) => handleToggleDynamic('issueTitle', isD)}
                    placeholder="New Feature Idea"
                  />
                )}
                {requiredFields.issueBody && (
                  <DynamicFormInput
                    label="Issue Body"
                    type="textarea"
                    value={currentConfig.issueBody}
                    onChange={(val) => handleFieldChange('issueBody', val)}
                    isDynamic={!!dynamicFields.issueBody}
                    setIsDynamic={(isD) => handleToggleDynamic('issueBody', isD)}
                    placeholder="Detailed description..."
                  />
                )}
                {requiredFields.comment && (
                  <DynamicFormInput
                    label="Comment Body"
                    type="textarea"
                    value={currentConfig.comment}
                    onChange={(val) => handleFieldChange('comment', val)}
                    isDynamic={!!dynamicFields.comment}
                    setIsDynamic={(isD) => handleToggleDynamic('comment', isD)}
                    placeholder="Type your comment here..."
                  />
                )}



                {requiredFields.walletAddress && (
                  <div className="space-y-2">
                    <WalletAddressField
                      label="Wallet Address"
                      value={walletAddress}
                      onChange={setWalletAddress}
                    />

                    {/* Optional: Devnet/Mainnet selector */}
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-gray-300">Network</label>
                      <select
                        className="bg-gray-700 border border-gray-600 text-white rounded-md p-2"
                        onChange={(e) =>
                          console.log("Network:", e.target.value)
                        }
                      >
                        <option value="devnet">Devnet</option>
                        <option value="mainnet-beta">Mainnet</option>
                      </select>
                    </div>
                  </div>
                )}


                {requiredFields.toEmail && (
                  <DynamicFormInput
                    label="To Email"
                    value={currentConfig.toEmail}
                    onChange={(val) => handleFieldChange('toEmail', val)}
                    isDynamic={!!dynamicFields.toEmail}
                    setIsDynamic={(isD) => handleToggleDynamic('toEmail', isD)}
                    placeholder="e.g. recipient@email.com"
                  />
                )}

                {requiredFields.subject && (
                  <DynamicFormInput
                    label="Subject"
                    value={currentConfig.subject}
                    onChange={(val) => handleFieldChange('subject', val)}
                    isDynamic={!!dynamicFields.subject}
                    setIsDynamic={(isD) => handleToggleDynamic('subject', isD)}
                    placeholder="e.g. Hello from Workflow!"
                  />
                )}

                {requiredFields.message && (
                  <DynamicFormInput
                    label="Email Body"
                    type="textarea"
                    value={currentConfig.message}
                    onChange={(val) => handleFieldChange('message', val)}
                    isDynamic={!!dynamicFields.message}
                    setIsDynamic={(isD) => handleToggleDynamic('message', isD)}
                    placeholder="Type your email content here..."
                  />
                )}


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

