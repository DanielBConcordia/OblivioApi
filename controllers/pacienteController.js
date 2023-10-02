const express = require('express');
const router = express.Router();
const Paciente = require('../models').tb_paciente;

//cadastrar - post
router.post('/cadpaciente', async (req, res) => {
    const {tb_paciente_cpf, tb_paciente_nome, tb_paciente_dt_nasc, tb_paciente_condicao, tb_paciente_responsavel_legal ,
        tb_paciente_tipo_sang, tb_paciente_temperamento, tb_paciente_interacao, tb_paciente_foto, tb_paciente_fk_cuidador, tb_paciente_fk_remedio, tb_paciente_fk_alergia} = req.body;
    const newEdit = await Paciente.create({tb_paciente_cpf,tb_paciente_nome,tb_paciente_dt_nasc,tb_paciente_condicao,tb_paciente_responsavel_legal,tb_paciente_tipo_sang,tb_paciente_temperamento,tb_paciente_interacao,tb_paciente_foto,tb_paciente_fk_cuidador,tb_paciente_fk_remedio,tb_paciente_fk_alergia})
    res.status(200).json({message: 'Cadastrado com sucesso'});
});


//Bucar - get
router.get('/listpacientes', async (req, res) => {
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
});


//Buscar por id - get
router.get('/buscpaciente/:id', async (req, res) => {
    const id=req.params;
    const pacientes = await Paciente.findByPk(req.params.id);
    res.status(200).json(pacientes);
});

    
//alterar - put 
router.put('/altpaciente/:id', async (req, res) =>{
    const {tb_paciente_cpf, tb_paciente_nome, tb_paciente_dt_nasc, tb_paciente_condicao, tb_paciente_responsavel_legal ,
        tb_paciente_tipo_sang, tb_paciente_temperamento, tb_paciente_interacao, tb_paciente_foto, tb_paciente_fk_cuidador, tb_paciente_fk_remedio, tb_paciente_fk_alergia} = req.body;
    await Paciente.update(
        {tb_paciente_cpf, tb_paciente_nome, tb_paciente_dt_nasc, tb_paciente_condicao, tb_paciente_responsavel_legal ,
        tb_paciente_tipo_sang, tb_paciente_temperamento, tb_paciente_interacao, tb_paciente_foto, tb_paciente_fk_cuidador, tb_paciente_fk_remedio, tb_paciente_fk_alergia},
        {
        where: {id:req.params.id},
        }
        );
        res.status(200).json({message: 'Atualizado com sucesso'});
});


//deletar - delete
router.delete('/delpaciente/:id', async (req, res) =>{
    await Paciente.destroy({
        where:{
        id: req.params.id,
        },
    });
    res.status(200).json({message:'Excluído com sucesso'})
});

module.exports=router;