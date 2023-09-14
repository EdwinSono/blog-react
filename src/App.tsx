import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthRoute } from './components/AuthRoute'
import { AuthProvider } from './services/auth'
import { BlogProvider, BlogRoute } from './services/blog';
import { UsersDBProvider } from './services/usersDB';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';
import { CreatePost } from './components/CreatePost';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { StatePage } from './pages/StatePage';
import './App.css'

function App() {

  return (
    <>
    <HashRouter>
      <UsersDBProvider>
        <AuthProvider>

          <Menu />

          <BlogProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/blog" element={<BlogPage />}>
                <Route
                  path=":slug"
                  element={
                    <BlogRoute>
                      <BlogPost />
                    </BlogRoute>
                  }
                />
                <Route path="create" element={<CreatePost />} />
              </Route>

              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/logout"
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
              />
              <Route
                path="/profile/:slug"
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
              />
              
              <Route path="/states" element={<StatePage />} />
              <Route path="*" element={<p>Not found</p>} />
            </Routes>
          </BlogProvider>

        </AuthProvider>
      </UsersDBProvider>
    </HashRouter>
  </>
  )
}

export default App
