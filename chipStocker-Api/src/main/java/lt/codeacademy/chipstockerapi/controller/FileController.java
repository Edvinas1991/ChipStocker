package lt.codeacademy.chipstockerapi.controller;

import lt.codeacademy.chipstockerapi.service.FileService;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;
import static lt.codeacademy.chipstockerapi.ApiPath.*;


@RestController
@RequestMapping(ROOT + FILES)

public class FileController {
    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }


    @PostMapping
    public void saveFilesInFileSystem(@RequestParam MultipartFile multipartFile) {
        fileService.saveFileInFileSystem(multipartFile);
    }


    @GetMapping(FILE_BY_NAME)
    public ResponseEntity<Resource> getFileByNameFromFileSystem(@PathVariable(NAME_VARIABLE) String fileName) {

        Resource resource = new InputStreamResource(fileService.getFileFromFileSystemByName(fileName));

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
        MediaType mediaType = fileService.getMediaTypeFromName(fileName);

        return ResponseEntity.ok()
                .contentType(mediaType)
                .headers(headers)
                .body(resource);
    }
}