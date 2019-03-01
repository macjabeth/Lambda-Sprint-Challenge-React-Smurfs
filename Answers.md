_Explain the differences between `client-side routing` and `server-side routing`._

When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user and it causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. And most importantly, it won't cause the whole page to reload.

_What does HTTP stand for?_

HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

_What does CRUD stand for?_

CRUD stands for Create, Retrieve/Read, Update/Modify, and Delete/Destroy which are the four basic functions of persistent storage.

_Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers._

The HTTP methods we use when interfacing with APIs/Servers are GET, POST, PUT and DELETE.

_Mention three tools we can use to make AJAX requests_

- Axios
- Fetch
- `jQuery.ajax`?
