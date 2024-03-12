import "./App.css";
import CateFilter from "./components/Categories/CheckBox/CateFilter";
import Categories from "./components/Categories/Categories";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Products from "./components/Products/Products";
import StoreContext from "./hooks/StoreContext";
import { useState } from "react";
import Heading from "./components/Heading/Heading";

function App() {
  const [filter, setFilter] = useState("/products?populate=*");
  const [selectedCategories , setSelectedCategories]=useState([])

  
  return (
    <>
     
      
      <Header />
      <Categories />
      <div className="main">
      <Heading />
      <StoreContext.Provider value={{ filter, setFilter ,selectedCategories , setSelectedCategories}}>
        <CateFilter   />
        <Products />
      </StoreContext.Provider>
      </div>
      <Footer />
     
    
    </>
  );
}

export default App;
