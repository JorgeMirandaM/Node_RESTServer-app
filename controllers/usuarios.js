const {response}= require('express');
const bcryptjs= require('bcryptjs');

const Usuario= require('../models/usuario');

const usuariosGet = (req,res= response)=>{

    const query= req.query;

    res.json({
        msg:'get API - controlador',
        query
    })
}

const usuariosPost=async (req,res=response)=>{

    

    const {nombre,correo, password, rol}= req.body;

    const usuario= new Usuario({nombre,correo, password, rol});
    

    //Encriptar la contraseña
    const salt= bcryptjs.genSaltSync();
    usuario.password= bcryptjs.hashSync(password,salt);

    await usuario.save();
    

    res.json({
        msg:'post API - controlador',
        usuario
    })
}


const usuariosPut=(req,res=response)=>{

    const id=req.params.id;


    res.json({
        msg:'put API - controlador',
        id
    })
}


const usuariosPatch=(req,res=response)=>{

    res.json({
        msg:'patch API - controlador'
    })
}


const usuariosDelete=(req,res=response)=>{

    res.json({
        msg:'delete API - controlador'
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}