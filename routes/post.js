const express = require("express");

const { postModel } = require("../models/postModel");
const postRouter = express.Router();



postRouter.post("/post", async (req, res) => {
    try {
        const data = new postModel(req.body);
        await data.save();
        res.status(200).json({ msg: "data is saved" })
    } catch (error) {
        res.status(200).json(error.message)

    }
})


postRouter.get("/get", async (req, res) => {
    try {
        const data = await postModel.find();

        res.status(200).json({ msg: data });
    } catch (error) {
        res.status(200).json(error.message)

    }
})

postRouter.get("/sortASC", async (req, res) => {
    try {
        let data = await postModel.find();
        let sortedData = filterData.sort((a, b) => {
            return a.budget - b.budget
        })
        res.status(200).json({ msg: sortedData });




    } catch (error) {
        res.status(200).json(error.message)

    }
})

postRouter.get("/sortDESC", async (req, res) => {
    try {
        let data = await postModel.find();
        let sortedData = filterData.sort((a, b) => {
            return b.budget - a.budget
        })
        res.status(200).json({ msg: sortedData });




    } catch (error) {
        res.status(200).json(error.message)

    }
})




// postRouter.patch("/update/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const data = await postModel.findByIdAndUpdate({"_id":id},req.body);

//         res.status(200).json({msg:"data updated successfully"});
//     } catch (error) {
//         res.status(200).json(error.message)

//     }
// })

postRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await postModel.findByIdAndDelete({ "_id": id });

        res.status(200).json({ msg: "data deleted successfully" });
    } catch (error) {
        res.status(200).json(error.message)

    }
})


module.exports = {
    postRouter
}