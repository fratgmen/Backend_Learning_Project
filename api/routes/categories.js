var express = require('express');
var router = express.Router();
const Categories = require("../db/models/Categories");
const Response = require("../lib/Response")
const CustomError = require("../lib/Error")
const Enum = require("../config/enum")


// CRUD işlemleri




/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    let categories = await Categories.find({})

    res.json(Response.successResponse(categories));

  } catch (err) {
    let errorResponse = Response.errorResponse(err)

    res.status(errorResponse.code).json(Response.errorResponse(err))
  }
  res.json({ succes: true });
});

router.post("/add", async (req, res) => {
  try {

    if (!req.body.name) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "validation error")

    let category = new Categories({
      name: req.body.name,
      isActive: true,
      createdBy: req.user?.id
    })

    await category.save();
    res.json(Response.successResponse({ succes: true }))
  } catch (err) {
    let errorResponse = Response.errorResponse(err)
    res.status(errorResponse.code).json(errorResponse);

  }
})

router.post("/update", async (req, res) => {
  let body = req.body;

  try {

    if (!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST)
    let updates = {};
    if (body.name) updates.name = body.name;
    if (typeof body.isActive === "boolean") updates.isActive = body.isActive;

    await Categories.updateOne({ _id: body._id }, updates)

    res.json(Response.successResponse({ success: true }))

  } catch (err) {
    let errorResponse = Response.errorResponse(err)
    res.status(errorResponse.code).json(errorResponse);

  }
})

router.post("/delete", async (req,res)=>{
  let body = req.body;
  try {
    if (!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST)

      await Categories.deleteOne({_id:body._id})
      res.json(Response.successResponse({ success: true }))


  } catch (err) {
    let errorResponse = Response.errorResponse(err)
    res.status(errorResponse.code).json(errorResponse);

  }
})




module.exports = router;
