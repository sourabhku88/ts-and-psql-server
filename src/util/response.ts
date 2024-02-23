import {Response} from "express"

class Responses{
    /**
     * @author `Sourabh`
     * @function success res 
     * @returns status:200,msg:'all ok!',result:[]
     */
    public succes(res:Response,msg:string = 'All ok!',result:any = []){
        return res.status(200).send({status:true,msg,result})
    }
    /**
     * @author `Sourabh`
     * @function client error res 
     * @returns status:400,msg:'data incorrect!',result:[]
     */
    public clientError(res:Response,msg:string = 'data incorrect!',result:any = []){
        return res.status(400).send({status:false,msg,result})
    }
    /**
     * @author `Sourabh`
     * @function not fount error res 
     * @returns status:404,msg:'Data not Found!',result:[]
     */
    public notFound(res:Response,msg:string = 'Data not Found!',result:any = []){
        return res.status(404).send({status:false,msg,result})
    }
    /**
     * @author `Sourabh`
     * @function un authantication error res 
     * @returns status:401,msg:'not unauthorized!!',result:[]
     */
    public unAuth(res:Response,msg:string = 'not unauthorized!',result:any = []){
        return res.status(401).send({status:false,msg,result})
    }
    /**
     * @author `Sourabh`
     * @function server error res 
     * @returns status:500,msg:'Something went wrong!',result:[]
     */
    public server(res:Response,msg:string = 'Something went wrong!',result:any = []){
        return res.status(500).send({status:false,msg,result})
    }
}

export = new Responses();