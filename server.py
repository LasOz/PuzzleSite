#from http.server import BaseHTTPRequestHandler, HTTPServer
import http.server
import time
import mimetypes
import os

hostName = "localhost"
serverPort = 80

class MyServer(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if (self.path == "/"):
            self.path = "index.html"
        try:
            filepath = os.path.join('.', self.path.strip('/'))
            f = open(filepath)
        except IOError:
            self.send_error(404,'File Not Found: %s ' % filepath)
        else:
            self.send_response(200)
            mimetype, _ = mimetypes.guess_type(filepath)
            self.send_header('Content-type', mimetype)
            self.end_headers()
            for s in f:
                self.wfile.write(s.encode("utf-8"))

if __name__ == "__main__":        
    webServer = http.server.HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")