const data = require('./javascript/data');
const { filter, count } = require('./commands');

describe('Commands.spec', () => {
    it('Should filter a list of elements containing a pattern', () => {
        // Given
        const query = 'Duck'
        // Then
        expect(filter()).toBeTruthy();
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

    it('Should count the number of people and animals', () => {
        expect(count()).toBeTruthy();
        expect(count()[0].name).toEqual('Dillauti [5]');
        expect(count()[0].people[0].name).toEqual('Winifred Graham [6]');
        expect(count()[1].name).toEqual('Tohabdal [8]');
        expect(count()[1].people[0].name).toEqual('Effie Houghton [7]');
    })
});