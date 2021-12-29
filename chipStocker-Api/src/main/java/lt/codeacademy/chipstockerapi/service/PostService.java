package lt.codeacademy.chipstockerapi.service;


import lt.codeacademy.chipstockerapi.entity.Post;
import lt.codeacademy.chipstockerapi.exception.PostNotExistException;
import lt.codeacademy.chipstockerapi.repository.PostRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PostService {
    private final PostRepository postRepository;
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    public Post getPost(UUID id) {
        return postRepository.findById(id).orElseThrow(() -> new PostNotExistException(id));
    }

    public void deletePost(UUID id) {
        postRepository.deleteById(id);

    }

    public void savePost(Post post) {
        post.setDate(LocalTimeService.getSystemTime());
        postRepository.save(post);
    }
}
