package lt.codeacademy.chipstockerapi.repository;

import lt.codeacademy.chipstockerapi.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface ItemRepository extends JpaRepository<Item, UUID> {
    List<Item> findByNameLikeOrDescriptionLike(String name, String description);
    @Query("select p from Item p where p.name like %:text% or p.description like %:text%")
    List<Item> findLike(@Param("text") String text);
}

