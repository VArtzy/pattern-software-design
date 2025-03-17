import { Sale } from "./sale";

export default interface TokoListener {
    notify(data: Sale): void
}
