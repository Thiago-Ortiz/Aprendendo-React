export default function Button(props){
    
    return(
    <button 
        onClick={props.func}
    >
        {props.name}
    </button>
    )
}