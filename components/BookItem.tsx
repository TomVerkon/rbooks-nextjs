import React from 'react'
import { AccordionItem } from "@nextui-org/accordion";
import { Book } from '@/data';



export default function BookItem(bookItem: Book) {
  return (
    <AccordionItem key={ bookItem._id.$oid } aria-label={ bookItem.title } subtitle={ `by ${bookItem.authors}` } title={bookItem.title}>
        {bookItem.series ? bookItem.series.name: null} 
      </AccordionItem>
  )
}
