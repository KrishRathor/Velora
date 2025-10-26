import type React from "react";
import { useEffect, useState } from "react";
import type { WorkflowI } from "../dashboard/Workflow";
import {
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
  addEdge,
  type Edge, type Node, type Connection,
  Panel,
} from "@xyflow/react";
import { NodeSelectorSidebar, type IWorkflowNodeConfig } from "./NodeSelector";
import { FaPlus } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../utils/constants";


interface EditorProps {
  workflow: WorkflowI
}

export interface WorkflowNode {
  id: string;
  workflowId: string;
  type: "Trigger" | "Action" | "Condition" | "GitHub" | "Http";
  name: string;
  positionX: number;
  positionY: number;
  config: any; // Prisma Json type can be any in TS
  orderIndex: number;
}

export interface WorkflowEdge {
  id: string;
  workflowId: string;
  sourceNodeId: string;
  targetNodeId: string;
  label: "onSuccess" | "onFailure";
}


export const Editor: React.FC<EditorProps> = ({ workflow }) => {

  const { data: nodesBackend, isLoading: isNodesLoading, isError: isNodesError, error: nodesError } = useQuery({
    queryKey: ['workflow', 'nodes', [workflow.id]],
    queryFn: async () => {
      try {

        console.log(typeof workflow.id, workflow.id, `${BACKEND_URL}/workflow/${workflow.id}/nodes`);
        const response = await fetch(`${BACKEND_URL}/workflow/${workflow.id}/nodes`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        return data.response;

      } catch (error) {
        console.log(error);
      }
    }
  })

  const { data: edgesBackend, isLoading: isEdgesLoading, isError: isEdgesError, error: edgesError } = useQuery({
    queryKey: ['workflow', 'edges', [workflow.id]],
    queryFn: async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/workflow/${workflow.id}/edges`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        console.log(data.response);

        return data.response;

      } catch (error) {
        console.log(error);
      }
    }
  })


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const initialNodes: Node[] = (nodesBackend || []).map((node: WorkflowNode) => ({
    id: node.id,
    type: "default",
    position: { x: node.positionX, y: node.positionY },
    data: { label: node.name },
  }));

  const initialEdges: Edge[] = (edgesBackend || []).map((edge: WorkflowEdge) => ({
    id: edge.id,
    source: edge.sourceNodeId,
    target: edge.targetNodeId,
    type: "default",
    label: edge.label,
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: Connection | Edge) =>
    setEdges((eds) => addEdge(params, eds));


  const handleAddNode = (config: IWorkflowNodeConfig, type: string ) => {
    console.log(config);
    const newPosition = {
      x: nodes.length === 0 ? 250 : nodes[0].position.x,
      y: nodes.length === 0 ? 0 : nodes[0].position.y + 150,
    };

    setNodes(nds => [
      ...nds,
      {
        id: crypto.randomUUID(),
        position: newPosition,
        data: {
          label: `${type.split('-').pop()} Node`
        },
        type: type.includes('trigger') ? 'default' : type,
      },
    ]);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (nodesBackend) {
      setNodes(
        nodesBackend.map((node: WorkflowNode) => ({
          id: node.id,
          type: "default",
          position: { x: node.positionX, y: node.positionY },
          data: { label: node.name },
        }))
      );
    }
  }, [nodesBackend]);

  useEffect(() => {
    if (edgesBackend) {
      setEdges(
        edgesBackend.map((edge: WorkflowEdge) => ({
          id: edge.id,
          source: edge.sourceNodeId,
          target: edge.targetNodeId,
          type: "default",
          label: edge.label,
        }))
      );
    }
  }, [edgesBackend]);

  if (isNodesLoading || isEdgesLoading) return <div>Loading...</div>
  if (isNodesError) return <div>{nodesError.message}</div>
  if (isEdgesError) return <div>{edgesError.message}</div>


  return (
    <div className="h-full w-full flex rounded-md items-center justify-center">
      <div className="h-full w-full rounded-md shadow-md bg-[#2D2E2E] overflow-hidden relative">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background color="white" gap={12} />
          <Controls />

          <AddNodeControl onToggleSidebar={() => setIsSidebarOpen(true)} />

        </ReactFlow>

        <NodeSelectorSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onAddNode={handleAddNode}
        />

        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black opacity-50 z-10 transition-opacity duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

      </div>
    </div>
  )
}

interface AddNodeControlProps {
  onToggleSidebar: () => void;
}

export const AddNodeControl: React.FC<AddNodeControlProps> = ({ onToggleSidebar }) => {
  return (
    <Panel position="top-right">
      <button
        onClick={onToggleSidebar}
        className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-md shadow-md hover:bg-indigo-600 transition-colors border border-gray-600"
        title="Add Step / Node"
      >
        <FaPlus className="text-sm" />
      </button>
    </Panel>
  );
};
