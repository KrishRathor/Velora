import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/landingPage'
import { DashboardPage } from './pages/dashboardPage'
import { WorkflowPage } from './pages/workflowPage'

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path='/' />
      <Route element={<DashboardPage />} path='/dashboard' />
      <Route element={<WorkflowPage />} path='/workflow' />
    </Routes>
  )
}

export default App

