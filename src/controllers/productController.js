exports.getProducts = async (req, res)=>{
    res.send(`Get All Product`);
};
exports.getProductsById = async(req, res)=>{
    res.send(`Get Product by ID : ${req.body.id}`);
};

exports.getProductsById = async(req, res)=>{
    res.send(`Product ID : ${req.body.id}`);
};

exports.getProductsByName = async(req, res)=>{
    res.send(`Product Name : ${req.body.name}`);
};

exports.addProducts = async(req, res)=>{
    res.send(`Product ID : ${req.body.id}
    Product Name : ${req.body.name}`);
};

exports.editProduct = async(req, res)=>{
    res.send(`Edit Product ID : ${req.params.id}`);
}

exports.patchProduct = async(req, res)=>{
    res.send(`Patch Product ID : ${req.params.id}`);
}

exports.deleteProduct = async(req, res)=>{
    res.send(`Delete Product ID : ${req.params.id}`);
}