import AccountRepository from "./accountRepository";

/** can be called as `service` rather than `facade` */
export default class AccountFacade {
    private accountRepository = new AccountRepository()

    transfer(fromAccountId: string, toAccountId: string, amount: number) {
        const account1 = this.accountRepository.findById(fromAccountId)
        const account2 = this.accountRepository.findById(toAccountId)

        account1.setBalance(account1.getBalance() - amount)
        account2.setBalance(account2.getBalance() + amount)

        this.accountRepository.update(account1)
        this.accountRepository.update(account2)
    }
}


