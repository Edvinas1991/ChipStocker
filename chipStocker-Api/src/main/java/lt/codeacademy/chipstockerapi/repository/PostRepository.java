package lt.codeacademy.chipstockerapi.repository;

import lt.codeacademy.chipstockerapi.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface PostRepository extends JpaRepository<Post, UUID> {

    List<Post> findAllByCategory(String category);
}