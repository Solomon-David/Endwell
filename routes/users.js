const model=require("./userModel")
const  bcrypt=require("bcryptjs")

class Users{
    constructor(req,res){
        this.req=req
        this.res=res
    }

   static async createUser(req,res){
        let response=""
        //this.req=req
        //this.res=res
        
 console.log(req.body.password)
        
        model.find({matric:req.body.matric, department:req.body.dept}, async function(err, find){
            if(find[0]!=null){
                response="This user already exists"
                
            }
            else{
                var salt= await bcrypt.genSalt(10)
                console.log(salt+" is salt")
                var hashed=await bcrypt.hash(req.body.password,salt)
                
                    console.log(hashed+" is hashed")
                var newUser=new model({
                    fname:req.body.fname,
                    lname:req.body.lname,
                    email:req.body.email,
                    matric:req.body.matric,
                    department:req.body.dept,
                    level:req.body.level,
                    password:hashed
                    
                })

                newUser.save().then(()=>{
                    model.findOne({matric:req.body.matric, department:req.body.dept}, function(err, item){
                    response=`User ${item.fname} ${item.lname} has been saved to the database`
                console.log(item)
                console.log(response)
             
                    })
                }).catch((err)=>{console.log("Error occured /n"+err)})
        }
        
        console.log(response)
    
        res.send(response)
            })
    //end of createUser
}

static async loginUser(req,res){

}
//end of loginUser 

}

module.exports=Users

/*
createItem
1 take req and res
2 from req get fields
3 check if matric and dept match existing users
4 case yes: DISPLAY user already exists
5 case no: save user to db

loginUser
1 take login details (matric/email, password)
2 check if user sent matric or email
3 find users by email/matric (depending on result of step 2)
4 compare user.email/matric and user.password against found values
5 IF match is not made
6 send error
7 IF match is made 
8 get user role
9 IF user.role==user
10 grant read only priviledges
11 IF user.role==publisher
12 grant read/write priviledges
12 IF user.role==admin
13 grant full access

*/