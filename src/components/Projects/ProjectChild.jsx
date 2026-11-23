function ProjectChild(props) {
  return (
    <div>
      <div className="border brder-gray-300 m-4 p-4">
        <img src={props.image} alt={props.title} />
        <h1 className="uppercase text-green-400 font-semibold text-x1">{props.title}</h1>
        <p className="text-gray-800 text-sm leading-6">{props.description}</p>
        <a href={props.url} target="_blank">
          <button className="bg-green-500 px-2 py-1.5 text-white font-bold">{props.button}</button>
        </a>
      </div>

    </div>
  )
}

export default ProjectChild

// props are used to pass data from one react
// componenet to another usually from a parent component to a child component.