
import './App.css'

import AllMeetupsPage from './pages/AllMeetups.jsx';
import NewMeetupsPage from './pages/NewMeetups.jsx';
import FavoritesPage from './pages/Favorites.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from './components/layout/MainNavigation.jsx'
import Layout from './components/layout/Layout.jsx';

const router = createBrowserRouter([
    {
      
        path: "/",
        element: <AllMeetupsPage />,
        
    },
  
        
        {
          path: "/new-meetup",
          element: <NewMeetupsPage />,
          
        },
        {
          path: "/favorites",
          element: <FavoritesPage />,
          
        },
    
  ]);
  

function App() {
  

  return (
    <Layout>

      <RouterProvider router={router} />

    </Layout>
      
  )
}

export default App
