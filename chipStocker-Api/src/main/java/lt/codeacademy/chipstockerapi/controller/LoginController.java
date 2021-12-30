package lt.codeacademy.chipstockerapi.controller;

import lt.codeacademy.chipstockerapi.dto.UserDto;
import lt.codeacademy.chipstockerapi.entity.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static lt.codeacademy.chipstockerapi.ApiPath.*;

@RestController
@RequestMapping(LOGIN)
public class LoginController {

    @PostMapping
    public UserDto login(@AuthenticationPrincipal User user) {
        return new UserDto(user);
    }
}