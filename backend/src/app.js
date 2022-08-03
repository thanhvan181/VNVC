import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRouter from "../routes/auth"
import categoryRouter from "../routes/category"
import productRouter from "../routes/products"
import companyRouter from "../routes/company"
import subcategoryRouter from "../routes/sub_category"
import injectionParkRouter from "../routes/injectionpark"
import registerRouter from "../routes/register"
import cityRouter from "../routes/city";
import orderRouter from "../routes/order";
import uploadRouter from "../routes/upload";
import NumberRouter from "../routes/number";




const app = express();
const option = {

}

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
console.log("PATH: ", express.static('public'))
app.use("/public", express.static('public'))
// app.get('/', function(req, res){
//     res.download('Hello.txt');
// });

// const specs = swaggerJSDoc(option)
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc));

// route
// app.use("/api",productRoute);
// app.use("/api",categoryRoute);

// connnect database
// mongoose.connect('mongodb://localhost:27017/VNVC')
//     .then(() => console.log("Kết nối db thành công"))
//     .catch((error) => console.log(error));

mongoose.connect('mongodb://demodatabase:tiKHgyRnf6njJIbT@cluster0-shard-00-00.myvkr.mongodb.net:27017,cluster0-shard-00-01.myvkr.mongodb.net:27017,cluster0-shard-00-02.myvkr.mongodb.net:27017/VNVC?ssl=true&replicaSet=atlas-5mv8y2-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

// // connection
const PORT = 8080;

app.use("/api", userRouter);

app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", companyRouter);
app.use("/api", subcategoryRouter);
app.use("/api", injectionParkRouter);
app.use("/api", registerRouter);
app.use("/api", cityRouter);
app.use("/api", orderRouter);
app.use("/api", uploadRouter);
app.use("/api", NumberRouter)


app.listen(PORT, () => {
    console.log("Server is running port", PORT)
})