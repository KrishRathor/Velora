import { FaHome, FaUser, FaProjectDiagram, FaPlusCircle, FaCog, FaQuestionCircle, FaChartLine, FaCodeBranch } from 'react-icons/fa';
import { BiCube, BiCubeAlt } from 'react-icons/bi';
import { IoMdMail } from 'react-icons/io';
import { UserButton, useUser, } from '@clerk/clerk-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div className={`p-2 my-1 flex items-center cursor-pointer rounded-lg transition-colors ${active ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-300'}`}>
    <div className="text-xl mr-3">{icon}</div>
    <span className="text-sm">{label}</span>
  </div>
);

export const Sidebar: React.FC = () => {

  const { user } = useUser();

  return (
    <div className="flex flex-col h-full w-64 bg-gray-800 text-white p-4">

      <div className="flex items-center mb-6 pb-4 border-b border-gray-700">
        <BiCubeAlt className="text-3xl text-indigo-500 mr-2" />
        <h1 className="text-xl font-semibold">n8n</h1>
      </div>

      <nav className="flex-grow">
        <NavItem icon={<FaHome />} label="Overview" active />
        <NavItem icon={<FaUser />} label="Personal" />

        <div className="mt-4 pt-4 border-t border-gray-700">
          <NavItem icon={<FaProjectDiagram />} label="Projects" />
          <div className="flex items-center text-gray-400 text-sm mt-1 ml-2 p-1 hover:text-white cursor-pointer transition-colors">
            <FaPlusCircle className="mr-2" />
            <span>Add project</span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <h3 className="uppercase text-xs font-semibold text-gray-500 mb-2">Admin Panel</h3>
          <NavItem icon={<FaCog />} label="Admin Panel" />
          <NavItem icon={<FaCodeBranch />} label="Templates" />
          <NavItem icon={<IoMdMail />} label="Variables" />
          <NavItem icon={<FaChartLine />} label="Insights" />
          <NavItem icon={<FaQuestionCircle />} label="Help" />
          <NavItem icon={<BiCube />} label="What's New" />
        </div>
      </nav>

      <div className="flex items-center p-3 mt-4 border-t border-gray-700">
        <UserButton />
        <h2 className='ml-2 bolder ' >{user?.firstName} {user?.lastName && user?.lastName}</h2>
      </div>
    </div>
  );
};
