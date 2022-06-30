const Header = () => {
  return (
  
  <div className="header">
  <h1>Apex Player DashBoard</h1></div>
  
  );
};

// Player Component
const Reviews = () => {
  return (
    <div className="review">
     <h2>Player Reviews</h2>
     <p>Player Review Here</p>
    </div>
  );
};

// Square Component
const Rating = () => {
  return (
    <div className="rating">
      <h4>Top Player Ranks</h4>
      <ul>
        <li>Justin</li>
        <li>Eron</li>
        <li>Amad</li>
        <li>Abe</li>
        <li>Semiah</li>
      </ul>

    </div>
  );
};


const  Analysis = () => {
  return (
    <div className="analysis">
    <h3>Players Experience</h3>
    <h5>Graph here</h5>
     
    </div>
  );
};

const Visitors = () => {
  return (
    <div className="visit">
     <h3>Players Online</h3>
     <p><h4>10.4k</h4></p>
    </div>
  );
};

const PlayMenu = () => {
  return (
    <div className="Menu">
     <h3>Menu</h3>
     <p><h4>
      <ul>
      <li>Community</li>
      <li>Online Tournements</li>
      <li>Player Profile</li>
      <li>Stream</li>
      <li>Gamer Events</li>
    </ul>

     </h4></p>
    </div>
  );
};


class App extends React.Component {
    render() {
        //* only need() for multiple lines
        //* components are case sensitive 
        //* Order of components Matters
        return (
          <div className='container'>
       <Header />
       <Reviews />
       <Visitors />
       <Rating />
      <Analysis />
      <PlayMenu />

       </div>
         );
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
);