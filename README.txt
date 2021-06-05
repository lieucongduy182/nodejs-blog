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
    *** Static files & SCSS ***
    - public: img, css, ...
    - npm node-sass: https://www.npmjs.com/package/node-sass
    - app.scss: cấu hình command line interface -> combine css
    - config command: node-sass [options] <input> [output]
    *** Query Parameters ***
    - truyền trên URL: request URL
    - tồn tại trong các method (chủ yếu method: GET)
    - key=value&key1=value1&...
    *** Form default behavior ***
    - default method: GET
    - action: redirect URL
    - method POST: send data from client to server (Form Data)
    - middleware: form(urlencoded), client javascript(json) 
    *** Mô hình MVC ***
    - model - view - controller
        + model lưu trữ toàn bộ dữ liệu. thể hiện các thao tác với csdl như truy vấn, xử lý, ...
        + view phần giao diện, lấy được thông tin dữ liệu của MVC, tương tác với controller, hiển thị
        yêu cầu gửi cho controller, ko tương tác hoặc lấy được dữ liệu từ controller
        + controller xử lý các yêu cầu phía client (view), tương tác với model lấy dữ liệu để xử lý rồi
        truyền sang view
    - luồng đi: tương tác với browser -> request webserver với http protocol qua router -> controller
        + controller -> model: lấy dữ liệu ; controller -> view: lấy view tương ứng hoàn chỉnh
        + trả về client -> web server qua http protocol -> hiển thị ra browser