const autos = require('../db/index')
console.log(autos);
const indexController = {
    index:function(req, res, next) {
        res.render('index', {title:"Luiss", lista: autos.lista });
      },
      show:function (req,res) {
        let pos = req.params.pos;
        res.render('detalle', {auto: autos.lista[pos] });
      }
}


module.exports = indexController