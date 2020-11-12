const client = require("../db/demo_mongo");
const ObjectId = require('mongoose').Types.ObjectId;

// remove
exports.createRoom = async function(req, res, next) {
    await client.connect();
    const db = client.db("bnzzp8d394kena7");

    const {creator_id, message} = req.body;

    if (creator_id == null || creator_id == undefined || message == null || message == undefined)
    {
        return res.status(404).send({error : "Champs manquant"});
    }

    const params = {creator_id : creator_id, message : message};
    db.collection("rooms").insertOne(params);
    return res.status(200).send(params);
}