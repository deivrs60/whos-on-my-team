const Prompts = require('./lib/Prompts');

function App() {
    App.prototype.initializePrompts = function() {
        Prompts()
    }
}

module.exports = App