export interface Series {
    name: string;
    bookInSeries?: string;
  }
export interface Book {
  _id: {
    $oid: string;
  };
  version: {
    $numberLong: string;
  };
  title: string;
  titleLine: string;
  authors: string;
  series?: Series;
  type: string;
  purchaseDate: {
    $date: string;
  };
  owner: string;
  createdAt: {
    $date: string;
  };
  modifiedAt: {
    $date: string;
  };
  _class: string;
};


export const data = [{
  "_id": {
    "$oid": "63c096da73a6762cfe4393c0"
  },
  "version": {
    "$numberLong": "0"
  },
  "title": "The Dreaming Void",
  "titleLine": "The Dreaming Void (Commonwealth - The Void Trilogy Book 1)",
  "authors": "Hamilton, Peter F.",
  "series": {
    "name": "Commonwealth - The Void Trilogy",
    "bookInSeries": "1"
  },
  "type": "K",
  "purchaseDate": {
    "$date": "2009-12-15T05:00:00.000Z"
  },
  "owner": "THV",
  "createdAt": {
    "$date": "2023-01-12T23:25:13.869Z"
  },
  "modifiedAt": {
    "$date": "2023-01-12T23:25:13.869Z"
  },
  "_class": "com.digits.rbooks.models.Book"
},{
  "_id": {
    "$oid": "63c096da73a6762cfe4393c1"
  },
  "version": {
    "$numberLong": "0"
  },
  "title": "Under the Dome",
  "titleLine": "Under the Dome: A Novel",
  "description": "A Novel",
  "authors": "King, Stephen",
  "type": "K",
  "purchaseDate": {
    "$date": "2010-01-02T05:00:00.000Z"
  },
  "owner": "THV",
  "createdAt": {
    "$date": "2023-01-12T23:25:13.872Z"
  },
  "modifiedAt": {
    "$date": "2023-01-12T23:25:13.872Z"
  },
  "_class": "com.digits.rbooks.models.Book"
},{
  "_id": {
    "$oid": "63c096da73a6762cfe4393c2"
  },
  "version": {
    "$numberLong": "0"
  },
  "title": "The Adventures of Sherlock Holmes",
  "titleLine": "The Adventures of Sherlock Holmes",
  "authors": "Doyle, Sir Arthur Conan",
  "type": "K",
  "purchaseDate": {
    "$date": "2010-01-06T05:00:00.000Z"
  },
  "owner": "THV",
  "createdAt": {
    "$date": "2023-01-12T23:25:13.872Z"
  },
  "modifiedAt": {
    "$date": "2023-01-12T23:25:13.872Z"
  },
  "_class": "com.digits.rbooks.models.Book"
    }]