import React, { Component } from "react";
import SHOP_DATA from "../../shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.styles.scss";

class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionPreviewProps }) => (
          <CollectionPreview key={id} {...collectionPreviewProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
