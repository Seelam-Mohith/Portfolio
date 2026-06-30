import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { SecondarySidebar } from './SecondarySidebar'
import { Topbar } from './Topbar'
import { ActivityPanel } from './ActivityPanel'
import { CommandPalette } from '../ui/CommandPalette'
import { ToastContainer } from '../ui/Toast'

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <SecondarySidebar />

      <div className="flex-1 flex flex-col min-h-screen ml-[72px]">
        <Topbar />

        <div className="flex-1 flex">
          <main className="flex-1 p-4 md:p-6 pt-20 overflow-y-auto">
            <Outlet />
          </main>
          <ActivityPanel />
        </div>
      </div>

      <CommandPalette />
      <ToastContainer />
    </div>
  )
}
