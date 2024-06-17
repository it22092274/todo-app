const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { add } = require('./commands/add');
const { read } = require('./commands/read');
const { search } = require('./commands/search');
const { updateTask } = require('./commands/update');
const { deleteTask } = require('./commands/delete');

yargs(hideBin(process.argv))
  .command(
    'add <key> <value>',
    'Add contact',
    (yargs) => {
      yargs
        .positional('key', {
          describe: 'Contact name',
          type: 'string',
        })
        .positional('value', {
          describe: 'Contact number',
          type: 'string',
        });
    },
    (argv) => {
      add(argv.key, argv.value);
    }
  )
  .command(
    'update <key> <value>',
    'Update a contact',
    (yargs) => {
      yargs
        .positional('key', {
          describe: 'Contact key',
          type: 'string',
        })
        .positional('value', {
          describe: 'New contact description',
          type: 'string',
        });
    },
    (argv) => {
      updateTask(argv.key, argv.value);
    }
  )
  .command(
    'read',
    'Read all contacts',
    () => {},
    () => {
      read();
    }
  )
  .command(
    'delete <key>',
    'Delete a contact',
    (yargs) => {
      yargs.positional('key', {
        describe: 'Contact key',
        type: 'string',
      });
    },
    (argv) => {
      deleteTask(argv.key);
    }
  )
  .command(
    'search <key>',
    'Search a contact',
    (yargs) => {
      yargs.positional('key', {
        describe: 'Contact key',
        type: 'string',
      });
    },
    (argv) => {
      search(argv.key);
    }
  )
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
