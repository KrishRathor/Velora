import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/landingPage'
import { DashboardPage } from './pages/dashboardPage'
import { WorkflowPage } from './pages/workflowPage'
import { useMemo } from 'react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'

function App() {

  const endpoint = "https://api.devnet.solana.com";
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <Routes>
          <Route element={<LandingPage />} path='/' />
          <Route element={<DashboardPage />} path='/dashboard' />
          <Route element={<WorkflowPage />} path='/workflow' />
        </Routes>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App

