import mongoose from "mongoose";

// Definición del esquema de libro
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publication_date: { type: Date, required: true }
});

// Creación del modelo a partir del esquema
const Book = mongoose.model('Book', bookSchema);

// Exportación del modelo y del esquema
export { bookSchema, Book };
