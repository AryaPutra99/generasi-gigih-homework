import style from "./style.module.css";


const Track = (props) => {
    const artists = props.artists.map((artist, index) =>{
        const inList = index === props.artist.length - 1;
        return (
            <Link to={artist.external_urls.sportify} key={artist.id}>
                {inList ? artist.name : '${artist.name}'}
            </Link>
        );
    });


return (
    <Card>
        <img className={style.image} src={props.image} width="240px"/>
        <a className={style.title} href="#">
            {props.title}
        </a> 
        </Card>
    );
};

export default Track;