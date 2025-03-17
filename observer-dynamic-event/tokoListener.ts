import { Sale } from "./sale";

export default interface TokoListener {
    notify(event: string, data: Sale): void
}
