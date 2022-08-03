import Injectionpark from "../models/injectionPack"

export const createInjectionPark = async (req, res) => {
    try {
        const injectionPark = await new Injectionpark(req.body).save();
        res.json(injectionPark)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}

export const listInjectionPark = async (req, res) => {
    try {
        const injectionPark = await Injectionpark.find().exec();
        res.json(injectionPark)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })

    }


}
export const getInjectPacks = async (req, res) => {
    const condition = { "subcategory_id": req.query.subcategory_id }
    console.log("GET pack with: ", condition, req.params)
    console.log("GET pack with: ", req.body, req.query)
    try {
        const injectionPark = await Injectionpark.find(condition).exec();
        res.json(injectionPark)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "Not Found"
        })

    }
}

export const filterInjectionPack = async (req, res) => {
    const condition = {}
    console.log("GET pack with: ", condition, req.params)
    console.log("GET pack with: ", req.body, req.query)
    try {
        const injectionPark = await Injectionpark.find(condition).exec();
        res.json(injectionPark)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "Not Found"
        })

    }
}

export const removeInjectionPark = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const categories = await Injectionpark.findOneAndDelete(condition).exec();
        res.json(categories)
    } catch (error) {

    }
}
export const updateInjectionPark = async ( req, res) => {
    try {
        const condition = { _id: req.params.id };
        const doc = req.body;
        const option = { new: true };
        const injectionpark = await Injectionpark.findByIdAndUpdate(condition, doc, option);
        res.json(injectionpark)

        
    } catch (error) {
        res.status(400).json({
            message: "loi roi nhe"
        })
        
    }
}
export const readoneInjectionPark = async (req, res) => {
    try {
        const condition = { _id: req.params.id };
        const injectionpark = await Injectionpark.findOne(condition);
        res.json(injectionpark)
        
    } catch (error) {
        res.status(400).json({
            message: "loi roi nhe"
        })
        
    }
}
