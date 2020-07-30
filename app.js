const program = require('commander');
const { filter, count } = require('./commands');

program
.version('0.0.1')
.description('Command line Adeo Data')

program
.command('filter <query>')
.alias('f')
.description('Filter a list of elements containing a pattern')
.action(query => filter(query));

program
.command('count')
.alias('c')
.description('Count People and Animals')
.action(() => count());

program.parse(process.argv)