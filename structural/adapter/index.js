import localStorage from './localStorage.js'

console.log("localStorage length: ", localStorage.length)

const uid = localStorage.getItem('user_id')

console.log("user_id: ", uid)

if (!uid) {
    console.log('User ID not found. Setting the user id and token...')
    localStorage.setItem('user_id', '1')
    localStorage.setItem('token', 'test')
} else {
    console.log('User ID: ', uid)
    console.log('clearing the user ID...')
    localStorage.clear()
}
