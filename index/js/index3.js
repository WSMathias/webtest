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
              var id = $(this).find("#id").val();
                shop.get(id);             
              show_hide("block");
                 list_hide("none");          
      });

      $(".show").on("click","#showedit",function()
        {   
            let id = document.getElementById("showid").value;
            window.location = "../edit/edit.html#"+id;
        });
    

        $(".show").on("click","#showdelete",function()
        {   
            let id = document.getElementById("showid").value;
            shop.delete(id);
            window.location = "../index/index.html";
        });
      
      var shop = new product();   
          shop.get();    

});



