const express = require('express');
const router = express.Router();

const Alergia = require('../models').tb_alergia;

//cad - post
router.post('/cadalergia', async (req, res) => {
    const {tb_alergia_desc} = req.body;
    const newEdit = await Alergia.create({tb_alergia_desc})
    res.status(200).json({message: 'Cadastrado com sucesso'});
});

//buscar - get
router.get('/listalergias', async (req, res) => {
    const alergias = await Alergia.findAll();
    res.status(200).json(alergias);
});

//buscar pelo id - get
router.get('/buscalergia/:id', async (req, res) => {
    const id=req.params;
    const alergia = await Alergia.findByPk(req.params.id);
    res.status(200).json(alergia);
});

//alterar - put 
router.put('/altalergia/:id', async (req,res) => {
    const {tb_alergia_desc} = req.body;

    await Alergia.update(
        {
            tb_alergia_desc
        },
        {
            where: {id:req.params.id},
        }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
});

//deletar - delete
router.delete('/delalergia/:id', async (req,res) => {
    await Alergia.destroy({
        where:{
            id:req.params.id,
        }
    }),
    res.status(200).json({message:'Excluído com sucesso'})
});

module.exports=router;