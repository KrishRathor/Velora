import React, { useEffect, useState } from "react";
import { FaTimes, FaPlay } from "react-icons/fa";
import type { IWorkflowNodeConfig } from "./NodeSelector";
import { DynamicFormInput } from "./DynamicForm";
import { type Node } from "@xyflow/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../utils/constants";
import { useAuth } from "@clerk/clerk-react";

interface NodeConfigDialogProps {
  node: Node;
  isOpen: boolean;
  onClose: () => void;
}

export const NodeConfigDialog: React.FC<NodeConfigDialogProps> = ({
  node,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<IWorkflowNodeConfig | null>(null);

  const { getToken } = useAuth();

  const { data: backendNode, isLoading } = useQuery({
    queryKey: ["node", node.id],
    queryFn: async () => {
      const token = await getToken();
      const res = await fetch(`${BACKEND_URL}/workflow/node/${node.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch node");
      return data.response;
    },
    enabled: isOpen && !!node.id, // fetch only when dialog is open
  });

  useEffect(() => {
    if (backendNode?.config) {
      setFormData(backendNode.config as IWorkflowNodeConfig);
    }
  }, [backendNode]);

  const setTriggerMutation = useMutation({
    mutationFn: async ({ id }: { id: string }) => {

      const token = await getToken();

      const respsonse = await fetch(`${BACKEND_URL}/trigger/set/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!respsonse.ok) {
        throw new Error("can't set triggger");
      }
    }
  })

  const setSolanaTriggerMutation = useMutation({
    mutationFn: async ({ id }: { id: string }) => {

      const token = await getToken();

      console.log("node", node);
      const walletAddress = backendNode?.config?.walletAddress?.value || "";

      if (!walletAddress) {
        alert("Please connect or enter a wallet address before setting trigger");
        return;
      }


      const respsonse = await fetch(`${BACKEND_URL}/solana/trigger/set/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          transactionTypes: "ANY",
          accountAddresses: walletAddress,
        })
      });

      if (!respsonse.ok) {
        throw new Error("can't set triggger");
      }
    }
  })

  useEffect(() => {
    if (node?.data?.config) {
      setFormData(node.data.config as IWorkflowNodeConfig);
    } else {
      setFormData({
        integration: "github",
        operation: "create_issue",
        repo: "",
        issueTitle: "",
        issueBody: "",
        comment: "",
      });
    }
  }, [node]);

  if (!isOpen || !node) return null;

  const handleChange = (key: keyof IWorkflowNodeConfig, val: any) => {
    setFormData((prev) => (prev ? { ...prev, [key]: val } : prev));
  };

  const handleSave = async () => {
    console.log("Save config:", formData);
    onClose();
  };

  const nodeLabel = (node.data?.label as string).toLowerCase();
  const isTrigger =
    nodeLabel.includes("trigger") ||
    nodeLabel.includes("sol_transfer") ||
    nodeLabel.includes("token_transfer");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* dialog */}
      <div className="relative bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
        <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
          <h3 className="text-lg font-semibold text-white">
            {node.data.label as string}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4">
          <DynamicFormInput
            label="Repository"
            value={formData?.repo!}
            onChange={(val) => handleChange("repo", val)}
            isDynamic={false}
            setIsDynamic={() => { }}
            placeholder="owner/repo"
          />
          <DynamicFormInput
            label="Issue Title"
            value={formData?.issueTitle!}
            onChange={(val) => handleChange("issueTitle", val)}
            isDynamic={false}
            setIsDynamic={() => { }}
            placeholder="Title for issue"
          />
          <DynamicFormInput
            label="Issue Body"
            value={formData?.issueBody!}
            onChange={(val) => handleChange("issueBody", val)}
            isDynamic={false}
            setIsDynamic={() => { }}
            placeholder="Detailed description..."
          />
        </div>

        <div className="flex justify-between items-center mt-6">

          {isTrigger && (
            <button
              onClick={() => {
                const label = (node.data?.label as string).toLowerCase();

                try {
                  if (label.includes("sol_transfer") || label.includes("token_transfer")) {
                    setSolanaTriggerMutation.mutate({ id: node.id });
                  } else {
                    setTriggerMutation.mutate({ id: node.id });
                  }
                } catch (error) {
                  console.error("Error setting trigger:", error);
                }
              }}
              className="cursor-pointer flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-white"
            >
              <FaPlay className="mr-2" /> Set Trigger
            </button>
          )}

          <button
            onClick={handleSave}
            className="ml-auto bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

