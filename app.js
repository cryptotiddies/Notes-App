const chalk = require('chalk')
//const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})
//list read
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('This is a note bitch')
    }
})
//list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function () {
        console.log('This is all the notes biatch')
    }
})


yargs.parse ()

console.log(yargs.argv)

