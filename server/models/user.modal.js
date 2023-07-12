import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    fullName:{
        type:String,
        required:[true,"Name is requires"],
        minLength:[3,'Name must be 3 character'],
        maxLength:[20,'Nmae must be less then 20 character'],
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is requires"],
        lowercase:true,
        trim:true,
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please fill in a valid  email address"
    ]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[5,'Password must be at least 5 character'],
        select:false
    },
    avatar:{
        public_id:{
            type:string
        },
        secure_url:{
            type:String
        },
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER'
    },
    forgetPasswordToken:String,
    forgetPasswordExpiry:Date
},{timestamps:true})

const User = model('User',userSchema)

export default User;