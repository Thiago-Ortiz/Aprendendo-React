import styles from "./styles.module.css"

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name}/>
            <h2 className={styles.name}>{props.name}</h2>
            <div>{props.bio}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div className={styles.links}>
                <a href={props.githubUrl} target="blank">GitHub</a>
                <a href={props.linkedinUrl} target="blank">LinkedIn</a>
                <a href={props.twitterUrl} target="blank">Twitter</a>
            </div>
        </div>
    )
}

