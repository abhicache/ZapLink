import { Outlet, useLocation } from "react-router-dom"

const AppLayout = () => {
  const location = useLocation();
  // Check if we're on the landing page
  const isLandingPage = location.pathname === '/';
  
  return (
    <div className="w-full overflow-x-hidden">
      <main className={`min-h-screen ${isLandingPage ? '' : 'container'}`}>
        <Outlet/>
      </main>
      
      {!isLandingPage && (
        <div className="container">
          ZapLink - 2025
        </div>
      )}
    </div>
  )
}

export default AppLayout