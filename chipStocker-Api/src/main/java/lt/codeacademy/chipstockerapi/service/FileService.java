package lt.codeacademy.chipstockerapi.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.chipstockerapi.exception.FileException;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.Set;


@Service
@Slf4j
public class FileService {

    private static final int MAX_SIZE = 10000000;
    private final Set<String> types;
    private final Path fileLocation;

    public FileService() {
        fileLocation = Paths.get("./files").toAbsolutePath().normalize();
        types = Set.of(MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_GIF_VALUE);
    }

    public void saveFileInFileSystem(MultipartFile multipartFile) {
        validateFile(multipartFile);
        createDirectory();

        try {
            Path location = fileLocation.resolve(getUniqueFileName(multipartFile));
            Files.copy(multipartFile.getInputStream(), location, StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            log.error("cannot copy file", e);
            throw new FileException("Cannot copy file");
        }
    }

    public InputStream getFileFromFileSystemByName(String fileName) {
        try {
            Path location = fileLocation.resolve(fileName);
            return Files.newInputStream(location);
        } catch (Exception e) {
            log.error("Cannot download file", e);
            throw new FileException(String.format("Cannot download file %s", fileName));
        }
    }

    public MediaType getMediaTypeFromName(String fileName) {
        String contentType = URLConnection.guessContentTypeFromName(fileName);

        return MediaType.valueOf(contentType);
    }

    private String getUniqueFileName(MultipartFile multipartFile) {
        return String.format("%s_%s", LocalDateTime.now().getNano(), multipartFile.getOriginalFilename());
    }

    private void createDirectory() {
        try {
            if (!Files.exists(fileLocation)) {
                Files.createDirectory(fileLocation);
            }
        } catch (Exception e) {
            log.error("Cannot create directory ", e);
            throw new FileException("Cannot created directory");
        }
    }

    private void validateFile(MultipartFile multipartFile) {
        if (multipartFile.getSize() > MAX_SIZE) {
            throw new FileException(String.format("File size %s is to big", multipartFile.getSize()));
        }

        if (!types.contains(multipartFile.getContentType())) {
            throw new FileException(String.format("Content type %s not allowed", multipartFile.getContentType()));
        }
    }
}
