import { useState, type ReactElement } from 'react'
import './App.css'
import { ProjectList } from './components/project-list'
import { ProjectDetail } from './components/project-detail'
import { DUMMY_PROJECTS } from './dummy-projects'
function App(): ReactElement {
  // State to keep track of the ID of the currently selected project
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  // Find the full project object based on the selected ID
  const selectedProject = DUMMY_PROJECTS.find((p) => p.id === selectedProjectId)

  // Handler function to update the state when a project is clicked in the list
  const handleSelectProject = (id: string): void => {
    setSelectedProjectId(id)
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <header>
          <h1>🚀 Runify</h1>
        </header>
        <ProjectList
          projects={DUMMY_PROJECTS}
          selectedProjectId={selectedProjectId}
          onSelectProject={handleSelectProject}
        />
      </aside>
      <main className="main-content">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <div className="no-project-selected">
            <h2>Welcome to Runify!</h2>
            <p>Select a project from the list to get started.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
