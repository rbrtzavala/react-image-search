import ImageList from "./components/ImageList.js";
import SearchBar from "./components/SearchBar.js";
import searchImages from "./api.js";

function App() {
  const handleSubmit = (term) => {
    console.log(`Do a search for: ${term}`);
    searchImages(term);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  )
}

export default App;