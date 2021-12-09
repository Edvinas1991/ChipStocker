package lt.codeacademy.chipstockerapi.service;

import okhttp3.*;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class MouserApiService {
    public String getData(String itemCode) {
        String responseBody = null;
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create("{\r\n  \"SearchByPartRequest\": {\r\n    \"mouserPartNumber\": \"" + itemCode + "\",\r\n    \"partSearchOptions\": \"Exact\"\r\n  }\r\n}", mediaType);
        Request request = new Request.Builder()
                .url("https://api.mouser.com/api/v1/search/partnumber?apiKey=1aba0ed8-3ce3-4011-9853-9f701668ebdf")
                .method("POST", body)
                .addHeader("accept", "application/json")
                .addHeader("Content-Type", "application/json")
                .addHeader("Cookie", "ASP.NET_SessionId=w3gbzmctwrpc2k1rfjimeml2")
                .build();
        try {
            Response response = client.newCall(request).execute();
            responseBody = response.body().string();
        } catch (IOException e) {
            e.printStackTrace();
        }
            return responseBody;
    }
}
