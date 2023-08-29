import React,{useState} from "react";

//I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. 
//This feature doesn't need backend persistence.
function ListingCard({listing, deleteById}) {
  const [favorite,setFavorite] = useState(false)
  // console.log(listing)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={()=>setFavorite(!favorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setFavorite(!favorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={()=>deleteById(listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
