package lt.codeacademy.chipstockerapi.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.UUID;

@Getter
@AllArgsConstructor
public class PostNotExistException extends RuntimeException {
    private final UUID productId;
}