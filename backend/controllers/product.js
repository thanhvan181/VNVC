import Product from "../models/product";
import slugify from "slugify";
import { deleteImage } from "../utils/fileUtils";


export const create = async (req, res) => {

    try {
        req.body.slug = slugify(req.body.name,
            {
                replacement: '-',  // replace spaces with replacement character, defaults to `-`
                remove: undefined, // remove characters that match regex, defaults to `undefined`
                lower: false,      // convert to lower case, defaults to `false`
                strict: false,     // strip special characters except replacement, defaults to `false`
                locale: 'vi',       // language code of the locale to use
                trim: true         // trim leading and trailing replacement chars, defaults to `true`
            }
        )
        console.log("ADD PRODUCT: ", req.body)
        const products = await new Product(req.body).save();
        res.json(products)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}

export const list = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1
        let limit = parseInt(req.query.pageSize) || 8
        let sort = {}
        console.log("Query params: ", req.query)
        if (req.query.sortBy && req.query.orderBy) {
            sort[req.query.sortBy] = req.query.orderBy === 'desc' ? -1 : 1
        }
        // if(req.query.getAll){
        //     const products = await Product.find().exec();


        // }
        console.log("Sort: ", sort)
        const products = await Product.find().sort(sort).limit(limit).skip(((page - 1) * limit)).exec();
        const productCount = await Product.count()
        const totalPages = Math.ceil(productCount / limit)
        res.status(200).send({
            data: products,
            paging: {
                total: productCount,
                page: page,
                pages: totalPages,
                nextPage: page < totalPages ? page + 1 : null
            }
        })

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}
export const getProducts = async (req, res) => {

    const filter = { 'injectionPark_id': req.params.id }
    try {
        const products = await Product.find(filter).exec();
        res.json(products)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}

export const searchProduct = async (req, res) => {
    const searchString = req.query.q || "";
    // console.log("SEARCH TEXT: ", searchString)
    const limit = req.query.limit || 10
    try {
        const productSeachName = await Product.find({ $text: { $search: searchString } }).limit(limit).exec();
        // console.log("productName", productSeachName)
        res.status(200).send(
            {
                data: productSeachName
            }
        )
    } catch (error) {
        res.status(404).json({
            message: "Not Found!"
        })

    }
}

export const getProductsCategory = async (req, res) => {
    // console.log("ac")

    const filter = { 'category_id': req.params.id, }
    try {
        const productsCate = await Product.find(filter).exec();
        res.json(productsCate)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}
export const getProductsSubcateogy = async (req, res) => {


    const filter = { 'subcategory_id': req.params.id }
    try {
        const productsCate = await Product.find(filter).exec();
        res.json(productsCate)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const products = await Product.findOneAndDelete(condition).exec();
        console.log("DELATE PRODUCT: ", products)
        if (products) {
            await deleteImage(products.image)
        }
        console.log("Product2: ", products)
        res.json(products)
    } catch (error) {
        console.log("ERROR", error)
        res.status(400).json({
            message: "loi khong them duoc"
        })

    }
}
export const read = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const products = await Product.findOne(condition).exec();
        res.json(products)
    } catch (error) {
        res.status(error).json({
            message: "loi khong them duoc"
        })

    }

}
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    console.log("Update: ", condition)
    const doc = req.body;
    console.log("Update data: ", doc)
    const option = { new: true };
    try {
        const products = await Product.findOneAndUpdate(condition, doc, option);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const fetchAllProduct = async (req, res) => {

    try {
        const products = await Product.find().exec();
        res.json(products)
    } catch (error) {
        res.status(error).json({
            message: "loi khong them duoc"
        })

    }

}




