import React, { useState } from 'react'; // Import useState
import { useMutation, useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../utils/constants";
import { FaPlusCircle, FaKey, FaTrashAlt } from 'react-icons/fa';
import { AddCredentialDialog } from './AddCredential';
import { queryClient } from '../../main';
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from '@clerk/clerk-react';

interface ConfirmDeleteDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  isLoading = false,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-800 rounded-xl shadow-lg p-6 w-80 border border-gray-700"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Delete Integration?</h3>
            <p className="text-gray-400 text-sm mb-5">
              This action cannot be undone. Are you sure you want to remove this integration?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-1 px-3 rounded-md text-sm"
                onClick={onCancel}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md text-sm"
                onClick={onConfirm}
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


interface HttpResponseI {
  message: string,
  response: IntegrationsI[]
}

interface IntegrationsI {
  id: string;
  accessToken: string;
  provder: string;
  scopes: string;
}

interface IntegrationCardProps {
  integration: IntegrationsI;
  onDelete?: (id: string) => void;
}

const scopeColors = [
  'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-yellow-600', 'bg-pink-600', 'bg-teal-600'
];

// @ts-ignore
export const IntegrationCard: React.FC<IntegrationCardProps> = ({ integration, onDelete }) => {
  const scopeArray = integration.scopes
    .split(',')
    .map(scope => scope.trim())
    .filter(scope => scope.length > 0);

  const fullAccessToken = integration.accessToken;
  const { getToken } = useAuth();

  const deleteIntegration = async (integrationId: string) => {
    const token = await getToken();

    const response = await fetch(`${BACKEND_URL}/integrations/delete/${integrationId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message || "Failed to delete integration");
    }

    return integrationId;
  };

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedIntegrationId, setSelectedIntegrationId] = useState<string | null>(null);

  const handleDeleteIntegration = (id: string) => {
    setSelectedIntegrationId(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteIntegration = () => {
    if (!selectedIntegrationId) return;
    deleteIntegrationMutation.mutate(selectedIntegrationId, {
      onSuccess: () => {
        setIsDeleteDialogOpen(false);
        setSelectedIntegrationId(null);
      },
    });
  };


  const deleteIntegrationMutation = useMutation({
    mutationFn: deleteIntegration,
    onSuccess: (_, deletedId) => {
      console.log(deletedId);
      // @ts-ignore
      queryClient.invalidateQueries(['integrations', 'user']);
    },
  });


  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:border-indigo-500 transition-colors flex justify-between items-start mb-4">
      <div className="flex-1 pr-4">
        <h4 className="text-lg font-semibold text-white capitalize mb-2">
          {integration.provder} Integration
        </h4>
        <div className="flex items-center text-sm text-gray-400 mb-3 w-full">
          <FaKey className="mr-2 text-indigo-400 flex-shrink-0" />
          <span className="font-mono text-xs bg-gray-700 px-2 py-1 rounded text-indigo-200 break-all overflow-auto custom-scroll w-[calc(100%-1.5rem)]">
            {fullAccessToken}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {scopeArray.map((scope, index) => (
            <span
              key={index}
              className={`text-xs ${scopeColors[index % scopeColors.length]} text-white px-3 py-1 rounded-full`}
            >
              {scope}
            </span>
          ))}
        </div>
      </div>
      <button
        className="text-red-500 hover:text-red-400 transition-colors p-2 flex-shrink-0"
        title="Delete Credential"
        onClick={() => handleDeleteIntegration(integration.id)}
      >
        <FaTrashAlt />
      </button>
      <ConfirmDeleteDialog
        isOpen={isDeleteDialogOpen}
        onCancel={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDeleteIntegration}
        isLoading={deleteIntegrationMutation.isPending}
      />
    </div>
  );
};


export const CredentialsContent: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { getToken } = useAuth();

  const fetchIntegrations = async () => {
    const token = await getToken();
    if (!token) {
      return Promise.resolve({ message: 'No Token', response: [] }); // Return empty response structure
    }
    const response = await fetch(`${BACKEND_URL}/integrations/${token}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message || `Request failed with status ${response.status}`);
    }
    return response.json() as Promise<HttpResponseI>;
  }

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<HttpResponseI>({
    queryKey: ['integrations', 'user'],
    queryFn: fetchIntegrations,
    enabled: !!localStorage.getItem("token"),
  });

  const connectToGithub = async () => {
    const token = await getToken();
    if (!token) {
      return Promise.resolve({ message: 'No Token', response: [] });
    }

    const response = await fetch(`${BACKEND_URL}/integrations/connect/github`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message || `Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const url = data.url;
    return url
  }

  const connectGithubMutation = useMutation({
    mutationFn: connectToGithub,
  })

  const handleConnectIntegration = (integrationName: string) => {

    switch (integrationName) {
      case "github":
        connectGithubMutation.mutate();
        break;
      default:
        alert(`${integrationName} Not Supported`);
    }

  };


  if (connectGithubMutation.isSuccess) {
    console.log(connectGithubMutation.data);
    window.open(connectGithubMutation.data, "_blank", "noopener,noreferrer");
  }

  const handleDeleteIntegration = (id: string) => {
    console.log("Deleting integration with ID:", id);
  };

  if (isLoading) {
    return <div className="p-8 text-center text-gray-400">Loading credentials...</div>;
  }

  if (isError) {
    return <div className="p-8 text-red-500 bg-red-900/20 rounded-lg mt-8 border border-red-800">Error fetching credentials: {error.message}</div>;
  }

  const integrations = data?.response || [];

  return (
    <div className="p-4">
      <AddCredentialDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConnect={handleConnectIntegration}
      />

      {integrations.length === 0 ? (
        <div className="p-8 text-center bg-gray-800 rounded-lg mt-8 border border-gray-700 max-w-2xl mx-auto">
          <FaPlusCircle className="mx-auto text-4xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-medium text-white mb-4">No Credentials Configured</h3>
          <p className="text-gray-400 mb-6">Connect your services (like Slack, Google, or AWS) to enable powerful workflows.</p>
          <button
            onClick={() => setIsDialogOpen(true)} // Open dialog
            className="flex items-center mx-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm transition-colors"
          >
            <FaPlusCircle className="mr-2" />
            Add New Credential
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Configured Integrations ({integrations.length})</h3>

          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsDialogOpen(true)} // Open dialog
              className="flex cursor-pointer items-center bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-3 rounded-md text-sm transition-colors"
            >
              <FaPlusCircle className="mr-2 text-xs" />
              Add Credential
            </button>
          </div>

          <div className="space-y-4">
            {integrations.map(integration => (
              <IntegrationCard
                key={integration.id}
                integration={integration}
                onDelete={handleDeleteIntegration}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
