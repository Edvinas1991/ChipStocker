package lt.codeacademy.chipstockerapi.data;

import com.fasterxml.jackson.annotation.JsonAnySetter;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.LinkedHashMap;
import java.util.Map;

@Getter
@Setter
@Data
public class MouserItem {
    private Map<String, Object> data = new LinkedHashMap<>();
    @JsonAnySetter
    void setData(String key, Object value) {
        data.put(key, value);
    }
}
