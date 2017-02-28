module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var connection = app.infra.connectionFactory(); 
        var dao = new app.infra.ProdutosDAO(connection);
        dao.lista(function(err,results){
            res.render('produtos/lista', {lista: results});
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos/salva', function(req, res) {
        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var dao = new app.infra.ProdutosDAO(connection);
        dao.salva(produto, function(err, results) {
            res.redirect('/produtos');
        });
        connection.end();
    });
};