module.exports = function(app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory(); 
        var dao = new app.infra.ProdutosDAO(connection);
        dao.lista(function(err,results){
            res.render('produtos/lista', {lista: results});
        });
        connection.end();
    });
};