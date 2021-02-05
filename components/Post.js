function Post({ date, image, title }) {
    let { file, description } = image
  
    return (
      <div className="posts">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <img alt={description} src={`https:${file.url}`} />
        <div className="description">{description}</div>
      </div>
    )
  }
  
  export default Post