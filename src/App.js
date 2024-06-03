import searchImages from "./api.js";
import ImageList from "./components/ImageList.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  return (
    <div>
      <h1>
        App
      </h1>
      <SearchBar />
      <ImageList />
    </div>
  )
}

export default App;