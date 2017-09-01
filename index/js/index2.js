$(document).ready(function()
{
  function show_hide(type)
  {
    var show =  document.getElementsByClassName("show")[0].children;
    if (type=="hide")
        {
            
            for(i=0;i<show.length;i++)
                {
                    show[i].style.display="none";
                }
        }
    else
        {

            for(i=0;i<show.length;i++)
                {
                    show[i].style.display="block";
                }
        }
  }

  function list_hide(type)
  {
      document.getElementsByClassName("list")[0].style.display=type;
  }

  show_hide("hide");

    document.getElementsByClassName("show")[0].style.height="auto";
/*    $(".close").click(function()
    {
        $(".show").children().hide();
        $(".list").show();
    });
*/
    document.getElementsByClassName("close")[0].addEventListener("click",function()
    {
        
            show_hide("hide");
            list_hide("block");
    });

    $("body").on("click",".item",function()
    {
        show_product_details
            show_hide("block");
               list_hide("none");          
    });

    class xhr 
    {
        constructor(url,method,data={},id=0)
        {
            if (method == "read_all")
                {
                    this.method = "get";
                    this.url = url + "/";
                }
            else if(method == "create")
                {
                    this.method = "post";
                    this.url = url + "/";
                    this.data = JSON.stringify(data);
                    
                }
            else if(method == "edit")
                {
                    this.method = "put";
                    this.url = url + "/" + id;
                    this.data = JSON.stringify(data);
                }
            else if (method=="delete")
                {
                    this.method = "delete";
                    this.url = url + "/" + id;                    
                }
            else if (method == "read_one")
                {
                    this.method = "get";
                    this.url = url + "/" + id;
               
                }
            this.http = new XMLHttpRequest();
            this.http.withCredentials = true;
                
            
         
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

        execute(type)
        {
            this.send().then(function(response)
            {
                response = JSON.parse(response);
                if ( type=="read_all")
                    {
                       document.getElementsByClassName('list')[0].childNodes[1].innerHTML = "";
                        for (i=0;i<response.length;i++)
                            {
                                console.log(i);
                                var html = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <input type="hidden" value="`+ response[i].id +`">
                                <div class="demo-content item">
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
                        /* for (i=0;i<response.length;i++)
                            {
                                console.log(i);
                                
                                
                            
                            
                            }*/
                    }
                console.log(type +" -  " +response);
                return response;
            },function(error)
            {
                console.log(error);      
            });
        }




    }


    
    function show_product_details (id)
    {
        var request = new xhr("http://localhost:3000/products","read_one",{},id);
        
        request.execute("read_one");
    }

    function show_list()
    {
        var request = new xhr("http://localhost:3000/products","read_all",{});
                
        request.execute("read_all");
    }
    function create(name,description)
    {
        let data = {
            "name" : name,
            "description" : description
        };
        var request = new xhr("http://localhost:3000/products","create",data);
                
        request.execute("create");
    }
    
    function edit(id,name,description)
    {
        let data = {
            "name" : name,
            "description" : description
        };
        var request = new xhr("http://localhost:3000/products","edit",data,id);
                
        request.execute("edit");
    }

    show_list();


});



