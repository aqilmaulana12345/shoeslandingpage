
import React from 'react';
import './App.css';


function Review (){
    //mempersiapkan data Dummy
    const users=[
      {
      "id": 1,
      "name" :"Aqil",
      "review": "Harganya murah tapi kualitas ga kaleng-kaleng" ,  
      "photo": "https://images.pexels.com/photos/4437916/pexels-photo-4437916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
  
      {
        "id": 2,
        "name" :"Friska",
        "review": "Harganya murah tapi kualitas ga kaleng-kaleng",
        "photo": "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
        },
  
        {
          "id": 3,
          "name" :"Vania",
          "review": "Harganya murah tapi kualitas ga kaleng-kaleng",   
          "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"
          }
    ];
          const listReview = users.map((itemReview) =>  
          <div key={itemReview.id}className="Item"> <br></br>
          <img src={itemReview.photo} />
          <div className="User">
            <h3>{itemReview.name}</h3>
            <p>{itemReview.review}</p>
          </div>
          </div>
          );
          return(
            <div className="review-box">
            <h2>Reviews</h2> 
            {listReview}
            </div>
          );
  }

  export default Review;


