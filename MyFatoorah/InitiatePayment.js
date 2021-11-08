var request = require("request");

class initiatePayment {

async InitiatePayment (req,res){

//var token = 'uE5M32qq1kf7sWLxbglDOXykcPfx93V1JiL5cbpQF9zXSnqE5btU8SqKFSpLBzVHPEKKF3cKSTbMcJyYZGvSg5ZuqYatMbAQjN-M1-RL1ufl137uOMmgxks0xlD9q3R4-BF46u8Pm9wLTTBtQlRrSUhFsVBwelHfyBlFTl-kZg7jRLakiXRz8hTPpQaIWbVj9cVJHknKuSRGwBcnRYRYvMI7PVUJhRYxJwMLoHPaTjVElvAUwHPO3X6jcgTEIa7NVLmG28rlD3pDACIjeaicWsF0HHpi5B-nr3jHBZ1Ea0NnO9I-WoDte3jdFxEhPqGlad-5Lc7xjUPeLfhsOxc7FSnGB9NZOZxD2UYF9pkIA8ii7zoeT9B_Kpr_hYBeRtL4Mvy3yRW-fNVmbUoVbiQihWnmq2-20IG5cAW0ryMPlLYzCIQd9Z-ysT5hFYMoXJIME1SOYTQ-IW-v20XD3fbUFBukHn1BADmpW5eBxtv_qSnOK_bzQFD86OlxzHpUOKbUKjCIOQM9vmwSrpBMHXPKAT2-x1Ka_0wqE6tGoDfxWxhf6srlzUy3U9XIGcDUuzKShquPyIFOoYXWwf0JPuSgJ53Yby0Kfqx9DRv_qAkqNBiRwStY1O625yP9IaNOo9_5F-LvqomEQptk3I722-gD37a6XvKQ3xBMlhfJEp5AO4juw-RShVUV3YJ7HkApg_cEqjh5lg' //token value to be placed here;
//var baseURL = 'https://api.myfatoorah.com';
 var token = 'rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL'
 var baseURL = 'https://apitest.myfatoorah.com';

var options = { method: 'POST',
  url: baseURL+'/v2/InitiatePayment',
  headers: 
   { Accept: 'application/json',
     Authorization: 'Bearer '+token,
     'Content-Type': 'application/json' },
  body: { InvoiceAmount: req.body.InvoiceAmount, CurrencyIso: 'QAR' },
  json: true };

request(options, function (error, response, body) {
  if (error){
      res.send(error);
  }
    res.send(body);
});
}
}


module.exports = new initiatePayment();