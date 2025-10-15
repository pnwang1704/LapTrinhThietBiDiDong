package util;


public class AppUtils {
	private static final String DB_Name = "neo4j";
	private static final String USERNAME = "neo4j";
	private static final String PASSWORD = "VuongNgocHue";
	private static final String URI = "neo4j://localhost:7687";
	private static Driver driver;
	public static Driver getDriver() {
		if(driver == null)
			driver = GraphDatabase.driver(URI, AuTokens.basc(username, password));
		return driver;
	}
	public static Session getSession() {
		return getDriver.session(SessionConfig.forDatabase(DB_Name));
	}
}
