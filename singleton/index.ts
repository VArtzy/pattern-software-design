import Order from './order'
import OrderDetail from './orderDetail'

const orderService = new Order()
orderService.save("0001")

const orderDetailService = new OrderDetail()
orderDetailService.save("0001", "Indomie")
orderDetailService.save("0001", "Sabun")
orderDetailService.save("0001", "Pepsoden")
