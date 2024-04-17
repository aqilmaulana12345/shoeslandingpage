
import React from 'react';
import './App.css';
import ReviewItem from './Review.js';
import PropTypes from 'prop-types';


function App() {
  
  return (
    <div className="parentbox">
    <FotoProduk/>
    <Produkinfo isDiscount="yes" category="LEBARAN"/> 
    <ReviewItem/>
    </div>
  );
}



function FotoProduk() {
  return (
      <div className="foto">
      <img src="yeezy.jpg"/>
    </div>
  );
}

function CheckDiscount(props){
  const {isDiscount} = props;
  if (isDiscount=="yes") {
   return (
  <p>Diskon 50%</p>
    );
  }

  else if (isDiscount == "coming") {
    return (
   <p>akan ada diskon.....</p>
     );
   }
   
  else {
    return (
    <p>Belum ada diskon</p>
      );
    }
}
  

function Produkinfo(props) {
  const {category,name,isDiscount} = props;
  const benefits=["Tidak kusut terkena air" , "Bahan Sepatu bagus", "Tidak Gerah"];
  const listBenefits = benefits.map((itemBenefits) =>  
  <li key={itemBenefits}>{itemBenefits}</li>
  );
  return (
    <div >
    <div className="deskripsi">
      <p className="jenis">{category}</p>
      <h1 className="tittle">{name}</h1>
      <p className="price">2.000.000</p>
      <CheckDiscount isDiscount={isDiscount}/>
      <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Duis congue fringilla gravida. Nam luctus vestibulum justo. In scelerisque sagittis turpis, 
      vitae tristique justo tincidunt non. Cras vitae nisi augue. Integer ultricies arcu ac eros cursus,
       eget eleifend lectus tincidunt. Fusce eu magna
        lorem. 
       </p>
       <ul>
        {listBenefits}
       </ul>
       <a onClick={(e) => TambahProduk(name,e)} href="#">Add To chart</a>
    </div>
    </div>
  );
}



function TambahProduk(e) {
  return console.log("membeli produk..." + e);
}

export default App;

