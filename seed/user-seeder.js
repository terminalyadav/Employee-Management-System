var User= require('../models/user');
var bcrypt=require('bcrypt-nodejs');
var mongoose= require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/HRMS');

var users=[

    new User({
        type: 'project_manager',
        email: 'pm@pm.com',
        password: bcrypt.hashSync('pm1234', bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS) || 5), null),
        name: 'Project manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0333-4552191',
    }),
    new User({

        type: 'accounts_manager',
        email: 'am@am.com',
        password: bcrypt.hashSync('am1234', bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS) || 5), null),
        name: 'Accounts Manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({
        type: 'employee',
        email: 'anshu@gmail.com',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS) || 5), null),
        name: 'Anshuman Mittal',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0333-4552191',
    }),
    new User({

        type: 'employee',
        email: 'ShivamSharma@sample.com',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS) || 5), null),
        name: 'Shivam Sharma',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS) || 5), null),
        name: 'Asutosh Yadav',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4297859',
    }),
];

done=0;
for (i=0;i<users.length;i++){
    users[i].save(function(err,result){
        done++;
        if(done==users.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}