# webtest
This is a small work using Javascript,HTML,CSS,Bootstrap and Jquery to demonstarte CRUD operations using a node server.

REQUIREMENTS : 

1. Node
2. npm
3.JSON server 
4. LAMP server in linux.
-------------------------
Installing Node and npm :  (linux users)
_________________________

1. Type the following command in the terminal :
      sudo apt-get install nodejs
    
2. Type your password if prompted .
3. Enter the follwowing : 
     $ sudo apt-get install npm
     $ sudo ln -s /usr/bin/nodejs /usr/bin/node
4. Now you can check if they are installed properly using : following commands (returns version):
      $ node -v

      $ npm -v

----------------------
INSTALLING JSON SERVER : 
----------------------
1. Enter the following :
      $ npm install -g json-server
                or
      $ sudo npm install -g json-server
2. Now create a folder named "json-server" in any directory of your preference and set the terminal's working directory to that folder.
    eg:  cd json-server
3. Enter the following in the terminal : 
      $ sudo json-server --watch db.json
4. Now , you can use the url to interact with json-server for CRUD operations.

----------------------------------
db.json file in json-server folder
----------------------------------

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}


Here "posts","comments" and "profile|" are the table names.

This can be altered based on your preference.



___________________________________________
EXPECTED OUTPUT
___________________________________________


1. A home page index.html inside
    This displays the list of products avalable with an option to edit and delete on each product.
2. When a product is clicked a popup with compete details and Edit and Delete option appear.
3.  A live search is provided at the top made using javascript XHR .
4.  Edit page with previous data loaded automatically using XHR .
5. A delete option ,which dynamically deletes the product.
6. Index page also has category wise grouing ,which filters the products based on category using live updation.
