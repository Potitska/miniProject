let url = new URL(location.href);
let id_user = url.searchParams.get('id')

let main = document.getElementById('main')
let newBlock = document.createElement('div')

newBlock.className = 'newBlock'

fetch(`https://jsonplaceholder.typicode.com/users/${id_user}`)
    .then(response => response.json())
    .then(json => {
        function itin_obj (object, block){
            let infoPost = document.createElement('div')
            infoPost.classList.add('info_post')

            for (const key in object) {
                paramUser = document.createElement('div')
                if (typeof object[key] !== 'object'){
                    paramUser.innerText = (`${key}${':'} ${object[key]}`)
                    infoPost.appendChild(paramUser)
                }else if (typeof object[key] === 'object'){
                    itin_obj(object[key], infoPost)
                }
            }
            block.appendChild(infoPost)
        }
        itin_obj(json, newBlock)

        const postBlock = document.createElement('div')

        newBlock.appendChild(postBlock)
        main.appendChild(newBlock)


        fetch(`https://jsonplaceholder.typicode.com/users/${id_user}/posts`)
            .then(response => response.json())
            .then(posts => {
                console.log(posts);
                for (const post of posts) {
                    const container_post = document.createElement('div')
                    const title = document.createElement('div')
                    const body = document.createElement('div')

                    container_post.className = 'container_post'

                    title.innerHTML = `<b>${post.title}</b> `
                    body.innerText = post.body

                    container_post.append(title, body)
                    postBlock.appendChild(container_post)
                }
            })
    });
