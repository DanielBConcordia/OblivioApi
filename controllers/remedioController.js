const express = require('express');
const router = express.Router();

const Remedio = require('../models').tb_remedio;

//cad - post
router.post('/cadremedio', async (req, res) => {
    const {tb_remedio_desc, tb_remedio_qtd, tb_remedio_hora} = req.body;
    const newEdit = await Remedio.create({tb_remedio_desc, tb_remedio_qtd, tb_remedio_hora})
    res.status(200).json({message: 'Cadastrado com sucesso'});
});

//buscar - get
router.get('/listremedio', async (req, res) => {
    const remedios = await Remedio.findAll();
    res.status(200).json(remedios);
});

//buscar pelo id - get
router.get('/buscremedio/:id', async (req, res) => {
    const id=req.params;
    const remedio = await Remedio.findByPk(req.params.id);
    res.status(200).json(remedio);
});

//alterar - put 
router.put('/altremedio/:id', async (req,res) => {
    const {tb_remedio_desc, tb_remedio_qtd, tb_remedio_hora} = req.body;

    await Remedio.update(
        {
            tb_remedio_desc, tb_remedio_qtd, tb_remedio_hora
        },
        {
            where: {id:req.params.id},
        }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
});

//deletar - delete
router.delete('/delremedio/:id', async (req,res) => {
    await Remedio.destroy({
        where:{
            id:req.params.id,
        }
    }),
    res.status(200).json({message:'Excluído com sucesso'})
});

module.exports=router;