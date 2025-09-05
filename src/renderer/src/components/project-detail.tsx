import type { Project } from '@renderer/types'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps): React.JSX.Element {
  const handleStart = (): void => {
    console.log(`Starting project: ${project.name}`)
    // In Step 2, we'll replace this with:
    // window.electronAPI.startProject(project.id);
  }

  const handleStop = (): void => {
    console.log(`Stopping project: ${project.name}`)
  }

  return (
    <div className="project-detail">
      <header className="project-header">
        <h2>{project.name}</h2>
        <p>{project.path}</p>
        <div className="actions">
          <button className="start-btn" onClick={handleStart}>
            ▶ Start Project
          </button>
          <button className="stop-btn" onClick={handleStop}>
            ■ Stop Project
          </button>
        </div>
      </header>
      <div className="log-output">
        <pre>
          <code>{`Log output for ${project.name} will appear here...`}</code>
        </pre>
      </div>
    </div>
  )
}
