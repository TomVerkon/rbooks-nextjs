'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Link } from "@nextui-org/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar';
import React from "react";
import { data } from "@/data";
import BookItem from "@/components/BookItem";

const Home = () => {
  //const defaultContent = 'duhhh'

  
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <main className="container mx-auto mt-10 mb-10">
          <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
      width={150}
      alt="book"
      src="/pexels-pixabay-159866.jpg"
    />
            <p className="font-bold text-inherit ml-2">RBooks</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

      <Accordion>
        { data.map((bookItem) => (
          <BookItem ></BookItem>
        <AccordionItem key={ bookItem._id.$oid } aria-label={ bookItem.title } subtitle={ `by ${bookItem.authors}` } title={bookItem.title}>
        {bookItem.series ? bookItem.series.name: null} 
      </AccordionItem>
        ))}  
    </Accordion>
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
