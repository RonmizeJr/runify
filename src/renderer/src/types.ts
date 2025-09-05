export interface ProjectCommand {
  name: string
  script: string
  cwd?: string // Optional current working directory for the command
}

export interface Project {
  id: string
  name: string
  path: string
  commands: ProjectCommand[]
}
