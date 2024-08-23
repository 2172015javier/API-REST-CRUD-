import express from "express";
import router from express.Router();
import { Book } from "../model/book.model";

//MIDDleware
const getBook = async(req, res,next)=>{
    let book;
    const {id} = req.params;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(404).json({
            msg: "El libro no es valido"
        })
    }
    try {
        book = await Book.findById(id)
        if(!book){
            return res.status(404).json({
                msg: "El libro no fue encontrado"
            })
        }
    } catch (error) {
        return res.status{500}.json({
            msg: error.message
        })
    }
    res.book = book;
    next()
}

// obtener todos los libros
router.get('/', async (req , res)=>{
    try{
        const books = await Book.find();
        console.log(`GET ALL`, books);
        
        
        if(book.length === 0){
            return res.status(204).json([])
        }
        res(books)
    }catch (error){
        res.status(500).json({
            message: error.message
        })
    }
})

// Crear un nuevo libro (recurso)

router.post('/', async(req,res)=>{
    const {
        title,
        author,
        genre,
        publication_date} = req?.body
        if(!title || !author || !genre || !publication_date){
            return res.status(400).json({
                message: `Los campos titulo autor genero y fecha son obligatorios`
            })
        }
        const book = new Book({
            title,
            author,
            genre,
            publication_date
        })
        try {
            const newBook = await book.save()
            console.log(newBook);
            
            res.status(201).json(newBook)
        } catch (error) {  
            res.status(400).json({
                msg: error.message    
            })
        }
})

