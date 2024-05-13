
export default function Article(props){
    return(
        <>
            <img className="article-img" src={props.imagePath} alt={props.name} title={props.name} />
            <p>{props.name}</p>
        </>
    )
}