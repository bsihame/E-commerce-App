import React from "react";
import ShopData from "./ShopData";
import CollectionPreview from "../CollectionPreview/CollectionPreview"



const ShopPage = () => {
 
  const collections = ShopData;
  console.log(collections) 
  
    return (
      <div className="shop-page">
      {collections.map(({id, ...otherCollectionProps}) => { return(
         <CollectionPreview key={id} {...otherCollectionProps}/>)
        })} 
      </div>
    );
}

export default ShopPage