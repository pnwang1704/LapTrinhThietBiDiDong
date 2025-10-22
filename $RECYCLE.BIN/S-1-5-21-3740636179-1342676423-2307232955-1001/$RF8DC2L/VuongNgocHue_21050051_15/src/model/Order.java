package model;

import java.util.Date;
import java.util.List;
@AllArgsConstructor
@Data
@NoArgsConstructor
@SuperBuilder
@Builder
public class Order {
	private String orderID;
	private Date orderDate;
	private String customerName;
	private String employeeName;
	private Status status;
	
	public Order(String orderID, Date orderDate, String customerName, String employeeName, Status status) {
		super();
		this.orderID = orderID;
		this.orderDate = orderDate;
		this.customerName = customerName;
		this.employeeName = employeeName;
		this.status = status;
	}

	public Order() {
		super();
	}
	private transient List<OrderDetail> orderDetails;
	
}
