package lt.codeacademy.chipstockerapi.exception;

import lombok.Getter;

@Getter
public class FileException extends RuntimeException {
    private final String mmessage;

    public FileException(String mmessage) {
        this.mmessage = mmessage;
    }
}
