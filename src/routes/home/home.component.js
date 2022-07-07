import React from "react";
//import './components/category-item/category-item.styles.scss';
import CategoryItem  from "../../components/category-item/category-item.component.js";
import Directory from "../../components/directory/directory.component.js";
import {Outlet} from 'react-router-dom'


function Home() {
  const categories=
    [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      },
    ];
    
  return (
    <div>
        <Outlet />
 <Directory categories={categories}/>
    </div>
   
    
   
  );
}

export default Home;
