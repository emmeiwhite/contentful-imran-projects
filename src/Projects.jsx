import Loader from './Loader'
import useFetchProjects from './fetchProjects'
export default function Projects() {
  const { loading, projects } = useFetchProjects()
  console.log('In the Projects Component!')
  console.log(loading)
  console.log(projects)

  if (loading) {
    return (
      <section className="projects">
        <Loader />
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map(project => {
          const { id, title, imageURL, url } = project
          return (
            <a
              href={url}
              key={id}
              target="_black"
              rel="noreferrer"
              className="project"
            >
              <img
                src={imageURL}
                alt={title}
                className="img"
              />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
