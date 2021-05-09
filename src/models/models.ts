let database = require('../../data/database.json')
import fs from 'fs'
const databasePath = "/Users/decagon/Documents/Decagon week 7 assignment/week-7-node-007-whocares0/data/database.json"
export async function getAll(){
    return await  new Promise((resolve,reject)=> {
        resolve(database)
    })
}
export async function create(data:object){
    return await  new Promise((resolve,reject)=> {
        let newData = database.push(data)
        fs.writeFileSync(databasePath, JSON.stringify(newData))
        resolve(data)
    })
}