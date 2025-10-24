import { useMutation, useQuery } from "@tanstack/react-query";
import { BiFile } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { BACKEND_URL } from "../../utils/constants";
import React, { useState } from "react";
import { CreateWorkflowDialog } from "./CreateWorkflowDialog";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../main";
import { WorkflowCard } from "./WorkflowCard";

export interface WorkflowI {
  id: string;
  name: string;
  description: string;
  userId: string;
  isPublic: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}


export const WorkflowsContent: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const createWorkflow = useMutation({
    mutationFn: async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/workflow/create`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            name,
            description
          })
        })

        if (!response.ok) {
          throw new Error("Network Error");
        }

        const data = await response.json();
        if (response.status !== 201) {
          throw new Error(data.message);
        }

        const workflowId = data.response;
        return workflowId;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (workflowId) => {
      //@ts-ignore
      queryClient.invalidateQueries(['workflow', 'user'])
      navigate(`/workflow?id=${workflowId}`);
    }
  })

  const mutationWithState = {
    ...createWorkflow,
    setName,
    setDescription,
    name,
    description
  }

  const { data, isError, isPending, error } = useQuery({
    queryKey: ['workflow', 'user'],
    queryFn: async () => {
      try {

        const userId = localStorage.getItem("token");
        const response = await fetch(`${BACKEND_URL}/workflow/user/${userId}`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        return data.response;
      } catch (error) {
        console.log(error);
      }
    },
    enabled: !!localStorage.getItem("token")
  })

  const workflows = data as WorkflowI[];

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <div className="flex flex-col items-center justify-center p-10 mt-16 text-center">

      <CreateWorkflowDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        mutation={mutationWithState}
      />

      {
        workflows.length === 0 ? (
          <CreateFromScratch setIsDialogOpen={setIsDialogOpen} />
        ) : (
          <WorkflowsList workflows={workflows} setIsDialogOpen={setIsDialogOpen} />
        )
      }

    </div>
  )
};

interface CreateFromScratchProps {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateFromScratch: React.FC<CreateFromScratchProps> = ({ setIsDialogOpen }) => {
  return (
    <div>
      <h3 className="text-xl font-medium text-white mb-6">Welcome Krish!</h3>
      <p className="text-gray-400 mb-10">Create your first workflow</p>
      <div className="flex space-x-8">
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex flex-col items-center cursor-pointer justify-center w-64 h-48 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors p-4">
          <BiFile className="text-5xl text-indigo-500 mb-3" />
          <span className="text-lg text-white font-medium">Start from scratch</span>
        </button>

        <button className="flex flex-col items-center justify-center cursor-pointer w-64 h-48 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors p-4">
          <FaRunning className="text-5xl text-indigo-500 mb-3" />
          <span className="text-lg text-white font-medium text-center">Test a simple AI Agent example</span>
        </button>
      </div>
    </div>
  )
}

interface WorkflowsListProps {
  workflows: WorkflowI[];
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkflowsList: React.FC<WorkflowsListProps> = ({ workflows, setIsDialogOpen }) => {
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/workflow?id=${id}`);
  };

  const handleToggle = (id: string, isActive: boolean) => {
    console.log(`Toggling workflow ${id} to ${isActive ? 'Active' : 'Inactive'}`);
    // TODO: Use useMutation here to send an API request to toggle status
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Your Workflows</h3>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-sm transition-colors shadow-lg"
        >
          Create Workflow
        </button>
      </div>

      <div className="space-y-4">
        {workflows.map(workflow => (
          <WorkflowCard
            key={workflow.id}
            workflow={workflow}
            onEdit={handleEdit}
            onToggle={handleToggle}
          />
        ))}
      </div>

    </div>
  );
};
