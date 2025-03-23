import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Landing from './pages/landing-page'
import Error404 from './pages/error/Error404'
import Layout from './pages/Layout'
import Pricing from './pages/pricing';

function App() {

  return (
    <KindeProvider
      clientId="413b44e4fcb247aabb8c1ffd21a37a40"
      domain="https://prime07.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </KindeProvider>
  )
}

export default App
