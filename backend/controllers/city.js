import { driver } from "../data/data";

const session = driver.session();

export const create = async (req, res) => {
    try {
        const name = req.body.name
        const response = await session.run(`CREATE (city:City) SET city.name = "${name}" RETURN city.name as name, id(city) as id`)
        
        const records = response.records.map((record) => {
            return record.toObject();
        })
        res.json(records)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const list = async (req, res) => {
    try {
        const response = await session.run(`MATCH (city:City) RETURN city.name as name, id(city) as id`)
        const records = response.records.map((record) => {
            return record.toObject();
        })
        res.json(records)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
    }
}