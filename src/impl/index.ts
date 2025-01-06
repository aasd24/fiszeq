const react = await import('./react.ts');
const animals = await import('./animals.ts');
const fruits = await import('./fruits.ts');

interface IDeck {
    name: string,
    description: string,
    author: string,
    data: IDeckData[],
}

interface IDeckData {
    id?: `${string}-${string}-${string}-${string}-${string}`,
    front: string,
    back: string,
}

const decks: Record<string, IDeck> = {
    animals: animals.default,
    fruits: fruits.default,
    react: react.default,
};

Object.values(decks).forEach((deck: IDeck) => {
    deck.data.map((card: IDeckData) => {
        card.id = crypto.randomUUID();
    })
})

export default decks;