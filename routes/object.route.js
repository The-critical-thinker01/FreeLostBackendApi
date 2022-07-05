const routes = (app) => {
    app.route('/Objects')
    .get((req, res) =>
        res.send('Demande Get'))

    .post((req, res) =>
        res.send('Demande Post'));
       
    app.route('/Objects/:Objectid')
        .put((req, res) =>
            res.send('Demande put'))
    
        .delete((req, res) =>
            res.send('Demande delete'));
}

export default routes;
