
const axios = require('axios');

class verify{
    async verify(req,res){
        var userkey = req.body.token
    
        var secret = "0x61dD2575281Fd9Ded435B4715C2138aFC50299E8"
        // var secret = "6LeHMacbAAAAAPjhv6KTcNIaaqH1y-TJViBUvEK2"
        axios.get('https://hcaptcha.com/siteverify?response='+userkey+'&secret='+ secret).then(response => {
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