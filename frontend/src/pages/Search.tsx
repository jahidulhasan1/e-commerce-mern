import React, { useState } from "react";
import ProductCard from './../components/ProductCard';

function Search() {
  const loadingCategories = true;
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState<number>(1);
  const categoriesResponse: any = [];
  const categories: any = [];

  return (
    <div className="searchPage">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
            {!loadingCategories &&
              categoriesResponse?.categories.map((i) => (
                <option key={i} value={i}>
                  {i.toUpperCase()}
                </option>
              ))}
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
       <input type="text" placeholder="Search By name..." />
       <div className="productList">
<ProductCard  productId="234rde"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s"
          name="Mackbook"
          price={788}
          stock={9}/>
  <ProductCard  productId="234rde"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s"
          name="Mackbook"
          price={788}
          stock={9}/>    
      
      <ProductCard  productId="234rde"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s"
          name="Mackbook"
          price={788}
          stock={9}/>  
          <ProductCard  productId="234rde"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s"
          name="Mackbook"
          price={788}
          stock={9}/>  
          <ProductCard  productId="234rde"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s"
          name="Mackbook"
          price={788}
          stock={9}/>  
          <ProductCard  productId="234rde"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s"
          name="Mackbook"
          price={788}
          stock={9}/>  
       </div>
       <article>
         <button>prev</button>
         <span>{page} of 4</span>
         <button>next</button>
       </article>
      </main>
    </div>
  );
}

export default Search;
