import SubCategory from "../models/sub_category";



export const create_subcategory = async (req, res) => {
    try {
        const subcategory = await new SubCategory(req.body).save();
        res.json(subcategory)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const list_category = async (req, res) => {
    try {
        const subcategory = await  SubCategory.find().exec();
        res.json(subcategory)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}