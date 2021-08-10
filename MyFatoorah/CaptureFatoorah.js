var request = require("request");
class capturepayment{
    async capturePayment(req,res){
    
        var token = 'uE5M32qq1kf7sWLxbglDOXykcPfx93V1JiL5cbpQF9zXSnqE5btU8SqKFSpLBzVHPEKKF3cKSTbMcJyYZGvSg5ZuqYatMbAQjN-M1-RL1ufl137uOMmgxks0xlD9q3R4-BF46u8Pm9wLTTBtQlRrSUhFsVBwelHfyBlFTl-kZg7jRLakiXRz8hTPpQaIWbVj9cVJHknKuSRGwBcnRYRYvMI7PVUJhRYxJwMLoHPaTjVElvAUwHPO3X6jcgTEIa7NVLmG28rlD3pDACIjeaicWsF0HHpi5B-nr3jHBZ1Ea0NnO9I-WoDte3jdFxEhPqGlad-5Lc7xjUPeLfhsOxc7FSnGB9NZOZxD2UYF9pkIA8ii7zoeT9B_Kpr_hYBeRtL4Mvy3yRW-fNVmbUoVbiQihWnmq2-20IG5cAW0ryMPlLYzCIQd9Z-ysT5hFYMoXJIME1SOYTQ-IW-v20XD3fbUFBukHn1BADmpW5eBxtv_qSnOK_bzQFD86OlxzHpUOKbUKjCIOQM9vmwSrpBMHXPKAT2-x1Ka_0wqE6tGoDfxWxhf6srlzUy3U9XIGcDUuzKShquPyIFOoYXWwf0JPuSgJ53Yby0Kfqx9DRv_qAkqNBiRwStY1O625yP9IaNOo9_5F-LvqomEQptk3I722-gD37a6XvKQ3xBMlhfJEp5AO4juw-RShVUV3YJ7HkApg_cEqjh5lg'; //token value to be placed here;
        var baseURL = 'https://api.myfatoorah.com';
        var options = { method: 'POST',
          url: baseURL+'/v2/getPaymentStatus',
          headers: 
           { Accept: 'application/json',
           Authorization: 'Bearer '+token,
           'Content-Type': 'application/json' },
          body: 
           { KeyType: req.body[0].KeyType,
             Key: req.body[0].Key},
          json: true };
          
          request(options, function (error, response, body) {
            if (error) 
            {
                res.send(error)
            }
            res.send(body);
          });
}
}
module.exports = new capturepayment();