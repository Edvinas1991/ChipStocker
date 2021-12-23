package lt.codeacademy.chipstockerapi.dto;

import lombok.Data;
import lt.codeacademy.chipstockerapi.entity.Role;
import lt.codeacademy.chipstockerapi.entity.User;
import java.util.Set;
import java.util.stream.Collectors;

@Data
public class UserDto {
    private String username;
    private String fullName;
    private Set<String> roles;

    public UserDto(User user) {
        username= user.getUsername();
        fullName= user.getFullName();
        roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
    }
}


