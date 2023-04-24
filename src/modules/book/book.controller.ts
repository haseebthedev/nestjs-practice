import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes } from "@nestjs/common";
import { BookService } from './book.service';
import { Book, createBookSchema } from "./dto/book.dto";
import { JoiValidationPipe } from "./pipes/validation.pipe";

@Controller("book")
export class BookController {

    constructor(private bookService: BookService) { }

    @Post("/add")
    @UsePipes(new JoiValidationPipe(createBookSchema))
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book)
    }

    @Get("/findAll")
    getAllBooks(): Book[] {
        return this.bookService.findAllBooks();
    }

    @Patch("/update/:id")
    updateBook(@Param('id', ParseIntPipe) id: number, @Body() updatedBook: Book): string {
        return this.bookService.updateBookService(id, updatedBook)
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string): string {
        return this.bookService.deleteBookService(bookId)
    }
}