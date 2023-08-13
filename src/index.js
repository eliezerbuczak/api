const express = require('express')
const app = express()
const port = 3333
let users = [{
    id:'1',
    name: 'Eliézer',
    email: 'eliezer@gmail.com'
}]

app.use(express.json())

app.listen(port, ()=>{
    console.log(`Server rodando na porta ${port}`)
})


app.get('/', (req, res)=>{
    res.json(users)
})

app.post('/', (req, res)=>{

    users.push(req.body)
    res.send(users)

})

app.put('/:id', (req, res)=>{
    for (let i = 0; i < users.length; i++) {
        if(users[i].id == req.params.id){
            
            users[i].id = req.body.id
            users[i].name = req.body.name
            users[i].email = req.body.email
        }
    }
    res.send(users)
})

app.delete('/:id', (req, res)=>{
    for (let i = 0; i < users.length; i++) {
        if(users[i].id == req.params.id){
            users.splice(i, 1)
        }
    }
    res.send(users)
})