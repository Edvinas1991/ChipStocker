package lt.codeacademy.chipstockerapi.service;

import lt.codeacademy.chipstockerapi.entity.Comment;
import lt.codeacademy.chipstockerapi.repository.CommentRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;

    }

    public List<Comment> getComments(UUID id) {
        return commentRepository.findAllByPostID(id);
    }

    public void deleteComment(UUID id) {
        commentRepository.deleteById(id);

    }

    public void saveComment(Comment comment) {
        comment.setDate(LocalTimeService.getSystemTime());
        commentRepository.save(comment);
    }

}