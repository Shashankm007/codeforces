var Codeforces = require('codeforces-api');

CFK = 'e76a901b83f9589d12df677d4d799c8e102bbbe0';
CFS = 'c07fd4f00742e793d982ea1eb1136444b11e8738';

Codeforces.setApis(CFK , CFS);

module.exports = {
    name: "userinfo",
    category: "",
    description: "PM user rating",
    run: async (client, message, args) => {
        Codeforces.user.info({ handles: args } , function (err, data) {
 
            if (err) {
                //console.log(err);
            }
            if (data){
                console.log(data);
            }
            else{
                console.log("Invalid username.");
            }
            
        });
    }
}