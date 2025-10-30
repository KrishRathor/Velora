import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../utils/constants";
import { FaPlusCircle, FaKey, FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@clerk/clerk-react";
import { queryClient } from "../../main";

interface HttpResponseI {
  message: string;
  response: IntegrationsI[];
}

interface IntegrationsI {
  id: string;
  accessToken: string;
  provider: string;
  scopes: string;
}

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
}) => (
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
          <h3 className="text-lg font-semibold text-white mb-3">
            Delete Integration?
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            This action cannot be undone. Are you sure you want to remove this
            integration?
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

const scopeColors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-yellow-600",
  "bg-pink-600",
  "bg-teal-600",
];

const truncateToken = (token: string) =>
  token.length > 15
    ? `${token.slice(0, 6)}...${token.slice(-4)}`
    : token;

export const IntegrationCard: React.FC<{
  integration: IntegrationsI;
}> = ({ integration }) => {
  const { getToken } = useAuth();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const deleteIntegration = async (integrationId: string) => {
    const token = await getToken();
    const response = await fetch(
      `${BACKEND_URL}/integrations/delete/${integrationId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Failed to delete integration");
    return integrationId;
  };

  const deleteIntegrationMutation = useMutation({
    mutationFn: deleteIntegration,
    onSuccess: () => {
      setIsDeleteDialogOpen(false);
      queryClient.invalidateQueries(["integrations", "user"]);
    },
  });

  const handleDelete = () => setIsDeleteDialogOpen(true);
  console.log(integration.provider);

  const scopeArray =
    integration.provider === "gmail"
      ? []
      : integration.scopes
        ?.split(",")
        .map((scope) => scope.trim())
        .filter((s) => s.length > 0);

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:border-indigo-500 transition-colors flex justify-between items-start mb-4">
      <div className="flex-1 pr-4">
        <h4 className="text-lg font-semibold text-white capitalize mb-2">
          {integration.provider} Integration
        </h4>
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <FaKey className="mr-2 text-indigo-400" />
          <span className="font-mono text-xs bg-gray-700 px-2 py-1 rounded text-indigo-200 break-all">
            {truncateToken(integration.accessToken)}
          </span>
        </div>
        {scopeArray.length > 0 && (
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
        )}
      </div>
      <button
        className="text-red-500 hover:text-red-400 transition-colors p-2"
        onClick={handleDelete}
      >
        <FaTrashAlt />
      </button>
      <ConfirmDeleteDialog
        isOpen={isDeleteDialogOpen}
        onCancel={() => setIsDeleteDialogOpen(false)}
        onConfirm={() =>
          deleteIntegrationMutation.mutate(integration.id)
        }
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
    const response = await fetch(`${BACKEND_URL}/integrations/${token}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("Failed to fetch integrations");
    return response.json() as Promise<HttpResponseI>;
  };

  const { data, isLoading, isError, error } = useQuery<HttpResponseI>({
    queryKey: ["integrations", "user"],
    queryFn: fetchIntegrations,
  });

  const connectIntegration = async (provider: "github" | "google") => {
    const token = await getToken();
    const response = await fetch(
      `${BACKEND_URL}/integrations/connect/${provider}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    window.open(data.url, "_blank");
  };

  if (isLoading)
    return (
      <div className="p-8 text-center text-gray-400">
        Loading credentials...
      </div>
    );

  if (isError)
    return (
      <div className="p-8 text-red-500 bg-red-900/20 rounded-lg mt-8 border border-red-800">
        Error fetching credentials: {error.message}
      </div>
    );

  const integrations = data?.response || [];

  return (
    <div className="p-4">
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-800 p-6 rounded-xl w-80 border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Connect Integration
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => connectIntegration("github")}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
                >
                  Connect GitHub
                </button>
                <button
                  onClick={() => connectIntegration("google")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
                >
                  Connect Google
                </button>
              </div>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="mt-4 text-gray-400 hover:text-white text-sm"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {integrations.length === 0 ? (
        <div className="p-8 text-center bg-gray-800 rounded-lg mt-8 border border-gray-700 max-w-2xl mx-auto">
          <FaPlusCircle className="mx-auto text-4xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-medium text-white mb-4">
            No Credentials Configured
          </h3>
          <p className="text-gray-400 mb-6">
            Connect your GitHub or Google account to enable integrations.
          </p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center mx-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm transition-colors"
          >
            <FaPlusCircle className="mr-2" />
            Add Credential
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Configured Integrations ({integrations.length})
          </h3>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-3 rounded-md text-sm transition-colors"
            >
              <FaPlusCircle className="mr-2 text-xs" />
              Add Credential
            </button>
          </div>
          <div className="space-y-4">
            {integrations.map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

