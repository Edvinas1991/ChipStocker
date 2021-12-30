package lt.codeacademy.chipstockerapi.controller;

import lt.codeacademy.chipstockerapi.entity.Comment;
import lt.codeacademy.chipstockerapi.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static lt.codeacademy.chipstockerapi.ApiPath.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(COMMENTS)
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping(value = COMMENT, produces = APPLICATION_JSON_VALUE)
    public List<Comment> getComments(@PathVariable(ID_VARIABLE) UUID id) {
        return commentService.getComments(id);
    }

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(@RequestBody Comment comment) {
        commentService.saveComment(comment);
    }

    @DeleteMapping(POST)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable(ID_VARIABLE) UUID id) {
        commentService.deleteComment(id);
    }
}