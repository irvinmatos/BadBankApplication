function Spa() {
    const Route       = ReactRouterDOM.Route;
    const Link        = ReactRouterDOM.Link;
    const HashRouter  = ReactRouterDOM.HashRouter;
    return (
        <HashRouter>
            <div>
                <h1> Routing hello World </h1>
                <Link to="/"> Home </Link>
                <Link to="/about/"> About </Link>
                <Link to="/products"> products</Link>
                <hr/>
                <Route> </Route>

            </div>
        </HashRouter>

    );

}
    