package lt.codeacademy.chipstockerapi.advice;

import lt.codeacademy.chipstockerapi.exception.FileException;
import lt.codeacademy.chipstockerapi.exception.data.ExceptionResponse;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {
    @ExceptionHandler(EmptyResultDataAccessException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ExceptionResponse handlingEmptyResult(EmptyResultDataAccessException exception) {
        return new ExceptionResponse(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(FileException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionResponse handlingFileException(FileException exception) {
        return new ExceptionResponse(exception.getMessage(), HttpStatus.BAD_REQUEST);
    }
}