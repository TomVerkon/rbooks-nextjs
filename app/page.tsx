import React from "react";
import NavigationBar from "@/components/NavigationBar";
import BookList from "@/components/BookList";

const Home = async () => {

  return (
    <main className="container mx-auto mt-10 mb-10">
      <NavigationBar />
      <BookList/> 
    </main>
  );
};

export default Home;