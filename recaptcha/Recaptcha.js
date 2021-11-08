
const axios = require('axios');

class verify{
    async verify(req,res){
        var userkey = req.body.token
    
        var secret = "6LcK2eMcAAAAAPaXJIn5ngqxU458lsd4_Ns7F382"
        // var secret = "6LeHMacbAAAAAPjhv6KTcNIaaqH1y-TJViBUvEK2"
        axios.get('https://www.google.com/recaptcha/api/siteverify?secret='+ secret +'&response='+userkey).then(response => {
            console.log('key data = ',response );
            if(response.data.success){
                return res.status(200).json({
                    response: "verification success"
                });
            }
             return res.status(401).json({
                 error: "verification failed"
             })
        }).catch(error =>{
            res.status(500).json({
                error : error
            })
        });
    }
}

module.exports = new verify();