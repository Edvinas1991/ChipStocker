package lt.codeacademy.chipstockerapi.controller;

import static lt.codeacademy.chipstockerapi.ApiPath.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import lt.codeacademy.chipstockerapi.entity.Item;
import lt.codeacademy.chipstockerapi.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ITEMS)
public class ItemController {
    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }


    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @GetMapping(value = ITEM, produces = APPLICATION_JSON_VALUE)
    public Item getItem(@PathVariable(ID_VARIABLE) UUID id) {
        return itemService.getItem(id);
    }

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createItem(@RequestBody Item item) {
        itemService.createItem(item);
    }

    @PutMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateItem(@RequestBody Item item) {
        itemService.updateItem(item);
    }

    @DeleteMapping(ITEM)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteItem(@PathVariable(ID_VARIABLE) UUID id) {
        itemService.deleteItem(id);
    }

    @GetMapping(SEARCH)
    public List<Item> searchItem(@RequestParam String query) {
        return itemService.findItems(query);
    }

}
