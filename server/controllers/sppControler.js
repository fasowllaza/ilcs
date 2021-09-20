const { default: axios } = require("axios")
const url_api = "https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getSppBDoc"

class SppController{
    static async getSppDoc(req, res, next){
        try{
            axios.get(url_api)
            .then((data) =>{
                res.status(200).json(
                    data.data.data
                )
                console.log(data.data.data)
            })
            .catch((err) =>{
                res.status(400).json({
                    message: "data not found"
                })
            })
        }
        catch(err){
            res.status(400).json({
                message: "data not found"
            })
        }
    }
}

module.exports = SppController