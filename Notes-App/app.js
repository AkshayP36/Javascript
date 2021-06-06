const getNotes = require("./notes");
console.log(getNotes());

//console.log(process.argv[3]);

const yargs = require("yargs");
yargs.command({
  command: 'add',
  describe: 'Add new note',
  handler: function(){
    console.log('Adding new notes');
  }
});
