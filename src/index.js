const fgImage = document.getElementById('fg-image')
const fgTitle = document.getElementById('fg-title')
const fgLikes = document.getElementById('fg-likes')
const fgComments = document.getElementById('fg-comments')
const fgLikeButton = document.getElementById('fg-like-button')
const fgCommentForm = document.getElementById('fg-comment-form')
const inputBox = fgCommentForm.querySelector('input')

fetch('http://localhost:3000/images') 
.then(resp => resp.json()) 
.then(json => image(json))

fetch('http://localhost:3000/comments') 
.then(resp => resp.json()) 
.then(json => comments(json))


function image(picture) {
    fgImage.src = picture[0].image
    fgTitle.textContent = picture[0].title
    fgLikes.textContent = `${picture[0].likes} likes`
    fgLikeButton.addEventListener('click', event => {
        picture[0].likes++
        fgLikes.textContent = `${picture[0].likes} likes`
    })
}

function comments(userComments) {   
    fgComments.textContent = ''
    userComments.forEach(element => {
        const li = document.createElement("li")
        li.textContent = element.content
        fgComments.append(li)
    })
    fgCommentForm.querySelector('button').addEventListener('click', event => {
        event.preventDefault()
        addComment()
    })
}

function addComment() {
    const li = document.createElement("li")
    li.textContent = inputBox.value
    fgComments.append(li)
    inputBox.value = ''
}