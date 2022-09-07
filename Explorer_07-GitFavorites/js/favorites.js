import { GithubUser } from "./gitHubUser.js"

// Organize data structure

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.loadUserData()
        this.saveUserData()
        
    }

    loadUserData() {

        this.users = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        
    }

    saveUserData() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.users))
    }

    async addFavorite(username) {
        try {
            const userExists = this.users.find( entry => entry.login == username)
            if(userExists) {
                throw new Error('Usuário já cadastrado')
            }

            const user = await GithubUser.search(username)
            if(user.login === undefined) {
                throw new Error ("Usuário não encontrado no GitHub")
            }
            this.users = [user, ...this.users]
            this.update()
            this.saveUserData()
        }
        catch(error) {
            alert(error.message)

        }
        

    }

    delete(user) {
        

        let newArray = this.users.filter( entry => 
        { 
            if(entry.login.toUpperCase() !== user.login.toUpperCase()){
                return true
            }
        })
        
        this.users = newArray
        this.update()
        this.saveUserData()

    }
}

//Events and visualization

export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onAddButton()
        this.onInputEnter()
        
        
    }

    onAddButton() {
        const addButton = this.root.querySelector('.search-container button')
            addButton.onclick = () => {

                const { value }  = this.root.querySelector('.search-container input')
                this.addFavorite(value)
            }

        }
    
    onInputEnter() {
        const addButton = this.root.querySelector('.search-container button')
        const inputFav = this.root.querySelector("#inputFav");
        inputFav.addEventListener("keypress", function(event) {
              if (event.key === "Enter") {
                event.preventDefault();
                addButton.click()
                
              }
            });
    }
        
    

    update() {
        
        this.removeAllRows()
        
        this.users.forEach( user => {
            const row = this.createRow()
            row.querySelector('.username img').src = `https://github.com/${user.login}.png`
            row.querySelector('.username img').alt = `Imagem de ${user.name}`
            row.querySelector('.username a').href = `https://github.com/${user.login}`
            row.querySelector('.username a p').innerText = `${user.name}`
            row.querySelector('.username a span').innerText = `${user.name}`
            row.querySelector('.repos').innerText = `${user.public_repos}`
            row.querySelector('.followers').innerText = `${user.followers}`
            
            
            
            this.tbody.append(row)

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja remover este repositório do seu favorito?')
                if (isOk) {
            
                    this.delete(user)
                } 
                        
            }
        })

        
        
    }

    removeAllRows() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {tr.remove()})
        
    }

    createRow(){
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td class="username">
                <img src="https://github.com/loadrp.png" alt="img lucas">
                <a href="https://github.com/loadrp">
                <p>Lucas Prado</p>
                <span>loadrp</span>
                </a>
            </td>
            <td class="repos">2</td>
            <td class="followers">123</td>
            <td class="remove">
            <button class="remove">X</button>
            </td>
        `
        return tr
    }
    
}