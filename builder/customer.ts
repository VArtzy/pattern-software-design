export default class Customer {
    private id
    private firstName
    private lastName
    private phone
    private address
    private age
    private hobby
    private email

    constructor(id, firstName, lastName, email, phone, address, age, hobby) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.address = address
        this.age = age
        this.hobby = hobby
    }

    public getId() {
        return this.id
    }

    public getFirstName() {
        return this.firstName
    }

    public getLastName() {
        return this.lastName
    }

    public getPhone() {
        return this.phone
    }

    public getAddress() {
        return this.address
    }

    public getAge() {
        return this.age
    }

    public getHobby() {
        return this.hobby
    }

    public getEmail() {
        return this.email
    }
}
