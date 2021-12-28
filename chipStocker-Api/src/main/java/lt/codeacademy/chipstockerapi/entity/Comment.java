package lt.codeacademy.chipstockerapi.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Type;
import javax.persistence.*;
import java.util.UUID;

@Setter
@Getter
@Entity
@ToString
@Table(name = "Comments")
public class Comment {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(10000)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;
    private UUID postID;
    private UUID userID;
    private String date;
    private String username;
    private String text;
}