import Customer from './customer'
export default class CustomerBuilder {
    private id: number
    private firstName: string
    private lastName: string
    private address: string
    private phone: string
    private age: number
    private hobby: string
    private email: string

    public setId(id: number) {
        this.id = id
        return this
    }

    public setFirstName(firstName: string) {
        this.firstName = firstName
        return this
    }

    public setLastName(lastName: string) {
        this.lastName = lastName
        return this
    }

    public setAddress(address: string) {
        this.address = address
        return this
    }

    public setPhone(phone: string) {
        this.phone = phone
        return this
    }

    public setAge(age: number) {
        this.age = age
        return this
    }

    public setHobby(hobby: string) {
        this.hobby = hobby
        return this
    }

    public setEmail(email: string) {
        this.email = email
        return this
    }

    public build() {
        return new Customer(this.id, this.firstName, this.lastName, this.email, this.phone, this.address, this.age, this.hobby)
    }
}
