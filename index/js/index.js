//import httpClient from "../js/httpClient.js";

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

    document.getElementById("txtSearch").addEventListener("keyup",function()
    {
       var str = this.value;
        shop.search(str);
    });
      
      $("body").on("click",".item",function()
      {
              var id = $(this).parent().find("#id").val();
                shop.show_one(id);             
              show_hide("block");
                 list_hide("none");          
      });

      $("body").on("click","#showedit",function()
        {   
            let id = (document.getElementById("showid").value!=""?document.getElementById("showid").value : $(this).parent().parent().find("#id").val());
            window.location = "../edit/edit.html#"+id;
        });
    

        $("body").on("click","#showdelete",function()
        {   
            let id = (document.getElementById("showid").value!=""?document.getElementById("showid").value : $(this).parent().find("#id").val());
    
            shop.delete(id);
          //  window.location = "../index/index.html";
        });

        $("body").on("click",".category-list li",function()
        {
            category= $.trim($(this).text());
            shop.search(category); 
        });
      
      var shop = new Product();
           
          shop.show_all();     
});



