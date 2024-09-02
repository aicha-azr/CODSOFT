const mongoose = require('mongoose');
const Post = require('../Models/PostSchema');
const User = require('../Models/UserSchema');

const PostControllers = {
    getAllPost: async (req, res) => {
        try {
            const posts = await Post.find().populate('author', 'name');
            if (!posts || posts.length === 0) { 
                return res.status(400).json({ message: 'No post found' });
            }
            res.status(200).json({ posts: posts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getOnePost: async (req, res) => {
        try {
            const postId = req.params.id;
            const post = await Post.findById(postId);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            const user = await User.findById(post.author._id);

            res.status(200).json({ post: post, user: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    addPost: async (req, res) => {
        try {
            // Check for required fields
            if (!req.body || !req.body.title || !req.body.content) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
    
            const { images, title, content } = req.body;
    
            // Create a new post
            const newPost = await Post.create({
                image: images,  
                title: title,
                content: content,
                author: req.user.userId 
            });
    
            // If the post was successfully created
            if (newPost) {
                return res.status(201).json({ message: 'Your post was successfully created', post: newPost });
            }
    
          
            return res.status(400).json({ message: 'Your post could not be created, please try again' });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },
    deletePost: async(req,res)=>{
        try{
            const postId= req.params.id;
            const existedPost = await Post.findByIdAndDelete(postId);
            if(!existedPost){
                return res.status(404).json({message: 'the post does not exist'})
            }
                return res.status(200).json({message: 'the post is deleted successfully'})
        }catch(e){
                return res.status(500).json({error: e.message})
        }
    },
    updatePost: async(req, res)=>{
        try{
            const postId = req.params.id;
            
            const existedPost = await Post.findById(postId);
            if(!existedPost){
                return res.status(404).json({message: 'the post does not exist'})
            }
            if (!req.body || !req.body.title || !req.body.content) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
            const { images, title, content } = req.body;
            const updatedPost = await Post.findByIdAndUpdate(
                postId,
                {
                    image: images,  
                    title: title,
                    content: content,
                    author: req.user.userId 
                }
            );
            if(!updatedPost){
                return res.status(400).json({message: 'the post could not be updated, try again!'})
            }
            return res.status(200).json({ message: 'The post was updated successfully', post: updatedPost });
        }catch(e){
            return res.status(500).json({error: e.message})
        }
    }
    
};

module.exports = PostControllers; 
