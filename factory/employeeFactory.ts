import Employee from "./employee";

export default class EmployeeFactory {
    public static createManager(name: string) {
        return new Employee(name, 'manager', 10000000)
    }
    public static createStaff(name: string) {
        return new Employee(name, 'staff', 5000000)
    }
}
