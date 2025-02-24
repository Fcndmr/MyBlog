const mongoose = require("mongoose");

const CardSchema = mongoose.Schema(
    {
        img : { type : String, required : true, trim : true},
        title : { type : String, required : true, trim : true},
        description : { type : String, required : true, trim : true}
    },
    {
        timestamps : true
    }
);

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;