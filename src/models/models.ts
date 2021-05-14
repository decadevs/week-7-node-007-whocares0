let database = require('../../data/database.json')
import fs from 'fs'
const databasePath = "/Users/decagon/Documents/Decagon week 7 assignment/week-7-node-007-whocares0/data/database.json"
export async function getAll(){
    return new Promise((resolve,reject)=> {
        resolve(database)
    })
}
export async function create(data:Record<string,any>){
     try{
        return new Promise((resolve,reject)=> {
            database.push(data)
             fs.writeFileSync(databasePath, JSON.stringify(database),'utf8')
             resolve(data)
         })
    }catch(err){
        console.log(err)

    } 
}