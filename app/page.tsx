import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import BookItem from "@/components/BookItem";
import NavigationBar from "@/components/navigation-bar";
import AppDataSource from "@/utils/app-datasource";
import { user } from "@nextui-org/theme";
import { Book } from "@/entities/book";

  const fetchBooks = async (): Promise<Book[]> => {
    const books = await AppDataSource.getMongoRepository(Book).find() as Book[];
    return books ? books : [];
  }
  
const Home = async () => {
  //const defaultContent = 'duhhh'

  const books = await fetchBooks();
  console.log(books)

  return (
    <main className="container mx-auto mt-10 mb-10">
      <NavigationBar /> 
{/* 
      <Accordion isCompact variant="splitted">
        { books.map((book) => (
          <BookItem bookItem={ book } key={bookItem._id.$oid } />
        ))}  
    </Accordion> */}
    </main>
  );
};

export default Home;

// import React from "react";
// import {Image} from "@nextui-org/react";

// export default function App() {
//   return (
//     <Image
//       width={300}
//       alt="NextUI hero Image"
//       src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
//     />
//   );
// }
