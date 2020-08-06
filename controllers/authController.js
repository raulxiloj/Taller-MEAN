const { response } = require("express");
const User = require("../models/UserSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res = response) => {

    const { name, username, password } = req.body;

    try {

        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario esta registrado con ese username'
            })
        }

        user = new User(req.body);
        //encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        //Generate token
        const payload = {
            id: user._id,
            name: user.name
        }
        const token = jwt.sign(payload, '123456789', {
            expiresIn: '5h'
        });

        res.status(201).json({
            ok: true,
            name,
            token
        });

    } catch (e) {
        console.log(e);
    }

}

const login = async (req, res = response) => {

    const { username, password } = req.body;

    try {

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario registrado con ese username'
            })
        }

        //Match passwords
        const validPass = bcrypt.compareSync(password, user.password);

        if (!validPass) {
            return res.status(400).json({
                ok: false,
                msg: 'Contrasena incorrecta'
            });
        }

        //Generate token
        const payload = {
            id: user._id,
            name: user.name
        }
        const token = jwt.sign(payload, '123456789', {
            expiresIn: '5h'
        });

        res.status(200).json({
            ok: true,
            name: user.name,
            token
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Por favor contacte al admin'
        });
    }

}

module.exports = {
    registerUser,
    login
}