const Post = require('../models/Post')

module.exports = {
    async index (req, res){

    },

    async store (req, res){
        const {author , place ,description, hashtags} = req.body;
        const {filename : image} = req.file;

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        })
        return res.json(post)
    }
}