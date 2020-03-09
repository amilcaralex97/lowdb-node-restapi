const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

async function createConnection() {
    const adapter = new FileAsync('db.json')
    await low(adapter)
}