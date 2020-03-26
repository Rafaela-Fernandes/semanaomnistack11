const crypto =  require('crypto');
const connection =  require('../dataBase/connection');

module.exports = {

    async index(req, resp){
        const data =  await connection.select().table('ongs')
        return resp.json(data)
    },
    async create(req,resp){
        const {name, email,whatsapp, city, uf} =  req.body;
        const id  = crypto.randomBytes(4).toString('HEX')
        await connection('ongs').insert({
            id,
            name, 
            email,
            whatsapp, 
            city, 
            uf,
        })
        return resp.json({id})
    },
    async getOng(req, resp){
        const {id}  = req.params
        console.log(id);
        const data =  await  connection('ongs').where('id', id)
        return resp.json(data)
    } , 
}

