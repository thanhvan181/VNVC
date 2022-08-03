import NumberUser from "../models/number"

export const create = async(req, res) => {

    try {
        const number = await NumberUser(req.body).save();
        res.json({
            data: number
        })
        
    } catch (error) {
        res.status(400).json({
            message: "loi khong dang ky duoc tai khoan thanh vien"
        })
    }
}