import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import PageNumbers from "./components/PageNumbers";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const totalPages = 42;

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  const handleChange = (event) => {
    const name = event.target.value;
    fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  };

  const onPageChange = (event) => {
    let pageNumber = event.target.textContent;
    console.log(pageNumber);
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
    setCurentPage(pageNumber);
  };

  const goToFirstPage = () => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
    setCurentPage(1);
  };

  const goTolastPage = () => {
    fetch("https://rickandmortyapi.com/api/character/?page=42")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
    setCurentPage(42);
  };

  return (
    <main>
      <div className="main-container">
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search Character..."
            onChange={handleChange}
            className="icon"
          ></input>
        </div>
        <CharacterList characters={characters} />
        <PageNumbers
          onPageChange={onPageChange}
          goToFirstPage={goToFirstPage}
          goTolastPage={goTolastPage}
          currentPage={curentPage}
          totalPages={totalPages}
          displayRange={5}
        />
      </div>
    </main>
  );
}
export default App;
