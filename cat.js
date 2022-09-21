const fs = require('fs');

const cat = (data) => {
    // parse data, get rid of 'cat'
    let realData = data.split(' ');
    console.log(realData);
}

module.exports = {
    cat,
}