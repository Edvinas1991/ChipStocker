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
//@Api(tags = "Eshop Product controller")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    //    @ApiOperation(value = "Gauti visus produktus", tags = "getProducts", httpMethod = "GET")
//    @ApiResponses(value = {
//            @ApiResponse(code = 200, message = "Duomenys sekmingai uzkrauti"),
//            @ApiResponse(code = 403, message = "Vartotojas neturi teisiu"),
//            @ApiResponse(code = 404, message = "Nepavyko rasti produktu")
//    })


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