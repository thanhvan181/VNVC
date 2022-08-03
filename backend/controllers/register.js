import Register from "../models/resgister"
import User from "../models/user"

export const create = async (req, res) => {
    try {
        console.log("Receive: ", req.body)
        if (req.body.code){
            const user = User.find({'code': req.body.code})
            req.body.code = user ? user : undefined
        } else {
            delete req.body.code
        }
 
        const Registerss = await new Register(req.body).save();
        res.json(Registerss)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const list = async (req, res) => {
    const condition = { 'user_id': req.params.id }
    try {
        const Registerss = await Register.find(condition).exec();
        res.json(Registerss)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}
export const listregisterdetails = async(req, res) => {
    const condition = { _id: req.params.id }
  
    try {
       
        const resgiters = await Register.findOne(condition).exec();
        res.json(resgiters)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong lay duoc list resgirer "
        })

    }
}
// export const remove = async ( req, res) => {
//     const condition = { _id: req.params.id};
//     try {
//         const categories = await Category.findOneAndDelete(condition).exec();
//         res.json(categories)
//     } catch (error) {
        
//     }
// }