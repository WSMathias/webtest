$(document).ready(function()
{
    var shop = new Product();
    var id = String((location.hash.substr(1) != "")?location.hash.substr(1):null);

    shop.loadeditdata(id);

    document.getElementsByClassName("submit")[0].addEventListener('click',function()
    {
        let name = document.getElementById("inputName").value;
        let desc = document.getElementById("inputDescription").value;
        let category = document.getElementById("inputCategory").value;
        
         if(name != "" && desc != "" && id != null)
            {
                
                shop.edit({"name":name,"description":desc,"category" : category},id);

 
            }
    });
});