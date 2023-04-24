import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Book } from './dto/book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  // add book
  addBookService(book: Book): string {
    this.books.push(book);
    return 'Book has been successfully added.';
  }

  // update book
  updateBookService(id: number, book: Book): string {
    let oldBookIndex = this.books.findIndex((currBook) => {
      return currBook.id === book.id;
    });
    this.books[oldBookIndex] = book;
    return 'Book has been successfully updated.';
  }

  // delete book
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((el) => el.id !== bookId);
    return 'Book has been successfully deleted.';
  }

  // find all books
  findAllBooks(): Book[] {
    if (true) {
        throw new HttpException('Something went wrong. Please try again!', HttpStatus.CONFLICT)
    } else {
      return this.books;
    }
  }
}
