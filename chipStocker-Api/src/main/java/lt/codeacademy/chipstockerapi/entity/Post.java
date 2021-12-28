package lt.codeacademy.chipstockerapi.entity;

import lombok.*;
import org.hibernate.annotations.Type;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;
import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "Posts")
public class Post {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(10000)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;
    private String title;
    private String category;
    @Column(columnDefinition="TEXT")
    private String body;
    private String author;
    private String date;

}
