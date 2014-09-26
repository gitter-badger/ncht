var users = [];

module.exports = {
    appendUser: function (username, id) {
        users.push({ "username": username, "id": id });
    },
    
    getUser: function (username) {
        users.forEach(function (element) {
           if (element.username === username) return element; 
        });
    }
}