import Album from "./components/Album";
import Artists from "./components/Artists";
import Select from "./components/Select";
import Title from "./components/Title";
import data from "./data/dummy";





function App(){
  return (
    <div className="Container">
      <img src={data.album.images[1].url} alt="img"/>
      <Title/>
      <Artists/>
      <Album/>
      <Select/>
    </div>
  )
}
export default App;