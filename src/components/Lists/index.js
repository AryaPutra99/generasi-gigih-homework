


const Lists = ({ data }) => {
    const track =data.map((track)=> {
        const {album: { external_urls, images }} = list;
        const image = images.find((image) => image.width === 300);
        return (
            <li key={.id}>
                <Link to

            </li>
        )
    })
}