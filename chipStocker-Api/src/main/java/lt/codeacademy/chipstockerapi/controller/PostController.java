package lt.codeacademy.chipstockerapi.controller;

import static lt.codeacademy.chipstockerapi.ApiPath.*;
import lt.codeacademy.chipstockerapi.entity.Post;
import lt.codeacademy.chipstockerapi.service.PostService;
import org.springframework.http.HttpStatus;
import static org.springframework.http.MediaType.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(POSTS)

public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<Post> getPosts() {
        return postService.getPosts();
    }

    @GetMapping(value = POST, produces = APPLICATION_JSON_VALUE)
    public Post getPost(@PathVariable(ID_VARIABLE) UUID id) {
        return postService.getPost(id);
    }

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createPost(@RequestBody Post post) {
        postService.savePost(post);
    }

    @PutMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updatePost(@RequestBody Post post) {
        postService.savePost(post);
    }

    @DeleteMapping(POST)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable(ID_VARIABLE) UUID id) {
        postService.deletePost(id);
    }



}