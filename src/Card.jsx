import profilepic from './assets/sp2.png'
function Card(){

   return (
   
   
   <div className="card">

            <img className ="card-img" alt="profile pic" src={profilepic}></img>
            <h2 className="card-title">Sidramapppa Potdar</h2>
            <p className="card-text"> I studing CSE Engg. and play Games.</p>

    </div>
    
);
}

export default Card