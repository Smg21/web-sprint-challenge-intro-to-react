// Write your Character component here
import {Title, Name, Info} from './Styled.js';
export default function Character(props){
    return (
        <div className="Character">
            <Name>{props.name}</Name>
            <Title>HEIGHT</Title>
            <Info>{props.height}</Info>
            <Title>MASS</Title>
            <Info>{props.mass}</Info>
            <Title>SKIN-COLOR</Title>
            <Info>{props.skin_color}</Info>
            <Title>GENDER</Title>
            <Info>{props.gender}</Info>
            <Title>BIRTH-YEAR</Title>
            <Info>{props.birth_year}</Info>
            <Title>EYE-COLOR</Title>
            <Info>{props.eye_color}</Info>
           
            
        </div>
    )
}