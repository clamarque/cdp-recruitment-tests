const { filter } = require('../services/filter')

describe("filter function", () => {
    it('Should filter a list of elements containing a pattern', () => {
        const query = 'Duck'

        expect(filter()).toBeTruthy();
        expect(filter(query).length).toEqual(3)
        expect(filter(query)).toEqual([
            {
                name: 'Dillauti',
                people: [
                    { name: 'Winifred Graham', animals: [{ name: 'Duck' }] },
                    { name: 'Louise Pinzauti', animals: [{ name: 'Duck' }] }
                ]
            },
            {
                name: 'Tohabdal',
                people: [
                    { name: 'Alexander Fleury', animals: [{ name: 'Duck' }] }
                ]
            },
            {
                name: 'Uzuzozne',
                people: [
                    { name: 'Lina Allen', animals: [{ name: 'Duck' }] }
                ]
            }
        ]);
    });

    it('Should return a message if no match is found in filter', () => {
        const query = 'Hello World';

        const filteredData = filter(query);

        expect(filteredData).toEqual("no results found");
    });

    it('Should handle empty input for filter', () => {
        const query = "";

        const filteredData = filter(query);

        expect(filteredData).toEqual("no query provided");
    });

    it('Should return an empty array when the word is case-sensitive', () => {
        const query = "RY"
        const querySensitive = "ry"
        const expectData = [{ "name": "Uzuzozne", "people": [{ "animals": [{ "name": "John Dory" }], "name": "Lillie Abbott" }] }, { "name": "Satanwi", "people": [{ "animals": [{ "name": "Tarantula ry" }, { "name": "Oryx" }], "name": "Anthony Bruno" }] }]

        const filteredData = filter(query)
        const filteredData1 = filter(querySensitive)

        expect(filteredData).toEqual("no results found")
        expect(filteredData1).toEqual(expectData)
    })
})