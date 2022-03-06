const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {   username: 'mdicarlo',
        email: 'mdicarlo@gmail.com',
        password: 'password'
    },
    {
        username: 'cwhite',
        email: 'cwhite@gmail.com',
        password: 'password'
    },
    {
        username: 'aburgos',
        email: 'aburgos@gmail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;