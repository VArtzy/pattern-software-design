export default class User {
    private name: string
    private role: string

    constructor(name: string, role: string) {
        this.name = name
        this.role = role
    }

    setRole(role: string) {
        this.role = role
    }

    isAdmin() {
        return this.role === `admin` ? true : false
    }

    isAuthor() {
        return this.role === `author` ? true : false
    }
}
