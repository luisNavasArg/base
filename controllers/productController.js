const data=require('../db/index')
const products=data.products;
const productController={
    index:function (req,res) {
        return res.render('products',{products:products});
    },
    detalle:function (req,res) {
        let index=req.params.index;
        return res.render('detalle',{valle:products[index]})
    },
    add:function (req,res){
        return res.render('product-add');
    }
}
module.exports=productController;