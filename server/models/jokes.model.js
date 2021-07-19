const mongoose = require("mongoose"); //to define data structure

const JokeSchema = new mongoose.Schema( // mongoose is an object and schema is key
    {
        setup: {
            type: String,
            required: [true, "This is how we validate"],
            minlength: [10, "setup has to be more than 10 characters"]
        },
        punchline: {
            type: String,
            minlength: [3, "setup has to be more than 3 characters"]
        }
    },
    { timestamps: true }

);

const joke = mongoose.model("joke", JokeSchema);

module.exports = joke;