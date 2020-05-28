package se.casparsylwan.backendAirBean;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Consumes(MediaType.APPLICATION_JSON)
@Path("/customer")
public class CustomerService {

//http://localhost:8081/backendAirBean/webapi/myresource


	@GET
	@Path("/all")
	@Produces(MediaType.TEXT_PLAIN)
	public String getAllCustomers() {

		String allCustomers = "cc.getAllCustomers()";

		return allCustomers;
	}

	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getCustomerById(@PathParam("id") Integer id) {

		String customerJson = "cc.getCustomersById(id)";

		return customerJson;
	}

	@GET
	@Path("/name/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getCustomerByName(@PathParam("name") String name) {

		String customerJson = "cc.getCustomersByName(name)";

		return customerJson;
	}

	@GET
	@Path("/char")
	@Produces(MediaType.APPLICATION_JSON)
	public String getCustomerByCharInName() {

		String allCustomers = "cc.getAllCustomers()";
		System.out.println(allCustomers);
		return allCustomers;
	}

	@GET
	@Path("/char/{char}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getCustomerByCharInName(@PathParam("char") String name) {

		String customerJson = "cc.getCustomersByNameThatHaveChar(name)";

		return customerJson;
	}

	@PUT
	@Path("/updateid/{id}")
	@Produces("application/json")
	public String updateCustomer(@PathParam("id") Integer id, String customerJson) {

//		cc.updateCustomer(customerJson, id);
		return customerJson;
	}

	@POST
	@Path("/new")
	@Produces(MediaType.APPLICATION_JSON)
	public void saveNewCustomer(String customerJson ) {
		
		System.out.println("Här är jag");
//		cc.saveNewCustomer(customerJson);
	}
	
	@GET
	@Path("/order")
	@Produces(MediaType.APPLICATION_JSON)
	public String orders() {
		
		return "new OrderService().getAllOrders()";
	}

	@Path("{id}/order")
	public String orders(@PathParam("id") Integer id) {
		
		return "new OrderService(id)";
	}

}
