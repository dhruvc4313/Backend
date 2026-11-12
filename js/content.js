/* Concise notes aligned with the prescribed Backend Web Development syllabus. */
window.CONTENT_DATA = {
  "internet-protocols": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "Internet & Internet Protocols",
    "intro": "The Internet is a global system of interconnected computer networks that allows devices to communicate and exchange information. This communication is possible because devices follow standard rules called protocols. In web development, understanding the Internet and these protocols helps explain how a browser communicates with a server and how web pages are delivered to users.",
    "sections": [
      {
        "number": "01",
        "title": "What is the Internet?",
        "content": [
          "The Internet is a worldwide network of interconnected computer networks. It connects computers, smartphones, servers, routers and other devices so that they can exchange data and access services.",
          "The Internet is not a single computer or a single network. Instead, it is made up of many smaller networks that communicate with one another using standardized communication protocols."
        ],
        "syntax": [
          "Internet = Interconnected networks + communication protocols + connected devices"
        ],
        "examples": [
          {
            "title": "Viewing a Local Web Server",
            "code": "$message = \"PHP is running through a local web server.\";\necho $message;",
            "output": "PHP is running through a local web server."
          }
        ]
      },
      {
        "number": "02",
        "title": "Internet vs World Wide Web",
        "content": [
          "The Internet and the World Wide Web are related but they are not the same thing. The Internet is the underlying global network infrastructure that allows devices to communicate, while the World Wide Web is a service that operates on top of the Internet.",
          "The Web uses technologies such as URLs, HTTP or HTTPS, HTML, CSS and JavaScript to deliver and display web pages. Other services such as email, file transfer and remote communication can also operate over the Internet without being part of the Web."
        ],
        "table": [
          {
            "function": "Internet",
            "purpose": "Global network infrastructure connecting devices and networks."
          },
          {
            "function": "World Wide Web",
            "purpose": "A service that uses the Internet to provide interconnected web pages and web resources."
          },
          {
            "function": "Web Browser",
            "purpose": "Software used to request, receive and display web resources."
          },
          {
            "function": "Web Server",
            "purpose": "Software or computer system that receives web requests and provides responses."
          }
        ],
        "examples": [
          {
            "title": "Simple Client-Server Response",
            "code": "$page = \"Backend Web Development\";\necho \"Server Response: \" . $page;",
            "output": "Server Response: Backend Web Development"
          }
        ]
      },
      {
        "number": "03",
        "title": "What is an Internet Protocol?",
        "content": [
          "A protocol is a set of rules that defines how devices communicate and exchange data. Communication would be unreliable if every device used a different method for formatting, sending and interpreting information.",
          "Internet protocols define important aspects of communication such as how data is structured, how devices are identified, how information is transferred and how the receiving system should interpret the information."
        ],
        "syntax": [
          "Client → Protocol rules → Network → Protocol rules → Server"
        ],
        "examples": [
          {
            "title": "Displaying Protocol Information",
            "code": "echo \"Web Protocol: \" . $_SERVER[\"SERVER_PROTOCOL\"];",
            "output": "Web Protocol: HTTP/1.1"
          }
        ]
      },
      {
        "number": "04",
        "title": "Client-Server Communication",
        "content": [
          "Most web communication follows a client-server model. The client is the system that requests a resource or service, while the server is the system that receives the request and provides the required resource or response.",
          "A web browser normally acts as the client. A web server such as Apache receives the request, processes it and sends a response back to the browser."
        ],
        "syntax": [
          "Client → Request → Server",
          "Server → Response → Client"
        ],
        "examples": [
          {
            "title": "Basic Server Response using PHP",
            "code": "$message = \"Hello from the server\";\necho $message;",
            "output": "Hello from the server"
          }
        ]
      },
      {
        "number": "05",
        "title": "How a Web Request Travels",
        "content": [
          "When a user enters a website address in the browser, several communication steps may occur before the requested page is displayed.",
          "First, the browser interprets the URL and determines which resource has been requested. If a domain name is used, the system may need DNS resolution to determine the corresponding IP address."
        ],
        "syntax": [
          "URL → Domain Resolution → Server Connection → Request → Server Processing → Response → Browser Rendering"
        ],
        "examples": [
          {
            "title": "Viewing the Requested URL",
            "code": "echo \"Requested URL: \" . $_SERVER[\"REQUEST_URI\"];",
            "output": "Requested URL: /backend-assignment/topic.php?topic=internet-protocols"
          }
        ]
      },
      {
        "number": "06",
        "title": "Common Internet Protocols",
        "content": [
          "Different Internet protocols are designed for different communication tasks. No single protocol handles every type of communication.",
          "TCP/IP provides the fundamental communication framework used for communication across interconnected networks. HTTP and HTTPS are used mainly for web communication. DNS is used to resolve domain names, while SMTP is used for sending email messages."
        ],
        "table": [
          {
            "function": "TCP/IP",
            "purpose": "Provides the core communication framework for transferring data across interconnected networks."
          },
          {
            "function": "HTTP",
            "purpose": "Transfers web resources between clients and web servers."
          },
          {
            "function": "HTTPS",
            "purpose": "Provides secure web communication using HTTP over an encrypted connection."
          },
          {
            "function": "DNS",
            "purpose": "Translates domain names into IP addresses and performs related name-resolution tasks."
          },
          {
            "function": "SMTP",
            "purpose": "Used for sending email messages between mail systems."
          }
        ],
        "examples": [
          {
            "title": "Checking the Protocol Used by the Current Request",
            "code": "echo \"Server Protocol: \" . $_SERVER[\"SERVER_PROTOCOL\"];",
            "output": "Server Protocol: HTTP/1.1"
          }
        ]
      },
      {
        "number": "07",
        "title": "Understanding a URL",
        "content": [
          "A URL, or Uniform Resource Locator, identifies the location of a resource on a network. A web URL can contain several components, including the protocol, domain name, path and query string.",
          "For example, in the URL https://example.com/products/item.php?id=25, https is the protocol, example.com is the domain name, /products/item.php is the path and id=25 is a query parameter."
        ],
        "syntax": [
          "https://domain.com/path/page.php?parameter=value"
        ],
        "examples": [
          {
            "title": "Reading URL Information from the Request",
            "code": "echo \"Host: \" . $_SERVER[\"HTTP_HOST\"] . \"<br>\";\necho \"Path: \" . $_SERVER[\"PHP_SELF\"] . \"<br>\";\necho \"Request URI: \" . $_SERVER[\"REQUEST_URI\"];",
            "output": "Host: localhost\nPath: /backend-assignment/topic.php\nRequest URI: /backend-assignment/topic.php?topic=internet-protocols"
          }
        ]
      },
      {
        "number": "08",
        "title": "Practical Program: Inspecting a Web Request",
        "content": [
          "PHP provides information about the current web request through the $_SERVER superglobal array. These values allow a programmer to inspect information sent by the browser or provided by the web server.",
          "This program demonstrates several request-related values in a single practical example. It can be run directly through XAMPP and viewed in a web browser."
        ],
        "syntax": [
          "$_SERVER[\"HTTP_HOST\"];",
          "$_SERVER[\"REQUEST_METHOD\"];",
          "$_SERVER[\"SERVER_PROTOCOL\"];"
        ],
        "examples": [
          {
            "title": "Web Request Information Program",
            "code": "echo \"Host: \" . $_SERVER[\"HTTP_HOST\"] . \"<br>\";\necho \"Request Method: \" . $_SERVER[\"REQUEST_METHOD\"] . \"<br>\";\necho \"Protocol: \" . $_SERVER[\"SERVER_PROTOCOL\"] . \"<br>\";\necho \"Request URI: \" . $_SERVER[\"REQUEST_URI\"] . \"<br>\";\necho \"Browser: \" . $_SERVER[\"HTTP_USER_AGENT\"];",
            "output": "Host: localhost\nRequest Method: GET\nProtocol: HTTP/1.1\nRequest URI: /backend-assignment/topic.php?topic=internet-protocols\nBrowser: Mozilla/5.0 ..."
          }
        ]
      }
    ]
  },
  "tcp-ip": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "TCP/IP",
    "intro": "TCP/IP stands for Transmission Control Protocol/Internet Protocol. It is a family of communication protocols used to connect devices and exchange data across interconnected networks. TCP and IP perform different but complementary tasks: IP is responsible for addressing and delivering packets between networks, while TCP provides reliable, ordered and connection-oriented delivery of data between communicating applications.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to TCP/IP",
        "content": [
          "TCP/IP is the fundamental protocol suite used for communication over the Internet and many private networks. It is called a protocol suite because communication is not handled by a single protocol. Instead, multiple protocols work together at different levels to perform different functions.",
          "The two most important protocols in the suite are TCP and IP. IP is concerned mainly with logical addressing and routing packets toward their destination, while TCP is concerned with reliable delivery of data between applications."
        ],
        "syntax": [
          "TCP/IP = A suite of communication protocols used for network communication",
          "TCP = Reliable transport of data",
          "IP = Logical addressing and packet delivery"
        ],
        "examples": [
          {
            "title": "Displaying a TCP/IP Related Server Address",
            "code": "echo \"Server IP Address: \" . $_SERVER[\"SERVER_ADDR\"];",
            "output": "Server IP Address: 127.0.0.1"
          }
        ]
      },
      {
        "number": "02",
        "title": "TCP/IP Protocol Suite",
        "content": [
          "The TCP/IP model organizes communication into layers. Each layer performs a specific group of tasks and works with the layers above and below it.",
          "A commonly used representation of the TCP/IP model contains four layers: Application, Transport, Internet and Network Access. The exact terminology may differ between textbooks, but the basic idea remains the same: different responsibilities are separated into different layers."
        ],
        "table": [
          {
            "function": "Application Layer",
            "purpose": "Provides network services directly to applications. Examples include HTTP, DNS and SMTP."
          },
          {
            "function": "Transport Layer",
            "purpose": "Provides communication between applications. TCP and UDP operate at this layer."
          },
          {
            "function": "Internet Layer",
            "purpose": "Provides logical addressing and packet routing using IP."
          },
          {
            "function": "Network Access Layer",
            "purpose": "Handles communication over the physical or local network technology used to transmit data."
          }
        ],
        "examples": [
          {
            "title": "Displaying Application-Level Request Information",
            "code": "echo \"Request Method: \" . $_SERVER[\"REQUEST_METHOD\"] . \"<br>\";\necho \"Requested Host: \" . $_SERVER[\"HTTP_HOST\"];",
            "output": "Request Method: GET\nRequested Host: localhost"
          }
        ]
      },
      {
        "number": "03",
        "title": "TCP and IP: Different Responsibilities",
        "content": [
          "TCP and IP are often written together as TCP/IP, but they do not perform the same job.",
          "IP provides logical addressing and is responsible for moving packets between networks toward the destination address. IP does not by itself guarantee that packets will arrive, arrive only once or arrive in the original order."
        ],
        "table": [
          {
            "function": "TCP",
            "purpose": "Provides reliable, ordered and connection-oriented delivery between applications."
          },
          {
            "function": "IP",
            "purpose": "Provides logical addressing and routes packets between networks."
          }
        ],
        "examples": [
          {
            "title": "Displaying the Local Server Address",
            "code": "$serverIP = $_SERVER[\"SERVER_ADDR\"];\necho \"Destination Server IP: \" . $serverIP;",
            "output": "Destination Server IP: 127.0.0.1"
          }
        ]
      },
      {
        "number": "04",
        "title": "TCP Connection and Reliability",
        "content": [
          "TCP is connection-oriented. Before application data is exchanged over a TCP connection, the communicating systems establish a connection.",
          "TCP uses mechanisms such as sequence numbers, acknowledgements, checksums and retransmission to provide reliable delivery. These mechanisms allow the receiver to detect missing or damaged data and help maintain the correct order of the data stream."
        ],
        "syntax": [
          "Application Data → TCP Segmentation → Transmission → TCP Reassembly",
          "Sender → Data → Receiver → Acknowledgement"
        ],
        "examples": [
          {
            "title": "Checking the Transport Port of a Web Request",
            "code": "echo \"Server Port: \" . $_SERVER[\"SERVER_PORT\"];",
            "output": "Server Port: 80"
          }
        ]
      },
      {
        "number": "05",
        "title": "TCP Three-Way Handshake",
        "content": [
          "TCP establishes a connection using a three-way handshake. The process allows both sides to synchronize and confirm that communication can begin.",
          "The client first sends a SYN segment to request a connection. The server responds with SYN-ACK to acknowledge the request and indicate that it is also prepared to communicate. The client then sends ACK to acknowledge the server response."
        ],
        "syntax": [
          "Client → SYN → Server",
          "Client ← SYN-ACK ← Server",
          "Client → ACK → Server"
        ],
        "examples": [
          {
            "title": "Handshake Sequence Display",
            "code": "echo \"1. Client sends SYN<br>\";\necho \"2. Server sends SYN-ACK<br>\";\necho \"3. Client sends ACK<br>\";\necho \"TCP connection can now carry application data.\";",
            "output": "1. Client sends SYN\n2. Server sends SYN-ACK\n3. Client sends ACK\nTCP connection can now carry application data."
          }
        ]
      },
      {
        "number": "06",
        "title": "IP Addressing in TCP/IP",
        "content": [
          "Every IP-enabled interface is associated with an IP address used for logical identification on a network. IPv4 addresses use 32 bits and are commonly written in dotted-decimal notation, while IPv6 addresses use 128 bits and are written in hexadecimal notation.",
          "An IP address helps identify where a packet should be delivered at the Internet layer. Routers use destination IP information to forward packets between networks."
        ],
        "table": [
          {
            "function": "IPv4",
            "purpose": "Uses 32-bit addresses written in dotted-decimal form, such as 192.168.1.10."
          },
          {
            "function": "IPv6",
            "purpose": "Uses 128-bit addresses written in hexadecimal notation."
          },
          {
            "function": "127.0.0.1",
            "purpose": "Common IPv4 loopback address used to refer to the local machine."
          },
          {
            "function": "::1",
            "purpose": "IPv6 loopback address corresponding to the local machine."
          }
        ],
        "examples": [
          {
            "title": "Checking the Server IP Address",
            "code": "$ip = $_SERVER[\"SERVER_ADDR\"];\necho \"Server IP: \" . $ip;",
            "output": "Server IP: 127.0.0.1"
          }
        ]
      },
      {
        "number": "07",
        "title": "Ports and Network Services",
        "content": [
          "An IP address identifies a host, while a port number helps identify a particular service or application endpoint on that host. Together, an IP address and port help direct network communication to the appropriate service.",
          "Different services commonly use different port numbers. Web servers may listen for HTTP or HTTPS traffic on specific ports, while other network services use other ports."
        ],
        "table": [
          {
            "function": "80",
            "purpose": "Common default port for HTTP."
          },
          {
            "function": "443",
            "purpose": "Common default port for HTTPS."
          },
          {
            "function": "22",
            "purpose": "Common default port for SSH."
          },
          {
            "function": "25",
            "purpose": "A commonly associated port for SMTP communication."
          }
        ],
        "examples": [
          {
            "title": "Displaying the Web Server Port",
            "code": "echo \"Server Port: \" . $_SERVER[\"SERVER_PORT\"];",
            "output": "Server Port: 80"
          }
        ]
      },
      {
        "number": "11",
        "title": "Practical Program: Inspecting TCP/IP Environment Information",
        "content": [
          "PHP can access several values supplied by the web server that help demonstrate the networking environment in which the script is running.",
          "The following program combines the server address, client address, server port, request method and server protocol into a single practical demonstration."
        ],
        "syntax": [
          "$_SERVER[\"SERVER_ADDR\"];",
          "$_SERVER[\"REMOTE_ADDR\"];",
          "$_SERVER[\"SERVER_PORT\"];"
        ],
        "examples": [
          {
            "title": "TCP/IP Environment Information",
            "code": "$serverIP = $_SERVER[\"SERVER_ADDR\"];\n$clientIP = $_SERVER[\"REMOTE_ADDR\"];\n$serverPort = $_SERVER[\"SERVER_PORT\"];\n$method = $_SERVER[\"REQUEST_METHOD\"];\n$protocol = $_SERVER[\"SERVER_PROTOCOL\"];\n\necho \"Server IP: \" . $serverIP . \"<br>\";\necho \"Client IP: \" . $clientIP . \"<br>\";\necho \"Server Port: \" . $serverPort . \"<br>\";\necho \"Request Method: \" . $method . \"<br>\";\necho \"Protocol: \" . $protocol;",
            "output": "Server IP: 127.0.0.1\nClient IP: 127.0.0.1\nServer Port: 80\nRequest Method: GET\nProtocol: HTTP/1.1"
          }
        ]
      }
    ]
  },
  "http": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "HTTP",
    "intro": "HTTP stands for Hypertext Transfer Protocol. It is an application-layer protocol used for communication between web clients such as browsers and web servers. HTTP defines how requests are sent by clients, how servers respond, how resources are identified and how information such as methods, headers and status codes is exchanged. HTTP forms the basic communication mechanism used by websites and web applications.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to HTTP",
        "content": [
          "HTTP stands for Hypertext Transfer Protocol. It is used to transfer web resources such as HTML documents, images, stylesheets, scripts and other application data between a client and a server.",
          "A web browser acts as an HTTP client when it requests a resource from a web server. The server receives the HTTP request, processes it and returns an HTTP response."
        ],
        "syntax": [
          "HTTP Client → HTTP Request → Web Server",
          "HTTP Client ← HTTP Response ← Web Server"
        ],
        "examples": [
          {
            "title": "Checking the HTTP Protocol",
            "code": "echo \"HTTP Version: \" . $_SERVER[\"SERVER_PROTOCOL\"];",
            "output": "HTTP Version: HTTP/1.1"
          }
        ]
      },
      {
        "number": "02",
        "title": "HTTP Request and HTTP Response",
        "content": [
          "HTTP communication is based on a request-response model. The client sends an HTTP request to a server, and the server returns an HTTP response.",
          "An HTTP request contains information such as the requested resource, request method, protocol version and headers. A request may also contain a message body, especially when data is being submitted using methods such as POST."
        ],
        "syntax": [
          "Request = Method + URL/Resource + Headers + Optional Body",
          "Response = Status Code + Headers + Optional Body"
        ],
        "examples": [
          {
            "title": "Displaying Request and Response Information",
            "code": "echo \"Request Method: \" . $_SERVER[\"REQUEST_METHOD\"] . \"<br>\";\necho \"Requested URI: \" . $_SERVER[\"REQUEST_URI\"] . \"<br>\";\necho \"Server Protocol: \" . $_SERVER[\"SERVER_PROTOCOL\"] . \"<br>\";\necho \"Response: PHP generated this page on the server.\";",
            "output": "Request Method: GET\nRequested URI: /backend-assignment/topic.php?topic=http\nServer Protocol: HTTP/1.1\nResponse: PHP generated this page on the server."
          }
        ]
      },
      {
        "number": "03",
        "title": "Structure of an HTTP Request",
        "content": [
          "An HTTP request contains several important parts. The request line identifies the method, requested resource and protocol version. Request headers provide additional information about the client and the requested resource. Some methods may also include a request body.",
          "The request method tells the server what kind of operation the client wants to perform. The requested resource identifies the target, and the protocol version identifies the HTTP version being used."
        ],
        "syntax": [
          "Request Line",
          "Headers",
          "Blank Line"
        ],
        "examples": [
          {
            "title": "Inspecting Request Method and Resource",
            "code": "echo \"Method: \" . $_SERVER[\"REQUEST_METHOD\"] . \"<br>\";\necho \"URI: \" . $_SERVER[\"REQUEST_URI\"];",
            "output": "Method: GET\nURI: /backend-assignment/topic.php?topic=http"
          }
        ]
      },
      {
        "number": "04",
        "title": "Structure of an HTTP Response",
        "content": [
          "An HTTP response contains a status line, response headers and an optional response body. The status line contains the HTTP version and a status code that indicates the result of the request.",
          "Response headers provide additional information about the returned resource, such as its content type or caching instructions."
        ],
        "syntax": [
          "Status Line",
          "Response Headers",
          "Blank Line"
        ],
        "examples": [
          {
            "title": "Generating a Simple Response Body",
            "code": "echo \"This text becomes part of the HTTP response body.\";",
            "output": "This text becomes part of the HTTP response body."
          }
        ]
      },
      {
        "number": "05",
        "title": "HTTP Request Methods",
        "content": [
          "HTTP methods indicate the operation that the client wants the server to perform on a resource. Different methods are used for different purposes.",
          "GET is commonly used to request data or a resource. POST is commonly used to submit data to the server. Other methods such as PUT, PATCH and DELETE are commonly used in web APIs and applications for updating or deleting resources."
        ],
        "table": [
          {
            "function": "GET",
            "purpose": "Requests or retrieves a resource. Data is commonly included in the URL query string."
          },
          {
            "function": "POST",
            "purpose": "Submits data to the server, commonly placing the submitted data in the request body."
          },
          {
            "function": "PUT",
            "purpose": "Commonly used to replace or update a resource."
          },
          {
            "function": "PATCH",
            "purpose": "Commonly used to partially update a resource."
          },
          {
            "function": "DELETE",
            "purpose": "Commonly used to request deletion of a resource."
          }
        ],
        "examples": [
          {
            "title": "Checking the Current HTTP Method",
            "code": "$method = $_SERVER[\"REQUEST_METHOD\"];\necho \"Current HTTP Method: \" . $method;",
            "output": "Current HTTP Method: GET"
          }
        ]
      },
      {
        "number": "06",
        "title": "GET Method in HTTP",
        "content": [
          "The GET method is commonly used when a client wants to retrieve a resource or send small amounts of non-sensitive information as part of the request URL.",
          "Parameters supplied through a GET request are commonly visible in the URL after a question mark. Multiple parameters are separated using an ampersand."
        ],
        "syntax": [
          "page.php?name=value",
          "page.php?name=value&age=20"
        ],
        "examples": [
          {
            "title": "Reading a GET Parameter",
            "code": "$name = $_GET[\"name\"] ?? \"Guest\";\necho \"Hello, \" . htmlspecialchars($name);",
            "output": "Hello, Dhruv"
          }
        ]
      },
      {
        "number": "07",
        "title": "POST Method in HTTP",
        "content": [
          "The POST method is commonly used when data is submitted to a server in the request body. Unlike ordinary GET parameters, the submitted values are not normally displayed in the URL.",
          "POST is commonly used for form submissions, creating records and sending larger amounts of data to a server."
        ],
        "syntax": [
          "POST Request → Request Body → Server"
        ],
        "examples": [
          {
            "title": "Checking for a POST Request",
            "code": "if ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    echo \"A POST request was received.\";\n} else {\n    echo \"This is not a POST request.\";\n}",
            "output": "This is not a POST request."
          }
        ]
      },
      {
        "number": "13",
        "title": "Practical Program: Inspecting HTTP Request Headers",
        "content": [
          "A PHP application can inspect request headers supplied by the browser. This provides a practical way to observe information that travels with an HTTP request.",
          "The getallheaders() function can be used in environments that provide it to retrieve the incoming request headers as an associative array."
        ],
        "syntax": [
          "getallheaders();"
        ],
        "examples": [
          {
            "title": "Displaying Request Headers",
            "code": "if (function_exists(\"getallheaders\")) {\n    $headers = getallheaders();\n\n    foreach ($headers as $name => $value) {\n        echo htmlspecialchars($name) . \": \" . htmlspecialchars($value) . \"<br>\";\n    }\n} else {\n    echo \"Request headers are not available in this environment.\";\n}",
            "output": "Host: localhost\nUser-Agent: Mozilla/5.0 ...\nAccept: text/html,...\n..."
          }
        ]
      }
    ]
  },
  "dns": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "DNS",
    "intro": "DNS stands for Domain Name System. It is a distributed naming system that translates human-readable domain names into IP addresses and provides other information associated with network names. DNS allows users to access websites using names such as example.com instead of having to remember numerical IP addresses.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to DNS",
        "content": [
          "DNS stands for Domain Name System. It is a naming system used to associate human-readable domain names with information such as IP addresses.",
          "Computers communicate across networks using IP addresses, but remembering numerical addresses for every website would be inconvenient for users. DNS solves this problem by allowing people to use meaningful domain names."
        ],
        "syntax": [
          "Domain Name → DNS Resolution → IP Address"
        ],
        "examples": [
          {
            "title": "Simple Hostname Resolution",
            "code": "$host = \"example.com\";\n$ip = gethostbyname($host);\necho \"Host: \" . $host . \"<br>\";\necho \"IP Address: \" . $ip;",
            "output": "Host: example.com\nIP Address: [IP address returned by the current DNS configuration]"
          }
        ]
      },
      {
        "number": "02",
        "title": "Why DNS is Required",
        "content": [
          "IP addresses are suitable for machines but are not convenient for people to remember. A domain name provides a readable name that can represent a web service.",
          "For example, users can enter a domain such as example.com instead of remembering a numerical IPv4 or hexadecimal IPv6 address."
        ],
        "table": [
          {
            "function": "Domain Name",
            "purpose": "Human-readable name used to identify a network resource."
          },
          {
            "function": "IP Address",
            "purpose": "Numerical or hexadecimal network address used for communication with a host."
          },
          {
            "function": "DNS",
            "purpose": "Provides name resolution between domain names and network information."
          }
        ],
        "examples": [
          {
            "title": "Comparing Domain Name and IP Resolution",
            "code": "$domain = \"example.com\";\n$resolvedIP = gethostbyname($domain);\n\necho \"Domain: \" . $domain . \"<br>\";\necho \"Resolved Address: \" . $resolvedIP;",
            "output": "Domain: example.com\nResolved Address: [IP address returned by the current DNS configuration]"
          }
        ]
      },
      {
        "number": "03",
        "title": "DNS Hierarchy",
        "content": [
          "DNS uses a hierarchical naming structure. A complete domain name can be divided into several levels, allowing the naming system to remain organized and scalable.",
          "At the top of the hierarchy is the DNS root. Below the root are Top-Level Domains such as com, org, net and country-code domains. Below these are second-level domains and additional subdomains."
        ],
        "syntax": [
          "Root → Top-Level Domain → Domain → Subdomain"
        ],
        "examples": [
          {
            "title": "Breaking Down a Domain Name",
            "code": "$domain = \"www.example.com\";\n$parts = explode(\".\", $domain);\n\necho \"Host: \" . $parts[0] . \"<br>\";\necho \"Domain: \" . $parts[1] . \"<br>\";\necho \"Top-Level Domain: \" . $parts[2];",
            "output": "Host: www\nDomain: example\nTop-Level Domain: com"
          }
        ]
      },
      {
        "number": "04",
        "title": "Domain Names and Subdomains",
        "content": [
          "A domain name identifies a domain in the DNS hierarchy. A subdomain is a separate name created under a parent domain and can be used to organize different services or sections of a website.",
          "For example, in the name blog.example.com, blog can represent a subdomain under example.com."
        ],
        "syntax": [
          "subdomain.domain.tld"
        ],
        "examples": [
          {
            "title": "Separating Domain Components",
            "code": "$domain = \"blog.example.com\";\n$parts = explode(\".\", $domain);\n\necho \"Subdomain: \" . $parts[0] . \"<br>\";\necho \"Domain: \" . $parts[1] . \"<br>\";\necho \"TLD: \" . $parts[2];",
            "output": "Subdomain: blog\nDomain: example\nTLD: com"
          }
        ]
      },
      {
        "number": "05",
        "title": "DNS Resolution",
        "content": [
          "DNS resolution is the process of obtaining network information for a domain name. A DNS resolver can query DNS infrastructure to determine the records associated with the requested name.",
          "A simplified web access process is: the user enters a domain name, the system resolves the domain name, the resulting network address is used to contact the destination server and the requested resource is then accessed."
        ],
        "syntax": [
          "Domain Name → Resolver → DNS Servers → DNS Result"
        ],
        "examples": [
          {
            "title": "Resolving a Domain to an IP Address",
            "code": "$domain = \"example.com\";\n$ip = gethostbyname($domain);\necho \"Resolved IP: \" . $ip;",
            "output": "Resolved IP: [IP address returned by the current DNS configuration]"
          }
        ]
      },
      {
        "number": "06",
        "title": "Common DNS Record Types",
        "content": [
          "DNS does not store only one type of information. Different DNS record types provide different information about a domain.",
          "An A record commonly maps a domain name to an IPv4 address. An AAAA record maps a domain name to an IPv6 address. A CNAME record provides an alias for another domain name. MX records identify mail servers for a domain, while NS records identify authoritative name servers."
        ],
        "table": [
          {
            "function": "A",
            "purpose": "Maps a hostname to an IPv4 address."
          },
          {
            "function": "AAAA",
            "purpose": "Maps a hostname to an IPv6 address."
          },
          {
            "function": "CNAME",
            "purpose": "Creates an alias that points to another domain name."
          },
          {
            "function": "MX",
            "purpose": "Identifies mail servers responsible for receiving email for a domain."
          },
          {
            "function": "NS",
            "purpose": "Identifies authoritative name servers for a domain."
          },
          {
            "function": "TXT",
            "purpose": "Stores text-based information used for different purposes such as domain verification and email-related configuration."
          }
        ],
        "examples": [
          {
            "title": "Checking an A Record",
            "code": "$records = dns_get_record(\"example.com\", DNS_A);\n\nforeach ($records as $record) {\n    echo \"A Record: \" . htmlspecialchars($record[\"ip\"]) . \"<br>\";\n}",
            "output": "A Record: [IPv4 address returned by DNS]"
          }
        ]
      },
      {
        "number": "07",
        "title": "The A Record",
        "content": [
          "An A record maps a domain name or hostname to an IPv4 address. It is one of the most common DNS record types used for web hosting.",
          "When a domain has an A record, a DNS lookup can return the IPv4 address associated with that name. The browser can then use the address as part of the process of communicating with the server."
        ],
        "syntax": [
          "A record: hostname → IPv4 address"
        ],
        "examples": [
          {
            "title": "Reading A Records in PHP",
            "code": "$records = dns_get_record(\"example.com\", DNS_A);\n\nforeach ($records as $record) {\n    echo \"IPv4 Address: \" . htmlspecialchars($record[\"ip\"]) . \"<br>\";\n}",
            "output": "IPv4 Address: [IPv4 address returned by the current DNS configuration]"
          }
        ]
      },
      {
        "number": "15",
        "title": "Practical Program: DNS Lookup Utility",
        "content": [
          "A small DNS lookup utility can combine hostname input, validation, name resolution and formatted output in one program.",
          "The following program accepts a fixed hostname for demonstration, resolves it to an IPv4 address and displays the result. The same structure can later be connected to a form that accepts a hostname from the user."
        ],
        "syntax": [
          "Input Hostname → DNS Lookup → Display Result"
        ],
        "examples": [
          {
            "title": "Simple DNS Lookup Program",
            "code": "$host = \"example.com\";\n$ip = gethostbyname($host);\n\necho \"DNS Lookup Result<br><br>\";\necho \"Hostname: \" . htmlspecialchars($host) . \"<br>\";\necho \"IPv4 Address: \" . htmlspecialchars($ip);",
            "output": "DNS Lookup Result\nHostname: example.com\nIPv4 Address: [IP address returned by the current DNS configuration]"
          }
        ]
      }
    ]
  },
  "smtp": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "SMTP",
    "intro": "SMTP stands for Simple Mail Transfer Protocol. It is an application-layer protocol used mainly for sending email messages between mail clients and mail servers and for transferring email between mail servers. SMTP defines the commands, responses and message-handling rules used during email transmission.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to SMTP",
        "content": [
          "SMTP stands for Simple Mail Transfer Protocol. It is one of the main protocols used in Internet email communication.",
          "SMTP is primarily concerned with sending and transferring email. A user may compose an email using a mail client, but the actual transfer of the message to the recipient mail system is handled through mail servers and protocols such as SMTP."
        ],
        "syntax": [
          "SMTP Client → SMTP Server → Recipient Mail Server"
        ],
        "examples": [
          {
            "title": "Displaying SMTP as an Application-Layer Protocol",
            "code": "$protocol = \"SMTP\";\n$purpose = \"Sending and transferring email messages\";\n\necho \"Protocol: \" . $protocol . \"<br>\";\necho \"Purpose: \" . $purpose;",
            "output": "Protocol: SMTP\nPurpose: Sending and transferring email messages"
          }
        ]
      },
      {
        "number": "02",
        "title": "Role of SMTP in Email Communication",
        "content": [
          "SMTP is mainly a sending and transfer protocol. It is used when an email is submitted from a mail client or application to a mail server and when mail servers transfer messages toward the recipient mail system.",
          "SMTP does not normally provide the complete process of reading email from a mailbox. Protocols such as POP3 and IMAP are commonly used for retrieving and synchronizing received messages."
        ],
        "table": [
          {
            "function": "SMTP",
            "purpose": "Used mainly for sending and transferring email messages."
          },
          {
            "function": "POP3",
            "purpose": "Used for retrieving email from a mail server, traditionally by downloading messages to a client."
          },
          {
            "function": "IMAP",
            "purpose": "Used for accessing and synchronizing email stored on a mail server."
          }
        ],
        "examples": [
          {
            "title": "Displaying the Role of SMTP",
            "code": "echo \"SMTP: Sending and transferring email<br>\";\necho \"POP3: Receiving email from a mail server<br>\";\necho \"IMAP: Accessing and synchronizing mailbox data\";",
            "output": "SMTP: Sending and transferring email\nPOP3: Receiving email from a mail server\nIMAP: Accessing and synchronizing mailbox data"
          }
        ]
      },
      {
        "number": "03",
        "title": "SMTP Client and SMTP Server",
        "content": [
          "An SMTP client initiates an SMTP session and sends commands to an SMTP server. The server processes the commands and responds with status information.",
          "The SMTP client may be a mail application, a web application or another mail server. The SMTP server may accept the message for delivery, relay it to another mail server or reject it when a rule or error prevents delivery."
        ],
        "syntax": [
          "SMTP Client → Connect → Authenticate if required → Send Message → Disconnect"
        ],
        "examples": [
          {
            "title": "Representing SMTP Client-Server Communication",
            "code": "echo \"SMTP Client: Sending email request<br>\";\necho \"SMTP Server: Request received<br>\";\necho \"SMTP Server: Message accepted for processing\";",
            "output": "SMTP Client: Sending email request\nSMTP Server: Request received\nSMTP Server: Message accepted for processing"
          }
        ]
      },
      {
        "number": "04",
        "title": "SMTP Ports",
        "content": [
          "SMTP services commonly use different ports for different communication scenarios. The exact configuration depends on the mail provider and whether the connection is encrypted.",
          "Port 25 is traditionally associated with SMTP server-to-server mail transfer. Port 587 is widely used for message submission by email clients and applications, usually with authentication and encryption mechanisms. Port 465 is also used by some systems for SMTP submission over an implicit TLS connection."
        ],
        "table": [
          {
            "function": "25",
            "purpose": "Traditional SMTP port commonly associated with mail server-to-server transfer."
          },
          {
            "function": "587",
            "purpose": "Common message submission port for authenticated email clients and applications."
          },
          {
            "function": "465",
            "purpose": "Used by some systems for SMTP submission with implicit TLS."
          }
        ],
        "examples": [
          {
            "title": "Displaying Common SMTP Ports",
            "code": "echo \"SMTP: 25<br>\";\necho \"SMTP Submission: 587<br>\";\necho \"SMTP over implicit TLS: 465\";",
            "output": "SMTP: 25\nSMTP Submission: 587\nSMTP over implicit TLS: 465"
          }
        ]
      },
      {
        "number": "05",
        "title": "SMTP Communication Process",
        "content": [
          "An SMTP session begins when the client establishes a connection to the mail server. The server identifies itself and the client then introduces itself according to the protocol.",
          "The client can authenticate when required and then provides information about the sender and recipient. After the server accepts the message transaction, the client sends the message contents."
        ],
        "syntax": [
          "Connection → Greeting → Authentication if required → MAIL FROM → RCPT TO → DATA → Message → QUIT"
        ],
        "examples": [
          {
            "title": "Simplified SMTP Session",
            "code": "echo \"S: 220 Mail Server Ready<br>\";\necho \"C: EHLO example.com<br>\";\necho \"S: 250 OK<br>\";\necho \"C: MAIL FROM:<sender@example.com><br>\";\necho \"S: 250 Sender accepted<br>\";\necho \"C: RCPT TO:<receiver@example.com><br>\";\necho \"S: 250 Recipient accepted<br>\";\necho \"C: QUIT<br>\";\necho \"S: 221 Bye\";",
            "output": "S: 220 Mail Server Ready\nC: EHLO example.com\nS: 250 OK\nC: MAIL FROM:<sender@example.com>\nS: 250 Sender accepted\nC: RCPT TO:<receiver@example.com>\nS: 250 Recipient accepted\nC: QUIT\nS: 221 Bye"
          }
        ]
      },
      {
        "number": "06",
        "title": "Important SMTP Commands",
        "content": [
          "SMTP communication uses commands sent by the client and responses returned by the server. Each command performs a specific part of the mail-transfer process.",
          "EHLO or HELO is used to identify the client to the server. MAIL FROM specifies the envelope sender, RCPT TO specifies a recipient and DATA begins the message transfer. QUIT ends the SMTP session."
        ],
        "table": [
          {
            "function": "HELO",
            "purpose": "Introduces the client to the SMTP server."
          },
          {
            "function": "EHLO",
            "purpose": "Extended greeting that also allows the server to advertise supported SMTP extensions."
          },
          {
            "function": "MAIL FROM",
            "purpose": "Specifies the envelope sender of the message."
          },
          {
            "function": "RCPT TO",
            "purpose": "Specifies a recipient of the message."
          },
          {
            "function": "DATA",
            "purpose": "Indicates that the email message content will be transmitted."
          },
          {
            "function": "QUIT",
            "purpose": "Ends the SMTP session."
          }
        ],
        "examples": [
          {
            "title": "Displaying SMTP Commands",
            "code": "$commands = [\n    \"EHLO\",\n    \"MAIL FROM\",\n    \"RCPT TO\",\n    \"DATA\",\n    \"QUIT\"\n];\n\nforeach ($commands as $command) {\n    echo htmlspecialchars($command) . \"<br>\";\n}",
            "output": "EHLO\nMAIL FROM\nRCPT TO\nDATA\nQUIT"
          }
        ]
      },
      {
        "number": "07",
        "title": "SMTP Response Codes",
        "content": [
          "SMTP servers return numeric response codes to indicate the result of a command. These codes help the client determine whether an operation succeeded, failed or requires another action.",
          "The first digit generally indicates the class of the response. For example, 2xx responses generally indicate successful completion, 3xx responses usually indicate that more information is expected, 4xx responses represent temporary failures and 5xx responses represent permanent failures."
        ],
        "table": [
          {
            "function": "220",
            "purpose": "Service ready response commonly sent when an SMTP server is ready to begin communication."
          },
          {
            "function": "250",
            "purpose": "Requested mail action completed successfully."
          },
          {
            "function": "354",
            "purpose": "Server is ready to receive the message data after the DATA command."
          },
          {
            "function": "421",
            "purpose": "Service is temporarily unavailable."
          },
          {
            "function": "450",
            "purpose": "Requested mailbox action was not completed because the mailbox was temporarily unavailable."
          },
          {
            "function": "550",
            "purpose": "Requested action was not completed, commonly because the mailbox or command was not accepted."
          }
        ],
        "examples": [
          {
            "title": "Displaying SMTP Response Categories",
            "code": "$responses = [\n    220 => \"Service ready\",\n    250 => \"Requested action completed\",\n    354 => \"Start mail input\",\n    421 => \"Service temporarily unavailable\",\n    550 => \"Requested action not completed\"\n];\n\nforeach ($responses as $code => $message) {\n    echo $code . \" - \" . htmlspecialchars($message) . \"<br>\";\n}",
            "output": "220 - Service ready\n250 - Requested action completed\n354 - Start mail input\n421 - Service temporarily unavailable\n550 - Requested action not completed"
          }
        ]
      },
      {
        "number": "13",
        "title": "Practical Example: Checking SMTP Configuration Data",
        "content": [
          "A web application can store SMTP configuration separately from the message data. This makes it easier to understand which mail server, port and security settings are intended for the application.",
          "The following example only displays configuration information. It does not attempt to connect to or send mail through an external SMTP server."
        ],
        "syntax": [
          "$smtpHost",
          "$smtpPort",
          "$smtpEncryption"
        ],
        "examples": [
          {
            "title": "SMTP Configuration Example",
            "code": "$smtpHost = \"smtp.example.com\";\n$smtpPort = 587;\n$smtpEncryption = \"TLS\";\n$smtpUsername = \"account@example.com\";\n\necho \"SMTP Host: \" . $smtpHost . \"<br>\";\necho \"SMTP Port: \" . $smtpPort . \"<br>\";\necho \"Encryption: \" . $smtpEncryption . \"<br>\";\necho \"Username: \" . $smtpUsername;",
            "output": "SMTP Host: smtp.example.com\nSMTP Port: 587\nEncryption: TLS\nUsername: account@example.com"
          }
        ]
      }
    ]
  },
  "ip-addressing": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "IP Addressing",
    "intro": "An IP address is a logical address assigned to a network interface so that devices can be identified and packets can be delivered across IP networks. IP addressing is mainly provided through IPv4 and IPv6. Understanding IP addresses, address types, private and public ranges, loopback addresses and basic validation is important for web development and network troubleshooting.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to IP Addressing",
        "content": [
          "An Internet Protocol address, commonly called an IP address, is a logical address associated with a network interface. It allows systems to identify network destinations and communicate with other devices using the Internet Protocol.",
          "IP addressing is an important part of TCP/IP networking because routers use destination IP information to forward packets toward the correct network."
        ],
        "syntax": [
          "IPv4 → 32-bit address",
          "IPv6 → 128-bit address"
        ],
        "examples": [
          {
            "title": "Displaying the Server IP Address",
            "code": "echo \"Server IP: \" . $_SERVER[\"SERVER_ADDR\"];",
            "output": "Server IP: 127.0.0.1"
          }
        ]
      },
      {
        "number": "02",
        "title": "IPv4 Address",
        "content": [
          "IPv4 is the fourth version of the Internet Protocol. An IPv4 address contains 32 bits and is normally represented as four decimal numbers called octets.",
          "Each octet can contain a value from 0 to 255. The four octets are separated by periods."
        ],
        "syntax": [
          "x.x.x.x",
          "Example: 192.168.1.10"
        ],
        "table": [
          {
            "function": "32 bits",
            "purpose": "Total size of an IPv4 address."
          },
          {
            "function": "4 octets",
            "purpose": "IPv4 addresses are commonly written as four decimal octets."
          },
          {
            "function": "0–255",
            "purpose": "Valid numerical range for each IPv4 octet."
          }
        ],
        "examples": [
          {
            "title": "Displaying an IPv4 Address",
            "code": "$ip = \"192.168.1.10\";\necho \"IPv4 Address: \" . $ip;",
            "output": "IPv4 Address: 192.168.1.10"
          }
        ]
      },
      {
        "number": "03",
        "title": "IPv6 Address",
        "content": [
          "IPv6 is the sixth version of the Internet Protocol and was designed to provide a much larger address space than IPv4. An IPv6 address contains 128 bits.",
          "IPv6 addresses are written using hexadecimal digits and are divided into groups separated by colons."
        ],
        "syntax": [
          "xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx",
          "Example: 2001:db8::1"
        ],
        "table": [
          {
            "function": "128 bits",
            "purpose": "Total size of an IPv6 address."
          },
          {
            "function": "Hexadecimal notation",
            "purpose": "IPv6 addresses use hexadecimal digits from 0 to 9 and a to f."
          },
          {
            "function": "Colon-separated groups",
            "purpose": "IPv6 addresses are divided into hexadecimal groups using colons."
          }
        ],
        "examples": [
          {
            "title": "Displaying an IPv6 Address",
            "code": "$ip = \"2001:db8::1\";\necho \"IPv6 Address: \" . $ip;",
            "output": "IPv6 Address: 2001:db8::1"
          }
        ]
      },
      {
        "number": "04",
        "title": "IPv4 vs IPv6",
        "content": [
          "IPv4 and IPv6 are two versions of the Internet Protocol. Both provide logical addressing, but they differ significantly in address size and notation.",
          "IPv4 uses 32-bit addresses written in dotted-decimal notation. IPv6 uses 128-bit addresses written in hexadecimal notation."
        ],
        "table": [
          {
            "function": "IPv4",
            "purpose": "Uses 32-bit addresses and dotted-decimal notation."
          },
          {
            "function": "IPv6",
            "purpose": "Uses 128-bit addresses and hexadecimal notation."
          },
          {
            "function": "IPv4 example",
            "purpose": "192.168.1.10"
          },
          {
            "function": "IPv6 example",
            "purpose": "2001:db8::1"
          }
        ],
        "examples": [
          {
            "title": "Identifying an IP Version",
            "code": "$ip = \"192.168.1.10\";\n\nif (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {\n    echo \"The address is IPv4.\";\n} elseif (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {\n    echo \"The address is IPv6.\";\n} else {\n    echo \"Invalid IP address.\";\n}",
            "output": "The address is IPv4."
          }
        ]
      },
      {
        "number": "05",
        "title": "Public and Private IP Addresses",
        "content": [
          "IP addresses can be used in public or private network environments. Public IP addresses can be routed across the Internet, while private IPv4 addresses are reserved for use inside private networks.",
          "The commonly used private IPv4 ranges are 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16."
        ],
        "table": [
          {
            "function": "10.0.0.0/8",
            "purpose": "Private IPv4 address range."
          },
          {
            "function": "172.16.0.0/12",
            "purpose": "Private IPv4 address range."
          },
          {
            "function": "192.168.0.0/16",
            "purpose": "Private IPv4 address range commonly used in home and small office networks."
          }
        ],
        "examples": [
          {
            "title": "Checking a Private IP Address",
            "code": "$ip = \"192.168.1.20\";\n\nif (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {\n    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE) === false) {\n        echo $ip . \" is in a private IPv4 range.\";\n    } else {\n        echo $ip . \" is not in a private IPv4 range.\";\n    }\n} else {\n    echo \"Invalid IPv4 address.\";\n}",
            "output": "192.168.1.20 is in a private IPv4 range."
          }
        ]
      },
      {
        "number": "06",
        "title": "Loopback Address",
        "content": [
          "A loopback address allows a computer to communicate with itself through the network stack. It is commonly used for testing network applications without requiring communication with another physical machine.",
          "The IPv4 loopback range is 127.0.0.0/8, with 127.0.0.1 being the most commonly used address. IPv6 uses ::1 as its loopback address."
        ],
        "syntax": [
          "IPv4 loopback: 127.0.0.1",
          "IPv6 loopback: ::1",
          "Hostname: localhost"
        ],
        "examples": [
          {
            "title": "Checking localhost",
            "code": "$host = \"localhost\";\n$ip = gethostbyname($host);\n\necho \"Host: \" . $host . \"<br>\";\necho \"Address: \" . $ip;",
            "output": "Host: localhost\nAddress: 127.0.0.1"
          }
        ]
      },
      {
        "number": "07",
        "title": "Subnet Mask",
        "content": [
          "A subnet mask is used with an IPv4 address to determine which portion represents the network part and which portion represents the host part.",
          "For example, the subnet mask 255.255.255.0 corresponds to /24 notation. In a typical /24 IPv4 network, the first 24 bits identify the network portion and the remaining 8 bits are available for host addressing."
        ],
        "syntax": [
          "IPv4 Address / Prefix Length",
          "Example: 192.168.1.10/24",
          "Subnet Mask: 255.255.255.0"
        ],
        "examples": [
          {
            "title": "Displaying an IPv4 Address with a Subnet Mask",
            "code": "$ip = \"192.168.1.10\";\n$mask = \"255.255.255.0\";\n\necho \"IP Address: \" . $ip . \"<br>\";\necho \"Subnet Mask: \" . $mask . \"<br>\";\necho \"CIDR Notation: \" . $ip . \"/24\";",
            "output": "IP Address: 192.168.1.10\nSubnet Mask: 255.255.255.0\nCIDR Notation: 192.168.1.10/24"
          }
        ]
      },
      {
        "number": "15",
        "title": "Practical Program: IP Address Validator",
        "content": [
          "A simple IP address validator can accept an address and determine whether it is valid and which IP version it uses.",
          "The following program combines PHP validation with conditional logic and provides a result that can later be reused in an HTML form or network configuration page."
        ],
        "syntax": [
          "Input → Validate → Identify Version → Display Result"
        ],
        "examples": [
          {
            "title": "Complete IP Address Validator",
            "code": "$ip = \"192.168.1.25\";\n\nif (!filter_var($ip, FILTER_VALIDATE_IP)) {\n    echo \"Invalid IP address.\";\n} elseif (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {\n    echo \"Valid IPv4 address: \" . $ip;\n} else {\n    echo \"Valid IPv6 address: \" . $ip;\n}",
            "output": "Valid IPv4 address: 192.168.1.25"
          }
        ]
      }
    ]
  },
  "html": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "HTML",
    "intro": "HTML stands for HyperText Markup Language. It is the standard markup language used to structure content on web pages. HTML defines elements such as headings, paragraphs, links, images, lists, tables and forms. It provides the structural foundation of a web page, while CSS is commonly used for presentation and JavaScript is used to provide client-side behavior.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to HTML",
        "content": [
          "HTML stands for HyperText Markup Language. It is used to describe the structure and meaning of content displayed by web browsers.",
          "HTML uses elements and tags to identify different types of content. For example, a heading can be represented using a heading element, a paragraph using a paragraph element and a link using an anchor element."
        ],
        "syntax": [
          "<tag>Content</tag>",
          "<tag attribute=\"value\">Content</tag>"
        ],
        "examples": [
          {
            "title": "Basic HTML Element",
            "code": "<p>Hello, World!</p>",
            "output": "Hello, World!"
          }
        ]
      },
      {
        "number": "02",
        "title": "Basic Structure of an HTML Document",
        "content": [
          "A normal HTML document follows a basic structure that identifies the document type, the root HTML element, the head section and the body section.",
          "The head contains metadata and resources such as the document title, character encoding and linked stylesheets. The body contains the visible page content."
        ],
        "syntax": [
          "<!DOCTYPE html>",
          "<html>",
          "<head>"
        ],
        "examples": [
          {
            "title": "Complete Basic HTML Page",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n    <p>This is my first HTML page.</p>\n</body>\n</html>",
            "output": "Welcome\nThis is my first HTML page."
          }
        ]
      },
      {
        "number": "03",
        "title": "HTML Elements and Tags",
        "content": [
          "An HTML element normally consists of an opening tag, content and a closing tag. Some HTML elements, such as the meta and img elements, do not use a closing tag in the same way.",
          "Tags tell the browser how the document content should be interpreted. Elements can also contain attributes that provide additional information or modify their behavior."
        ],
        "syntax": [
          "<p>Paragraph content</p>",
          "<h1>Heading content</h1>",
          "<a href=\"https://example.com\">Link</a>"
        ],
        "examples": [
          {
            "title": "Different HTML Elements",
            "code": "<h1>Student Profile</h1>\n<p>Name: Dhruv</p>\n<p>Course: BCA</p>",
            "output": "Student Profile\nName: Dhruv\nCourse: BCA"
          }
        ]
      },
      {
        "number": "04",
        "title": "Headings",
        "content": [
          "HTML provides six heading levels from h1 to h6. The h1 element represents the highest-level heading and h6 represents a lower-level heading.",
          "Headings create a logical hierarchy in the page. They should be selected according to the importance and structure of the content rather than simply because a particular heading size looks attractive."
        ],
        "syntax": [
          "<h1>Main Heading</h1>",
          "<h2>Section Heading</h2>",
          "<h3>Subsection Heading</h3>"
        ],
        "examples": [
          {
            "title": "HTML Heading Hierarchy",
            "code": "<h1>Backend Web Development</h1>\n<h2>Unit 1</h2>\n<h3>HTML</h3>\n<h4>HTML Elements</h4>",
            "output": "Backend Web Development\nUnit 1\nHTML\nHTML Elements"
          }
        ]
      },
      {
        "number": "05",
        "title": "Paragraphs and Text Formatting",
        "content": [
          "The p element is used to represent a paragraph of text. Browsers normally display paragraphs as separate blocks.",
          "HTML also provides elements for giving text different meanings or emphasis. Common examples include strong for strong importance, em for emphasis, mark for highlighted content, small for fine print and code for code fragments."
        ],
        "syntax": [
          "<p>Paragraph</p>",
          "<strong>Important text</strong>",
          "<em>Emphasized text</em>"
        ],
        "examples": [
          {
            "title": "Paragraph and Text Formatting",
            "code": "<p>This is a normal paragraph.</p>\n<p><strong>Important:</strong> Submit the assignment on time.</p>\n<p><em>HTML</em> provides page structure.</p>\n<p>Use <code>echo</code> in PHP to display output.</p>",
            "output": "This is a normal paragraph.\nImportant: Submit the assignment on time.\nHTML provides page structure.\nUse echo in PHP to display output."
          }
        ]
      },
      {
        "number": "06",
        "title": "HTML Attributes",
        "content": [
          "Attributes provide additional information about an HTML element. They are generally written inside the opening tag using the form name=\"value\".",
          "Different elements support different attributes. For example, the anchor element commonly uses href, while an image uses src and alt."
        ],
        "syntax": [
          "<element attribute=\"value\">Content</element>"
        ],
        "table": [
          {
            "function": "id",
            "purpose": "Provides a unique identifier for an element."
          },
          {
            "function": "class",
            "purpose": "Associates an element with one or more classes."
          },
          {
            "function": "title",
            "purpose": "Provides additional advisory information for an element."
          },
          {
            "function": "href",
            "purpose": "Specifies the destination URL of a link."
          },
          {
            "function": "src",
            "purpose": "Specifies the source of an external resource such as an image."
          },
          {
            "function": "alt",
            "purpose": "Provides alternative text for an image."
          }
        ],
        "examples": [
          {
            "title": "Using HTML Attributes",
            "code": "<p id=\"student-name\" class=\"student\">Dhruv</p>\n<a href=\"https://example.com\" title=\"Open Example\">Visit Website</a>",
            "output": "Dhruv\nVisit Website"
          }
        ]
      },
      {
        "number": "07",
        "title": "Links and the Anchor Element",
        "content": [
          "The anchor element is used to create hyperlinks. The href attribute specifies the destination of the link.",
          "Links can point to another website, another page within the same website, a specific location on the same page or another resource."
        ],
        "syntax": [
          "<a href=\"URL\">Link Text</a>",
          "<a href=\"URL\" target=\"_blank\" rel=\"noopener\">Link Text</a>"
        ],
        "examples": [
          {
            "title": "External Link",
            "code": "<a href=\"https://example.com\">Visit Example</a>",
            "output": "Visit Example"
          }
        ]
      },
      {
        "number": "17",
        "title": "Practical Program: Student Profile Page",
        "content": [
          "A simple student profile page combines several HTML concepts into one practical example. The program uses headings, paragraphs, an image, a list, a link and a table.",
          "This type of combined example is useful because it demonstrates how individual HTML elements are assembled into a complete web page rather than being used independently."
        ],
        "syntax": [
          "HTML Page = Heading + Text + Image + List + Table + Link"
        ],
        "examples": [
          {
            "title": "Complete Student Profile",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Student Profile</title>\n</head>\n<body>\n    <h1>Student Profile</h1>\n    <p>Name: Dhruv</p>\n    <p>Course: BCA</p>\n\n    <h2>Skills</h2>\n    <ul>\n        <li>PHP</li>\n        <li>MySQL</li>\n        <li>JavaScript</li>\n    </ul>\n\n    <h2>Subjects</h2>\n    <table>\n        <tr><th>Subject</th><th>Status</th></tr>\n        <tr><td>PHP</td><td>Learning</td></tr>\n        <tr><td>MySQL</td><td>Learning</td></tr>\n    </table>\n\n    <p><a href=\"about.php\">About the Assignment</a></p>\n</body>\n</html>",
            "output": "Student Profile\nName: Dhruv\nCourse: BCA\nSkills: PHP, MySQL, JavaScript\nSubjects: PHP – Learning, MySQL – Learning\nAbout the Assignment"
          }
        ]
      }
    ]
  },
  "javascript-fundamentals": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "JavaScript Fundamentals",
    "intro": "JavaScript is a programming language commonly used to add dynamic behavior and interactivity to web pages. Unlike PHP, which normally executes on the server, JavaScript commonly executes in the user’s browser. It can respond to user actions, perform calculations, validate input, manipulate HTML elements and change page content without requiring a complete page reload.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to JavaScript",
        "content": [
          "JavaScript is a high-level programming language widely used in web development to make web pages interactive and dynamic.",
          "A browser can execute JavaScript code directly after loading a page. This allows a page to respond to actions such as button clicks, keyboard input and form submission."
        ],
        "syntax": [
          "<script>",
          "    JavaScript code",
          "</script>"
        ],
        "examples": [
          {
            "title": "First JavaScript Program",
            "code": "<!DOCTYPE html>\n<html>\n<body>\n    <script>\n        document.write(\"Hello, JavaScript!\");\n    </script>\n</body>\n</html>",
            "output": "Hello, JavaScript!"
          }
        ]
      },
      {
        "number": "02",
        "title": "Adding JavaScript to an HTML Page",
        "content": [
          "JavaScript can be written directly inside an HTML document using the script element. It can also be placed in a separate JavaScript file and connected using the src attribute.",
          "Keeping larger JavaScript programs in separate files makes a website easier to maintain and allows the same script to be reused across multiple pages."
        ],
        "syntax": [
          "<script>",
          "    // Internal JavaScript",
          "</script>"
        ],
        "examples": [
          {
            "title": "Internal JavaScript",
            "code": "<html>\n<body>\n    <h1 id=\"message\"></h1>\n\n    <script>\n        document.getElementById(\"message\").textContent = \"JavaScript is working.\";\n    </script>\n</body>\n</html>",
            "output": "JavaScript is working."
          }
        ]
      },
      {
        "number": "03",
        "title": "Variables in JavaScript",
        "content": [
          "Variables are used to store values that a program needs to work with. JavaScript commonly uses let and const for declaring variables. The older var keyword also exists but is generally avoided in modern JavaScript when let or const provides clearer behavior.",
          "A variable declared with let can be reassigned, while a variable declared with const cannot be reassigned after initialization."
        ],
        "syntax": [
          "let variableName = value;",
          "const variableName = value;",
          "var variableName = value;"
        ],
        "examples": [
          {
            "title": "Using let",
            "code": "let name = \"Dhruv\";\nname = \"Rahul\";\nconsole.log(name);",
            "output": "Rahul"
          }
        ]
      },
      {
        "number": "04",
        "title": "JavaScript Data Types",
        "content": [
          "JavaScript supports several data types used to represent different kinds of values. Common primitive types include string, number, boolean, undefined, null, bigint and symbol. JavaScript also supports objects, which can store collections of related values.",
          "The typeof operator can be used to determine the type of many JavaScript values during program execution."
        ],
        "table": [
          {
            "function": "string",
            "purpose": "Represents textual data such as names and messages."
          },
          {
            "function": "number",
            "purpose": "Represents numeric values."
          },
          {
            "function": "boolean",
            "purpose": "Represents true or false values."
          },
          {
            "function": "undefined",
            "purpose": "Represents a variable that has not been assigned a value."
          },
          {
            "function": "null",
            "purpose": "Represents an intentional absence of a value."
          },
          {
            "function": "object",
            "purpose": "Represents collections of related values and more complex structures."
          }
        ],
        "examples": [
          {
            "title": "Checking JavaScript Data Types",
            "code": "let name = \"Dhruv\";\nlet age = 20;\nlet passed = true;\n\nconsole.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof passed);",
            "output": "string\nnumber\nboolean"
          }
        ]
      },
      {
        "number": "05",
        "title": "Operators and Expressions",
        "content": [
          "Operators are symbols or keywords used to perform operations on values. JavaScript supports arithmetic, assignment, comparison, logical and other operators.",
          "An expression combines values, variables and operators to produce a result. Expressions are used throughout JavaScript programs for calculations and decision making."
        ],
        "table": [
          {
            "function": "+ - * / %",
            "purpose": "Arithmetic operators used for mathematical calculations."
          },
          {
            "function": "= += -=",
            "purpose": "Assignment operators used to assign or update values."
          },
          {
            "function": "== === != !==",
            "purpose": "Comparison operators used to compare values."
          },
          {
            "function": "> < >= <=",
            "purpose": "Comparison operators used to compare numerical or ordered values."
          },
          {
            "function": "&& || !",
            "purpose": "Logical operators used to combine or reverse conditions."
          }
        ],
        "examples": [
          {
            "title": "Arithmetic Operations",
            "code": "let a = 20;\nlet b = 6;\n\nconsole.log(a + b);\nconsole.log(a - b);\nconsole.log(a * b);\nconsole.log(a / b);\nconsole.log(a % b);",
            "output": "26\n14\n120\n3.3333333333333335\n2"
          }
        ]
      },
      {
        "number": "06",
        "title": "Displaying JavaScript Output",
        "content": [
          "JavaScript provides several ways to display or inspect results. console.log() writes information to the browser developer console, while alert() displays a browser alert dialog.",
          "The document object can also be used to modify or create page content. In modern web development, changing DOM elements is generally preferred over repeatedly using document.write()."
        ],
        "syntax": [
          "console.log(value);",
          "alert(value);",
          "element.textContent = value;"
        ],
        "examples": [
          {
            "title": "Console Output",
            "code": "let message = \"Hello from JavaScript\";\nconsole.log(message);",
            "output": "Hello from JavaScript"
          }
        ]
      },
      {
        "number": "07",
        "title": "Decision Making with if and else",
        "content": [
          "Decision-making statements allow a program to execute different code depending on whether a condition is true or false.",
          "The if statement executes a block when its condition is true. The else block can provide an alternative when the condition is false. Additional conditions can be handled using else if."
        ],
        "syntax": [
          "if (condition) {",
          "    // statements",
          "} else {"
        ],
        "examples": [
          {
            "title": "Checking Pass or Fail",
            "code": "let marks = 72;\n\nif (marks >= 40) {\n    console.log(\"Pass\");\n} else {\n    console.log(\"Fail\");\n}",
            "output": "Pass"
          }
        ]
      },
      {
        "number": "17",
        "title": "Practical Program: Student Marks Calculator",
        "content": [
          "A small marks calculator demonstrates several JavaScript concepts together: reading input values, converting strings to numbers, performing calculations, using conditions and updating the DOM.",
          "The example performs the calculation entirely in the browser."
        ],
        "syntax": [
          "Input → Convert → Calculate → Check Condition → Display Result"
        ],
        "examples": [
          {
            "title": "Student Marks Calculator",
            "code": "<input type=\"number\" id=\"marks\" placeholder=\"Enter marks out of 100\">\n<button id=\"btn\">Check Result</button>\n<p id=\"result\"></p>\n\n<script>\n    document.getElementById(\"btn\").addEventListener(\"click\", function() {\n        const marks = Number(document.getElementById(\"marks\").value);\n\n        if (marks >= 40) {\n            document.getElementById(\"result\").textContent = \"Result: Pass\";\n        } else {\n            document.getElementById(\"result\").textContent = \"Result: Fail\";\n        }\n    });\n</script>",
            "output": "For input 72: Result: Pass\nFor input 32: Result: Fail"
          }
        ]
      }
    ]
  },
  "frontend-vs-server-side": {
    "unit": "01",
    "unit_title": "Internet Technologies",
    "title": "Front-end vs Server-side Scripting",
    "intro": "Web applications commonly divide their work between the front end and the server side. Front-end technologies such as HTML, CSS and JavaScript are mainly concerned with the content, appearance and interaction experienced by the user in the browser. Server-side technologies such as PHP execute on the web server and handle tasks such as processing requests, accessing databases, authentication and generating dynamic responses.",
    "sections": [
      {
        "number": "01",
        "title": "What is Front-end Development?",
        "content": [
          "Front-end development refers to the part of a web application that runs or is displayed on the client side, usually inside a web browser.",
          "HTML provides the structure of the page, CSS controls its presentation and JavaScript provides interactive behavior and client-side logic."
        ],
        "table": [
          {
            "function": "HTML",
            "purpose": "Defines the structure and content of a web page."
          },
          {
            "function": "CSS",
            "purpose": "Controls the presentation, layout and visual appearance of the page."
          },
          {
            "function": "JavaScript",
            "purpose": "Adds client-side logic, interaction and dynamic behavior."
          }
        ],
        "examples": [
          {
            "title": "Simple Front-end Example",
            "code": "<h1 id=\"title\">Frontend Example</h1>\n<button id=\"btn\">Change Text</button>\n\n<script>\n    document.getElementById(\"btn\").addEventListener(\"click\", function() {\n        document.getElementById(\"title\").textContent = \"Text changed by JavaScript\";\n    });\n</script>",
            "output": "Before clicking: Frontend Example\nAfter clicking: Text changed by JavaScript"
          }
        ]
      },
      {
        "number": "02",
        "title": "What is Server-side Scripting?",
        "content": [
          "Server-side scripting refers to code that executes on the web server before a response is sent to the client.",
          "PHP is a commonly used server-side scripting language. A PHP program can receive a request, execute logic, access a database, read files, process submitted information and generate an HTML response."
        ],
        "syntax": [
          "Browser → Request → Web Server → Server-side Script → Response → Browser"
        ],
        "examples": [
          {
            "title": "Simple PHP Server-side Program",
            "code": "$name = \"Dhruv\";\necho \"<h1>Welcome, \" . $name . \"</h1>\";",
            "output": "Welcome, Dhruv"
          }
        ]
      },
      {
        "number": "03",
        "title": "Execution Environment",
        "content": [
          "The main difference between the two approaches is where the code executes. Front-end JavaScript normally executes in the user’s browser after the page has been delivered, while PHP normally executes on the web server before the resulting response reaches the browser.",
          "The browser therefore needs a JavaScript engine to execute JavaScript. The server requires an appropriate server environment and PHP interpreter to execute PHP code."
        ],
        "table": [
          {
            "function": "Front-end",
            "purpose": "Runs mainly in the client browser."
          },
          {
            "function": "Server-side",
            "purpose": "Runs on the web server before the response is delivered."
          }
        ],
        "examples": [
          {
            "title": "Showing Client-side Execution",
            "code": "<p id=\"message\">Original text</p>\n\n<script>\n    document.getElementById(\"message\").textContent = \"JavaScript changed this in the browser.\";\n</script>",
            "output": "JavaScript changed this in the browser."
          }
        ]
      },
      {
        "number": "04",
        "title": "Front-end vs Server-side Scripting",
        "content": [
          "Front-end scripting and server-side scripting solve different problems. Front-end code is useful for immediate interaction with the user, while server-side code is used when processing must happen on the server or when protected resources such as databases are required.",
          "A complete web application commonly uses both approaches together instead of choosing only one of them."
        ],
        "table": [
          {
            "function": "Execution",
            "purpose": "Front-end code normally executes in the browser, while server-side code executes on the server."
          },
          {
            "function": "Visibility",
            "purpose": "Front-end source can generally be inspected by the user, while server-side source code is not normally sent to the browser."
          },
          {
            "function": "Database Access",
            "purpose": "Server-side code is commonly used to access databases securely."
          },
          {
            "function": "User Interaction",
            "purpose": "Front-end JavaScript is well suited for immediate interaction with page elements."
          },
          {
            "function": "Security",
            "purpose": "Sensitive validation and trusted business rules should be enforced on the server."
          },
          {
            "function": "Typical Technologies",
            "purpose": "HTML, CSS and JavaScript are common front-end technologies; PHP is a common server-side technology."
          }
        ],
        "examples": [
          {
            "title": "Displaying the Difference",
            "code": "<p id=\"frontend\">Waiting for JavaScript...</p>\n\n<script>\n    document.getElementById(\"frontend\").textContent = \"This part was changed on the client side.\";\n</script>\n\n<?php\necho \"<p>This part was generated on the server.</p>\";\n?>",
            "output": "This part was changed on the client side.\nThis part was generated on the server."
          }
        ]
      },
      {
        "number": "05",
        "title": "Role of HTML, CSS and JavaScript",
        "content": [
          "Front-end development normally combines HTML, CSS and JavaScript. Each technology has a different primary responsibility.",
          "HTML provides the structure of the document, CSS controls visual presentation and JavaScript adds behavior and interaction."
        ],
        "table": [
          {
            "function": "HTML",
            "purpose": "Structure and content."
          },
          {
            "function": "CSS",
            "purpose": "Presentation and visual design."
          },
          {
            "function": "JavaScript",
            "purpose": "Behavior and interaction."
          }
        ],
        "examples": [
          {
            "title": "HTML + CSS + JavaScript",
            "code": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        #message {\n            color: blue;\n        }\n    </style>\n</head>\n<body>\n    <p id=\"message\">Original Message</p>\n    <button id=\"btn\">Change Message</button>\n\n    <script>\n        document.getElementById(\"btn\").addEventListener(\"click\", function() {\n            document.getElementById(\"message\").textContent = \"JavaScript changed the content.\";\n        });\n    </script>\n</body>\n</html>",
            "output": "A blue paragraph initially displays \"Original Message\".\nAfter the button is clicked, the text changes to \"JavaScript changed the content.\""
          }
        ]
      },
      {
        "number": "06",
        "title": "Dynamic HTML Generated by PHP",
        "content": [
          "One of the most common uses of server-side scripting is dynamically generating HTML. Instead of writing the same text directly into the HTML file, PHP can calculate or retrieve a value and insert it into the generated page.",
          "This is the basic mechanism behind dynamic websites where different users may see different information while using the same page structure."
        ],
        "syntax": [
          "<?php echo $value; ?>"
        ],
        "examples": [
          {
            "title": "Generating Dynamic Student Information",
            "code": "<?php\n$student = \"Dhruv\";\n$course = \"BCA\";\n?>\n<h2>Student Profile</h2>\n<p>Name: <?php echo $student; ?></p>\n<p>Course: <?php echo $course; ?></p>",
            "output": "Student Profile\nName: Dhruv\nCourse: BCA"
          }
        ]
      },
      {
        "number": "07",
        "title": "Client-side Interaction",
        "content": [
          "Front-end JavaScript is especially useful when an operation can be performed directly in the browser without requiring a server request.",
          "Examples include showing and hiding sections, changing text, calculating values, responding to button clicks and providing immediate feedback during data entry."
        ],
        "examples": [
          {
            "title": "Client-side Calculation",
            "code": "<input type=\"number\" id=\"a\" value=\"10\">\n<input type=\"number\" id=\"b\" value=\"20\">\n<button id=\"calculate\">Calculate</button>\n<p id=\"result\"></p>\n\n<script>\n    document.getElementById(\"calculate\").addEventListener(\"click\", function() {\n        const a = Number(document.getElementById(\"a\").value);\n        const b = Number(document.getElementById(\"b\").value);\n        document.getElementById(\"result\").textContent = \"Total: \" + (a + b);\n    });\n</script>",
            "output": "For inputs 10 and 20: Total: 30"
          }
        ]
      },
      {
        "number": "13",
        "title": "Practical Program: Front-end and Server-side Together",
        "content": [
          "A real web application commonly combines both approaches. The server can generate the initial HTML and JavaScript can later modify the page in the browser.",
          "The following example shows PHP generating a student name and JavaScript using that generated value to provide client-side interaction."
        ],
        "syntax": [
          "PHP generates initial data → HTML displays it → JavaScript interacts with it"
        ],
        "examples": [
          {
            "title": "PHP + HTML + JavaScript",
            "code": "<?php\n$student = \"Dhruv\";\n?>\n\n<h2 id=\"student\">Student: <?php echo $student; ?></h2>\n<button id=\"btn\">Change Message</button>\n\n<script>\n    document.getElementById(\"btn\").addEventListener(\"click\", function() {\n        document.getElementById(\"student\").textContent = \"Student interaction handled by JavaScript.\";\n    });\n</script>",
            "output": "Initial output: Student: Dhruv\nAfter clicking the button: Student interaction handled by JavaScript."
          }
        ]
      }
    ]
  },
  "introduction-to-php": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Introduction to PHP",
    "intro": "PHP is a server-side scripting language widely used for developing dynamic web applications. PHP code is executed on the server, and the generated result is sent to the client browser as part of an HTTP response. PHP can be embedded into HTML and can perform tasks such as calculations, form processing, file handling, database communication and dynamic page generation.",
    "sections": [
      {
        "number": "01",
        "title": "What is PHP?",
        "content": [
          "PHP originally stood for Personal Home Page and is now commonly expanded as PHP: Hypertext Preprocessor. It is an open-source scripting language designed primarily for web development.",
          "PHP is executed on the server. The server processes the PHP statements and sends the generated result to the browser. This means the user normally receives the output of the PHP program rather than the original PHP source code."
        ],
        "table": [
          {
            "function": "PHP",
            "purpose": "Server-side scripting language used mainly for dynamic web development."
          },
          {
            "function": "Open Source",
            "purpose": "PHP can be used and distributed under its open-source licensing model."
          },
          {
            "function": "Embedded in HTML",
            "purpose": "PHP code can be placed inside an HTML document to generate dynamic content."
          },
          {
            "function": "Database Support",
            "purpose": "PHP can communicate with databases such as MySQL."
          }
        ],
        "examples": [
          {
            "title": "First PHP Program",
            "code": "<?php\necho \"Hello, PHP!\";\n?>",
            "output": "Hello, PHP!"
          }
        ]
      },
      {
        "number": "02",
        "title": "How PHP Works",
        "content": [
          "When a browser requests a PHP page, the web server receives the request and passes the PHP file to the PHP interpreter. The interpreter executes the PHP code and generates an output.",
          "The web server then sends the generated response back to the browser. The browser renders the returned HTML and displays the result to the user."
        ],
        "syntax": [
          "Browser → HTTP Request → Apache → PHP → Generated Response → Browser"
        ],
        "examples": [
          {
            "title": "Simple Server-side Output",
            "code": "<?php\n$message = \"This page was generated by PHP.\";\necho \"<h2>\" . $message . \"</h2>\";\n?>",
            "output": "This page was generated by PHP."
          }
        ]
      },
      {
        "number": "03",
        "title": "PHP Syntax",
        "content": [
          "PHP statements are commonly written between the PHP opening and closing tags. The opening tag is <?php and tells the server that PHP code begins at that point.",
          "Most PHP statements end with a semicolon. PHP is generally not sensitive to extra spaces and line breaks, which allows code to be formatted for readability."
        ],
        "syntax": [
          "<?php",
          "    statement;",
          "?>"
        ],
        "examples": [
          {
            "title": "Basic PHP Syntax",
            "code": "<?php\necho \"PHP statement executed successfully.\";\n?>",
            "output": "PHP statement executed successfully."
          }
        ]
      },
      {
        "number": "04",
        "title": "PHP Tags",
        "content": [
          "The standard PHP opening tag is <?php. PHP code can also be mixed with HTML, allowing a single file to contain both server-side logic and page structure.",
          "The closing ?> tag can be used when switching back to HTML. In files containing only PHP code, developers often omit the closing tag to reduce the possibility of accidental whitespace being added after the PHP code."
        ],
        "syntax": [
          "<?php",
          "// PHP code",
          "?>"
        ],
        "examples": [
          {
            "title": "PHP Embedded in HTML",
            "code": "<h1>Student Information</h1>\n<?php\necho \"<p>Course: BCA</p>\";\n?>",
            "output": "Student Information\nCourse: BCA"
          }
        ]
      },
      {
        "number": "05",
        "title": "Displaying Output with echo",
        "content": [
          "The echo construct is one of the most commonly used ways to send output from PHP to the response. It can display text, variables and the result of expressions.",
          "The generated output becomes part of the response sent to the browser. echo does not return a value in the way an ordinary function does; its purpose is to output data."
        ],
        "syntax": [
          "echo value;",
          "echo \"Text\";"
        ],
        "examples": [
          {
            "title": "Displaying Text",
            "code": "<?php\necho \"Welcome to PHP programming.\";\n?>",
            "output": "Welcome to PHP programming."
          }
        ]
      },
      {
        "number": "06",
        "title": "Comments in PHP",
        "content": [
          "Comments are notes written inside source code for programmers. PHP ignores comments during execution.",
          "Single-line comments can be written using // or #, while multi-line comments use /* and */. Comments are useful for explaining logic, documenting code and temporarily disabling code during development."
        ],
        "syntax": [
          "// Single-line comment",
          "# Another single-line comment",
          "/*"
        ],
        "examples": [
          {
            "title": "Single-line Comment",
            "code": "<?php\n// Display the welcome message\necho \"Welcome to PHP\";\n?>",
            "output": "Welcome to PHP"
          }
        ]
      },
      {
        "number": "07",
        "title": "PHP and HTML Together",
        "content": [
          "PHP is commonly embedded into HTML pages to generate content dynamically. HTML provides the structure while PHP provides values or logic that may change during execution.",
          "This approach is useful when a page needs to display information generated from variables, calculations, form data or database records."
        ],
        "syntax": [
          "<p><?php echo $value; ?></p>"
        ],
        "examples": [
          {
            "title": "Dynamic HTML Content",
            "code": "<?php\n$course = \"Backend Web Development\";\n?>\n<h2>Course Information</h2>\n<p>Course: <?php echo $course; ?></p>",
            "output": "Course Information\nCourse: Backend Web Development"
          }
        ]
      },
      {
        "number": "09",
        "title": "Practical Program: Student Welcome Page",
        "content": [
          "This example combines PHP variables, HTML and output generation to create a small dynamic page. The same HTML structure can display different information simply by changing the PHP values.",
          "This is a basic example of how server-side scripting is used to generate dynamic web content."
        ],
        "syntax": [
          "PHP Data → HTML Template → Generated Page"
        ],
        "examples": [
          {
            "title": "Dynamic Student Welcome Page",
            "code": "<?php\n$name = \"Dhruv\";\n$course = \"BCA\";\n$semester = 3;\n?>\n\n<h1>Student Profile</h1>\n<p>Name: <?php echo $name; ?></p>\n<p>Course: <?php echo $course; ?></p>\n<p>Semester: <?php echo $semester; ?></p>",
            "output": "Student Profile\nName: Dhruv\nCourse: BCA\nSemester: 3"
          }
        ]
      }
    ]
  },
  "variables-constants": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Variables & Constants",
    "intro": "Variables are named storage locations used to hold values during program execution, while constants represent values that are intended to remain unchanged after definition. PHP variables begin with a dollar sign and can store different types of data. Constants can be created using define() or the const keyword.",
    "sections": [
      {
        "number": "01",
        "title": "What is a Variable?",
        "content": [
          "A variable is a named location used to store a value that a program can access and modify during execution.",
          "In PHP, variable names begin with the dollar sign ($), followed by the variable name. PHP variables do not require a separate declaration of the data type before assigning a value."
        ],
        "syntax": [
          "$variable = value;"
        ],
        "examples": [
          {
            "title": "Creating a Variable",
            "code": "<?php\n$name = \"Dhruv\";\necho $name;\n?>",
            "output": "Dhruv"
          }
        ]
      },
      {
        "number": "02",
        "title": "Variable Naming Rules",
        "content": [
          "A PHP variable name must begin with a dollar sign followed by a valid identifier. After the dollar sign, the first character must be a letter or underscore. Numbers may be used after the first character.",
          "Variable names are case-sensitive, so $name, $Name and $NAME are treated as different variables."
        ],
        "table": [
          {
            "function": "$name",
            "purpose": "Valid variable name using letters."
          },
          {
            "function": "$_name",
            "purpose": "Valid variable name beginning with an underscore."
          },
          {
            "function": "$student1",
            "purpose": "Valid variable containing a number after the first character."
          },
          {
            "function": "$1student",
            "purpose": "Invalid because the first character after $ cannot be a number."
          }
        ],
        "examples": [
          {
            "title": "Valid Variable Names",
            "code": "<?php\n$name = \"Dhruv\";\n$_course = \"BCA\";\n$student1 = \"Rahul\";\n\necho $name . \"<br>\";\necho $_course . \"<br>\";\necho $student1;\n?>",
            "output": "Dhruv\nBCA\nRahul"
          }
        ]
      },
      {
        "number": "03",
        "title": "Assigning Values to Variables",
        "content": [
          "The assignment operator (=) is used to place a value into a variable. The value on the right side is evaluated and stored in the variable on the left side.",
          "A variable can be assigned a string, integer, floating-point number, boolean value, array or another supported PHP value."
        ],
        "syntax": [
          "$name = \"Dhruv\";",
          "$age = 20;",
          "$percentage = 84.5;"
        ],
        "examples": [
          {
            "title": "Assigning Different Values",
            "code": "<?php\n$name = \"Dhruv\";\n$age = 20;\n$percentage = 84.5;\n$passed = true;\n\necho $name . \"<br>\";\necho $age . \"<br>\";\necho $percentage . \"<br>\";\necho $passed ? \"Pass\" : \"Fail\";\n?>",
            "output": "Dhruv\n20\n84.5\nPass"
          }
        ]
      },
      {
        "number": "04",
        "title": "Changing Variable Values",
        "content": [
          "A variable can be assigned a new value after it has already been created. The previous value is replaced by the new value.",
          "This is useful when a program needs to update information during execution."
        ],
        "syntax": [
          "$variable = newValue;"
        ],
        "examples": [
          {
            "title": "Reassigning a Variable",
            "code": "<?php\n$marks = 60;\necho \"Initial Marks: \" . $marks . \"<br>\";\n\n$marks = 75;\necho \"Updated Marks: \" . $marks;\n?>",
            "output": "Initial Marks: 60\nUpdated Marks: 75"
          }
        ]
      },
      {
        "number": "05",
        "title": "Variable Variables",
        "content": [
          "PHP supports variable variables, where the value stored in one variable is used as the name of another variable.",
          "This feature is useful in some dynamic situations but is less common in beginner-level programs because it can make code harder to understand. It should be used only when the dynamic behavior is genuinely useful."
        ],
        "syntax": [
          "$a = \"name\";",
          "$name = \"Dhruv\";",
          "echo $$a;"
        ],
        "examples": [
          {
            "title": "Using a Variable Variable",
            "code": "<?php\n$field = \"name\";\n$name = \"Dhruv\";\n\necho $$field;\n?>",
            "output": "Dhruv"
          }
        ]
      },
      {
        "number": "06",
        "title": "Constants in PHP",
        "content": [
          "A constant is a named value that is intended to remain unchanged during program execution. Constants are useful for values such as application names, fixed configuration values and mathematical constants.",
          "Unlike ordinary variables, constants are not written with a dollar sign when they are accessed."
        ],
        "syntax": [
          "define(\"NAME\", value);",
          "const NAME = value;"
        ],
        "examples": [
          {
            "title": "Creating a Constant with define()",
            "code": "<?php\ndefine(\"COLLEGE\", \"PGGC\");\necho COLLEGE;\n?>",
            "output": "PGGC"
          }
        ]
      },
      {
        "number": "07",
        "title": "Variables vs Constants",
        "content": [
          "Variables are designed to hold values that may change during execution, while constants represent values that should remain fixed after definition.",
          "Variables use the dollar sign when declared and accessed. Constants do not use the dollar sign."
        ],
        "table": [
          {
            "function": "Variable",
            "purpose": "Stores a value that can normally be changed during execution."
          },
          {
            "function": "Constant",
            "purpose": "Stores a named value intended to remain unchanged."
          },
          {
            "function": "$NAME",
            "purpose": "Typical syntax for a variable."
          },
          {
            "function": "NAME",
            "purpose": "Typical syntax for accessing a constant."
          }
        ],
        "examples": [
          {
            "title": "Variable and Constant Together",
            "code": "<?php\nconst COURSE = \"BCA\";\n$student = \"Dhruv\";\n\necho \"Course: \" . COURSE . \"<br>\";\necho \"Student: \" . $student;\n?>",
            "output": "Course: BCA\nStudent: Dhruv"
          }
        ]
      },
      {
        "number": "09",
        "title": "Practical Program: Student Information",
        "content": [
          "Variables and constants can be combined to create a small student information program. Values such as the student name can change, while a fixed course or college name may be represented as constants."
        ],
        "examples": [
          {
            "title": "Student Information Program",
            "code": "<?php\nconst COLLEGE = \"PGGC\";\nconst COURSE = \"BCA\";\n\n$name = \"Dhruv\";\n$semester = 3;\n\necho \"College: \" . COLLEGE . \"<br>\";\necho \"Course: \" . COURSE . \"<br>\";\necho \"Name: \" . $name . \"<br>\";\necho \"Semester: \" . $semester;\n?>",
            "output": "College: PGGC\nCourse: BCA\nName: Dhruv\nSemester: 3"
          }
        ]
      }
    ]
  },
  "data-types": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Data Types",
    "intro": "A data type defines the kind of value stored or processed by a program. PHP supports several built-in data types including strings, integers, floating-point numbers, booleans, arrays, objects and null. PHP is dynamically typed, so a variable does not need to be permanently associated with one data type.",
    "sections": [
      {
        "number": "01",
        "title": "What are Data Types?",
        "content": [
          "A data type describes the kind of data represented by a value. Different values require different operations, and the data type helps PHP determine how a value should be handled.",
          "PHP supports scalar data types such as string, integer, float and boolean, as well as compound and special types such as array, object, null and resource."
        ],
        "table": [
          {
            "function": "String",
            "purpose": "Stores text."
          },
          {
            "function": "Integer",
            "purpose": "Stores whole numbers."
          },
          {
            "function": "Float",
            "purpose": "Stores numbers containing decimal values."
          },
          {
            "function": "Boolean",
            "purpose": "Stores true or false."
          },
          {
            "function": "Array",
            "purpose": "Stores multiple values in one variable."
          },
          {
            "function": "Object",
            "purpose": "Stores data and behavior using classes and objects."
          },
          {
            "function": "NULL",
            "purpose": "Represents the absence of a value."
          },
          {
            "function": "Resource",
            "purpose": "Represents an external resource handled by PHP extensions or functions."
          }
        ],
        "examples": [
          {
            "title": "Displaying Different Types",
            "code": "<?php\n$name = \"Dhruv\";\n$age = 20;\n$percentage = 84.5;\n$passed = true;\n\necho gettype($name) . \"<br>\";\necho gettype($age) . \"<br>\";\necho gettype($percentage) . \"<br>\";\necho gettype($passed);\n?>",
            "output": "string\ninteger\ndouble\nboolean"
          }
        ]
      },
      {
        "number": "02",
        "title": "String",
        "content": [
          "A string is a sequence of characters used to represent textual information. Strings can be written using single quotation marks or double quotation marks.",
          "Strings are commonly used for names, messages, addresses, labels and other textual data."
        ],
        "syntax": [
          "$name = \"Dhruv\";",
          "$message = 'Welcome to PHP';"
        ],
        "examples": [
          {
            "title": "String Value",
            "code": "<?php\n$name = \"Dhruv\";\necho $name;\n?>",
            "output": "Dhruv"
          }
        ]
      },
      {
        "number": "03",
        "title": "Integer",
        "content": [
          "An integer is a whole number without a decimal portion. Integers can be positive, negative or zero.",
          "Integers are commonly used for values such as age, quantity, marks, counts and IDs."
        ],
        "syntax": [
          "$age = 20;",
          "$count = -5;",
          "$zero = 0;"
        ],
        "examples": [
          {
            "title": "Integer Calculation",
            "code": "<?php\n$marks1 = 75;\n$marks2 = 82;\n$total = $marks1 + $marks2;\n\necho \"Total: \" . $total;\n?>",
            "output": "Total: 157"
          }
        ]
      },
      {
        "number": "04",
        "title": "Float",
        "content": [
          "A float represents a number containing a decimal or fractional part. PHP internally commonly reports the type as double when using gettype().",
          "Floats are useful for percentages, measurements, prices and calculations that require decimal values."
        ],
        "syntax": [
          "$percentage = 84.5;",
          "$price = 149.99;"
        ],
        "examples": [
          {
            "title": "Float Calculation",
            "code": "<?php\n$price = 150.50;\n$quantity = 2;\n$total = $price * $quantity;\n\necho \"Total: \" . $total;\n?>",
            "output": "Total: 301"
          }
        ]
      },
      {
        "number": "05",
        "title": "Boolean",
        "content": [
          "A boolean can contain one of two values: true or false. Booleans are commonly used in conditions and logical expressions.",
          "They are useful when a program needs to represent states such as active/inactive, pass/fail, available/unavailable or valid/invalid."
        ],
        "syntax": [
          "$passed = true;",
          "$loggedIn = false;"
        ],
        "examples": [
          {
            "title": "Boolean in a Condition",
            "code": "<?php\n$passed = true;\n\nif ($passed) {\n    echo \"Student has passed.\";\n} else {\n    echo \"Student has failed.\";\n}\n?>",
            "output": "Student has passed."
          }
        ]
      },
      {
        "number": "06",
        "title": "Array",
        "content": [
          "An array is a data type that can store multiple values in a single variable. PHP arrays can use numeric indexes, string keys or a combination depending on the structure required.",
          "Arrays are frequently used for lists of students, courses, database rows, configuration values and other groups of related information."
        ],
        "syntax": [
          "$subjects = [\"PHP\", \"MySQL\", \"JavaScript\"];",
          "$student = [\"name\" => \"Dhruv\", \"age\" => 20];"
        ],
        "examples": [
          {
            "title": "Indexed Array",
            "code": "<?php\n$subjects = [\"PHP\", \"MySQL\", \"JavaScript\"];\n\necho $subjects[0] . \"<br>\";\necho $subjects[2];\n?>",
            "output": "PHP\nJavaScript"
          }
        ]
      },
      {
        "number": "07",
        "title": "Null",
        "content": [
          "NULL represents the absence of a value. A variable has a null value when it has been explicitly assigned null or when certain situations cause it to have no value.",
          "NULL is different from an empty string, zero or false. These values represent different states and should not automatically be treated as identical."
        ],
        "syntax": [
          "$value = null;"
        ],
        "examples": [
          {
            "title": "Using NULL",
            "code": "<?php\n$result = null;\n\nif (is_null($result)) {\n    echo \"No value is currently available.\";\n} else {\n    echo \"A value is available.\";\n}\n?>",
            "output": "No value is currently available."
          }
        ]
      },
      {
        "number": "15",
        "title": "Practical Program: Student Record",
        "content": [
          "Different pieces of student information naturally use different data types. A name is a string, age is an integer, percentage is a float, passed is a boolean and subjects can be stored in an array.",
          "The following example combines several PHP data types in one practical program."
        ],
        "syntax": [
          "Student Record = String + Integer + Float + Boolean + Array"
        ],
        "examples": [
          {
            "title": "Student Record Using Multiple Data Types",
            "code": "<?php\n$name = \"Dhruv\";\n$age = 20;\n$percentage = 84.5;\n$passed = true;\n$subjects = [\"PHP\", \"MySQL\", \"JavaScript\"];\n\necho \"Name: \" . $name . \"<br>\";\necho \"Age: \" . $age . \"<br>\";\necho \"Percentage: \" . $percentage . \"%<br>\";\necho \"Status: \" . ($passed ? \"Pass\" : \"Fail\") . \"<br>\";\necho \"Subjects: \" . implode(\", \", $subjects);\n?>",
            "output": "Name: Dhruv\nAge: 20\nPercentage: 84.5%\nStatus: Pass\nSubjects: PHP, MySQL, JavaScript"
          }
        ]
      }
    ]
  },
  "operators-expressions": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Operators & Expressions",
    "intro": "Operators are symbols or keywords used to perform operations on values and variables. PHP provides arithmetic, assignment, comparison, logical, increment and decrement operators along with other operators used in expressions. Expressions combine values and operators to produce a result.",
    "sections": [
      {
        "number": "01",
        "title": "What are Operators?",
        "content": [
          "An operator is a symbol or keyword that tells PHP to perform an operation on one or more values. The values used with an operator are called operands.",
          "For example, in the expression $a + $b, the plus sign is the operator while $a and $b are operands."
        ],
        "syntax": [
          "$result = $a + $b;"
        ],
        "examples": [
          {
            "title": "Simple Arithmetic Expression",
            "code": "<?php\n$a = 10;\n$b = 20;\n$result = $a + $b;\n\necho $result;\n?>",
            "output": "30"
          }
        ]
      },
      {
        "number": "02",
        "title": "Arithmetic Operators",
        "content": [
          "Arithmetic operators are used to perform mathematical calculations. PHP supports addition, subtraction, multiplication, division, modulus and exponentiation.",
          "The modulus operator returns the remainder after division, while the exponentiation operator raises one value to the power of another."
        ],
        "table": [
          {
            "function": "+",
            "purpose": "Addition of two values."
          },
          {
            "function": "-",
            "purpose": "Subtraction of one value from another."
          },
          {
            "function": "*",
            "purpose": "Multiplication of two values."
          },
          {
            "function": "/",
            "purpose": "Division of one value by another."
          },
          {
            "function": "%",
            "purpose": "Returns the remainder of integer division."
          },
          {
            "function": "**",
            "purpose": "Raises one value to the power of another."
          }
        ],
        "examples": [
          {
            "title": "All Common Arithmetic Operations",
            "code": "<?php\n$a = 20;\n$b = 6;\n\necho \"Addition: \" . ($a + $b) . \"<br>\";\necho \"Subtraction: \" . ($a - $b) . \"<br>\";\necho \"Multiplication: \" . ($a * $b) . \"<br>\";\necho \"Division: \" . ($a / $b) . \"<br>\";\necho \"Remainder: \" . ($a % $b) . \"<br>\";\necho \"Power: \" . ($a ** 2);\n?>",
            "output": "Addition: 26\nSubtraction: 14\nMultiplication: 120\nDivision: 3.3333333333333\nRemainder: 2\nPower: 400"
          }
        ]
      },
      {
        "number": "03",
        "title": "Assignment Operators",
        "content": [
          "Assignment operators are used to assign values to variables. The basic assignment operator is =. PHP also provides compound assignment operators that combine an arithmetic operation with assignment.",
          "Compound assignment operators make it possible to update a variable without repeatedly writing the variable name."
        ],
        "table": [
          {
            "function": "=",
            "purpose": "Assigns a value to a variable."
          },
          {
            "function": "+=",
            "purpose": "Adds a value to the variable and stores the result."
          },
          {
            "function": "-=",
            "purpose": "Subtracts a value from the variable and stores the result."
          },
          {
            "function": "*=",
            "purpose": "Multiplies the variable by a value and stores the result."
          },
          {
            "function": "/=",
            "purpose": "Divides the variable by a value and stores the result."
          },
          {
            "function": "%=",
            "purpose": "Stores the remainder of division in the variable."
          }
        ],
        "examples": [
          {
            "title": "Using Compound Assignment",
            "code": "<?php\n$marks = 50;\n\n$marks += 10;\n$marks -= 5;\n$marks *= 2;\n$marks /= 2;\n\necho \"Final Marks: \" . $marks;\n?>",
            "output": "Final Marks: 55"
          }
        ]
      },
      {
        "number": "04",
        "title": "Comparison Operators",
        "content": [
          "Comparison operators compare two values and produce a boolean result of true or false. They are commonly used in decision-making statements and validation.",
          "PHP provides both loose and strict comparison. The strict comparison operators also check whether the values have the same data type."
        ],
        "table": [
          {
            "function": "==",
            "purpose": "Checks whether two values are equal after type conversion where applicable."
          },
          {
            "function": "===",
            "purpose": "Checks whether two values are equal and have the same type."
          },
          {
            "function": "!=",
            "purpose": "Checks whether two values are not equal."
          },
          {
            "function": "!==",
            "purpose": "Checks whether two values are not identical in value or type."
          },
          {
            "function": ">",
            "purpose": "Checks whether the left value is greater than the right value."
          },
          {
            "function": "<",
            "purpose": "Checks whether the left value is less than the right value."
          },
          {
            "function": ">=",
            "purpose": "Checks whether the left value is greater than or equal to the right value."
          },
          {
            "function": "<=",
            "purpose": "Checks whether the left value is less than or equal to the right value."
          }
        ],
        "examples": [
          {
            "title": "Comparison Operations",
            "code": "<?php\n$age = 20;\n\nvar_dump($age == 20);\nvar_dump($age === 20);\nvar_dump($age >= 18);\nvar_dump($age < 18);\n?>",
            "output": "bool(true)\nbool(true)\nbool(true)\nbool(false)"
          }
        ]
      },
      {
        "number": "05",
        "title": "Logical Operators",
        "content": [
          "Logical operators are used to combine or reverse boolean conditions. They are especially useful when a program needs to check multiple conditions at the same time.",
          "The && operator requires both conditions to be true, || requires at least one condition to be true and ! reverses a boolean result."
        ],
        "table": [
          {
            "function": "&&",
            "purpose": "Returns true when both conditions are true."
          },
          {
            "function": "||",
            "purpose": "Returns true when at least one condition is true."
          },
          {
            "function": "!",
            "purpose": "Reverses a boolean condition."
          }
        ],
        "examples": [
          {
            "title": "Combining Conditions",
            "code": "<?php\n$age = 20;\n$hasId = true;\n\nif ($age >= 18 && $hasId) {\n    echo \"Entry allowed.\";\n} else {\n    echo \"Entry denied.\";\n}\n?>",
            "output": "Entry allowed."
          }
        ]
      },
      {
        "number": "06",
        "title": "Increment and Decrement Operators",
        "content": [
          "The increment operator increases a value by one, while the decrement operator decreases a value by one.",
          "PHP provides both prefix and postfix forms. The difference becomes important when the operation is used inside a larger expression."
        ],
        "table": [
          {
            "function": "++$x",
            "purpose": "Increments the value before the expression uses it."
          },
          {
            "function": "$x++",
            "purpose": "Uses the current value first and increments it afterward."
          },
          {
            "function": "--$x",
            "purpose": "Decrements the value before the expression uses it."
          },
          {
            "function": "$x--",
            "purpose": "Uses the current value first and decrements it afterward."
          }
        ],
        "examples": [
          {
            "title": "Increment and Decrement",
            "code": "<?php\n$count = 5;\n$count++;\necho \"After increment: \" . $count . \"<br>\";\n\n$count--;\necho \"After decrement: \" . $count;\n?>",
            "output": "After increment: 6\nAfter decrement: 5"
          }
        ]
      },
      {
        "number": "07",
        "title": "String Concatenation Operator",
        "content": [
          "PHP uses the dot operator (.) to join strings together. Concatenation is useful when a program needs to combine fixed text with variable values.",
          "The concatenation assignment operator (.=) appends additional text to an existing string."
        ],
        "syntax": [
          "$fullName = $firstName . \" \" . $lastName;",
          "$message .= \" Additional text\";"
        ],
        "examples": [
          {
            "title": "Joining Strings",
            "code": "<?php\n$firstName = \"Dhruv\";\n$lastName = \"Sharma\";\n\n$fullName = $firstName . \" \" . $lastName;\necho $fullName;\n?>",
            "output": "Dhruv Sharma"
          }
        ]
      },
      {
        "number": "11",
        "title": "Practical Program: Student Marks Calculation",
        "content": [
          "This program combines arithmetic, assignment and comparison operators to calculate a student result.",
          "It demonstrates how several operators normally work together rather than being used independently."
        ],
        "examples": [
          {
            "title": "Calculate Total, Percentage and Result",
            "code": "<?php\n$php = 82;\n$mysql = 76;\n$javascript = 88;\n\n$total = $php + $mysql + $javascript;\n$percentage = ($total / 300) * 100;\n\necho \"Total: \" . $total . \"<br>\";\necho \"Percentage: \" . $percentage . \"%<br>\";\necho \"Passed: \" . ($percentage >= 40 ? \"Yes\" : \"No\");\n?>",
            "output": "Total: 246\nPercentage: 82%\nPassed: Yes"
          }
        ]
      }
    ]
  },
  "decision-making": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Decision Making",
    "intro": "Decision-making statements allow a PHP program to choose which instructions should execute based on conditions. PHP provides if, if-else, elseif, nested conditions and switch statements. Conditional expressions are essential for validation, access control, result calculation and other program logic.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to Decision Making",
        "content": [
          "A program often needs to perform different actions depending on the data it receives. Decision-making statements allow PHP to evaluate a condition and select the appropriate block of code.",
          "Conditions generally produce a boolean result. If the condition is true, the associated statements are executed; otherwise a different block may be selected."
        ],
        "syntax": [
          "if (condition) {",
          "    // statements",
          "}"
        ],
        "examples": [
          {
            "title": "Simple if Statement",
            "code": "<?php\n$age = 20;\n\nif ($age >= 18) {\n    echo \"Eligible.\";\n}\n?>",
            "output": "Eligible."
          }
        ]
      },
      {
        "number": "02",
        "title": "if Statement",
        "content": [
          "The if statement executes its code block only when the specified condition evaluates to true.",
          "It is appropriate when an action is required only under a particular condition and no alternative action is needed."
        ],
        "syntax": [
          "if (condition) {",
          "    statement;",
          "}"
        ],
        "examples": [
          {
            "title": "Checking Minimum Age",
            "code": "<?php\n$age = 21;\n\nif ($age >= 18) {\n    echo \"Adult\";\n}\n?>",
            "output": "Adult"
          }
        ]
      },
      {
        "number": "03",
        "title": "if-else Statement",
        "content": [
          "The if-else statement provides two possible execution paths. The if block runs when the condition is true, while the else block runs when the condition is false."
        ],
        "syntax": [
          "if (condition) {",
          "    // true block",
          "} else {"
        ],
        "examples": [
          {
            "title": "Pass or Fail",
            "code": "<?php\n$marks = 35;\n\nif ($marks >= 40) {\n    echo \"Pass\";\n} else {\n    echo \"Fail\";\n}\n?>",
            "output": "Fail"
          }
        ]
      },
      {
        "number": "04",
        "title": "elseif Ladder",
        "content": [
          "An elseif ladder is used when a program needs to test multiple mutually exclusive conditions.",
          "PHP checks the conditions from top to bottom and executes the first matching branch. Once a branch is executed, the remaining branches are skipped."
        ],
        "syntax": [
          "if (condition1) {",
          "    // block 1",
          "} elseif (condition2) {"
        ],
        "examples": [
          {
            "title": "Grade Calculation",
            "code": "<?php\n$marks = 82;\n\nif ($marks >= 80) {\n    echo \"Grade A\";\n} elseif ($marks >= 60) {\n    echo \"Grade B\";\n} elseif ($marks >= 40) {\n    echo \"Grade C\";\n} else {\n    echo \"Fail\";\n}\n?>",
            "output": "Grade A"
          }
        ]
      },
      {
        "number": "05",
        "title": "Nested if Statements",
        "content": [
          "A nested if statement is an if statement placed inside another conditional block. It is useful when one condition must be checked before another related condition.",
          "Nested conditions should be kept reasonably simple. If many levels are required, the program may become difficult to understand and can often be redesigned."
        ],
        "syntax": [
          "if (condition1) {",
          "    if (condition2) {",
          "        // statements"
        ],
        "examples": [
          {
            "title": "Nested Eligibility Check",
            "code": "<?php\n$age = 20;\n$hasId = true;\n\nif ($age >= 18) {\n    if ($hasId) {\n        echo \"Entry allowed.\";\n    } else {\n        echo \"Valid ID required.\";\n    }\n} else {\n    echo \"Minimum age is 18.\";\n}\n?>",
            "output": "Entry allowed."
          }
        ]
      },
      {
        "number": "06",
        "title": "switch Statement",
        "content": [
          "The switch statement is useful when one expression needs to be compared against several fixed possible values.",
          "Each case represents a possible value. The break statement is commonly used to stop execution after a matching case. The default block can handle values that do not match any case."
        ],
        "syntax": [
          "switch ($value) {",
          "    case value1:",
          "        // statements"
        ],
        "examples": [
          {
            "title": "Day Selection",
            "code": "<?php\n$day = 2;\n\nswitch ($day) {\n    case 1:\n        echo \"Monday\";\n        break;\n    case 2:\n        echo \"Tuesday\";\n        break;\n    case 3:\n        echo \"Wednesday\";\n        break;\n    default:\n        echo \"Invalid day\";\n}\n?>",
            "output": "Tuesday"
          }
        ]
      },
      {
        "number": "07",
        "title": "Multiple Conditions with Logical Operators",
        "content": [
          "Decision-making becomes more powerful when comparison and logical operators are used together.",
          "This allows a program to make decisions based on several requirements such as age, marks, attendance, account status or user role."
        ],
        "syntax": [
          "if ($condition1 && $condition2) {",
          "    // statements",
          "}"
        ],
        "examples": [
          {
            "title": "Exam Eligibility",
            "code": "<?php\n$attendance = 78;\n$feesPaid = true;\n\nif ($attendance >= 75 && $feesPaid) {\n    echo \"Eligible for examination.\";\n} else {\n    echo \"Not eligible for examination.\";\n}\n?>",
            "output": "Eligible for examination."
          }
        ]
      },
      {
        "number": "09",
        "title": "Practical Program: Grade Calculator",
        "content": [
          "A grade calculator is a practical example of an elseif ladder. The program evaluates the marks and selects the appropriate grade."
        ],
        "examples": [
          {
            "title": "Complete Grade Calculator",
            "code": "<?php\n$marks = 87;\n\nif ($marks >= 90) {\n    $grade = \"A+\";\n} elseif ($marks >= 80) {\n    $grade = \"A\";\n} elseif ($marks >= 70) {\n    $grade = \"B\";\n} elseif ($marks >= 60) {\n    $grade = \"C\";\n} elseif ($marks >= 40) {\n    $grade = \"D\";\n} else {\n    $grade = \"F\";\n}\n\necho \"Marks: \" . $marks . \"<br>\";\necho \"Grade: \" . $grade;\n?>",
            "output": "Marks: 87\nGrade: A"
          }
        ]
      }
    ]
  },
  "loops-html": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Loops & HTML",
    "intro": "Loops allow PHP to execute a block of statements repeatedly. They are especially useful when processing lists, generating repeated HTML elements and working with arrays. PHP can combine loops with HTML markup to generate dynamic tables, lists, cards and other repeated page content.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to Loops",
        "content": [
          "A loop repeats a block of code while a specified condition or iteration rule is satisfied.",
          "Loops reduce repetition in programs. Instead of writing the same statement many times, a programmer can write the statement once and allow the loop to execute it repeatedly."
        ],
        "table": [
          {
            "function": "for",
            "purpose": "Useful when the number of iterations can be controlled using a counter."
          },
          {
            "function": "while",
            "purpose": "Repeats while a condition remains true."
          },
          {
            "function": "do-while",
            "purpose": "Executes the loop body at least once before checking the condition."
          },
          {
            "function": "foreach",
            "purpose": "Designed for iterating through arrays and iterable values."
          }
        ],
        "examples": [
          {
            "title": "Simple Loop",
            "code": "<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo $i . \"<br>\";\n}\n?>",
            "output": "1\n2\n3\n4\n5"
          }
        ]
      },
      {
        "number": "02",
        "title": "for Loop",
        "content": [
          "The for loop is commonly used when the number of iterations can be described using initialization, a condition and an update expression.",
          "The initialization executes once, the condition is checked before each iteration and the update expression runs after each iteration."
        ],
        "syntax": [
          "for (initialization; condition; update) {",
          "    statements;",
          "}"
        ],
        "examples": [
          {
            "title": "Counting from 1 to 10",
            "code": "<?php\nfor ($i = 1; $i <= 10; $i++) {\n    echo $i . \" \";\n}\n?>",
            "output": "1 2 3 4 5 6 7 8 9 10"
          }
        ]
      },
      {
        "number": "03",
        "title": "while Loop",
        "content": [
          "The while loop repeatedly executes its body while its condition remains true. The condition is checked before each iteration.",
          "A while loop is useful when the number of repetitions depends primarily on a condition rather than a simple counter."
        ],
        "syntax": [
          "while (condition) {",
          "    statements;",
          "}"
        ],
        "examples": [
          {
            "title": "Counting with while",
            "code": "<?php\n$i = 1;\n\nwhile ($i <= 5) {\n    echo $i . \"<br>\";\n    $i++;\n}\n?>",
            "output": "1\n2\n3\n4\n5"
          }
        ]
      },
      {
        "number": "04",
        "title": "do-while Loop",
        "content": [
          "The do-while loop executes its body first and checks the condition afterward. Therefore, the loop body always executes at least once.",
          "This behavior makes do-while useful when one execution must occur before the program knows whether additional repetition is required."
        ],
        "syntax": [
          "do {",
          "    statements;",
          "} while (condition);"
        ],
        "examples": [
          {
            "title": "do-while Example",
            "code": "<?php\n$i = 1;\n\ndo {\n    echo \"Value: \" . $i;\n    $i++;\n} while ($i <= 3);\n?>",
            "output": "Value: 1"
          }
        ]
      },
      {
        "number": "05",
        "title": "foreach Loop",
        "content": [
          "The foreach loop is designed to iterate through the elements of an array or another iterable value.",
          "It can provide only the value or both the key and value. foreach is especially useful when PHP needs to generate HTML from an array or database result."
        ],
        "syntax": [
          "foreach ($array as $value) {",
          "    statements;",
          "}"
        ],
        "examples": [
          {
            "title": "Iterating through an Indexed Array",
            "code": "<?php\n$subjects = [\"PHP\", \"MySQL\", \"JavaScript\"];\n\nforeach ($subjects as $subject) {\n    echo $subject . \"<br>\";\n}\n?>",
            "output": "PHP\nMySQL\nJavaScript"
          }
        ]
      },
      {
        "number": "06",
        "title": "Nested Loops",
        "content": [
          "A nested loop is a loop placed inside another loop. The inner loop executes completely for each iteration of the outer loop.",
          "Nested loops are useful for working with two-dimensional data and generating structures such as multiplication tables and HTML tables."
        ],
        "syntax": [
          "for (...) {",
          "    for (...) {",
          "        // statements"
        ],
        "examples": [
          {
            "title": "Multiplication Grid",
            "code": "<?php\nfor ($i = 1; $i <= 3; $i++) {\n    for ($j = 1; $j <= 3; $j++) {\n        echo ($i * $j) . \" \";\n    }\n    echo \"<br>\";\n}\n?>",
            "output": "1 2 3\n2 4 6\n3 6 9"
          }
        ]
      },
      {
        "number": "07",
        "title": "break Statement",
        "content": [
          "The break statement terminates the current loop or switch statement immediately.",
          "It is useful when the required condition has been reached and continuing the remaining iterations is unnecessary."
        ],
        "syntax": [
          "if (condition) {",
          "    break;",
          "}"
        ],
        "examples": [
          {
            "title": "Stop a Loop Early",
            "code": "<?php\nfor ($i = 1; $i <= 10; $i++) {\n    if ($i === 6) {\n        break;\n    }\n\n    echo $i . \" \";\n}\n?>",
            "output": "1 2 3 4 5"
          }
        ]
      },
      {
        "number": "12",
        "title": "Practical Program: Dynamic Student List",
        "content": [
          "This example combines an array, foreach, HTML and output escaping to generate a complete student list dynamically."
        ],
        "examples": [
          {
            "title": "Student List",
            "code": "<?php\n$students = [\"Dhruv\", \"Rahul\", \"Aman\", \"Neha\"];\n?>\n\n<h2>Student List</h2>\n<ol>\n<?php foreach ($students as $student): ?>\n    <li><?php echo htmlspecialchars($student); ?></li>\n<?php endforeach; ?>\n</ol>",
            "output": "Student List\n1. Dhruv\n2. Rahul\n3. Aman\n4. Neha"
          }
        ]
      }
    ]
  },
  "string-handling": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "String Handling",
    "intro": "String handling in PHP involves creating, accessing, combining, searching, modifying, comparing and formatting textual data. PHP provides many built-in string functions that simplify common operations such as finding the length of a string, changing its case, removing unwanted spaces, replacing text, extracting a portion of a string and splitting a string into smaller values.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to Strings",
        "content": [
          "A string is a sequence of characters used to represent text. Strings are commonly used for names, messages, addresses, usernames, descriptions and other textual information.",
          "PHP allows strings to be written using single quotation marks or double quotation marks."
        ],
        "syntax": [
          "$name = \"Dhruv\";",
          "$message = 'Welcome to PHP';"
        ],
        "examples": [
          {
            "title": "Creating a String",
            "code": "<?php\n$name = \"Dhruv\";\necho $name;\n?>",
            "output": "Dhruv"
          }
        ]
      },
      {
        "number": "02",
        "title": "Single Quotes and Double Quotes",
        "content": [
          "PHP supports both single-quoted and double-quoted strings. Both can contain ordinary text, but double-quoted strings provide additional interpretation of variables and certain escape sequences.",
          "A variable written inside a double-quoted string can be interpreted and replaced with its value. In a single-quoted string, the variable name is normally treated as ordinary text."
        ],
        "syntax": [
          "$name = \"Dhruv\";",
          "$name = 'Dhruv';"
        ],
        "examples": [
          {
            "title": "Double-Quoted String",
            "code": "<?php\n$name = \"Dhruv\";\necho \"Hello $name\";\n?>",
            "output": "Hello Dhruv"
          }
        ]
      },
      {
        "number": "03",
        "title": "Accessing Individual Characters",
        "content": [
          "Individual characters in a string can be accessed using an index position.",
          "PHP uses zero-based indexing, so the first character is at index 0, the second character is at index 1 and so on."
        ],
        "syntax": [
          "$string[index];"
        ],
        "examples": [
          {
            "title": "Accessing the First Character",
            "code": "<?php\n$name = \"Dhruv\";\necho $name[0];\n?>",
            "output": "K"
          }
        ]
      },
      {
        "number": "04",
        "title": "String Concatenation",
        "content": [
          "Concatenation means joining two or more strings together. PHP uses the dot operator (.) to concatenate strings.",
          "Concatenation is commonly used when a program needs to combine fixed text with values stored in variables."
        ],
        "syntax": [
          "$fullName = $firstName . \" \" . $lastName;",
          "$message .= \" Additional text\";"
        ],
        "examples": [
          {
            "title": "Joining First Name and Last Name",
            "code": "<?php\n$firstName = \"Dhruv\";\n$lastName = \"Sharma\";\n\n$fullName = $firstName . \" \" . $lastName;\necho $fullName;\n?>",
            "output": "Dhruv Sharma"
          }
        ]
      },
      {
        "number": "05",
        "title": "Common String Functions",
        "content": [
          "PHP provides many built-in functions for working with strings. These functions perform common operations without requiring the programmer to manually implement the same logic every time.",
          "The most commonly used functions include functions for finding string length, changing case, removing unwanted spaces, searching for text, replacing text, extracting substrings and splitting or joining strings."
        ],
        "table": [
          {
            "function": "strlen()",
            "purpose": "Returns the number of bytes in a string. For ordinary ASCII text this corresponds to the number of characters."
          },
          {
            "function": "strtoupper()",
            "purpose": "Converts alphabetic characters to uppercase."
          },
          {
            "function": "strtolower()",
            "purpose": "Converts alphabetic characters to lowercase."
          },
          {
            "function": "trim()",
            "purpose": "Removes whitespace from the beginning and end of a string."
          },
          {
            "function": "str_replace()",
            "purpose": "Replaces specified text with another value."
          },
          {
            "function": "substr()",
            "purpose": "Extracts a portion of a string."
          },
          {
            "function": "strpos()",
            "purpose": "Finds the position of the first occurrence of text."
          },
          {
            "function": "str_contains()",
            "purpose": "Checks whether a string contains another string."
          },
          {
            "function": "explode()",
            "purpose": "Splits a string into an array using a delimiter."
          },
          {
            "function": "implode()",
            "purpose": "Joins array elements into a string using a separator."
          }
        ]
      },
      {
        "number": "06",
        "title": "strlen()",
        "content": [
          "The strlen() function returns the length of a string in bytes. For ordinary English or ASCII text, the returned value normally matches the number of visible characters.",
          "It is useful when checking input length, counting characters for simple text validation and displaying the size of a string."
        ],
        "syntax": [
          "strlen(string);"
        ],
        "examples": [
          {
            "title": "Finding String Length",
            "code": "<?php\n$name = \"Dhruv\";\necho \"Name: \" . $name . \"<br>\";\necho \"Length: \" . strlen($name);\n?>",
            "output": "Name: Dhruv\nLength: 6"
          }
        ]
      },
      {
        "number": "07",
        "title": "strtoupper() and strtolower()",
        "content": [
          "The strtoupper() function converts alphabetic characters in a string to uppercase, while strtolower() converts them to lowercase.",
          "These functions are useful when text needs to be displayed in a consistent case or when input needs to be normalized before a comparison."
        ],
        "syntax": [
          "strtoupper(string);",
          "strtolower(string);"
        ],
        "examples": [
          {
            "title": "Changing String Case",
            "code": "<?php\n$name = \"Dhruv Sharma\";\n\necho strtoupper($name) . \"<br>\";\necho strtolower($name);\n?>",
            "output": "Dhruv SHARMA\nDhruv sharma"
          }
        ]
      },
      {
        "number": "08",
        "title": "trim(), ltrim() and rtrim()",
        "content": [
          "trim() removes whitespace from both the beginning and end of a string. ltrim() removes leading whitespace, while rtrim() removes trailing whitespace.",
          "These functions are useful when processing user input because users may accidentally enter unnecessary spaces before or after the intended value."
        ],
        "syntax": [
          "trim(string);",
          "ltrim(string);",
          "rtrim(string);"
        ],
        "examples": [
          {
            "title": "Removing Extra Spaces",
            "code": "<?php\n$name = \"   Dhruv   \";\n$name = trim($name);\n\necho \"Name: [\" . $name . \"]\";\n?>",
            "output": "Name: [Dhruv]"
          }
        ]
      },
      {
        "number": "09",
        "title": "str_replace()",
        "content": [
          "The str_replace() function searches for specified text and replaces all matching occurrences with another value.",
          "It is useful when a program needs to update words, correct labels, replace placeholders or modify known text values."
        ],
        "syntax": [
          "str_replace(search, replace, string);"
        ],
        "examples": [
          {
            "title": "Replacing a Word",
            "code": "<?php\n$message = \"I am learning Java.\";\n$message = str_replace(\"Java\", \"PHP\", $message);\n\necho $message;\n?>",
            "output": "I am learning PHP."
          }
        ]
      },
      {
        "number": "10",
        "title": "substr()",
        "content": [
          "The substr() function returns a selected portion of a string. It accepts a starting position and can optionally receive a length.",
          "The starting position uses zero-based indexing. A negative starting position can be used to count from the end of the string."
        ],
        "syntax": [
          "substr(string, start);",
          "substr(string, start, length);"
        ],
        "examples": [
          {
            "title": "Extracting the First Three Characters",
            "code": "<?php\n$name = \"Dhruv\";\necho substr($name, 0, 3);\n?>",
            "output": "Kes"
          }
        ]
      },
      {
        "number": "19",
        "title": "Practical Program: Format a Student Name",
        "content": [
          "User-entered names often contain unnecessary spaces or inconsistent capitalization. A combination of string functions can normalize and format the value before displaying it.",
          "This example trims the input, converts it to lowercase and then capitalizes each word."
        ],
        "syntax": [
          "trim() → strtolower() → ucwords()"
        ],
        "examples": [
          {
            "title": "Student Name Formatter",
            "code": "<?php\n$name = \"  Dhruv sharma  \";\n\n$name = trim($name);\n$name = strtolower($name);\n$name = ucwords($name);\n\necho \"Formatted Name: \" . $name;\n?>",
            "output": "Formatted Name: Dhruv Sharma"
          }
        ]
      }
    ]
  },
  "creating-html-forms": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "Creating HTML Forms",
    "intro": "HTML forms provide a structured way to collect information from users. A form can contain controls such as text fields, email fields, password fields, radio buttons, checkboxes, drop-down lists, text areas and buttons. The collected data can be submitted to a server-side program such as PHP for processing, validation and storage.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to HTML Forms",
        "content": [
          "An HTML form is a section of a web page used to collect information from a user and submit that information for processing.",
          "The form element acts as the container for form controls. Each input control normally has a name attribute so that its value can be identified when the form data is submitted."
        ],
        "syntax": [
          "<form action=\"process.php\" method=\"post\">",
          "    form controls",
          "</form>"
        ],
        "examples": [
          {
            "title": "Basic HTML Form",
            "code": "<form action=\"process.php\" method=\"post\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\">\n    <button type=\"submit\">Submit</button>\n</form>",
            "output": "A form containing a Name field and a Submit button."
          }
        ]
      },
      {
        "number": "02",
        "title": "The form Element",
        "content": [
          "The form element defines the beginning and end of a form. It commonly uses the action and method attributes to control where and how the form data is submitted.",
          "The action attribute identifies the resource that should receive the submitted data. The method attribute specifies the HTTP method used for the submission, commonly GET or POST."
        ],
        "syntax": [
          "<form action=\"page.php\" method=\"post\">",
          "    ...",
          "</form>"
        ],
        "table": [
          {
            "function": "action",
            "purpose": "Specifies the URL or server-side resource that receives the submitted form data."
          },
          {
            "function": "method",
            "purpose": "Specifies the HTTP method used to submit the form, commonly GET or POST."
          },
          {
            "function": "id",
            "purpose": "Provides an identifier for the form element."
          }
        ],
        "examples": [
          {
            "title": "Form with action and method",
            "code": "<form action=\"register.php\" method=\"post\">\n    <input type=\"text\" name=\"name\">\n    <button type=\"submit\">Register</button>\n</form>",
            "output": "A form containing a Name field and Register button. On submission, the browser sends the form data to register.php using POST."
          }
        ]
      },
      {
        "number": "03",
        "title": "Text Input",
        "content": [
          "The text input is used to collect ordinary single-line text such as a name, city, username or title.",
          "The name attribute is especially important for backend processing because it becomes the key used to identify the submitted value."
        ],
        "syntax": [
          "<input type=\"text\" name=\"username\">"
        ],
        "examples": [
          {
            "title": "Name Input",
            "code": "<label for=\"name\">Full Name:</label>\n<input type=\"text\" id=\"name\" name=\"name\">",
            "output": "A text field labelled \"Full Name\"."
          }
        ]
      },
      {
        "number": "04",
        "title": "Email, Password and Number Inputs",
        "content": [
          "HTML provides specialized input types for common kinds of data. The email type is intended for email addresses, password hides entered characters and number is designed for numerical input.",
          "These input types can provide useful browser-level behavior, but server-side validation is still required when the information reaches PHP."
        ],
        "syntax": [
          "<input type=\"email\" name=\"email\">",
          "<input type=\"password\" name=\"password\">",
          "<input type=\"number\" name=\"age\">"
        ],
        "examples": [
          {
            "title": "Common Input Types",
            "code": "<label>Email:</label>\n<input type=\"email\" name=\"email\"><br><br>\n\n<label>Password:</label>\n<input type=\"password\" name=\"password\"><br><br>\n\n<label>Age:</label>\n<input type=\"number\" name=\"age\">",
            "output": "A form containing Email, Password and Age controls."
          }
        ]
      },
      {
        "number": "05",
        "title": "Radio Buttons",
        "content": [
          "Radio buttons are used when the user should select one option from a group of related choices.",
          "Radio buttons that belong to the same group use the same name value. The value attribute identifies which option was selected when the form is submitted."
        ],
        "syntax": [
          "<input type=\"radio\" name=\"gender\" value=\"male\">",
          "<input type=\"radio\" name=\"gender\" value=\"female\">"
        ],
        "examples": [
          {
            "title": "Gender Selection",
            "code": "<label>\n    <input type=\"radio\" name=\"gender\" value=\"male\">\n    Male\n</label>\n<label>\n    <input type=\"radio\" name=\"gender\" value=\"female\">\n    Female\n</label>",
            "output": "Two radio options: Male and Female. Only one option can normally be selected from the same group."
          }
        ]
      },
      {
        "number": "06",
        "title": "Checkboxes",
        "content": [
          "Checkboxes allow users to make independent selections. Unlike radio buttons, multiple checkboxes can be selected at the same time.",
          "When multiple selections are submitted, the form can use an array-style name such as skills[] so that PHP receives the selected values as an array."
        ],
        "syntax": [
          "<input type=\"checkbox\" name=\"skills[]\" value=\"php\">",
          "<input type=\"checkbox\" name=\"skills[]\" value=\"mysql\">"
        ],
        "examples": [
          {
            "title": "Multiple Skills",
            "code": "<label>\n    <input type=\"checkbox\" name=\"skills[]\" value=\"php\">\n    PHP\n</label><br>\n\n<label>\n    <input type=\"checkbox\" name=\"skills[]\" value=\"mysql\">\n    MySQL\n</label><br>\n\n<label>\n    <input type=\"checkbox\" name=\"skills[]\" value=\"javascript\">\n    JavaScript\n</label>",
            "output": "Three independent options: PHP, MySQL and JavaScript."
          }
        ]
      },
      {
        "number": "07",
        "title": "Select and Option",
        "content": [
          "The select element creates a drop-down list. Each available choice is represented using an option element.",
          "A select control is useful when a user should choose one value from a predefined list of options."
        ],
        "syntax": [
          "<select name=\"course\">",
          "    <option value=\"bca\">BCA</option>",
          "    <option value=\"bsc\">B.Sc. CS</option>"
        ],
        "examples": [
          {
            "title": "Course Selection",
            "code": "<label for=\"course\">Course:</label>\n<select id=\"course\" name=\"course\">\n    <option value=\"bca\">BCA</option>\n    <option value=\"bsc\">B.Sc. CS</option>\n    <option value=\"btech\">B.Tech CSE</option>\n</select>",
            "output": "A drop-down list containing BCA, B.Sc. CS and B.Tech CSE."
          }
        ]
      },
      {
        "number": "14",
        "title": "Practical Program: Registration Form Layout",
        "content": [
          "This example creates a more complete registration form that is suitable for connecting to PHP in the next stage. The form contains commonly required student information and uses appropriate HTML input types."
        ],
        "syntax": [
          "Form → User Input → Submit → PHP Processing"
        ],
        "examples": [
          {
            "title": "Student Registration Form",
            "code": "<form action=\"register.php\" method=\"post\">\n    <h2>Student Registration</h2>\n\n    <label for=\"name\">Full Name:</label><br>\n    <input type=\"text\" id=\"name\" name=\"name\" required><br><br>\n\n    <label for=\"email\">Email:</label><br>\n    <input type=\"email\" id=\"email\" name=\"email\" required><br><br>\n\n    <label for=\"age\">Age:</label><br>\n    <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"60\" required><br><br>\n\n    <label for=\"course\">Course:</label><br>\n    <select id=\"course\" name=\"course\">\n        <option value=\"bca\">BCA</option>\n        <option value=\"bsc\">B.Sc. CS</option>\n        <option value=\"btech\">B.Tech CSE</option>\n    </select><br><br>\n\n    <button type=\"submit\">Register</button>\n</form>",
            "output": "A student registration form with Full Name, Email, Age, Course and Register controls."
          }
        ]
      }
    ]
  },
  "submitting-form-data": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "Submitting Form Data",
    "intro": "Submitting form data means sending values entered by a user from an HTML form to a destination for processing. In PHP applications, the browser sends the form data through an HTTP request and PHP receives the submitted values using superglobals such as $_GET or $_POST. The server can then display, validate, store or otherwise process the information.",
    "sections": [
      {
        "number": "01",
        "title": "How Form Submission Works",
        "content": [
          "When a user fills in an HTML form and presses the submit button, the browser collects the successful form controls and creates an HTTP request according to the form method.",
          "The request is sent to the URL specified by the action attribute. The PHP application at that destination can then access the submitted values and process them."
        ],
        "syntax": [
          "User Input → Form Submit → HTTP Request → PHP → Response"
        ],
        "examples": [
          {
            "title": "Simple Form Submission",
            "code": "<form action=\"process.php\" method=\"post\">\n    <input type=\"text\" name=\"name\">\n    <button type=\"submit\">Submit</button>\n</form>",
            "output": "Submitting the form sends the entered name to process.php using a POST request."
          }
        ]
      },
      {
        "number": "02",
        "title": "The action Attribute",
        "content": [
          "The action attribute specifies the resource that should receive the submitted form data.",
          "The destination may be a PHP file such as process.php, a URL or another server-side endpoint."
        ],
        "syntax": [
          "<form action=\"process.php\" method=\"post\">"
        ],
        "examples": [
          {
            "title": "Form Sending Data to PHP",
            "code": "<form action=\"process.php\" method=\"post\">\n    <input type=\"text\" name=\"name\">\n    <button type=\"submit\">Submit</button>\n</form>",
            "output": "After submission, the browser sends the data to process.php."
          }
        ]
      },
      {
        "number": "03",
        "title": "The method Attribute",
        "content": [
          "The method attribute determines the HTTP method used for form submission. The two methods most commonly used with HTML forms are GET and POST.",
          "GET places submitted values into the URL query string, while POST normally places the submitted values in the HTTP request body."
        ],
        "syntax": [
          "<form action=\"process.php\" method=\"get\">",
          "<form action=\"process.php\" method=\"post\">"
        ],
        "examples": [
          {
            "title": "GET Form",
            "code": "<form action=\"process.php\" method=\"get\">\n    <input type=\"text\" name=\"name\">\n    <button type=\"submit\">Search</button>\n</form>",
            "output": "Submitted values are normally visible in the URL query string."
          }
        ]
      },
      {
        "number": "04",
        "title": "Receiving Form Data in PHP",
        "content": [
          "PHP receives submitted form values using superglobal arrays. GET requests are commonly accessed through $_GET, while POST requests are commonly accessed through $_POST.",
          "The key used in PHP corresponds to the name attribute of the HTML form control."
        ],
        "syntax": [
          "$_GET[\"fieldName\"];",
          "$_POST[\"fieldName\"];"
        ],
        "examples": [
          {
            "title": "Receiving a POST Value",
            "code": "<?php\n$name = $_POST[\"name\"] ?? \"\";\necho \"Submitted Name: \" . htmlspecialchars($name);\n?>",
            "output": "Submitted Name: Dhruv"
          }
        ]
      },
      {
        "number": "05",
        "title": "Checking Whether Data Was Submitted",
        "content": [
          "A PHP page may be loaded directly without any form having been submitted. Therefore, server-side code should not blindly assume that submitted fields exist.",
          "The request method can be checked using $_SERVER[\"REQUEST_METHOD\"], and the null coalescing operator can provide safe default values for optional fields."
        ],
        "syntax": [
          "$_SERVER[\"REQUEST_METHOD\"];",
          "$_POST[\"name\"] ?? \"\";"
        ],
        "examples": [
          {
            "title": "Checking for POST Submission",
            "code": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    echo \"Form was submitted.\";\n} else {\n    echo \"Waiting for form submission.\";\n}\n?>",
            "output": "Waiting for form submission."
          }
        ]
      },
      {
        "number": "06",
        "title": "Processing Multiple Form Fields",
        "content": [
          "A form can contain multiple fields, and PHP can read each submitted value individually using the matching name.",
          "When processing multiple values, the application should validate the data and escape it appropriately before displaying it back to the browser."
        ],
        "examples": [
          {
            "title": "Processing Name and Email",
            "code": "<?php\n$name = $_POST[\"name\"] ?? \"\";\n$email = $_POST[\"email\"] ?? \"\";\n\necho \"Name: \" . htmlspecialchars($name) . \"<br>\";\necho \"Email: \" . htmlspecialchars($email);\n?>",
            "output": "Name: Dhruv\nEmail: Dhruv@example.com"
          }
        ]
      },
      {
        "number": "07",
        "title": "Displaying Submitted Data Safely",
        "content": [
          "User input should not be inserted directly into HTML output without appropriate escaping. If the application displays submitted text back to the browser, htmlspecialchars() can be used to convert special HTML characters into safe representations.",
          "This is especially important when the submitted value comes from an untrusted user."
        ],
        "syntax": [
          "htmlspecialchars($value);"
        ],
        "examples": [
          {
            "title": "Safe Output of a Submitted Name",
            "code": "<?php\n$name = $_POST[\"name\"] ?? \"\";\necho \"Hello, \" . htmlspecialchars($name);\n?>",
            "output": "Hello, Dhruv"
          }
        ]
      },
      {
        "number": "11",
        "title": "Practical Program: Student Form Processing",
        "content": [
          "The following program combines an HTML form with PHP processing. It collects a student name, email and course and displays the submitted information.",
          "This example demonstrates the basic end-to-end flow before validation and database storage are introduced."
        ],
        "syntax": [
          "HTML Form → POST → $_POST → PHP → HTML Response"
        ],
        "examples": [
          {
            "title": "Student Form and PHP Processing",
            "code": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $name = trim($_POST[\"name\"] ?? \"\");\n    $email = trim($_POST[\"email\"] ?? \"\");\n    $course = $_POST[\"course\"] ?? \"\";\n\n    echo \"<h2>Submitted Student Data</h2>\";\n    echo \"Name: \" . htmlspecialchars($name) . \"<br>\";\n    echo \"Email: \" . htmlspecialchars($email) . \"<br>\";\n    echo \"Course: \" . htmlspecialchars($course);\n}\n?>\n\n<form method=\"post\">\n    <input type=\"text\" name=\"name\" placeholder=\"Name\"><br><br>\n    <input type=\"email\" name=\"email\" placeholder=\"Email\"><br><br>\n    <select name=\"course\">\n        <option value=\"bca\">BCA</option>\n        <option value=\"bsc\">B.Sc. CS</option>\n    </select><br><br>\n    <button type=\"submit\">Submit</button>\n</form>",
            "output": "Submitted Student Data\nName: Dhruv\nEmail: Dhruv@example.com\nCourse: bca"
          }
        ]
      }
    ]
  },
  "get-method": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "GET Method",
    "intro": "The GET method is an HTTP request method commonly used to request resources and submit small amounts of non-sensitive data through the URL query string. In PHP, GET parameters are received through the $_GET superglobal array. GET is particularly useful for searches, filters, page selections and other operations where the parameters can safely appear in the URL.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to GET",
        "content": [
          "GET is an HTTP method used when a client requests a resource or sends parameters as part of the requested URL.",
          "When an HTML form uses method=\"get\", the submitted fields are generally appended to the URL as a query string."
        ],
        "syntax": [
          "<form method=\"get\">",
          "    form controls",
          "</form>"
        ],
        "examples": [
          {
            "title": "Simple GET Form",
            "code": "<form method=\"get\">\n    <input type=\"text\" name=\"search\">\n    <button type=\"submit\">Search</button>\n</form>",
            "output": "After entering PHP and submitting, the browser may navigate to a URL such as: page.php?search=PHP"
          }
        ]
      },
      {
        "number": "02",
        "title": "Query String",
        "content": [
          "The query string is the part of a URL that contains parameters after the question mark. Each parameter normally follows the form key=value, and multiple parameters are separated using an ampersand.",
          "For example, in page.php?name=Dhruv&course=BCA, name and course are parameter names and their corresponding values are Dhruv and BCA."
        ],
        "syntax": [
          "page.php?name=Dhruv",
          "page.php?name=Dhruv&course=BCA"
        ],
        "examples": [
          {
            "title": "Reading a Query String",
            "code": "<?php\necho \"Query String: \" . $_SERVER[\"QUERY_STRING\"];\n?>",
            "output": "Query String: name=Dhruv&course=BCA"
          }
        ]
      },
      {
        "number": "03",
        "title": "Receiving GET Data in PHP",
        "content": [
          "PHP stores GET parameters in the $_GET superglobal array. The key used in the array corresponds to the name of the submitted form control or query-string parameter.",
          "The null coalescing operator can be used to provide a default value when the parameter is not present."
        ],
        "syntax": [
          "$_GET[\"name\"];",
          "$_GET[\"name\"] ?? \"Guest\";"
        ],
        "examples": [
          {
            "title": "Reading a Name Parameter",
            "code": "<?php\n$name = $_GET[\"name\"] ?? \"Guest\";\necho \"Hello, \" . htmlspecialchars($name);\n?>",
            "output": "Hello, Dhruv"
          }
        ]
      },
      {
        "number": "04",
        "title": "GET Form Submission",
        "content": [
          "An HTML form using method=\"get\" sends successful form controls as query parameters in the URL.",
          "The server can then read those values through $_GET. This makes GET forms particularly useful for searches and filters where the parameters are safe to expose in the address."
        ],
        "examples": [
          {
            "title": "GET Search Form",
            "code": "<form action=\"search.php\" method=\"get\">\n    <input type=\"text\" name=\"query\" placeholder=\"Search topic\">\n    <button type=\"submit\">Search</button>\n</form>",
            "output": "Searching for \"PHP\" produces a URL similar to: search.php?query=PHP"
          }
        ]
      },
      {
        "number": "06",
        "title": "GET with Multiple Parameters",
        "content": [
          "A GET request can contain multiple parameters in the same query string. Each parameter is separated using an ampersand.",
          "This is useful when a page needs several pieces of information, such as a search term combined with a category or sorting option."
        ],
        "syntax": [
          "page.php?query=php&category=backend&sort=latest"
        ],
        "examples": [
          {
            "title": "Filtering with GET Parameters",
            "code": "<?php\n$query = $_GET[\"query\"] ?? \"\";\n$category = $_GET[\"category\"] ?? \"\";\n$sort = $_GET[\"sort\"] ?? \"\";\n\necho \"Query: \" . htmlspecialchars($query) . \"<br>\";\necho \"Category: \" . htmlspecialchars($category) . \"<br>\";\necho \"Sort: \" . htmlspecialchars($sort);\n?>",
            "output": "Query: php\nCategory: backend\nSort: latest"
          }
        ]
      },
      {
        "number": "07",
        "title": "GET and URL Encoding",
        "content": [
          "When values are placed into a URL, certain characters must be encoded so that the URL remains valid and unambiguous.",
          "PHP provides urlencode() and rawurlencode() for encoding values that will be placed into URLs. This is particularly useful when constructing links dynamically."
        ],
        "syntax": [
          "urlencode(value);",
          "rawurlencode(value);"
        ],
        "examples": [
          {
            "title": "Encoding a Search Value",
            "code": "<?php\n$query = \"PHP & MySQL\";\n$encoded = urlencode($query);\n\necho $encoded;\n?>",
            "output": "PHP+%26+MySQL"
          }
        ]
      },
      {
        "number": "08",
        "title": "Generating GET Links Dynamically",
        "content": [
          "GET parameters do not have to come only from forms. PHP can construct links that contain query parameters.",
          "This is commonly used for navigation, filters, pagination and selecting a particular record or topic."
        ],
        "examples": [
          {
            "title": "Dynamic Topic Link",
            "code": "<?php\n$slug = \"php-basics\";\n$url = \"topic.php?topic=\" . urlencode($slug);\n\necho '<a href=\"' . htmlspecialchars($url) . '\">Open Topic</a>';\n?>",
            "output": "A clickable \"Open Topic\" link pointing to topic.php?topic=php-basics"
          }
        ]
      },
      {
        "number": "05",
        "title": "Practical Program: GET Search",
        "content": [
          "A search form is a natural use case for GET because the search term can appear in the URL and the resulting URL can be bookmarked or shared.",
          "The following example displays the submitted search query using PHP."
        ],
        "syntax": [
          "Search Form → GET → $_GET[\"query\"] → Search Result"
        ],
        "examples": [
          {
            "title": "Simple Search Program",
            "code": "<?php\n$query = trim($_GET[\"query\"] ?? \"\");\n\nif ($query === \"\") {\n    echo \"Enter a search term.\";\n} else {\n    echo \"Searching for: \" . htmlspecialchars($query);\n}\n?>\n\n<form method=\"get\">\n    <input type=\"text\" name=\"query\">\n    <button type=\"submit\">Search</button>\n</form>",
            "output": "For query PHP: Searching for: PHP"
          }
        ]
      }
    ]
  },
  "post-method": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "POST Method",
    "intro": "The POST method is an HTTP request method commonly used to submit data to a server. Unlike GET, POST data is normally carried in the HTTP request body rather than being appended to the URL query string. In PHP, submitted POST values are accessed through the $_POST superglobal array. POST is commonly used for form submission, login forms, registration forms and other operations involving data sent to the server.",
    "sections": [
      {
        "number": "01",
        "title": "Introduction to POST",
        "content": [
          "POST is an HTTP request method used to send data to a server for processing. The submitted values are normally placed in the request body.",
          "Unlike GET, ordinary POST values do not appear in the URL query string. This makes POST more suitable for forms containing larger amounts of information or information that should not be displayed in the URL."
        ],
        "syntax": [
          "<form action=\"process.php\" method=\"post\">",
          "    form controls",
          "</form>"
        ],
        "examples": [
          {
            "title": "Simple POST Form",
            "code": "<form action=\"process.php\" method=\"post\">\n    <input type=\"text\" name=\"name\">\n    <button type=\"submit\">Submit</button>\n</form>",
            "output": "A form containing a text field and Submit button. The entered value is sent to process.php using POST."
          }
        ]
      },
      {
        "number": "02",
        "title": "Receiving POST Data in PHP",
        "content": [
          "PHP receives POST form data through the $_POST superglobal array. The key used to access a value corresponds to the name attribute of the submitted form control.",
          "The application should check whether the expected value exists before processing it. The null coalescing operator can be used to provide a safe default when a value is missing."
        ],
        "syntax": [
          "$_POST[\"name\"];",
          "$_POST[\"name\"] ?? \"\";"
        ],
        "examples": [
          {
            "title": "Reading a Submitted Name",
            "code": "<?php\n$name = $_POST[\"name\"] ?? \"\";\necho \"Name: \" . htmlspecialchars($name);\n?>",
            "output": "Name: Dhruv"
          }
        ]
      },
      {
        "number": "03",
        "title": "POST Request Body",
        "content": [
          "The request body is the part of an HTTP request that can carry submitted data. With a POST form, the browser normally places the form values in this body rather than exposing them as ordinary query parameters in the URL.",
          "The server receives the request body and PHP makes the parsed form values available through $_POST for application processing."
        ],
        "syntax": [
          "POST Request",
          "Headers",
          "Request Body"
        ],
        "examples": [
          {
            "title": "Displaying the Current Method",
            "code": "<?php\necho \"Request Method: \" . $_SERVER[\"REQUEST_METHOD\"];\n?>",
            "output": "Request Method: POST"
          }
        ]
      },
      {
        "number": "04",
        "title": "POST with Text, Email and Number Fields",
        "content": [
          "A POST request can contain multiple fields of different types. PHP receives all submitted controls that have a name attribute and are successfully included in the form submission.",
          "The application should treat all submitted values as untrusted input and validate them before using them."
        ],
        "examples": [
          {
            "title": "Processing Student Details",
            "code": "<?php\n$name = trim($_POST[\"name\"] ?? \"\");\n$email = trim($_POST[\"email\"] ?? \"\");\n$age = (int) ($_POST[\"age\"] ?? 0);\n\necho \"Name: \" . htmlspecialchars($name) . \"<br>\";\necho \"Email: \" . htmlspecialchars($email) . \"<br>\";\necho \"Age: \" . $age;\n?>",
            "output": "Name: Dhruv\nEmail: Dhruv@example.com\nAge: 20"
          }
        ]
      },
      {
        "number": "05",
        "title": "POST with Checkboxes",
        "content": [
          "When multiple checkboxes use an array-style name such as skills[], PHP can receive the selected values as an array through $_POST.",
          "The application should also handle the case where no checkbox was selected because the array may be absent."
        ],
        "syntax": [
          "<input type=\"checkbox\" name=\"skills[]\" value=\"php\">",
          "$skills = $_POST[\"skills\"] ?? [];"
        ],
        "examples": [
          {
            "title": "Reading Multiple Selected Skills",
            "code": "<?php\n$skills = $_POST[\"skills\"] ?? [];\n\nforeach ($skills as $skill) {\n    echo htmlspecialchars($skill) . \"<br>\";\n}\n?>",
            "output": "PHP\nMySQL\nJavaScript"
          }
        ]
      },
      {
        "number": "06",
        "title": "POST with Select and Textarea",
        "content": [
          "Values submitted from select and textarea controls can be accessed through $_POST in the same way as other form controls.",
          "The select field submits the value attribute of the selected option, while textarea submits the text entered by the user."
        ],
        "examples": [
          {
            "title": "Processing Course and Address",
            "code": "<?php\n$course = $_POST[\"course\"] ?? \"\";\n$address = $_POST[\"address\"] ?? \"\";\n\necho \"Course: \" . htmlspecialchars($course) . \"<br>\";\necho \"Address: \" . nl2br(htmlspecialchars($address));\n?>",
            "output": "Course: bca\nAddress: Chandigarh"
          }
        ]
      },
      {
        "number": "07",
        "title": "Checking the Request Method",
        "content": [
          "A PHP page may be accessed directly before a form is submitted. Therefore, the application can check $_SERVER[\"REQUEST_METHOD\"] to determine whether the current request is a POST request.",
          "This allows the same page to display a form initially and process the form only after submission."
        ],
        "syntax": [
          "if ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {",
          "    // Process submitted data",
          "}"
        ],
        "examples": [
          {
            "title": "Detecting POST",
            "code": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    echo \"POST request received.\";\n} else {\n    echo \"Waiting for POST submission.\";\n}\n?>",
            "output": "POST request received."
          }
        ]
      },
      {
        "number": "10",
        "title": "Practical Program: Student Registration Submission",
        "content": [
          "A registration form is a natural use case for POST because the submitted data contains several fields that need server-side processing.",
          "The following example receives student information, displays it safely and demonstrates the complete form-submission cycle."
        ],
        "syntax": [
          "Form → POST → PHP → Process Data → Display Response"
        ],
        "examples": [
          {
            "title": "Registration Form using POST",
            "code": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $name = trim($_POST[\"name\"] ?? \"\");\n    $email = trim($_POST[\"email\"] ?? \"\");\n    $course = $_POST[\"course\"] ?? \"\";\n\n    echo \"<h2>Registration Received</h2>\";\n    echo \"Name: \" . htmlspecialchars($name) . \"<br>\";\n    echo \"Email: \" . htmlspecialchars($email) . \"<br>\";\n    echo \"Course: \" . htmlspecialchars($course);\n}\n?>\n\n<form method=\"post\">\n    <input type=\"text\" name=\"name\" placeholder=\"Full Name\"><br><br>\n    <input type=\"email\" name=\"email\" placeholder=\"Email\"><br><br>\n    <select name=\"course\">\n        <option value=\"bca\">BCA</option>\n        <option value=\"bsc\">B.Sc. CS</option>\n    </select><br><br>\n    <button type=\"submit\">Register</button>\n</form>",
            "output": "Registration Received\nName: Dhruv\nEmail: Dhruv@example.com\nCourse: bca"
          }
        ]
      }
    ]
  },
  "get-vs-post": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "GET vs POST",
    "intro": "GET and POST are two commonly used HTTP methods for submitting or requesting information in web applications. GET commonly places parameters in the URL, while POST normally sends submitted data in the request body. Choosing the appropriate method depends on the purpose of the operation, how the data should behave as a resource request and whether the parameters are suitable for inclusion in a URL.",
    "sections": [
      {
        "number": "01",
        "title": "Basic Difference",
        "content": [
          "The main practical difference between GET and POST is how the submitted information is carried in the HTTP request.",
          "GET commonly places parameters in the URL query string, while POST normally places submitted data in the request body."
        ],
        "table": [
          {
            "function": "GET",
            "purpose": "Commonly used for retrieving resources, searching and filtering."
          },
          {
            "function": "POST",
            "purpose": "Commonly used for submitting data for server-side processing."
          },
          {
            "function": "GET Parameters",
            "purpose": "Normally visible in the URL query string."
          },
          {
            "function": "POST Parameters",
            "purpose": "Normally carried in the HTTP request body."
          }
        ],
        "examples": [
          {
            "title": "GET Example",
            "code": "<form method=\"get\">\n    <input type=\"text\" name=\"query\">\n    <button type=\"submit\">Search</button>\n</form>",
            "output": "A submitted query can appear in the URL, such as page.php?query=PHP"
          }
        ]
      },
      {
        "number": "02",
        "title": "GET vs POST in PHP",
        "content": [
          "PHP provides separate superglobals for the two methods. GET parameters are accessed using $_GET and POST parameters are accessed using $_POST.",
          "The rest of the processing logic can be similar, but the source of the submitted data differs."
        ],
        "syntax": [
          "$_GET[\"field\"];",
          "$_POST[\"field\"];"
        ],
        "examples": [
          {
            "title": "Reading GET and POST",
            "code": "<?php\n$getName = $_GET[\"name\"] ?? \"No GET value\";\n$postName = $_POST[\"name\"] ?? \"No POST value\";\n\necho \"GET: \" . htmlspecialchars($getName) . \"<br>\";\necho \"POST: \" . htmlspecialchars($postName);\n?>",
            "output": "GET: Dhruv\nPOST: Rahul"
          }
        ]
      },
      {
        "number": "03",
        "title": "Visibility of Data",
        "content": [
          "GET parameters are normally visible in the URL. This means they may appear in browser history, bookmarks, copied links and server logs.",
          "POST parameters are normally not displayed in the URL query string. However, this does not mean that POST data is automatically confidential or encrypted."
        ],
        "examples": [
          {
            "title": "GET URL Example",
            "code": "<?php\n$name = $_GET[\"name\"] ?? \"Guest\";\necho \"Name from GET: \" . htmlspecialchars($name);\n?>",
            "output": "For ?name=Dhruv: Name from GET: Dhruv"
          }
        ]
      },
      {
        "number": "04",
        "title": "Use Cases of GET",
        "content": [
          "GET is appropriate when the request is primarily about retrieving or selecting information and the parameters are safe to represent in a URL.",
          "Common examples include search pages, filters, sorting options, pagination and selecting a resource by identifier."
        ],
        "examples": [
          {
            "title": "Search Form",
            "code": "<form method=\"get\">\n    <input type=\"text\" name=\"query\">\n    <button type=\"submit\">Search</button>\n</form>",
            "output": "Search for PHP → page.php?query=PHP"
          }
        ]
      },
      {
        "number": "05",
        "title": "Use Cases of POST",
        "content": [
          "POST is commonly used when the client is submitting data for processing, creating a record or changing server-side state.",
          "Common examples include registration forms, login forms, contact forms, profile updates and adding records to a database."
        ],
        "examples": [
          {
            "title": "Registration Form",
            "code": "<form method=\"post\" action=\"register.php\">\n    <input type=\"text\" name=\"name\">\n    <input type=\"email\" name=\"email\">\n    <button type=\"submit\">Register</button>\n</form>",
            "output": "Registration data is submitted to register.php using POST."
          }
        ]
      },
      {
        "number": "06",
        "title": "Bookmarking and Sharing",
        "content": [
          "A GET request can be useful when the current parameters should remain part of the URL. A search result or filtered page can often be bookmarked and shared with another person.",
          "POST is not normally represented as a reusable URL in the same way because the submitted data is carried in the request body."
        ],
        "examples": [
          {
            "title": "Bookmarkable Search",
            "code": "<a href=\"search.php?query=php\">Search PHP</a>",
            "output": "A clickable link that preserves the search parameter in the URL."
          }
        ]
      },
      {
        "number": "07",
        "title": "Security Considerations",
        "content": [
          "GET should not be used for passwords or other highly sensitive values because the parameters become part of the URL.",
          "POST is generally more suitable for sensitive form submissions, but POST alone does not provide encryption or guarantee application security."
        ],
        "examples": [
          {
            "title": "Server-side Validation Still Required",
            "code": "<?php\n$email = trim($_POST[\"email\"] ?? \"\");\n\nif ($email === \"\") {\n    echo \"Email is required.\";\n} else {\n    echo \"Email received and ready for validation.\";\n}\n?>",
            "output": "Email received and ready for validation."
          }
        ]
      }
    ]
  },
  "student-registration-form": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "Student Registration Form",
    "intro": "A student registration form is a practical example that combines HTML form controls with PHP server-side processing. It can collect information such as the student name, email address, age, course and gender, then validate and display the submitted information. This example provides a foundation for later storing form data in a MySQL database.",
    "sections": [
      {
        "number": "01",
        "title": "Purpose of a Student Registration Form",
        "content": [
          "A registration form collects information required to create a student record. A practical form should provide appropriate controls for each type of information and should give the user clear labels.",
          "After submission, PHP can receive the data, validate it and generate a response. In a complete application, the validated information can then be inserted into a database."
        ],
        "syntax": [
          "Form → Submit → PHP → Validate → Store / Display"
        ],
        "examples": [
          {
            "title": "Basic Registration Structure",
            "code": "<form method=\"post\" action=\"register.php\">\n    <input type=\"text\" name=\"name\">\n    <input type=\"email\" name=\"email\">\n    <button type=\"submit\">Register</button>\n</form>",
            "output": "A basic registration form containing name, email and Register controls."
          }
        ]
      },
      {
        "number": "02",
        "title": "Registration Form Fields",
        "content": [
          "A student registration form may require fields such as full name, email, age, gender, course and address.",
          "Each field should use an appropriate HTML control and a meaningful name attribute so PHP can identify the submitted value."
        ],
        "table": [
          {
            "function": "name",
            "purpose": "Stores the student full name."
          },
          {
            "function": "email",
            "purpose": "Stores the student email address."
          },
          {
            "function": "age",
            "purpose": "Stores the student age."
          },
          {
            "function": "gender",
            "purpose": "Stores the selected gender option."
          },
          {
            "function": "course",
            "purpose": "Stores the selected course."
          },
          {
            "function": "address",
            "purpose": "Stores the student address."
          }
        ]
      },
      {
        "number": "03",
        "title": "Designing the Registration Form",
        "content": [
          "The form should use labels and appropriate controls so that every required piece of information has a clear purpose.",
          "The method is normally POST because registration submits data to the server for processing and potentially storage."
        ],
        "examples": [
          {
            "title": "Complete Registration Form Layout",
            "code": "<form method=\"post\" action=\"register.php\">\n    <h2>Student Registration</h2>\n\n    <label for=\"name\">Full Name:</label><br>\n    <input type=\"text\" id=\"name\" name=\"name\" required><br><br>\n\n    <label for=\"email\">Email:</label><br>\n    <input type=\"email\" id=\"email\" name=\"email\" required><br><br>\n\n    <label for=\"age\">Age:</label><br>\n    <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"60\" required><br><br>\n\n    <p>Gender:</p>\n    <label><input type=\"radio\" name=\"gender\" value=\"male\" required> Male</label>\n    <label><input type=\"radio\" name=\"gender\" value=\"female\"> Female</label><br><br>\n\n    <label for=\"course\">Course:</label><br>\n    <select id=\"course\" name=\"course\" required>\n        <option value=\"\">Select Course</option>\n        <option value=\"bca\">BCA</option>\n        <option value=\"bsc\">B.Sc. CS</option>\n        <option value=\"btech\">B.Tech CSE</option>\n    </select><br><br>\n\n    <label for=\"address\">Address:</label><br>\n    <textarea id=\"address\" name=\"address\" rows=\"4\" required></textarea><br><br>\n\n    <button type=\"submit\">Register</button>\n</form>",
            "output": "A complete student registration form with Full Name, Email, Age, Gender, Course, Address and Register controls."
          }
        ]
      },
      {
        "number": "04",
        "title": "Receiving Registration Data",
        "content": [
          "PHP can retrieve the registration values using the $_POST superglobal after the form is submitted.",
          "The application should clean and validate the values before displaying or storing them."
        ],
        "examples": [
          {
            "title": "Reading Registration Data",
            "code": "<?php\n$name = trim($_POST[\"name\"] ?? \"\");\n$email = trim($_POST[\"email\"] ?? \"\");\n$age = (int) ($_POST[\"age\"] ?? 0);\n$gender = $_POST[\"gender\"] ?? \"\";\n$course = $_POST[\"course\"] ?? \"\";\n$address = trim($_POST[\"address\"] ?? \"\");\n\necho \"Name: \" . htmlspecialchars($name) . \"<br>\";\necho \"Email: \" . htmlspecialchars($email) . \"<br>\";\necho \"Age: \" . $age . \"<br>\";\necho \"Gender: \" . htmlspecialchars($gender) . \"<br>\";\necho \"Course: \" . htmlspecialchars($course) . \"<br>\";\necho \"Address: \" . nl2br(htmlspecialchars($address));\n?>",
            "output": "Name: Dhruv\nEmail: Dhruv@example.com\nAge: 20\nGender: male\nCourse: bca\nAddress: Chandigarh"
          }
        ]
      },
      {
        "number": "05",
        "title": "Basic Server-side Validation",
        "content": [
          "Registration data should be validated on the server before it is accepted. Required fields should not be empty, email addresses should follow a valid format and numerical values should fall within the allowed range.",
          "Client-side attributes such as required and min can improve user experience, but PHP must perform the final validation."
        ],
        "syntax": [
          "if ($name === \"\") {",
          "    $errors[] = \"Name is required.\";",
          "}"
        ],
        "examples": [
          {
            "title": "Required Field Validation",
            "code": "<?php\n$name = trim($_POST[\"name\"] ?? \"\");\n$errors = [];\n\nif ($name === \"\") {\n    $errors[] = \"Name is required.\";\n}\n\nif (empty($errors)) {\n    echo \"Validation passed.\";\n} else {\n    foreach ($errors as $error) {\n        echo htmlspecialchars($error) . \"<br>\";\n    }\n}\n?>",
            "output": "Validation passed."
          }
        ]
      },
      {
        "number": "06",
        "title": "Validating Email and Age",
        "content": [
          "PHP provides filter_var() for validating common input formats. FILTER_VALIDATE_EMAIL can validate an email address, while numerical comparisons can be used to enforce an age range.",
          "Multiple validation rules can be collected in an error array so that the application can report more than one problem at a time."
        ],
        "examples": [
          {
            "title": "Email and Age Validation",
            "code": "<?php\n$email = trim($_POST[\"email\"] ?? \"Dhruv@example.com\");\n$age = (int) ($_POST[\"age\"] ?? 20);\n$errors = [];\n\nif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n    $errors[] = \"Invalid email address.\";\n}\n\nif ($age < 18 || $age > 60) {\n    $errors[] = \"Age must be between 18 and 60.\";\n}\n\nif (empty($errors)) {\n    echo \"Email and age are valid.\";\n} else {\n    foreach ($errors as $error) {\n        echo htmlspecialchars($error) . \"<br>\";\n    }\n}\n?>",
            "output": "Email and age are valid."
          }
        ]
      },
      {
        "number": "07",
        "title": "Displaying Registration Results",
        "content": [
          "After validation succeeds, PHP can display a confirmation message or a formatted summary of the submitted information.",
          "All user-supplied text should be escaped before being placed into HTML output."
        ],
        "examples": [
          {
            "title": "Registration Confirmation",
            "code": "<?php\n$name = \"Dhruv\";\n$course = \"BCA\";\n\necho \"<h2>Registration Successful</h2>\";\necho \"<p>Welcome, \" . htmlspecialchars($name) . \"</p>\";\necho \"<p>Course: \" . htmlspecialchars($course) . \"</p>\";\n?>",
            "output": "Registration Successful\nWelcome, Dhruv\nCourse: BCA"
          }
        ]
      },
      {
        "number": "08",
        "title": "Practical Program: Complete Student Registration",
        "content": [
          "This program brings together form creation, POST submission, server-side validation, safe output and a registration confirmation message.",
          "It is intentionally kept at assignment level so that the complete flow can be understood before database storage is added in Unit 4."
        ],
        "syntax": [
          "Form → POST → Receive → Validate → Display Confirmation"
        ],
        "examples": [
          {
            "title": "Complete Registration Program",
            "code": "<?php\n$errors = [];\n\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $name = trim($_POST[\"name\"] ?? \"\");\n    $email = trim($_POST[\"email\"] ?? \"\");\n    $age = (int) ($_POST[\"age\"] ?? 0);\n    $course = $_POST[\"course\"] ?? \"\";\n\n    if ($name === \"\") {\n        $errors[] = \"Name is required.\";\n    }\n\n    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        $errors[] = \"Enter a valid email address.\";\n    }\n\n    if ($age < 18 || $age > 60) {\n        $errors[] = \"Age must be between 18 and 60.\";\n    }\n\n    if ($course === \"\") {\n        $errors[] = \"Please select a course.\";\n    }\n\n    if (empty($errors)) {\n        echo \"<h2>Registration Successful</h2>\";\n        echo \"Name: \" . htmlspecialchars($name) . \"<br>\";\n        echo \"Email: \" . htmlspecialchars($email) . \"<br>\";\n        echo \"Age: \" . $age . \"<br>\";\n        echo \"Course: \" . htmlspecialchars($course);\n    } else {\n        foreach ($errors as $error) {\n            echo htmlspecialchars($error) . \"<br>\";\n        }\n    }\n}\n?>\n\n<form method=\"post\">\n    <input type=\"text\" name=\"name\" placeholder=\"Full Name\"><br><br>\n    <input type=\"email\" name=\"email\" placeholder=\"Email\"><br><br>\n    <input type=\"number\" name=\"age\" placeholder=\"Age\"><br><br>\n    <select name=\"course\">\n        <option value=\"\">Select Course</option>\n        <option value=\"bca\">BCA</option>\n        <option value=\"bsc\">B.Sc. CS</option>\n        <option value=\"btech\">B.Tech CSE</option>\n    </select><br><br>\n    <button type=\"submit\">Register</button>\n</form>",
            "output": "For valid input:\nRegistration Successful\nName: Dhruv\nEmail: Dhruv@example.com\nAge: 20\nCourse: BCA"
          }
        ]
      }
    ]
  },
  "login-form": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "Login Form",
    "intro": "A login form allows a user to enter credentials such as a username or email address and password. PHP receives the submitted data, validates it and can authenticate the user against stored account information. In a real application, passwords should never be stored as plain text. Password hashing and verification should be used.",
    "sections": [
      {
        "number": "01",
        "title": "Purpose of a Login Form",
        "content": [
          "A login form is used to identify and authenticate a user before providing access to protected pages or services.",
          "A typical login form contains a username or email field, a password field and a submit button."
        ],
        "examples": [
          {
            "title": "Basic Login Form",
            "code": "<form method=\"post\" action=\"\">\r\n<label>Username:</label>\r\n<input type=\"text\" name=\"username\">\r\n<label>Password:</label>\r\n<input type=\"password\" name=\"password\">\r\n\r\n<button type=\"submit\">Login</button>\r\n</form>",
            "output": "A form containing a username field, password field and Login button."
          }
        ]
      },
      {
        "number": "02",
        "title": "Login Form Fields",
        "content": [
          "The username or email field identifies the account that the user wants to access.",
          "The password field uses type=\"password\" so that entered characters are hidden from normal screen display."
        ],
        "table": [
          {
            "function": "Username / Email",
            "purpose": "Identifies the user account."
          },
          {
            "function": "Password",
            "purpose": "Provides the secret credential used for authentication."
          },
          {
            "function": "Submit Button",
            "purpose": "Sends the form data to the server."
          }
        ]
      },
      {
        "number": "03",
        "title": "Receiving Login Data in PHP",
        "content": [
          "When the form uses the POST method, PHP receives the submitted values through the $_POST superglobal array.",
          "The request method can be checked before processing the form so that the code does not execute authentication logic during an ordinary page visit."
        ],
        "syntax": [
          "$_SERVER[\"REQUEST_METHOD\"]",
          "$_POST[\"username\"]",
          "$_POST[\"password\"]"
        ],
        "examples": [
          {
            "title": "Receiving Username and Password",
            "code": "<?php\r\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\r\n$username = trim($_POST[\"username\"] ?? \"\");\r\n$password = $_POST[\"password\"] ?? \"\";\r\n\r\necho \"Username: \" . htmlspecialchars($username);\r\n}\r\n?>",
            "output": "If the submitted username is Dhruv:\r\n                        Username: Dhruv"
          }
        ]
      },
      {
        "number": "04",
        "title": "Basic Login Validation",
        "content": [
          "Before authentication, the submitted values should be checked to make sure that required fields are not empty.",
          "Basic validation prevents incomplete requests from being processed unnecessarily."
        ],
        "examples": [
          {
            "title": "Checking Required Fields",
            "code": "<?php\r\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\r\n$username = trim($_POST[\"username\"] ?? \"\");\r\n$password = $_POST[\"password\"] ?? \"\";\r\n\r\nif ($username === \"\" || $password === \"\") {\r\necho \"Username and password are required.\";\r\n} else {\r\n    echo \"Login data received.\";\r\n}\r\n}\r\n?>",
            "output": "If either field is empty:\r\n\r\n                        Username and password are required.\r\n                        Otherwise:\r\n                        Login data received."
          }
        ]
      },
      {
        "number": "05",
        "title": "Checking a Demo Username and Password",
        "content": [
          "For learning purposes, a login program can compare the submitted username and password with predefined demo credentials.",
          "This is useful for understanding the authentication flow, but hardcoding real passwords in source code is not appropriate for production applications."
        ],
        "examples": [
          {
            "title": "Simple Demo Authentication",
            "code": "<?php\r\n$valid_username = \"student\";\r\n$valid_password = \"student123\";\r\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\r\n    $username = trim($_POST[\"username\"] ?? \"\");\r\n    $password = $_POST[\"password\"] ?? \"\";\r\n    if ($username === $valid_username && $password === $valid_password) {\r\n        echo \"Login successful.\";\r\n    } else {\r\n        echo \"Invalid username or password.\";\r\n    }\r\n}\r\n?>",
            "output": "Correct credentials:\r\n                        Login successful\r\n                        Incorrect credentials\r\n                        Invalid username or password."
          }
        ]
      },
      {
        "number": "06",
        "title": "Password Hashing",
        "content": [
          "Real applications should not store passwords as plain text. Instead, a password is converted into a secure hash before it is stored.",
          "PHP provides password_hash() for creating password hashes. The original password cannot be obtained by simply reversing the hash."
        ],
        "syntax": [
          "password_hash($password, PASSWORD_DEFAULT)",
          "password_verify($password, $hash)"
        ],
        "examples": [
          {
            "title": "Hashing and Verifying a Password",
            "code": "<?php\r\n$password = \"student123\";\r\n$hash = password_hash($password, PASSWORD_DEFAULT);\r\necho \"Stored hash: \" . $hash . \"<br>\";\r\nif (password_verify(\"student123\", $hash)) {\r\n        echo \"Password verified successfully.\";\r\n} else {\r\n        echo \"Password verification failed.\";\r\n}\r\n?>",
            "output": "Stored hash: [generated password hash]\r\n                        \r\n                        Password verified successfully."
          }
        ]
      },
      {
        "number": "07",
        "title": "Practical Login with Password Verification",
        "content": [
          "A practical login process first receives the username and password, validates the input and then checks whether the supplied password matches the stored password hash.",
          "In a real application, the username and password hash would normally be retrieved from a database. The demonstration below keeps the hash in a variable so that the authentication process can be understood without adding database code to this topic."
        ],
        "examples": [
          {
            "title": "Complete Login Demonstration",
            "code": "<?php\r\n$valid_username = \"student\";\r\n$stored_hash = password_hash(\"student123\", PASSWORD_DEFAULT);\r\n$message = \"\";\r\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\r\n        $username = trim($_POST[\"username\"] ?? \"\");\r\n    $password = $_POST[\"password\"] ?? \"\";\r\n    if ($username === \"\" || $password === \"\") {\r\n            $message = \"All fields are required.\";\r\n    } elseif ($username !== $valid_username) {\r\n            $message = \"Invalid username or password.\";\r\n    } elseif (password_verify($password, $stored_hash)) {\r\n            $message = \"Login successful.\";\r\n    } else {\r\n            $message = \"Invalid username or password.\";\r\n    }\r\n}\r\n?>\r\n<form method=\"post\" action=\"\">\r\n    <label>Username:</label>\r\n    <input type=\"text\" name=\"username\">\r\n    <label>Password:</label>\r\n    <input type=\"password\" name=\"password\">\r\n    <button type=\"submit\">Login</button>\r\n</form>\r\n<?php\r\necho \"<p>\" . htmlspecialchars($message) . \"</p>\";\r\n?>",
            "output": "For username student and password student123:\r\n                        Login successful\r\n                        For incorrect credentials\r\n                        Invalid username or password."
          }
        ]
      }
    ]
  },
  "server-side-validation": {
    "unit": "03",
    "unit_title": "HTML Forms with PHP",
    "title": "Server-side Validation",
    "intro": "Server-side validation checks submitted form data on the web server before the data is accepted or stored. It is essential because users can bypass client-side JavaScript validation and directly send requests to a PHP program. PHP can validate required fields, data types, ranges, formats, lengths and allowed values before continuing with further processing.",
    "sections": [
      {
        "number": "01",
        "title": "What Is Server-side Validation?",
        "content": [
          "Server-side validation is the process of checking form data using code running on the web server.",
          "In PHP applications, submitted values are received by the server and then checked before they are displayed, stored or used in further operations."
        ],
        "examples": [
          {
            "title": "Basic Server-side Validation",
            "code": "<?php\r\n$name = trim($_POST[\"name\"] ?? \"\");\r\nif ($name === \"\") {\r\n        echo \"Name is required.\";\r\n} else {\r\n        echo \"Name is valid.\";\r\n}\r\n?>",
            "output": "Empty value:\r\n                        Name is required\r\n                        Non-empty value\r\n                        Name is valid."
          }
        ]
      },
      {
        "number": "02",
        "title": "Client-side vs Server-side Validation",
        "content": [
          "Client-side validation is performed in the browser, usually with HTML validation attributes or JavaScript.",
          "Server-side validation is performed after the request reaches the server and is therefore under the control of the application."
        ],
        "table": [
          {
            "function": "Client-side",
            "location": "Browser",
            "purpose": "Immediate feedback and improved user experience."
          },
          {
            "function": "Server-side",
            "location": "Web server",
            "purpose": "Final validation before application processing."
          }
        ]
      },
      {
        "number": "03",
        "title": "Required Field Validation",
        "content": [
          "Required field validation checks whether the user has entered a necessary value.",
          "trim() is commonly used with text input so that values containing only spaces are treated as empty."
        ],
        "examples": [
          {
            "title": "Checking a Required Name",
            "code": "<?php\r\n$name = trim($_POST[\"name\"] ?? \"\");\r\nif ($name === \"\") {\r\n        echo \"Name is required.\";\r\n} else {\r\n        echo \"Name accepted.\";\r\n}\r\n?>",
            "output": "If no name is entered:\r\n                        Name is required\r\n                        If Dhruv is entered\r\n                        Name accepted."
          }
        ]
      },
      {
        "number": "04",
        "title": "Email Validation",
        "content": [
          "Email addresses should be checked to ensure that the submitted value follows a valid email format.",
          "PHP provides filter_var() with FILTER_VALIDATE_EMAIL for this purpose."
        ],
        "syntax": [
          "filter_var($email, FILTER_VALIDATE_EMAIL)"
        ],
        "examples": [
          {
            "title": "Validating an Email Address",
            "code": "<?php\r\n$email = \"student@example.com\";\r\nif (filter_var($email, FILTER_VALIDATE_EMAIL)) {\r\n        echo \"Valid email address.\";\r\n} else {\r\n        echo \"Invalid email address.\";\r\n}\r\n?>",
            "output": "Valid email address."
          }
        ]
      },
      {
        "number": "05",
        "title": "Numeric Validation",
        "content": [
          "Numeric values can be validated before performing calculations or accepting them as fields such as age, marks or quantity.",
          "PHP functions such as is_numeric() can be used to check whether a value is numeric."
        ],
        "examples": [
          {
            "title": "Checking Numeric Input",
            "code": "<?php\r\n$marks = \"85\";\r\nif (is_numeric($marks)) {\r\n        echo \"Marks are numeric.\";\r\n} else {\r\n        echo \"Marks must be a number.\";\r\n}\r\n?>",
            "output": "Marks are numeric."
          }
        ]
      },
      {
        "number": "06",
        "title": "Range Validation",
        "content": [
          "Range validation checks whether a numeric value lies within an acceptable minimum and maximum range.",
          "For example, marks may be required to remain between 0 and 100, while an age field may have its own appropriate range."
        ],
        "examples": [
          {
            "title": "Validating Marks",
            "code": "<?php\r\n$marks = 87;\r\nif ($marks >= 0 && $marks <= 100) {\r\n        echo \"Valid marks.\";\r\n} else {\r\n        echo \"Marks must be between 0 and 100.\";\r\n}\r\n?>",
            "output": "Valid marks."
          }
        ]
      },
      {
        "number": "07",
        "title": "Length Validation",
        "content": [
          "Length validation checks whether text contains an acceptable number of characters.",
          "strlen() can be used to calculate the length of a string before accepting the value."
        ],
        "examples": [
          {
            "title": "Validating Username Length",
            "code": "<?php\r\n$username = \"student01\";\r\nif (strlen($username) >= 5 && strlen($username) <= 20) {\r\n        echo \"Username length is valid.\";\r\n} else {\r\n        echo \"Username must contain 5 to 20 characters.\";\r\n}\r\n?>",
            "output": "Username length is valid."
          }
        ]
      },
      {
        "number": "08",
        "title": "Practical: Student Registration Form (PHP & MySQL)",
        "content": [
          "This practical creates a student registration form that accepts the student's name, roll number, email, password, gender, course, hobbies and address.",
          "Part 1 processes the submitted form using POST and performs server-side validation. Part 2 demonstrates PHP-MySQL connectivity using MySQLi, table creation, inserting a student record, retrieving records, updating marks, deleting a record and closing the database connection.",
          "The two programs are separate examples within the same practical: the first demonstrates form validation, while the second demonstrates database operations."
        ],
        "examples": [
          {
            "title": "Part 1: Student Registration Form with PHP Validation",
            "code": "<?php\n$error = [];\n$success = false;\n\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n\n    $name = trim($_POST[\"name\"] ?? \"\");\n    $roll = trim($_POST[\"ROll\"] ?? \"\");\n    $email = trim($_POST[\"Email\"] ?? \"\");\n    $password = $_POST[\"password\"] ?? \"\";\n    $gender = $_POST[\"Gender\"] ?? \"\";\n    $course = $_POST[\"Course\"] ?? \"\";\n    $hobbies = $_POST[\"Hobbies\"] ?? [];\n    $address = trim($_POST[\"Address\"] ?? \"\");\n\n    // Name validation\n    if (empty($name)) {\n        $error[] = \"Name is required\";\n    } elseif (strlen($name) < 3) {\n        $error[] = \"Minimum 3 characters required\";\n    }\n\n    // Roll number validation\n    if (!filter_var($roll, FILTER_VALIDATE_INT) || $roll <= 0) {\n        $error[] = \"Invalid roll number\";\n    }\n\n    // Email validation\n    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        $error[] = \"Invalid email address\";\n    }\n\n    // Password validation\n    if (strlen($password) < 8) {\n        $error[] = \"Password must contain at least 8 characters\";\n    }\n\n    // Gender validation\n    if (!in_array($gender, [\"male\", \"female\"], true)) {\n        $error[] = \"Please select a valid gender\";\n    }\n\n    // Course validation\n    if (!in_array($course, [\"BCA\", \"BBA\", \"BCOM\"], true)) {\n        $error[] = \"Please select a valid course\";\n    }\n\n    // Hobbies validation\n    $allowed = [\"Gaming\", \"Reading\", \"Sports\"];\n\n    if (!is_array($hobbies)) {\n        $error[] = \"Invalid hobby selection\";\n    } else {\n        foreach ($hobbies as $value) {\n            if (!in_array($value, $allowed, true)) {\n                $error[] = \"Choose a valid hobby\";\n                break;\n            }\n        }\n    }\n\n    // Address validation\n    if (empty($address)) {\n        $error[] = \"Address is required\";\n    }\n\n    // Success condition\n    if (empty($error)) {\n        $success = true;\n    }\n}\n?>\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Student Registration Form</title>\n</head>\n<body>\n\n<h2>STUDENT REGISTRATION FORM</h2>\n\n<form action=\"9.php\" method=\"post\">\n\n    Name:\n    <input type=\"text\" name=\"name\">\n    <br><br>\n\n    Roll:\n    <input type=\"number\" name=\"ROll\">\n    <br><br>\n\n    Email:\n    <input type=\"email\" name=\"Email\">\n    <br><br>\n\n    Password:\n    <input type=\"password\" name=\"password\">\n    <br><br>\n\n    Gender:\n    <input type=\"radio\" name=\"Gender\" value=\"male\"> Male\n    <input type=\"radio\" name=\"Gender\" value=\"female\"> Female\n    <br><br>\n\n    Course:\n    <select name=\"Course\">\n        <option value=\"\">Select Course</option>\n        <option value=\"BCA\">BCA</option>\n        <option value=\"BBA\">BBA</option>\n        <option value=\"BCOM\">BCOM</option>\n    </select>\n    <br><br>\n\n    Hobbies:\n    <input type=\"checkbox\" name=\"Hobbies[]\" value=\"Gaming\"> Gaming\n    <input type=\"checkbox\" name=\"Hobbies[]\" value=\"Sports\"> Sports\n    <input type=\"checkbox\" name=\"Hobbies[]\" value=\"Reading\"> Reading\n    <br><br>\n\n    Address:\n    <textarea name=\"Address\"></textarea>\n    <br><br>\n\n    <input type=\"submit\" value=\"Submit Form\">\n\n</form>\n\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n\n    if (!empty($error)) {\n\n        echo \"<h3>Errors Found:</h3>\";\n\n        foreach ($error as $msg) {\n            echo htmlspecialchars($msg) . \"<br>\";\n        }\n\n    } elseif ($success) {\n\n        echo \"<h3>Registration Successful!</h3>\";\n\n        echo \"Name: \" . htmlspecialchars($name) . \"<br>\";\n        echo \"Roll Number: \" . htmlspecialchars($roll) . \"<br>\";\n        echo \"Email: \" . htmlspecialchars($email) . \"<br>\";\n        echo \"Gender: \" . htmlspecialchars($gender) . \"<br>\";\n        echo \"Course: \" . htmlspecialchars($course) . \"<br>\";\n        echo \"Hobbies: \" . htmlspecialchars(implode(\", \", $hobbies)) . \"<br>\";\n        echo \"Address: \" . htmlspecialchars($address) . \"<br>\";\n    }\n}\n?>\n\n</body>\n</html>",
            "output": "If the submitted data is invalid, the page displays the relevant validation errors. If all fields are valid, it displays “Registration Successful!” followed by the student's name, roll number, email, gender, course, hobbies and address.",
            "note": "Save this file as 9.php and run it through a local PHP server such as XAMPP. The form uses POST and submits back to 9.php. The database operations are demonstrated separately in Part 2 of this same practical."
          },
          {
            "title": "Part 2: PHP-MySQL Database Operations (Create, Insert, Retrieve, Update & Delete)",
            "code": "<?php\n// 1. DATABASE CONNECTION\n$host = \"localhost\";\n$username = \"root\";\n$password = \"\";\n$database = \"practical\";\n\n$conn = mysqli_connect($host, $username, $password, $database);\n\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\n\necho \"<h3>Database connected successfully!</h3>\";\n\n// 2. CREATE TABLE\n$query = \"CREATE TABLE IF NOT EXISTS Student4 (\n    Roll_No INT PRIMARY KEY,\n    Class VARCHAR(10),\n    Name VARCHAR(40),\n    Email VARCHAR(100),\n    Marks FLOAT\n)\";\n\nif (mysqli_query($conn, $query)) {\n    echo \"Table created or already exists.<br>\";\n} else {\n    die(\"Table error: \" . mysqli_error($conn));\n}\n\n// 3. INSERT DATA\n$query = \"INSERT INTO Student4\n          (Roll_No, Class, Name, Email, Marks)\n          VALUES\n          (101, 'BCA', 'Dhruv', 'dhruv@gmail.com', 85)\";\n\nif (mysqli_query($conn, $query)) {\n    echo \"Record inserted successfully!<br>\";\n} else {\n    echo \"Insert error: \" . mysqli_error($conn) . \"<br>\";\n}\n\n// 4. RETRIEVE DATA\necho \"<h3>Student Records</h3>\";\n$query = \"SELECT * FROM Student4\";\n$result = mysqli_query($conn, $query);\n\nif ($result) {\n    if (mysqli_num_rows($result) > 0) {\n        echo \"<table border='1' cellpadding='8'>\";\n        echo \"<tr>\n                <th>Roll No</th>\n                <th>Class</th>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Marks</th>\n              </tr>\";\n\n        while ($row = mysqli_fetch_assoc($result)) {\n            echo \"<tr>\";\n            echo \"<td>\" . htmlspecialchars($row[\"Roll_No\"]) . \"</td>\";\n            echo \"<td>\" . htmlspecialchars($row[\"Class\"]) . \"</td>\";\n            echo \"<td>\" . htmlspecialchars($row[\"Name\"]) . \"</td>\";\n            echo \"<td>\" . htmlspecialchars($row[\"Email\"]) . \"</td>\";\n            echo \"<td>\" . htmlspecialchars($row[\"Marks\"]) . \"</td>\";\n            echo \"</tr>\";\n        }\n        echo \"</table>\";\n    } else {\n        echo \"No records found.<br>\";\n    }\n} else {\n    echo \"Retrieval error: \" . mysqli_error($conn);\n}\n\n// 5. UPDATE DATA\n$query = \"UPDATE Student4\n          SET Marks = 95\n          WHERE Roll_No = 101\";\n\nif (mysqli_query($conn, $query)) {\n    if (mysqli_affected_rows($conn) > 0) {\n        echo \"<br>Record updated successfully!\";\n    } else {\n        echo \"<br>No record updated (record missing or values unchanged).\";\n    }\n} else {\n    echo \"<br>Update error: \" . mysqli_error($conn);\n}\n\n// 6. DELETE DATA\n$query = \"DELETE FROM Student4\n          WHERE Roll_No = 101\";\n\nif (mysqli_query($conn, $query)) {\n    if (mysqli_affected_rows($conn) > 0) {\n        echo \"<br>Record deleted successfully!\";\n    } else {\n        echo \"<br>No matching record found to delete.\";\n    }\n} else {\n    echo \"<br>Delete error: \" . mysqli_error($conn);\n}\n\n// 7. CLOSE CONNECTION\nmysqli_close($conn);\necho \"<br><br>Database connection closed.\";\n?>",
            "output": "Database connected successfully!\nTable created or already exists.\nRecord inserted successfully!\nStudent Records\nA table displays the student record (Roll No: 101, Class: BCA, Name: Dhruv, Email: dhruv@gmail.com, Marks: 85).\nRecord updated successfully!\nRecord deleted successfully!\nDatabase connection closed.",
            "note": "Before running this program, start Apache and MySQL in XAMPP and create a database named practical in phpMyAdmin. Save the file as student_database.php inside htdocs and open it through localhost. The INSERT statement uses Roll_No 101 as a primary key. Running the program again after the record already exists causes a duplicate-key insert error; the program then continues to retrieve, update and delete the existing record."
          }
        ]
      },
      {
        "number": "09",
        "title": "Practical: Login Form using PHP Validation",
        "content": [
          "This practical creates a simple login form that accepts an email address and password using an HTML form.",
          "PHP receives the submitted values through the POST method, checks that both fields are provided, validates the email format with filter_var(), and compares the credentials with predefined demo credentials.",
          "If the credentials match, the page displays a login successful message. Otherwise, it displays an appropriate validation or login error."
        ],
        "examples": [
          {
            "title": "Login Form with Server-side Validation",
            "code": "<?php\n$error = [];\n$success = false;\n\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n\n    $email = trim($_POST[\"Email\"] ?? \"\");\n    $password = $_POST[\"Password\"] ?? \"\";\n\n    // Email validation\n    if (empty($email)) {\n        $error[] = \"Email is required\";\n    }\n    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        $error[] = \"Email validation failed\";\n    }\n\n    // Password validation\n    if (empty($password)) {\n        $error[] = \"Password is required\";\n    }\n\n    // Login verification\n    if (empty($error)) {\n        if (\n            $email == \"dhruvgoyal380@gmail.com\" &&\n            $password == \"123456789\"\n        ) {\n            $success = true;\n        }\n        else {\n            $error[] = \"Invalid email or password\";\n        }\n    }\n}\n?>\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Login Form</title>\n</head>\n<body>\n\n    <h2>Login Form</h2>\n\n    <form action=\"10.php\" method=\"POST\">\n\n        Email:\n        <input type=\"email\" name=\"Email\">\n        <br><br>\n\n        Password:\n        <input type=\"password\" name=\"Password\">\n        <br><br>\n\n        <input type=\"submit\" value=\"Login\">\n\n    </form>\n\n    <?php\n    if ($success) {\n        echo \"<h3>Login Successful!</h3>\";\n    }\n    else {\n        foreach ($error as $data) {\n            echo \"<h3>\" . htmlspecialchars($data) . \"</h3>\";\n        }\n    }\n    ?>\n\n</body>\n</html>",
            "output": "When the email and password match the predefined demo credentials, the page displays “Login Successful!”. If either field is empty or the credentials do not match, the page displays the corresponding error message.",
            "note": "Save this file as 10.php and run it through a local PHP server such as XAMPP. This is a basic classroom demonstration using hardcoded credentials. Real applications should store password hashes and verify them with password_verify(), rather than comparing or storing plain-text passwords."
          }
        ]
      }
    ]
  },
  "php-mysql-connectivity": {
    "unit": "04",
    "unit_title": "Database Connectivity with MySQL",
    "title": "PHP & MySQL Connectivity",
    "intro": "PHP applications commonly use a database to store and retrieve persistent information such as student records, user accounts and form submissions. PHP can connect to a MySQL-compatible database server using extensions such as MySQLi. A connection must be established before the application can execute database queries.",
    "sections": [
      {
        "number": "01",
        "title": "Need for Database Connectivity",
        "content": [
          "A web application often needs to store data permanently instead of keeping it only while a page is running.",
          "For example, a student registration system may need to store student names, email addresses, courses and other information."
        ]
      },
      {
        "number": "02",
        "title": "MySQL and PHP",
        "content": [
          "MySQL is a relational database management system that stores information in databases, tables and rows.",
          "PHP provides database APIs that allow a PHP script to connect to the database server, execute SQL queries and receive results."
        ]
      },
      {
        "number": "03",
        "title": "MySQLi Extension",
        "content": [
          "MySQLi stands for MySQL Improved. It is a PHP extension used to communicate with MySQL-compatible database servers.",
          "MySQLi supports both procedural and object-oriented programming styles. The examples in this assignment use the object-oriented style because it provides a clean structure for larger PHP applications."
        ],
        "syntax": [
          "new mysqli($host, $username, $password, $database)",
          "$conn->query($sql)",
          "$conn->close()"
        ]
      },
      {
        "number": "04",
        "title": "Database Connection Parameters",
        "content": [
          "A database connection normally requires the host name, database username, password and database name.",
          "During local development with XAMPP, common values are localhost as the host and root as the database username. The exact password depends on the database server configuration."
        ],
        "table": [
          {
            "function": "$host",
            "purpose": "Specifies the database server address."
          },
          {
            "function": "$username",
            "purpose": "Specifies the database user."
          },
          {
            "function": "$password",
            "purpose": "Specifies the database user password."
          },
          {
            "function": "$database",
            "purpose": "Specifies the database to use after connecting."
          }
        ]
      },
      {
        "number": "05",
        "title": "Creating a Database Connection",
        "content": [
          "The mysqli class can be used to create a connection object. The returned object can then be used to execute SQL queries and perform other database operations."
        ],
        "examples": [
          {
            "title": "Basic PHP Database Connection",
            "code": "<?php\r\n$host = \"localhost\";\r\n$username = \"root\";\r\n$password = \"\";\r\n$database = \"backend_assignment\";\r\n$conn = new mysqli($host, $username, $password, $database);\r\nif ($conn->connect_error) {\r\n        die(\"Database connection failed: \" . $conn->connect_error);\r\n}\r\necho \"Database connected successfully.\";\r\n?>",
            "output": "Database connected successfully."
          }
        ]
      },
      {
        "number": "06",
        "title": "Checking Connection Errors",
        "content": [
          "A connection attempt can fail because the database server is not running, the login credentials are incorrect, the database does not exist or the connection settings are incorrect.",
          "The connect_error property contains information about a failed connection."
        ],
        "examples": [
          {
            "title": "Handling a Connection Error",
            "code": "<?php\r\n$conn = new mysqli(\r\n        \"localhost\",\r\n    \"root\",\r\n    \"\",\r\n    \"backend_assignment\"\r\n);\r\nif ($conn->connect_error) {\r\n        die(\"Database connection failed: \" . $conn->connect_error);\r\n}\r\necho \"Connection successful.\";\r\n?>",
            "output": "If the connection succeeds:\r\n                        Connection successful\r\n                        If the connection fails\r\n                        Database connection failed: [error message]"
          }
        ]
      },
      {
        "number": "07",
        "title": "Using a Separate Connection File",
        "content": [
          "In a larger project, database connection code should not be repeated in every PHP page.",
          "A separate configuration file can store the connection code and other pages can include it when database access is required."
        ],
        "examples": [
          {
            "title": "config/database.php",
            "code": "<?php\r\n$host = \"localhost\";\r\n$username = \"root\";\r\n$password = \"\";\r\n$database = \"backend_assignment\";\r\n$conn = new mysqli($host, $username, $password, $database);\r\nif ($conn->connect_error) {\r\n        die(\"Database connection failed: \" . $conn->connect_error);\r\n}\r\n?>",
            "output": "The file creates the $conn database connection and can be included by other PHP pages."
          }
        ]
      }
    ]
  },
  "database-creation": {
    "unit": "04",
    "unit_title": "Database Connectivity with MySQL",
    "title": "Database Creation",
    "intro": "A database is a structured collection of related data. Before creating tables and storing records, a database must usually be created on the database server. A database can be created manually using a database management tool or programmatically by executing a CREATE DATABASE SQL statement from PHP.",
    "sections": [
      {
        "number": "01",
        "title": "What Is a Database?",
        "content": [
          "A database is an organized collection of data that can be stored, accessed and managed efficiently.",
          "In a relational database system, data is normally organized into tables containing rows and columns."
        ]
      },
      {
        "number": "02",
        "title": "Why Create a Separate Database?",
        "content": [
          "A separate database provides a logical container for the tables and other database objects belonging to an application.",
          "For this assignment, a database named backend_assignment can contain the tables required by the backend application."
        ]
      },
      {
        "number": "03",
        "title": "CREATE DATABASE Statement",
        "content": [
          "SQL provides the CREATE DATABASE command to create a new database on the database server."
        ],
        "syntax": [
          "CREATE DATABASE database_name;"
        ],
        "examples": [
          {
            "title": "Creating a Database",
            "code": "CREATE DATABASE college_db;",
            "output": "Database created successfully."
          }
        ]
      },
      {
        "number": "04",
        "title": "CREATE DATABASE IF NOT EXISTS",
        "content": [
          "The IF NOT EXISTS clause prevents an unnecessary error when the specified database already exists.",
          "It is useful in scripts that may be executed more than once."
        ],
        "syntax": [
          "CREATE DATABASE IF NOT EXISTS database_name;"
        ],
        "examples": [
          {
            "title": "Safe Database Creation",
            "code": "CREATE DATABASE IF NOT EXISTS backend_assignment;",
            "output": "If the database does not exist, it is created. If it already exists, the statement does not create a duplicate database."
          }
        ]
      },
      {
        "number": "05",
        "title": "Creating a Database from PHP",
        "content": [
          "PHP can execute a CREATE DATABASE statement through a connection to the database server.",
          "When creating a database, the connection is normally made to the server without selecting the new database first."
        ],
        "examples": [
          {
            "title": "Create Database Using PHP",
            "code": "<?php\r\n$host = \"localhost\";\r\n$username = \"root\";\r\n$password = \"\";\r\n$conn = new mysqli($host, $username, $password);\r\nif ($conn->connect_error) {\r\n        die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\n$sql = \"CREATE DATABASE IF NOT EXISTS college_db\";\r\nif ($conn->query($sql)) {\r\n        echo \"Database created successfully.\";\r\n} else {\r\n        echo \"Database creation failed: \" . $conn->error;\r\n}\r\n$conn->close();\r\n?>",
            "output": "Database created successfully."
          }
        ]
      },
      {
        "number": "06",
        "title": "Selecting a Database",
        "content": [
          "After creating a database, PHP can establish a connection that specifies the database name.",
          "SQL can also be used to select a database when working directly through a database client."
        ],
        "syntax": [
          "USE database_name;"
        ],
        "examples": [
          {
            "title": "Selecting a Database with SQL",
            "code": "USE college_db;",
            "output": "The college_db database becomes the current database for subsequent SQL statements in that client session."
          }
        ]
      },
      {
        "number": "07",
        "title": "Viewing Available Databases",
        "content": [
          "The SHOW DATABASES statement can be used to display databases available on the current database server."
        ],
        "syntax": [
          "SHOW DATABASES;"
        ],
        "examples": [
          {
            "title": "Display Databases",
            "code": "SHOW DATABASES;",
            "output": "A result containing the databases available on the current database server, for example:\r\n\r\n                            information_schema\r\n                            mysql\r\n                            performance_schema\r\n                            backend_assignment\r\n                            college_db"
          }
        ]
      }
    ]
  },
  "table-creation": {
    "unit": "04",
    "unit_title": "Database Connectivity with MySQL",
    "title": "Table Creation",
    "intro": "A table is the main structure used to store records inside a relational database. A table is made up of columns and rows. Each column defines a particular type of information, while each row represents one stored record. SQL uses the CREATE TABLE statement to define the table structure.",
    "sections": [
      {
        "number": "01",
        "title": "What Is a Table?",
        "content": [
          "A table stores related data in a structured form using columns and rows.",
          "Columns define attributes such as id, name, age or email. Each row contains the values belonging to one record."
        ]
      },
      {
        "number": "02",
        "title": "Columns and Data Types",
        "content": [
          "Every column in a table must have a name and a data type.",
          "The data type determines the kind of value that can be stored in the column."
        ],
        "table": [
          {
            "function": "INT",
            "purpose": "Whole numbers such as IDs or ages."
          },
          {
            "function": "VARCHAR(n)",
            "purpose": "Variable-length text."
          },
          {
            "function": "DECIMAL",
            "purpose": "Fixed-point numeric values."
          },
          {
            "function": "DATE",
            "purpose": "Calendar dates."
          },
          {
            "function": "DATETIME",
            "purpose": "Date and time values."
          }
        ]
      },
      {
        "number": "03",
        "title": "CREATE TABLE Statement",
        "content": [
          "The CREATE TABLE statement defines a new table and its columns."
        ],
        "syntax": [
          "CREATE TABLE table_name (",
          "    column_name data_type,",
          "    column_name data_type"
        ],
        "examples": [
          {
            "title": "Simple Table Creation",
            "code": "CREATE TABLE students (\r\n        id INT,\r\n    name VARCHAR(100),\r\n    age INT\r\n);",
            "output": "A students table is created with id, name and age columns."
          }
        ]
      },
      {
        "number": "04",
        "title": "Primary Key",
        "content": [
          "A primary key uniquely identifies each row in a table.",
          "A primary key should contain unique values and should not contain NULL values."
        ],
        "examples": [
          {
            "title": "Table with a Primary Key",
            "code": "CREATE TABLE students (\r\n        id INT PRIMARY KEY,\r\n    name VARCHAR(100),\r\n    age INT\r\n);",
            "output": "The id column uniquely identifies each student record."
          }
        ]
      },
      {
        "number": "05",
        "title": "AUTO_INCREMENT",
        "content": [
          "AUTO_INCREMENT automatically generates a new numeric value when a record is inserted without explicitly providing the ID.",
          "It is commonly used with integer primary keys."
        ],
        "examples": [
          {
            "title": "AUTO_INCREMENT Primary Key",
            "code": "CREATE TABLE students (\r\n        id INT AUTO_INCREMENT PRIMARY KEY,\r\n    name VARCHAR(100),\r\n    age INT\r\n);",
            "output": "New student records automatically receive sequential ID values."
          }
        ]
      },
      {
        "number": "06",
        "title": "NOT NULL Constraint",
        "content": [
          "The NOT NULL constraint requires a column to contain a value.",
          "It is useful when a particular field must always be provided, such as a student name or email address."
        ],
        "examples": [
          {
            "title": "Using NOT NULL",
            "code": "CREATE TABLE students (\r\n        id INT AUTO_INCREMENT PRIMARY KEY,\r\n    name VARCHAR(100) NOT NULL,\r\n    age INT\r\n);",
            "output": "The name column must contain a value when a student record is inserted."
          }
        ]
      },
      {
        "number": "07",
        "title": "UNIQUE Constraint",
        "content": [
          "The UNIQUE constraint prevents duplicate values from being stored in a column.",
          "It is useful for fields such as email addresses when each account should have a distinct email."
        ],
        "examples": [
          {
            "title": "Using UNIQUE",
            "code": "CREATE TABLE users (\r\n        id INT AUTO_INCREMENT PRIMARY KEY,\r\n    email VARCHAR(150) UNIQUE,\r\n    name VARCHAR(100)\r\n);",
            "output": "The email column cannot contain duplicate values."
          }
        ]
      }
    ]
  },
  "data-insertion": {
    "unit": "04",
    "unit_title": "Database Connectivity with MySQL",
    "title": "Data Insertion",
    "intro": "Data insertion is the process of adding new records to a database table. SQL uses the INSERT INTO statement for this purpose. PHP can execute INSERT statements through MySQLi so that data received from forms or other application sources can be stored permanently in the database.",
    "sections": [
      {
        "number": "01",
        "title": "What Is Data Insertion?",
        "content": [
          "Data insertion means adding a new row or record to an existing database table.",
          "For example, a student registration form may collect a name, age and email address and then insert those values into a students table."
        ]
      },
      {
        "number": "02",
        "title": "INSERT INTO Statement",
        "content": [
          "The INSERT INTO statement specifies the table and the values that should be added."
        ],
        "syntax": [
          "INSERT INTO table_name (column1, column2, column3)",
          "VALUES (value1, value2, value3);"
        ],
        "examples": [
          {
            "title": "Insert a Student Record",
            "code": "INSERT INTO students (name, age, email)\r\nVALUES ('Dhruv', 20, 'Dhruv@example.com');",
            "output": "One new record is added to the students table."
          }
        ]
      },
      {
        "number": "03",
        "title": "Inserting Multiple Records",
        "content": [
          "Multiple rows can be inserted using a single INSERT statement by providing multiple sets of values.",
          "This can be more convenient than sending separate INSERT statements for every row."
        ],
        "examples": [
          {
            "title": "Insert Multiple Students",
            "code": "INSERT INTO students (name, age, email)\r\nVALUES\r\n    ('Rahul', 19, 'rahul@example.com'),\r\n    ('Aman', 21, 'aman@example.com'),\r\n    ('Neha', 23, 'neha@example.com');",
            "output": "Three new student records are inserted into the students table."
          }
        ]
      },
      {
        "number": "04",
        "title": "Inserting Data Through PHP",
        "content": [
          "PHP can execute an INSERT statement through the query() method of the mysqli connection object.",
          "This approach is useful for simple demonstrations, but values received from users should preferably be inserted using prepared statements."
        ],
        "examples": [
          {
            "title": "Insert Record Using PHP",
            "code": "<?php\r\nrequire_once \"config/database.php\";\r\n$sql = \"INSERT INTO students (name, age, email)\r\n        VALUES ('Rohan', 25, 'rohan@example.com')\";\r\nif ($conn->query($sql)) {\r\n        echo \"Student inserted successfully.\";\r\n} else {\r\n        echo \"Insertion failed: \" . $conn->error;\r\n}\r\n$conn->close();\r\n?>",
            "output": "Student inserted successfully."
          }
        ]
      },
      {
        "number": "05",
        "title": "AUTO_INCREMENT During Insertion",
        "content": [
          "When a table uses AUTO_INCREMENT for its primary key, the ID normally does not need to be included in the INSERT statement.",
          "The database automatically generates the next available ID value."
        ],
        "examples": [
          {
            "title": "Insert Without Providing ID",
            "code": "INSERT INTO students (name, age, email)\r\nVALUES ('Mohit', 18, 'mohit@example.com');",
            "output": "A new student is inserted and the database automatically generates the id value."
          }
        ]
      },
      {
        "number": "06",
        "title": "Prepared Statements",
        "content": [
          "Prepared statements separate the SQL structure from the values being inserted.",
          "They are especially important when inserting data received from users because they help protect SQL statements from SQL injection."
        ],
        "syntax": [
          "$stmt = $conn->prepare($sql);",
          "$stmt->bind_param(\"...\", $value1, $value2);",
          "$stmt->execute();"
        ],
        "examples": [
          {
            "title": "Prepared INSERT Statement",
            "code": "<?php\r\nrequire_once \"config/database.php\";\r\n$name = \"Anjali\";\r\n$age = 22;\r\n$email = \"anjali@example.com\";\r\n$sql = \"INSERT INTO students (name, age, email)\r\n        VALUES (?, ?, ?)\";\r\n$stmt = $conn->prepare($sql);\r\n$stmt->bind_param(\"sis\", $name, $age, $email);\r\nif ($stmt->execute()) {\r\n        echo \"Student inserted successfully.\";\r\n} else {\r\n        echo \"Insertion failed: \" . $stmt->error;\r\n}\r\n$stmt->close();\r\n$conn->close();\r\n?>",
            "output": "Student inserted successfully."
          }
        ]
      },
      {
        "number": "07",
        "title": "Understanding bind_param()",
        "content": [
          "The first argument of bind_param() specifies the data types of the bound values.",
          "The commonly used type characters are s for string, i for integer, d for double and b for binary data."
        ],
        "table": [
          {
            "function": "s",
            "purpose": "String"
          },
          {
            "function": "i",
            "purpose": "Integer"
          },
          {
            "function": "d",
            "purpose": "Double / floating-point number"
          },
          {
            "function": "b",
            "purpose": "Binary data"
          }
        ],
        "examples": [
          {
            "title": "Example of Type Specification",
            "code": "$stmt->bind_param(\"sis\", $name, $age, $email);",
            "output": "s = string\r\n                        i = integer\r\n                        s = string"
          }
        ]
      }
    ]
  },
  "data-retrieval": {
    "unit": "04",
    "unit_title": "Database Connectivity with MySQL",
    "title": "Data Retrieval",
    "intro": "Data retrieval is the process of reading records stored in a database. SQL uses the SELECT statement to retrieve data. PHP can execute SELECT queries through MySQLi and process the returned result set to display records in an HTML page.",
    "sections": [
      {
        "number": "01",
        "title": "What Is Data Retrieval?",
        "content": [
          "Data retrieval means reading stored records from a database.",
          "For example, a student management system may retrieve all students, one particular student or students belonging to a particular course."
        ]
      },
      {
        "number": "02",
        "title": "SELECT Statement",
        "content": [
          "The SELECT statement specifies which columns should be returned from one or more tables."
        ],
        "syntax": [
          "SELECT column1, column2",
          "FROM table_name;"
        ],
        "examples": [
          {
            "title": "Retrieve All Student Names",
            "code": "SELECT name\r\nFROM students;",
            "output": "A result containing the name column for all students."
          }
        ]
      },
      {
        "number": "03",
        "title": "Selecting All Columns",
        "content": [
          "The asterisk symbol (*) can be used to retrieve all columns from a table."
        ],
        "examples": [
          {
            "title": "Retrieve All Student Records",
            "code": "SELECT *\r\nFROM students;",
            "output": "All columns and all rows from the students table are returned."
          }
        ]
      },
      {
        "number": "04",
        "title": "Selecting Specific Columns",
        "content": [
          "Selecting only required columns can make the result more focused and easier to process."
        ],
        "examples": [
          {
            "title": "Retrieve Selected Columns",
            "code": "SELECT name, age, email\r\nFROM students;",
            "output": "Only the name, age and email columns are returned."
          }
        ]
      },
      {
        "number": "05",
        "title": "Using WHERE with SELECT",
        "content": [
          "The WHERE clause filters records so that only rows satisfying a specified condition are returned."
        ],
        "syntax": [
          "SELECT columns",
          "FROM table_name",
          "WHERE condition;"
        ],
        "examples": [
          {
            "title": "Retrieve Students Above a Certain Age",
            "code": "SELECT name, age\r\nFROM students\r\nWHERE age >= 21;",
            "output": "Only students whose age is 21 or above are returned."
          }
        ]
      },
      {
        "number": "06",
        "title": "Sorting Retrieved Data",
        "content": [
          "The ORDER BY clause sorts the result according to one or more columns.",
          "ASC specifies ascending order and DESC specifies descending order."
        ],
        "examples": [
          {
            "title": "Sort Students by Name",
            "code": "SELECT name, age\r\nFROM students\r\nORDER BY name ASC;",
            "output": "Student records are returned in alphabetical order by name."
          }
        ]
      },
      {
        "number": "07",
        "title": "Retrieving Data Through PHP",
        "content": [
          "A SELECT query executed through MySQLi returns a result object containing the retrieved rows."
        ],
        "examples": [
          {
            "title": "Basic PHP SELECT Query",
            "code": "<?php\r\nrequire_once \"config/database.php\";\r\n$sql = \"SELECT name, age, email FROM students\";\r\n$result = $conn->query($sql);\r\nif ($result) {\r\n        echo \"Query executed successfully.<br>\";\r\n    echo \"Number of records: \" . $result->num_rows;\r\n} else {\r\n        echo \"Query failed: \" . $conn->error;\r\n}\r\n$conn->close();\r\n?>",
            "output": "Query executed successfully.\r\n                        Number of records: 9\r\n                        The exact number depends on the data currently stored in the table."
          }
        ]
      }
    ]
  },
  "data-manipulation": {
    "unit": "04",
    "unit_title": "Database Connectivity with MySQL",
    "title": "Data Manipulation",
    "intro": "Data manipulation refers to changing or removing records that already exist in a database. In SQL, UPDATE is used to modify existing values and DELETE is used to remove records. PHP can execute these commands through MySQLi, allowing web applications to edit and remove stored information.",
    "sections": [
      {
        "number": "01",
        "title": "What Is Data Manipulation?",
        "content": [
          "Data manipulation means modifying the values or records stored in a database.",
          "For example, a student may update an email address or age, while an administrator may remove an old student record."
        ]
      },
      {
        "number": "02",
        "title": "UPDATE Statement",
        "content": [
          "The UPDATE statement modifies existing records in a table.",
          "The SET clause specifies the values that should be changed."
        ],
        "syntax": [
          "UPDATE table_name",
          "SET column1 = value1, column2 = value2",
          "WHERE condition;"
        ],
        "examples": [
          {
            "title": "Update a Student Age",
            "code": "UPDATE students\r\nSET age = 21\r\nWHERE id = 2;",
            "output": "The age of the student whose ID is 2 is changed to 21."
          }
        ]
      },
      {
        "number": "03",
        "title": "Updating Multiple Columns",
        "content": [
          "More than one column can be updated in a single UPDATE statement."
        ],
        "examples": [
          {
            "title": "Update Name and Email",
            "code": "UPDATE students\r\nSET name = 'Rahul Sharma',\r\n    email = 'rahul.sharma@example.com'\r\nWHERE id = 2;",
            "output": "The name and email of student ID 2 are updated."
          }
        ]
      },
      {
        "number": "04",
        "title": "Importance of WHERE in UPDATE",
        "content": [
          "The WHERE clause determines which rows should be modified.",
          "Without a WHERE clause, the UPDATE statement can modify every row in the table. Therefore, WHERE should be used carefully when only selected records should be changed."
        ],
        "examples": [
          {
            "title": "Targeted Update",
            "code": "UPDATE students\r\nSET age = 20\r\nWHERE id = 5;",
            "output": "Only the record with id 5 is changed."
          }
        ]
      },
      {
        "number": "05",
        "title": "Updating Data Through PHP",
        "content": [
          "PHP can execute an UPDATE statement using the mysqli connection object."
        ],
        "examples": [
          {
            "title": "Update Record Using PHP",
            "code": "<?php\r\nrequire_once \"config/database.php\";\r\n$sql = \"UPDATE students\r\n        SET age = 24\r\n        WHERE id = 5\";\r\nif ($conn->query($sql)) {\r\n        echo \"Student updated successfully.\";\r\n} else {\r\n        echo \"Update failed: \" . $conn->error;\r\n}\r\n$conn->close();\r\n?>",
            "output": "Student updated successfully."
          }
        ]
      },
      {
        "number": "06",
        "title": "Prepared UPDATE Statement",
        "content": [
          "When updated values come from user input, a prepared statement should be used so that values are passed separately from the SQL command."
        ],
        "examples": [
          {
            "title": "Update Using Prepared Statement",
            "code": "<?php\r\nrequire_once \"config/database.php\";\r\n$id = 5;\r\n$new_age = 23;\r\n$sql = \"UPDATE students\r\n        SET age = ?\r\n        WHERE id = ?\";\r\n$stmt = $conn->prepare($sql);\r\n$stmt->bind_param(\"ii\", $new_age, $id);\r\nif ($stmt->execute()) {\r\n        echo \"Student age updated successfully.\";\r\n} else {\r\n        echo \"Update failed: \" . $stmt->error;\r\n}\r\n$stmt->close();\r\n$conn->close();\r\n?>",
            "output": "Student age updated successfully."
          }
        ]
      },
      {
        "number": "07",
        "title": "DELETE Statement",
        "content": [
          "The DELETE statement removes existing records from a table.",
          "Like UPDATE, DELETE should normally use a WHERE condition when only selected records should be removed."
        ],
        "syntax": [
          "DELETE FROM table_name",
          "WHERE condition;"
        ],
        "examples": [
          {
            "title": "Delete One Student",
            "code": "DELETE FROM students\r\nWHERE id = 8;",
            "output": "The student record with ID 8 is removed."
          }
        ]
      }
    ]
  },
  "functions": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Functions in PHP",
    "intro": "A function is a reusable block of code that performs a specific task. Functions help organize a PHP program and avoid repeating the same statements.",
    "sections": [
      {
        "number": "01",
        "title": "What is a Function?",
        "content": [
          "A function is a named block of statements that can be called whenever its task is required. PHP includes built-in functions and also allows programmers to create user-defined functions."
        ]
      },
      {
        "number": "02",
        "title": "Defining and Calling a Function",
        "content": [
          "A user-defined function is declared with the function keyword. Its code runs when the function is called by its name."
        ],
        "syntax": [
          "function functionName() { statements; }",
          "functionName();"
        ],
        "examples": [
          {
            "title": "Simple function",
            "code": "<?php\nfunction greet() {\n    echo \"Welcome to PHP\";\n}\ngreet();\n?>",
            "output": "Welcome to PHP"
          }
        ]
      },
      {
        "number": "03",
        "title": "Function Parameters and Arguments",
        "content": [
          "Parameters are variables written in the function definition. Arguments are the actual values supplied when the function is called."
        ],
        "syntax": [
          "function add($a, $b) { ... }",
          "add(5, 3);"
        ],
        "examples": [
          {
            "title": "Function with parameters",
            "code": "<?php\nfunction add($a, $b) {\n    echo $a + $b;\n}\nadd(5, 3);\n?>",
            "output": "8"
          }
        ]
      },
      {
        "number": "04",
        "title": "Return Statement",
        "content": [
          "The return statement sends a result back to the place where the function was called. A returned value can be stored in a variable or used in an expression."
        ],
        "syntax": [
          "return expression;"
        ]
      },
      {
        "number": "05",
        "title": "Types of PHP Functions",
        "content": [
          "Built-in functions are provided by PHP, such as strlen(), count() and date(). User-defined functions are written by the programmer for a particular task."
        ]
      }
    ]
  },
  "arrays": {
    "unit": "02",
    "unit_title": "PHP Programming",
    "title": "Arrays in PHP",
    "intro": "An array stores multiple values in a single variable. PHP supports indexed, associative and multidimensional arrays.",
    "sections": [
      {
        "number": "01",
        "title": "What is an Array?",
        "content": [
          "An array is a variable that can hold more than one value. Each value is stored as an element and can be accessed using its key or index."
        ]
      },
      {
        "number": "02",
        "title": "Indexed Arrays",
        "content": [
          "An indexed array uses numeric indexes, starting from 0 by default."
        ],
        "syntax": [
          "$colors = array(\"Red\", \"Green\", \"Blue\");",
          "echo $colors[0];"
        ],
        "examples": [
          {
            "title": "Indexed array",
            "code": "<?php\n$colors = [\"Red\", \"Green\", \"Blue\"];\necho $colors[0];\n?>",
            "output": "Red"
          }
        ]
      },
      {
        "number": "03",
        "title": "Associative Arrays",
        "content": [
          "An associative array uses named keys instead of numeric indexes."
        ],
        "syntax": [
          "$student = [\"name\" => \"Aman\", \"age\" => 20];",
          "echo $student[\"name\"];"
        ]
      },
      {
        "number": "04",
        "title": "Multidimensional Arrays",
        "content": [
          "A multidimensional array contains one or more arrays as its elements. It is useful for representing rows and columns of related data."
        ]
      },
      {
        "number": "05",
        "title": "Traversing an Array",
        "content": [
          "The foreach loop is commonly used to access every element of an array. The count() function returns the number of elements."
        ],
        "syntax": [
          "foreach ($array as $value) { ... }",
          "count($array);"
        ]
      }
    ]
  }
};
