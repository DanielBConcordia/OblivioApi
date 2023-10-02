const express = require('express');
const router = express.Router();

const Nivel = require('../models').tb_nivei;

//cad - post
router.post('/cadnivel', async (req, res) => {
    const {tb_nivel_desc} = req.body;
    const newEdit = await Nivel.create({tb_nivel_desc})
    res.status(200).json({message: 'Cadastrado com sucesso'});
});

//buscar - get
router.get('/listniveis', async (req, res) => {
    const niveis = await Nivel.findAll();
    res.status(200).json(niveis);
});

//buscar pelo id - get
router.get('/buscnivel/:id', async (req, res) => {
    const id=req.params;
    const nivel = await Nivel.findByPk(req.params.id);
    res.status(200).json(nivel);
});

//alterar - put 
router.put('/altnivel/:id', async (req,res) => {
    const {tb_nivel_desc} = req.body;

    await Nivel.update(
        {
            tb_nivel_desc
        },
        {
            where: {id:req.params.id},
        }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
});

//deletar - delete
router.delete('/delnivel/:id', async (req,res) => {
    await Nivel.destroy({
        where:{
            id:req.params.id,
        }
    }),
    res.status(200).json({message:'Excluído com sucesso'})
});

module.exports=router;