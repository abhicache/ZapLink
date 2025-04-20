import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return <div>
    <main className="min-h-screen container">
        {/* header nd body */}
        <Outlet/>
    </main>
    
    <div>
        ZapLink - 2025
    </div>
  </div>
}

export default AppLayout