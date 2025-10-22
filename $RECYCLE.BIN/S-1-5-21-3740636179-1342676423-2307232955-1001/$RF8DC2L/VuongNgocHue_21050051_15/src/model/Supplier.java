package model;

import java.io.Serializable;

@AllArgsConstructor
@Data
@NoArgsConstructor
@SuperBuilder
@Builder
public class Supplier implements Serializable {
	private String supplier;
	private String companyName;
	private String contactName;
	private String country;
	public Supplier(String supplier, String companyName, String contactName, String country) {
		super();
		this.supplier = supplier;
		this.companyName = companyName;
		this.contactName = contactName;
		this.country = country;
	}
	public Supplier() {
		super();
	}
	private transient Product product;
	
}
