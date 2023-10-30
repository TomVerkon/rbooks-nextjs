import React, { ReactNode } from 'react';
import { AccordionItem } from "@nextui-org/accordion";
import { BookItem, Series } from './BookList'

interface Props {
  bookItem: BookItem;
}

const getDetails = ({ name, bookInSeries } : Series): ReactNode =>{
  let details = name;
  !bookInSeries ? details : details.concat(' Book ', bookInSeries);
  return (
    <p>{details}</p>
  )
}


export default function BookListItem({bookItem}: Props) {
  const {id, title, authors, series} = bookItem;
  const bookSeries = !series ? null : getDetails(series);
  return (
    <AccordionItem
      key={bookItem.id}  
      aria-label={ bookItem.title }
      subtitle={ `by ${bookItem.authors}` } title={ bookItem.title }>
      {bookSeries} 
    </AccordionItem>
  )
}
