import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthRoute } from './components/AuthRoute'
import { AuthProvider } from './auth'
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import { ProfilePage } from './pages/ProfilePage';
import { StatePage } from './pages/StatePage';
import './App.css'

function App() {

  return (
    <>
    <HashRouter>
      <AuthProvider>

        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path="/blog/:slug" element={<BlogPost />}/>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={
            <AuthRoute>
              <LogoutPage />
            </AuthRoute>
          } />
          <Route path="/profile" element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
          } />
          <Route path="/states" element={<StatePage />} />

          <Route path="*" element={<p>Not found</p>} />
        </Routes>

      </AuthProvider>
    </HashRouter>
  </>
  )
}

export default App
