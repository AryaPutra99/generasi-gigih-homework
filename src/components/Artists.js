import data from "../data/dummy";



function Artists() {
    return (
        <p>Artist: {data.album.artists[0].name}</p>
    )
}
export default Artists;