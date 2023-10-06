const express = require('express');
const router = express.Router();
const Cuidador = require ('../models').tb_cuidadore;

//cadastro - post
router.post('/cadcuidador', async (req,res) => {
    try {
        
        await Cuidador.create(req.body)
        res.status(200).json({message:'Cadastrado com sucesso!'});
        
    } catch (error) {
        res.status(500).json({ error })
    }
})

//buscar - get
router.get('/listcuidadores', async (req, res) => {
    const cuidadores = await Cuidador.findAll();
    res.status(200).json(cuidadores);
});

//busca por id - get
router.get('/busccuidador/:id', async (req, res) => {
    const id = req.params;
    const cuidador = await Cuidador.findByPk(req.params.id);
    res.status(200).json(cuidador);
});

//aletrar - put
router.put('/altcuidador/:id', async (req, res) => {
    const {
        tb_cuidador_cpf, tb_cuidador_dt_nasc, tb_cuidador_email, tb_cuidador_tel,tb_cuidador_tel_res, tb_cuidador_nome_s, 
        tb_cuidador_nome, tb_cuidador_senha, tb_cuidador_foto_p, tb_cuidador_rua, tb_cuidador_cep, tb_cuidador_bairro,
        tb_cuidador_numero, tb_cuidador_cid, tb_cuidador_uf, tb_cuidador_comp, tb_cuidador_pr, tb_cuidador_fk_nivel
    } = req.body;

    await Cuidador.update (
        {
            tb_cuidador_cpf, tb_cuidador_dt_nasc, tb_cuidador_email, tb_cuidador_tel,tb_cuidador_tel_res, tb_cuidador_nome_s, 
            tb_cuidador_nome, tb_cuidador_senha, tb_cuidador_foto_p, tb_cuidador_rua, tb_cuidador_cep, tb_cuidador_bairro,
            tb_cuidador_numero, tb_cuidador_cid, tb_cuidador_uf, tb_cuidador_comp, tb_cuidador_pr, tb_cuidador_fk_nivel
        },
        {
            where: {id:req.params.id},
        }
    );
    res.status(200).json({message: 'Atualizado com sucesso'});
})

//deletar - delete
router.delete('/delcuidador/:id', async (req, res) =>{
    await Cuidador.destroy({
    where:{
        id: req.params.id,
    },
});
res.status(200).json({message:'Excluído com sucesso'})
});

module.exports=router;