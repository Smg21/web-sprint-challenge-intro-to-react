// Write your Character component here
export default function Character(props){
    return (
        <div className="Character">
            <h2>{props.name}</h2>
        <p>{props.height}</p>
            <p>{props.mass}</p>
            <p>{props.skin_color}</p>
            <p>{props.gender}</p>
            <p>{props.birth_year}</p>
            <p>{props.eye_color}</p>
           
            
        </div>
    )
}