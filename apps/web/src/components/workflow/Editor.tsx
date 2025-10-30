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
import { useMutation, useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../utils/constants";
import { NodeConfigDialog } from "./UpdateNodeDialogBox";
import { useAuth } from "@clerk/clerk-react";


interface EditorProps {
  workflow: WorkflowI
}


export const GitHubNode = ({ label }: { label: string }) => {
  return (
    <div className="bg-gray-900 text-white p-3 rounded-xl shadow-md border border-gray-700">
      <div className="flex items-center gap-2">
        <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
        <span className="font-semibold">GitHub</span>
      </div>
      <div className="text-sm mt-1 text-gray-300">{label}</div>
    </div>
  );
};

export const GmailNode = ({ label }: { label: string }) => {
  return (
    <div className="bg-red-50 text-red-800 p-3 rounded-xl shadow-md border border-red-200">
      <div className="flex items-center gap-2">
        <img src="/icons/gmail.svg" alt="Gmail" className="w-5 h-5" />
        <span className="font-semibold">Gmail</span>
      </div>
      <div className="text-sm mt-1">{label}</div>
    </div>
  );
};


const nodeTypes = {
  github: GitHubNode,
  gmail: GmailNode,
};

export interface WorkflowNode {
  id: string;
  workflowId: string;
  type: "Trigger" | "Action" | "Condition" | "GitHub" | "Http";
  name: string;
  positionX: number;
  positionY: number;
  config: any;
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

  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleNodeClick = (_: React.MouseEvent, node: Node) => {
    console.log(node);
    setSelectedNode(node);
    setIsDialogOpen(true);
  };


  const { data: nodesBackend, isLoading: isNodesLoading, isError: isNodesError, error: nodesError } = useQuery({
    queryKey: ['workflow', 'nodes', [workflow.id]],
    queryFn: async () => {
      try {

        const token = await getToken();
        console.log(typeof workflow.id, workflow.id, `${BACKEND_URL}/workflow/${workflow.id}/nodes`);
        const response = await fetch(`${BACKEND_URL}/workflow/${workflow.id}/nodes`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
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
        const token = await getToken();
        const response = await fetch(`${BACKEND_URL}/workflow/${workflow.id}/edges`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
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

  const { getToken } = useAuth();

  const createEdgeMutation = useMutation({
    mutationFn: async ({ sourceNodeId, targetNodeId }: { sourceNodeId: string, targetNodeId: string }) => {

      const token = await getToken();

      const response = await fetch(`${BACKEND_URL}/workflow/edges/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          sourceNodeId,
          targetNodeId,
          workflowId: workflow.id,
          label: "onSuccess"
        })
      })

      if (!response.ok) {
        throw new Error("Can't create edge");
      }

    }
  })

  const deletedEdgeMutation = useMutation({
    mutationFn: async ({ id }: { id: string }) => {

      const token = await getToken();

      const response = await fetch(`${BACKEND_URL}/workflow/edges/delete/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if (!response.ok) {
        throw new Error("Can't create node");
      }
    }
  })

  const onConnect = (params: Connection | Edge) => {
    console.log(params);
    const sourceNodeId = params.source;
    const targetNodeId = params.target;
    createEdgeMutation.mutate({
      sourceNodeId,
      targetNodeId
    })
    setEdges((eds) => addEdge(params, eds));
  }


  const createNodeMutation = useMutation({
    mutationFn: async ({ positionX, positionY, config, type, name }: { positionY: number, positionX: number, config: object, type: string, name: string }) => {

      const token = await getToken();

      const response = await fetch(`${BACKEND_URL}/workflow/node/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          workflowId: workflow.id,
          name,
          positionY,
          positionX,
          config,
          type
        })
      })

      if (!response.ok) {
        throw new Error("Can't create node");
      }

    }
  })

  const getNodeNameByOp = (operation:
    | 'create_pr_trigger'
    | 'create_issue_trigger'
    | 'get_pr_details'
    | 'add_comment_to_pr'
    | 'merge_pr'
    | 'create_issue'
    | 'list_user_repo'
  ): string => {
    switch (operation) {
      case 'create_pr_trigger':
        return 'PR Created (Trigger)';
      case 'create_issue_trigger':
        return 'Issue Created (Trigger)';
      case 'get_pr_details':
        return 'Get Pull Request Details';
      case 'add_comment_to_pr':
        return 'Add Comment to PR';
      case 'merge_pr':
        return 'Merge Pull Request';
      case 'create_issue':
        return 'Create GitHub Issue';
      case 'list_user_repo':
        return 'List User Repositories';
      default:
        return 'Unknown Operation';
    }
  }


  const createGithubNodes = async (config: IWorkflowNodeConfig) => {
    createNodeMutation.mutate({
      positionX: 0,
      positionY: 0,
      config,
      type: "Trigger",
      name: getNodeNameByOp(config.operation),
    })
  }

  const handleEdgeDelete = async (deletedEdges: Edge[]) => {
    deletedEdgeMutation.mutate({
      id: deletedEdges[0].id
    })
  }

  const handleAddNode = (config: IWorkflowNodeConfig, type: string) => {
    switch (type) {
      case "github":
        const newConfig: any = { ...config };

        for (const key of Object.keys(config)) {
          if (["integration", "operation"].includes(key)) continue;

          const newKey = key as keyof IWorkflowNodeConfig;
          const val = config[newKey];

          if (val && typeof val === "object" && "type" in val) {
            newConfig[key] = val;
          } else {
            newConfig[key] = { type: "static", value: val };
          }
        }
        createGithubNodes(newConfig);
        break;
      case "google":
        console.log("google type");
        break;
      default:
        console.log("default case...");
    }

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
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onEdgesDelete={handleEdgeDelete}
          onNodeClick={handleNodeClick}
          fitView
        >
          <Background color="white" gap={12} />
          <Controls />

          <AddNodeControl onToggleSidebar={() => setIsSidebarOpen(true)} />

        </ReactFlow>

        <NodeSelectorSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          //@ts-ignore
          onAddNode={handleAddNode}
        />

        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black opacity-50 z-10 transition-opacity duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {
          selectedNode !== null ?
            <NodeConfigDialog
              // @ts-ignore
              node={selectedNode}
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
            /> : ""
        }


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

