import React, { ReactNode } from 'react'
import { AccordionItem } from "@nextui-org/accordion";
import { Book, Series } from '@/data';
import BookItemDetail from './BookItemDetail';

interface Props {
  bookItem: Book;
}

const getDetails = (series: Series):ReactNode =>{
  let details = series.name;
  !series.bookInSeries ? details : details.concat(' Book ', series.bookInSeries);
  return (
    <p>{details}</p>
  )
}


export default function BookItem({bookItem}: Props) {
  return (
    <AccordionItem
      key={ bookItem._id.$oid }
      aria-label={ bookItem.title }
      subtitle={ `by ${bookItem.authors}` } title={ bookItem.title }>
        {!bookItem.series ? null : getDetails(bookItem.series)} 
    </AccordionItem>
  )
}
