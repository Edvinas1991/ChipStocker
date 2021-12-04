package lt.codeacademy.chipstockerapi.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.util.UUID;
import javax.persistence.Entity;

@Setter
@Getter
@Entity
@Table(name = "Items")
public class Item {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;
    @NotBlank
    private String name;
    @NotBlank
    private String code;
    @NotBlank
    private String category;
    @NotBlank
    private String description;
    @PositiveOrZero
    @Max(10000)
    private int quantity;
    @Positive
    @NotNull
    private BigDecimal price;
    @NotBlank
    private String image;
}
