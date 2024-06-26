const session=require('express-session')
const MongoStore=require('connect-mongo')
const sessionConfig=session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URI,
        collectionName:'sessions',
        ttl:30*24*60*60
    }),
    cookie:{
        maxAge:30*24*60*60*1000,
        httpOnly:true,
        secure:false,
        sameSite:'strict'
    }

})

module.exports=sessionConfig;