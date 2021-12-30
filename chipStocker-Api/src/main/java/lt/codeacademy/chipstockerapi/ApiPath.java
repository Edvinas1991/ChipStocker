package lt.codeacademy.chipstockerapi;

public interface ApiPath {
    String ID_VARIABLE = "id";
    String API = "/api";
    String POSTS = "/posts";
    String POST = "/{" + ID_VARIABLE + "}";
    String COMMENTS = "/comments";
    String COMMENT = "/{" + ID_VARIABLE + "}";
    String LOGIN = "/login";
}