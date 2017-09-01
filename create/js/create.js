$(document).ready(function()
{
    var shop = new Product();
    
    $("#inputCategory").keyup(function()
    {
        var category = document.getElementById("inputCategory").value;
       
        shop.loadcategorydata(category);
    });

    $("body").on("click",".category-list li",function()
    {
        document.getElementById("inputCategory").value =$(this).text()
    });

   document.getElementsByClassName("submit")[0].addEventListener('click',function()
    {
        let name = document.getElementById("inputName").value;
        let desc = document.getElementById("inputDescription").value;
        let category = document.getElementById("inputCategory").value;
        
         if(name != "" && desc != "")
            {
                
                shop.create({"name":name,"description":desc,"category" : category});
               
            }
    });
});