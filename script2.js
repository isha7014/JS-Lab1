const library = [
    {
        title: "The Best Story",
        author: "Viveek Kumar",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "1977",
        author: "Hapren mill",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Blue Mountain",
        author: "jeeniffer green",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

// Step 2: Set all read values to true
library.forEach(book => {
    book.status.read = true;
});

// Step 3: Destructure title from the first book
const { title: firstBook } = library[0];

// Step 4: Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);

console.log(firstBook);
console.log(libraryJSON);