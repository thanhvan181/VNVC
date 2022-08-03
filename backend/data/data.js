import neo4j from 'neo4j-driver';


const uri = 'neo4j+s://86fe6e46.databases.neo4j.io';
const user = 'neo4j';
const password = '918jN0MoZILCZNRqOBgu-C1gx177UnMuGQfygzEol9I';



export const driver = neo4j.driver(uri, neo4j.auth.basic(user, password), { disableLosslessIntegers: true })
