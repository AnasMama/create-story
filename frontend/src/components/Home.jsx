import "./style/home.css";

function Home() {
    return (
        <div className="home">
         <div className="container">
            <div className="title">
            <h1>Je suis un titre je suis un titre je suis un titre </h1>
            </div>
            <div className="new-game">
                <input placeholder="Pseudo"></input>
                <button className="btn-newgame">Nouvelle partie </button>
            </div>
            <div className="rejoin-game">
                <input placeholder="Pseudo"></input>
                <input placeholder="Url"></input>
                <button className="btn-newgame">Rejoindre partie</button>
            </div>
         </div>
    
        </div>
     
    );
  }
  
  export default Home;
  