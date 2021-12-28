package lt.codeacademy.chipstockerapi.repository;

import lt.codeacademy.chipstockerapi.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface CommentRepository extends JpaRepository<Comment, UUID> {

    List<Comment> findAllByPostID(UUID postID);

}
