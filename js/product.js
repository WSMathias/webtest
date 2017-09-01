

class Product{
    constructor()
    {
        this.data;
        this.request = new httpClient();
    }

    search(str)
    {
        this.request.get(null,str).then(function(response)
        {
            response = JSON.parse(response);
            document.getElementsByClassName('list')[0].childNodes[1].innerHTML = "";
            for (i=0;i<response.length;i++)
                {
                    var alt = (Math.floor((Math.random() * 10) + 1)%3==0?"alt-div":"");
                    var html = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    
                    
                    <div class="demo-content `+ alt +`">
                    <div class="close float-right" id="showdelete">X</div> 
                    
                    <input type="hidden" value="`+ response[i].id +`" id="id">
                            
                            <div class="row item">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                        <div class="imagecontainer text-center">    
                                          <img src="https://www.w3schools.com/tags/img_pulpit.jpg" class="img-rounded"/>
                                        </div>
                                    </div>
                            </div>
                            
                            <div class="row item">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                          <div class="image-desc text-center">
                                                <h3>` + response[i].name + `<br>
                                                    <small>` + response[i].description + `</small>
                                                </h3>
                                          </div>
                                    </div>
                                    
                            </div>              
                            <div class="row">
                                <div id="showedit" class="btn btn-primary float-right"><span class="glyphicon glyphicon-edit"></span></div>                      
                            </div>
                    </div>
                    
                </div>`;

                 
                if (response[i].name != undefined)
                    {
                        document.getElementsByClassName('list')[0].childNodes[1].innerHTML+=html;
                    }  
                }
                if (response.length == 0)
                    document.getElementsByClassName('list')[0].childNodes[1].innerHTML = "    <h1> No products available</h1>    ";
        });
    }

    show_all()
    {
        this.request.get().then(function(response)
        {
            response = JSON.parse(response);
            if(response.length >1)
            document.getElementsByClassName('list')[0].childNodes[1].innerHTML = "";
             
            for (i=0;i<response.length;i++)
                {
                    var alt = (Math.floor((Math.random() * 10) + 1)%3==0?"alt-div":"");
                    var html = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    
                    
                    <div class="demo-content `+ alt +`">
                    <div class="close float-right" id="showdelete">X</div> 
                    
                    <input type="hidden" value="`+ response[i].id +`" id="id">
                            
                            <div class="row item">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                        <div class="imagecontainer text-center">    
                                          <img src="https://www.w3schools.com/tags/img_pulpit.jpg" class="img-rounded"/>
                                        </div>
                                    </div>
                            </div>
                            
                            <div class="row item">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                          <div class="image-desc text-center">
                                                <h3>` + response[i].name + `<br>
                                                    <small>` + response[i].description + `</small>
                                                </h3>
                                          </div>
                                    </div>
                                    
                            </div>              
                            <div class="row">
                                <div id="showedit" class="btn btn-primary float-right"><span class="glyphicon glyphicon-edit"></span></div>                      
                            </div>
                    </div>
                    
                </div>`;

                 if (response[i].name != undefined)
                    {
                        document.getElementsByClassName('list')[0].childNodes[1].innerHTML+=html;
                    }
                   
                }
                

     var category = [];
                var j;
     for (i=1;i<response.length;i++)
        {
           var count=0;
            for (j in category)
                {
                    if (response[i].category == category[j])
                        count++;
                }
                if (count==0)
                       category.push(response[i].category);
  
        }

        var list = document.getElementsByClassName('category-list')[0];
        list.innerHTML="";
           for (j in category)
            {
                    list.innerHTML += `<li><a href="#">`+ category[j] +`</a></li>`; 
            }
        });
    }

    show_one(id)
    {
        this.request.get(id,"").then(function(response)
        {
            response = JSON.parse(response);
            
            document.getElementById("pname").innerHTML=response.name;
            document.getElementById("pdesc").innerHTML=response.description;
            document.getElementById("showid").value=response.id;            
            
        }
                
        );
    }

    
    create(data)
    {
        this.request.post(data).then(function(response)
        {
             window.location = "../index/index.html";
        },function(response)
        {
            window.location = "../index/index.html";
        }); 
    }

    edit(data,id)
    {
        this.request.put(data,id).then(function(response)
        {
            window.location = "../index/index.html";
        },function()
        {
            window.location = "../index/index.html";
        }); 
    }

    delete(id)
    {
        this.request.delete(id).then(function(response)
        {
            window.location = "../index/index.html";
        },function()
        {
            window.location = "../index/index.html";
        }); 
    }

    loadeditdata(id)
    {
        this.request.get(id).then(function(response)
        {
            response = JSON.parse(response);
            console.log(response);
            $("form #inputName").val(response.name);
            $("form #inputDescription").val(response.description);
            $("form #inputCategory").val(response.category);
        }); 
    }

    loadcategorydata(str)
    {
        this.request.get().then(function(response)
        {
            var i;
            var list = [];
            response = JSON.parse(response);
            for (i=1;i<response.length;i++)
                {
                    
                    if (response[i].category.indexOf(str)!= -1)
                        {
                            list.push(response[i].category);
                        }
                }


        $(".category-list").html("");
                for (i=0;i<list.length;i++)
                    {
                        $(".category-list").append("<li>"+ list[i] +"</li>");
                    }
                    if (str == "")
                        $(".category-list").html("");

        }); 
    }


}





/*class product 
    {

        constructor()
        {
            this.url = "http://localhost:3000/products";
            this.http = new XMLHttpRequest();
            this.http.withCredentials = true;
            this.method = "get";
            this.data ;
        }

        send()
        {
            var that = this;
            return new Promise(function(resolve,reject)
            {
                that.http.open(that.method, that.url);
                that.http.setRequestHeader("content-type", "application/json");
                that.http.onload=function()
                {
                    
                    if (that.http.status == 200)
                        {
                           resolve(that.http.response);
                        }
                    else
                        {
                            reject(Error(that.http.statusText));
                        }
                };   
                
                that.http.onerror = function()
                {
                    reject(Error("Network Error"));
                }
    
                 
                if (that.method == "post" || that.method == "put")
                    {
                        that.http.send(that.data);
                   } 
                 else
                    that.http.send();
                 
            }
            );    
        }

        



        get(id=null)
        {
            if (id != null)
                this.url =  "http://localhost:3000/products/" + id;
            else
                this.url =  "http://localhost:3000/products/";
            this.method = "get";
            

            this.send().then(function(response)
            {
                response = JSON.parse(response);   
                        
                       let length;
                        
                          
                           if (response.length == undefined || response.length == 0)
                            {

                                document.getElementById("pname").innerHTML=response.name;
                                document.getElementById("pdesc").innerHTML=response.description;
                                document.getElementById("showid").value=response.id;

                            }
                            else 
                            {
                       document.getElementsByClassName('list')[0].childNodes[1].innerHTML = "";
                                for (i=0;i<response.length;i++)
                                    {
                                        var alt = (Math.floor((Math.random() * 10) + 1)%3==0?"alt-div":"");
                                        var html = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                        
                                        <div class="demo-content item `+ alt +`">
                                        <input type="hidden" value="`+ response[i].id +`" id="id">
                                                <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                            <div class="imagecontainer text-center">    
                                                              <img src="https://www.w3schools.com/tags/img_pulpit.jpg" class="img-rounded"/>
                                                            </div>
                                                        </div>
                                                </div>
                                                
                                                <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                                              <div class="image-desc text-center">
                                                                    <h3>` + response[i].name + `<br>
                                                                        <small>` + response[i].description + `</small>
                                                                    </h3>
                                                              </div>
                                                        </div>
                                                </div>                                    
                                        </div>
                                    </div>`;
        
                                      document.getElementsByClassName('list')[0].childNodes[1].innerHTML+=html;
        
                                    }
                            
                            }
                return response;
            },function(error)
            {
                console.log(error);      
            });
        }

        post(name,description)
        {
            
            this.url =  "http://localhost:3000/products";
            this.data = JSON.stringify({"name" : name,"description" : description});
            this.method = "post";
            
            this.send().then(function(response)
            {
                        alert("succesfully created");
            },function(error)
            {
                console.log(error);      
            });
        }



        put(id,name,description)
        {
            
            this.url =  "http://localhost:3000/products/" + id ;
            this.data = JSON.stringify({"name" : name,"description" : description});
            this.method = "put";
            
            this.send().then(function(response)
            {
                        alert("succesfully updated");
            },function(error)
            {
                console.log(error);      
            });
        }

        delete(id)
        {
            
            this.url =  "http://localhost:3000/products/" + id ;
            this.method = "delete";
            
            this.send().then(function(response)
            {
                        alert("succesfully deleted");
            },function(error)
            {
                console.log(error);      
            });
        }


    }

*/