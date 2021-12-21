package lt.codeacademy.chipstockerapi.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static lt.codeacademy.chipstockerapi.ApiPath.LOGIN;

@RestController
@RequestMapping(LOGIN)
public class LoginController {

    @PostMapping
    public void login() {
    }
}