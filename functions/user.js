const axios = require('axios');

const getRandomUser = async () => {
    const user = await axios.get('https://random-data-api.com/api/users/random_user');

    return user.data;
};

module.exports = {
    getRandomUser
};
