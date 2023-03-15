import { NavBar } from 'react';

function Spa() {
  const Route       = ReactRouterDOM.Route;
  const Link        = ReactRouterDOM.Link;
  const HashRouter  = ReactRouterDOM.HashRouter;
  const UserContext = React.createContext(null);
  return (
    <> 
      <HashRouter>
        <div className="container" style={{padding: "20px"}}>
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
            <NavBar/>
  
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
                <Route path="/alldata/" component={AllData} />
              
          </UserContext.Provider>  
        </div>
          
    </HashRouter>
    </>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
