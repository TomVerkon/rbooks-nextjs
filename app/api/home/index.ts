import dbConnect from '@/lib/connect-db';
import { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '../../../models/book';
import { ResponseFuncs } from '../../../lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const manager = await AppDataSource;
  const bookRepository = manager.getRepository(Book);
  //capture request method, we use it as a key to ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  console.log('In kindle import using', method);

  //function for catch errors
  const catcher = (error: Error) => {
    console.log('error:', error);
    res.status(400).json({ error });
  };

  let status = 201;

  switch (method) {
    case 'POST': {
      let book = manager.create('Book', new Book());
      console.log('In kindle import POST');
      console.log('book before init', book);
      book = { ...book, ...req.body };
      const date = new Date();
      book.createDt = date;
      book.lastUpdatedDt = date;
      console.log('book after init', book);
      await bookRepository.save(book);
      console.log('after save', book);
      return res.status(status).json(book);
    }
    case 'GET': {
      const bookRepository = AppDataSource.getRepository(Book);
      const allBooks = await bookRepository.find();
      return res.status(status).json(allBooks);
    }
    
    
  }

  // const handleCase: ResponseFuncs = {
  //   // RESPONSE FOR GET REQUESTS
  //   GET: async (req: NextApiRequest, res: NextApiResponse) => {
  //     // await dbConnect(); // connect to database
  //     // const books = await Book.find({}).catch(catcher);
  //     // return res.status(200).json(books);
  //   },
  //   // RESPONSE POST REQUESTS
  //   POST: async (req: NextApiRequest, res: NextApiResponse) => {
  //     console.log('In kindle import POST');
  //     let book = new Book();
  //     console.log('book before init', book);
  //     book = { ...book, ...req.body };
  //     const date = new Date();
  //     book.createDt = date;
  //     book.lastUpdatedDt = date;
  //     console.log('book after init', book);
  //     book = await AppDataSource.manager.save(book);
  //     console.log('after save', book);
  //     //const { Book } = await dbConnect(); // connect to database
  //     //await dbConnect(); // connect to database
  //     // const book = Book.build(req.body);
  //     // await Book.create(book).catch(catcher);
  //     // console.log('book:', book);
  //     return res.status(201).json(book);
  //   }
  // };
}