//import ".../public/styles.css";
import React, { useState } from "react";
import books from "../books.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SearchBar from "./SearchBar.jsx";
import createBook from "./PopUp.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar onSearch="" />
      {books.map(createBook)}
      <Footer />
    </div>
  );
}

export default App;

