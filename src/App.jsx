import { BrowserRouter } from "react-router-dom";
function App() {
  const isSidebarOpen = true;
  return (
    <BrowserRouter>
      <div className="application">
      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar /> */}
      <div className={`{isSidebarOpen?'md:ml-72':'flex-2'}`}>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
