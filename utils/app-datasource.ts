import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Book } from '../entities/book';

const url = process.env.MONGODB_URL as string | '';

const AppDataSource = new DataSource({
  type: "mongodb",
  url: url
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;    

