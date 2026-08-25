const express = require("express");
const router = express.Router();
const Roles = require("../db/models/Roles")
const RolePrivliges = require("../db/models/RolePrivileges");
const Response = require("../lib/Response");
const CustomError = require("../lib/Error");
const Enum = require("../config/enum")
const role_privileges = require("../config/role_privileges")


router.get("/", async (req, res, next) => {
    try {

        let roles = await Roles.find({});
        res.json(Response.successResponse(roles));


    } catch (error) {
        let errorResponse = Response.errorResponse(error);
        res.status(errorResponse.code).json(errorResponse);
    }

});

router.post("/add", async (req, res, next) => {
    let body = req.body;
    try {

        if (!body.roleName) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Validation Error", "role name must be filled")
        if (!body.permissions || !Array.isArray(body.permissions) || body.permissions.length == 0) {
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Validation Error", "permissions must be a non-empty array")
        }
        let role = new Roles({
            roleName: body.roleName,
            isActive: true,
            createdBy: req.user?.id
        })
        await role.save();

        for (let i = 0; i < body.permissions.length; i++) {
            let priv = new RolePrivliges({
                roleId: role._id,
                permission: body.permissions[i],
                createdBy: req.user?.id
            });

            await priv.save();
        }

        res.json(Response.successResponse({ success: true }));
    }
    catch (error) {

        let errorResponse = Response.errorResponse(error);
        res.status(errorResponse.code).json(errorResponse)

    }
});

router.post("/update", async (req, res, next) => {
    let body = req.body;
    try {

        if (!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Validation Error", "id must be filled")

        let updates = {};

        if (body.roleName) updates.roleName = body.roleName;
        if (typeof body.isActive === "boolean") updates.isActive = body.isActive;


        // permission kontrolleri
        if (body.permissions && Array.isArray(body.permissions) && body.permissions.length > 0) {

            let permissions = await RolePrivliges.find({ roleId: body._id })
            let removedPermissions = permissions.filter(x => !body.permissions.include(x.permission));
            let newPermissions = body.permissions.filter(x => !permissions.map(p => { return p.permissions }).includes(x))

            if (removedPermissions.length > 0) {
                await RolePrivliges.deleteOne({ _id: { $in: [removedPermissions.map[x => x._id]] } })
            }

            if (newPermissions.length > 0) {
                for (let i = 0; i < body.permissions.length; i++) {
                    let priv = new RolePrivliges({
                        roleId: body._id,
                        permission: body.permission[i],
                        createdBy: req.user?.id
                    });
                    await priv.save();
                }
            }



            
        }


        await Roles.updateOne({ _id: body._id }, updates);

        res.json(Response.successResponse({ success: true }));
    }
    catch (error) {

        let errorResponse = Response.errorResponse(error);
        res.status(errorResponse.code).json(errorResponse)

    }
});




router.post("/delete", async (req, res, next) => {
    let body = req.body;
    try {

        if (!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Validation Error", "id must be filled")

        let updates = {};

        await Roles.deleteOne({ _id: body._id });

        res.json(Response.successResponse({ success: true }));
    }
    catch (error) {

        let errorResponse = Response.errorResponse(error);
        res.status(errorResponse.code).json(errorResponse)

    }
});



router.get("/role_privileges", (req, res) => {
    res.json(role_privileges);

});





module.exports = router;