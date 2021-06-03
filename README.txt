    - Truy cập vào trang web -> sẽ gửi đi yêu cầu trên máy chủ 
        + cần có 1 máy chủ HTTP
    - Máy chủ phản hồi các yêu cầu khác nhau tùy thuộc vào địa chỉ URL (request method)
        + cần có 1 chức năng giống như router(cầu nối, dẫn) để các yêu cầu đến nơi chuyên xử lý
        (request handlers)
    * HTTP Protocol *
        - HTTP response gồm các thành phần
            + Header
            + Body
        - 1xx: mã mang thông tin; 2xx: mã thành công; 3xx: mã chuyển hướng; 4xx: mã lỗi client; 5xx: mã lỗi server;
    * Server side rendering - Client side rendering *
    - start server: npm init 
    - install express: npm install express
    - npm nodemon: automatically restarting (start package.json)
    - npm morgan: http request logger middleware for nodejs

    *** Template engine (handlerbar) ***
    - cấu trúc HTML gọn gàng, chia layout ...
    - set view folder
    - docs express-handlebar: https://www.npmjs.com/package/express-handlebars