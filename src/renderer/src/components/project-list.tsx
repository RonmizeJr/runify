import type { Project } from '../types'

interface ProjectListProps {
  projects: Project[]
  selectedProjectId: string | null
  onSelectProject: (id: string) => void
}

export function ProjectList({
  projects,
  selectedProjectId,
  onSelectProject
}: ProjectListProps): React.JSX.Element {
  return (
    <nav className="project-list">
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className={project.id === selectedProjectId ? 'selected' : ''}
              onClick={() => onSelectProject(project.id)}
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
