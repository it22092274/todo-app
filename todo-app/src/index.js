#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const {add} = require('./commands/add');
const {read} = require('./commands/read');
const { updateTask } = require('./commands/update');
const { deleteTask } = require('./commands/delete'); // Import all commands

yargs(hideBin(process.argv))
  .command(
    'add <key> <value>',
    'Add a new task',
    (yargs) => {
      yargs
        .positional('key', {
          describe: 'Task key',
          type: 'string',
        })
        .positional('value', {
          describe: 'Task description',
          type: 'string',
        });
    },
    (argv) => {
      add(argv.key, argv.value);
      console.log(argv.key, argv.value);
    }
  )
  .command(
    'update <key> <value>',
    'Update a task',
    (yargs) => {
      yargs
        .positional('key', {
          describe: 'Task key',
          type: 'string',
        })
        .positional('value', {
          describe: 'New task description',
          type: 'string',
        });
    },
    (argv) => {
      updateTask(argv.key, argv.value);
    }
  )
  .command(
    'read',
    'Read all tasks',
    () => {},
    () => {
      read();
    }
  )
  .command(
    'delete <key>',
    'Delete a task',
    (yargs) => {
      yargs.positional('key', {
        describe: 'Task key',
        type: 'string',
      });
    },
    (argv) => {
      deleteTask(argv.key);
    }
  )
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
