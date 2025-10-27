import type React from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { WorkflowMain } from "../components/workflow/WorkflowMain";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { WorkflowI } from "../components/dashboard/Workflow";
import { BACKEND_URL } from "../utils/constants";
import "@xyflow/react/dist/style.css";
import { ReactFlowProvider } from "@xyflow/react";
import { useAuth, useUser } from "@clerk/clerk-react";

export const WorkflowPage: React.FC = () => {

  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  if (!isSignedIn) {
    navigate("/");
  }

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { getToken } = useAuth();

  const fetchWorkflow = async (): Promise<WorkflowI> => {
    if (!id) throw new Error("Workflow ID is missing");

    const token = await getToken();

    const response = await fetch(`${BACKEND_URL}/workflow/workflow/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message || `Request failed with ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  };

  const {
    data: workflow,
    isLoading,
    isError,
    error,
  } = useQuery<WorkflowI>({
    queryKey: ["workflow", id],
    queryFn: fetchWorkflow,
    enabled: !!id,
  });

  if (isLoading) {
    return <div className="text-gray-400 p-6">Loading workflow...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-500 p-6 bg-red-900/20 rounded-lg">
        Error: {error.message}
      </div>
    );
  }

  if (!workflow) {
    return <div className="text-gray-400 p-6">No workflow found.</div>;
  }

  return (
    <ReactFlowProvider>
      <div className="h-screen flex flex-col bg-gray-900 antialiased">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <WorkflowMain workflow={workflow} />
        </div>
      </div>
    </ReactFlowProvider>
  )
}
