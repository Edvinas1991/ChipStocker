package lt.codeacademy.chipstockerapi.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lt.codeacademy.chipstockerapi.data.MouserItem;
import lt.codeacademy.chipstockerapi.entity.Item;
import lt.codeacademy.chipstockerapi.exception.ItemNotFoundException;
import lt.codeacademy.chipstockerapi.repository.ItemRepository;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    public Item getItem(UUID id) {
        return itemRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));
    }

    public void createItem(Item item) {
        // TODO: 04/12/2021 Need test this part 
//        try {
//            MouserApiService mouserApiService = new MouserApiService();
//            ObjectMapper objectMapper = new ObjectMapper();
//            JsonNode actualObj = objectMapper.readTree(mouserApiService.getData(item.getCode()));
//            Map<String, Object> mouserItemData = objectMapper.readValue(actualObj.get("SearchResults").get("Parts").get(0).toString(), MouserItem.class).getData();
//            Map<String, Object> mouserItemPriceData = objectMapper.readValue(actualObj.get("SearchResults").get("Parts").get(0).get("PriceBreaks").get(0).toString(), MouserItem.class).getData();
//            if (mouserItemData.containsKey("Description")){
//                item.setDescription(mouserItemData.get("Description").toString());
//            }
//            if (mouserItemData.containsKey("Category")){
//                item.setCategory(mouserItemData.get("Category").toString());
//            }
//            if (mouserItemData.containsKey("FactoryStock")){
//                item.setQuantity(Integer.parseInt(mouserItemData.get("FactoryStock").toString()));
//            }
//            if (mouserItemPriceData.containsKey("Price")){
//                item.setPrice(new BigDecimal(mouserItemPriceData.get("Price").toString().replace(" €","").replace(",",".")));
//            }
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
       itemRepository.save(item);
    }

    public void updateItem(Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(UUID id) {
       itemRepository.deleteById(id);
    }

    public List<Item> findItems(String query) {
        query = "%" + query + "%";
        return itemRepository.findByNameLikeOrDescriptionLike(query, query);
    }
}
