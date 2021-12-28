package lt.codeacademy.chipstockerapi;

public interface ApiPath {
    String ID_VARIABLE = "id";
    String NAME_VARIABLE = "name";

    String POSTS = "/posts";
    String POST = "/{" + ID_VARIABLE + "}";

    String ITEMS = "/products";
    String ITEM = "/{" + ID_VARIABLE + "}";
    String SEARCH = "/search";
    String FILES = "/files";
    String FILE_BY_NAME = "/{" + NAME_VARIABLE + "}";
    String LOGIN = "/login";
}