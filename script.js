let main = document.getElementById('main')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            const user_card = document.createElement('div')
            const user = document.createElement('div')
            const btn = document.createElement('button')

            user_card.className = 'user_card'
            user.className = 'user'
            btn.className = 'btn'

            user.innerText = `${valueElement.id}. ${valueElement.name}`
            btn.innerText = 'more info'

            btn.onclick = () => {
                location.href=`user-details.html?id=${valueElement.id}`
            }

            user_card.append(user, btn)

            main.appendChild(user_card)
        }
    });
