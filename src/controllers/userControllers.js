exports.readUser=(req, res) =>{
    res.send('respond with a resource');
}

exports.readSingleUser=(req,res)=>{
    res.send('this is for reading a single user')
}

exports.createUser=(req,res)=>{
    res.send('this is for creating a user')
}

exports.updateUser=(req,res)=>{
    res.send('this is to update the user details')
}

exports.deleteUser=(req,res)=>{
    res.send('this is to delete the user')
}