import Order from "../models/order"




export const create = async (req, res) => {

    try {
        console.log("DATA ORDER: ", req.body)
        const orders = await new Order(req.body).save();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong order duoc roi  "
        })

    }


}
export const getListOrderbyUserid = async(req, res) => {
    const condition = { 'user_id': req.params.id }
    try {
        const orders = await Order.find(condition).exec();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong lay duoc list order "
        })

    }
}
export const listorder = async(req, res) => {
  
    try {
        const orders = await Order.find().exec();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong lay duoc list order "
        })

    }
}
export const listorderdetails = async(req, res) => {
    const condition = { _id: req.params.id }
  
    try {
       
        const orders = await Order.findOne(condition).exec();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong lay duoc list order "
        })

    }
}
export const searchOrderByUser = async (req, res) => {
    const searchString = req.query.phone || "";
    // console.log("SEARCH TEXT: ", searchString)
    // const limit = req.query.limit || 10
    console.log("paramsseacrh", searchString)
    try {
        const OrderSeachPhone = await Order.find({"phone": searchString}).exec();

        console.log("productName", OrderSeachPhone)
        res.status(200).send(
            {
                data: OrderSeachPhone
            }
        )
    } catch (error) {
        res.status(404).json({
            message: "Not Found!"
        })

    }
}

