import React from 'react';
import { Accordion } from '@nextui-org/accordion';
//import { BookItem } from '@/lib/types';
import BookListItem from './BookListItem';
import connectDB from '@/lib/connect-db';

const fetchBooks = (): BookItem[] => {
  // const connectDB = connectDB();
  return [
    {
      id: '64c2f0752e7ba731ff33d29b',
      title: 'Red Pyramid, The',
      authors: 'Rick Riordan',
      series: {
        name: 'The Kane Chronicles',
        bookInSeries: '1',
      },
    },
    {
      id: '64c2f0752e7ba731ff33d29f',
      title: 'Treason',
      authors: 'Orson Scott Card',
    },
    {
      id: '64c2f0752e7ba731ff33d27b',
      title: 'Oliver Twist',
      authors: 'Charles Dickens',
    },
  ];
};

export interface BookItem {
  id: string;
  title: string;
  authors: string;
  series?: {
    name: string;
    bookInSeries: string;
  };
}

function BookList() {
  const bookItems = fetchBooks();
  return (
    <Accordion
      isCompact
      variant='splitted'>
      {bookItems.map(bookItem => (
        <BookListItem bookItem={bookItem} />
      ))}
    </Accordion>
  );
}

export default BookList;
