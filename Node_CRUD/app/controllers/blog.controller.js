const BlogModel = require('../models/blog.model')

//create new blog
exports.create = (req,res)=>{
    if(req.body.title && req.body.description){
        const blog = new BlogModel({
            title:req.body.title,
            description:req.body.description
        });
        blog.save().then((data) => {
        res.send({
            message:"Blog created successfully",
            blog:data
            });
        }).catch(err => {
            console.log("Error in saving blog",err);
            res.status(400).send({message:`Error in saving blog ${err}`});
        });
    }
    else
    {
        res.status(400).send({message:"filleds are empty"});
    }
}

//find all the blogs
exports.findsAll = async (req,res) => {
    // const blog = await BlogModel.find();
    BlogModel.find().then(data=>{
        res.send({message:"Blogs data",blogs:data});
    }).catch(err => {
        console.log("Error in fetching data",err);
        res.status(400).send({message:`error in fetching blog ${err}`});
    });
};

//find all the blogs with title 
exports.findAllByTitle = async (req, res) => {
    // const blog = await BlogModel.find();
      const title = req.query.title;
      const condition = title?{title:{$regex:new RegExp(title), $options:"i"}}:{}
    BlogModel.find(condition).then((data) => {
      res.send({ message: "Blogs data", blogs: data });
    }).catch(err=>{
      console.log('Error in fetching data',err);
      res.status(400).send({ message: `Error in fetching  blog ${err}` });
  
    });
  };

//find one base on id
exports.findOne = async (req,res) => {
    const id = req.params.id;
    BlogModel.findById(id).then(data=>{
        if(!data)
        {
            res.status(400).send({message:`No Blog found with id : `+id});
        }
        else
        {
            res.send({message:"Data found",blogs:data});
        }
    }).catch(err => {
        res.status(500).send({message:err.message||"Some issue in fetching data with id : "+id});
    });
};

//update based on id
exports.update = (req,res) => {
    if(!req.body)
    {
        return res.status(400).send({message: "Please provide data to update"})
    }
    const id = req.params.id;
    BlogModel.findByIdAndUpdate(id,req.body,{ useFindAndModify:false})
        .then(data=>{
            if(!data)
            {
                res.status(400).send({message:`No Blog found with id : `+id});
            }
            else
            {
                res.send({message:"Blog Updated Successfully",blogs:data});
            }
        }).catch(err => {
            res.status(500).send({message:err.message||"Some issue in updating data with id : "+id});
        });
}

//delete
exports.delete = (req,res) => {
    const id = req.params.id;
    BlogModel.findByIdAndRemove(id)
        .then(data=>{
            if(!data)
            {
                res.status(400).send({message:`No Blog found with id : `+id});
            }
            else
            {
                res.send({message:"Blog Deleted Successfully",blogs:data});
            }
        }).catch(err => {
            res.status(500).send({message:err.message||"Some issue in deleting data with id : "+id});
        });
}