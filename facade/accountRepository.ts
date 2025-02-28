import Account from "./account";

const accounts: Account[] = [
    new Account("0001", 2000000),
    new Account("0002", 3000000),
    new Account("0003", 4000000),
    new Account("0004", 5000000)
]

export default class AccountRepository {
    findById(id: string) {
        const account = accounts.find(acc => id === acc.getId())
        if (!account) throw new Error("No account found")
        return account
    }

    update(account: Account) {
        console.log("Update account to database: " + account.getId())
    }
}
