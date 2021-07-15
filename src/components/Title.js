import data from "../data/dummy";


function Title() {
    return (
        <p>Track Title: {data.album.name}</p>
    )
}
export default Title;