import Category from "../models/category"
// import sub_category from "../models/sub_category";
import slugify from "slugify"
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
        const categories = await new Category(req.body).save();
        res.json(categories)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}

export const list = async (req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}
export const getCategory = async (req, res) => {
    const condition = { "_id": req.params.id }
    try {
        const categories = await Category.aggregate([
            {
                $lookup: {
                    from: 'subcategories',
                    localField: '_id',
                    foreignField: "category_id",
                    as: "subcategories"
                }
            }
        ]);
        res.json(categories)

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
        const categories = await Category.findOneAndDelete(condition).exec();
        res.json(categories)
    } catch (error) {

    }
}
export const readone  = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const categories = await Category.findOne(condition).exec();
        res.json(categories)
    } catch (error) {
        res.status(400).json({
            message: "loi roi OH!"
        })

    }
}
export const update = async ( req, res) => {
    try {
        const condition = { _id: req.params.id };
        const doc = req.body;
        const option = { new: true };
        const categories = await Category.findByIdAndUpdate(condition, doc, option);
        res.json(categories)

        
    } catch (error) {
        res.status(400).json({
            message: "loi roi nhe"
        })
        
    }
}