const Usuarios = require('../models/UsuariosModelo');
const Preguntas = require('../models/preguntasModelo');
const { Op, and } = require("sequelize");
const {body, validationResult} = require('express-validator');
const multer = require('multer');
const shortid = require('shortid');
const { v4: uuid_v4 } = require('uuid');
const fs = require('fs');
const xlsx = require('node-xlsx');

// Inicio
exports.adminFaq = async (req, res) => {

    const preguntas = await Preguntas.findAll({
        where: {
            [Op.and]: [{idSuperdistribuidor: req.user.id_usuario}]
        }
    });

    res.render('dashboard/adminFaq', {
        nombrePagina : 'Administrar Tutoriales',
        titulo: 'Administrar Tutoriales',
        breadcrumb: 'Administrar Tutoriales',
        classActive: req.path.split('/')[2],
        preguntas
    })
}

exports.subirPregunta = async (req, res) => {

    const pregunta = req.body.pregunta;
    const video = req.body.video;

    if(pregunta === '' || video === '') {
        res.json({ titulo: '¡Lo Sentimos!', resp: 'error', descripcion: 'No debe haber campos vacios.' });
        return; 
    }

    await Preguntas.create({
        idPregunta: uuid_v4(),
        idSuperdistribuidor: req.user.id_usuario,
        pregunta: pregunta,
        video: video
    });

    res.json({ titulo: '¡Que bien!', resp: 'success', descripcion: 'Tutorial creado con éxito.' });
    return;

}

exports.editarPregunta = async (req, res) => {

    const id = req.body.id;
    const pregunta = req.body.pregunta;
    const video = req.body.video;

    if(pregunta === '' || video === '') {
        res.json({ titulo: '¡Lo Sentimos!', resp: 'error', descripcion: 'No debe haber campos vacios.' });
        return; 
    }

    const preguntas = await Preguntas.findOne({
        where: {
            [Op.and]:[{idPregunta:id}]
        }
    })

    if(!preguntas){
        res.json({ titulo: '¡Lo Sentimos!', resp: 'error', descripcion: 'No se puede editar el tutorial ya que no exites en nuestros servidores.' });
        return; 
    }

    preguntas.pregunta = pregunta;
    preguntas.video = video;
    await preguntas.save();

    res.json({ titulo: '¡Que bien!', resp: 'success', descripcion: 'Tutorial editado con éxito.' });
    return;

}

exports.eliminarPregunta = async (req, res) => {

    const id = req.body.id.trim();

    const pregunta = await Preguntas.findOne({ where: { idPregunta: id }});

    if(!pregunta) {
        res.json({ titulo: '¡Lo Sentimos!', resp: 'error', descripcion: 'No es posible eliminar el tutorial.' });
        return;
    }

    await pregunta.destroy({ where: { idPregunta: id }});

    res.json({ titulo: '¡Que bien!', resp: 'success', descripcion: 'tutorial eliminado con éxito.' });
    return;

}


exports.faq = async (req, res) => {

    const usuario = await Usuarios.findOne({ where: { id_usuario: req.user.id_usuario }});
    const superdistribuidor = await Usuarios.findOne({ where: { enlace_afiliado: req.user.super_patrocinador }});
    const preguntas = await Preguntas.findAll({
        where: {
            [Op.and]: [{idSuperdistribuidor: superdistribuidor.id_usuario}]
        }
    });

    res.render('dashboard/faq', {
        nombrePagina : 'Tutoriales',
        titulo: 'Tutoriales',
        breadcrumb: 'Tutoriales',
        classActive: req.path.split('/')[2],
        usuario,
        preguntas
    })

}