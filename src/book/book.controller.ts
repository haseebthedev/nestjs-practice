import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { BookService } from './book.service';
import { Book, createBookSchema } from "./dto/book.dto";
import { JoiValidationPipe } from "./pipes/validation.pipe";

@Controller("book")
export class BookController {

    constructor(private bookService: BookService) { }

    @Get("/findAll")
    getAllBooks(): Book[] {
        return this.bookService.findAllBooks();
    }

    @Put("/update")
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book)
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string): string {
        return this.bookService.deleteBookService(bookId)
    }

    @Post("/add")
    @UsePipes(new JoiValidationPipe(createBookSchema))
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book)
    }
}