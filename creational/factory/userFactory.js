import Employee from './employee.js'
import Shopper from './shopper.js'

const userFactory = (name, money = 0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name, money, employer)
    } else {
        return new Shopper(name, money)
    }
}

export default userFactory
