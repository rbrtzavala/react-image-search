import { useState } from 'react';

import ImageList from "./components/ImageList.js";
import SearchBar from "./components/SearchBar.js";
import searchImages from "./api.js";

function App() {
  const [ images, setImages ] = useState([]);

  const handleSubmit = async (term) => {
    console.log(`Do a search for: ${term}`);
    const results = await searchImages(term);
    console.log(results)
    setImages(results)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App;