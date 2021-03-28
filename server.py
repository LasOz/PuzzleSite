#from http.server import BaseHTTPRequestHandler, HTTPServer
import http.server
import time

hostName = "localhost"
serverPort = 80

class MyServer(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        #self.send_response(200)
        #self.send_header("Content-type", "text/html")
        #self.end_headers()
        if self.path == '/':
            self.path = 'index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
        # else:
        #     self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        #     self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        #     self.wfile.write(bytes("<body>", "utf-8"))
        #     self.wfile.write(bytes("<p>This is an example web server. AAA</p>", "utf-8"))
        #     self.wfile.write(bytes("</body></html>", "utf-8"))

if __name__ == "__main__":        
    webServer = http.server.HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")