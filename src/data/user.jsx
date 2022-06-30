
const users = [];

export default function addUser(values){
    users.push(values);
    localStorage.setItem('users',users);
    console.log(users.length)
}