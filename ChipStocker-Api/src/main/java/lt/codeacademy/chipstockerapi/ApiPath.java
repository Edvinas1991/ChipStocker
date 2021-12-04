package lt.codeacademy.chipstockerapi;

public interface ApiPath {
    String ID_VARIABLE = "id";

    String ROOT = "/api";
    String ITEMS = "/items";
    String ITEM = "/{" + ID_VARIABLE + "}";
    String SEARCH ="/search";
}