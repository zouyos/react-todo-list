import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {

  const { technos, handleDelete } = props;

  return (
    <div className="technolist">
      <h1>My Technos</h1>
      <div>
        {
          technos.map(techno => (
            <TechnoItem techno={techno} key={techno.id} handleDelete={handleDelete}/>
          ))
        }
      </div>
    </div>
  )
}