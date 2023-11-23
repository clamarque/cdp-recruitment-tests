const { count } = require("./services/count")
const { filter } = require("./services/filter")

const args = process.argv.slice(2)

if (args[0] == "filter") {
    const query = args.slice(1).join(' ');

    const filteredResults = filter(query);

    console.log(JSON.stringify(filteredResults, null, 2))

} else if (args[0] == "count") {
    const countedResults = count()

    console.log(JSON.stringify(countedResults, null, 2))
} else {
    console.log('Commande non reconnue');
}
