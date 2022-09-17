import { useState } from "react";

export default function TechnoAdd(props) {

  const { handleAddTechno } = props

  const [techno, setTechno] = useState({
    name: '',
    category: '',
    notes: ''
  })

  const [nameError, setNameError] = useState('')

  const [categoryError, setCategoryError] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddTechno(techno);
    setTechno({
      name: '',
      category: '',
      notes: ''
    })
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    // on spread techno, et on contrôle l'input dont le [name] = evt.target.name
    setTechno({ ...techno, [name]: value });
  }

  return (
    <div className="technoadd">
      <h1>Add a Techno to your list</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" name="name" id="name" value={techno.name} onChange={(evt) => handleChange(evt)} />
          <br />
          <label htmlFor="category">Category:</label>
          <br />
          <select name="category" id="category" value={techno.category} onChange={(evt) => handleChange(evt)}>
            <option value="">Select a category</option>
            <option value="Front">Front</option>
            <option value="Back">Back</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label htmlFor="notes">Notes:</label>
          <br />
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            value={techno.notes}
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <input type="submit" value="Add Techno" className="btn" />
        </form>
      </div>
    </div>
  )
}