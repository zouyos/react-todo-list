export default function TechnoItem(props) {

  const { techno, handleDelete } = props;

  return (
    <div className="card">
      <h2>{techno.name}</h2>
      <h3>Category: {techno.category}</h3>
      <h4>{techno.notes ? 'Notes:' : ''}</h4>
      <p>{techno.notes ? techno.notes : ''}</p>
      <hr />
      <button className="btn-delete" onClick={() => handleDelete(techno.id)}>Delete</button>
    </div>
  )
}