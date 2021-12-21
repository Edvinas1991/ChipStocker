package lt.codeacademy.chipstockerapi.security.dto;

import lombok.Data;

@Data
public class Login {
    private String username;
    private String password;
}
