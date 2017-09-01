class httpClient
{
    constructor()
    {
        this.url = "http://localhost:3000/products";
        this.http = new XMLHttpRequest();
        this.http.withCredentials = true;
        this.method;
        this.data;
    }

    get(id=null,q="")
    {
        var that = this;
        
        that.method = "get";
        if (id == null)
            {
                if (q=="")
                    this.url = "http://localhost:3000/products";
                else
                   this.url = "http://localhost:3000/products?q="+q;

            }
        else
            this.url = "http://localhost:3000/products/" + id;

        return new Promise(function(resolve,reject){
            that.http.open(that.method,that.url);
            that.http.setRequestHeader("content-type","application");
            that.http.onload = function()
            {
                if (that.http.status == 200)
                    {
                        resolve(that.http.response);
                    }
                else
                    {
                        reject(that.http.statusText);                                
                    }
            };

            that.http.onerror = function()
            {
                    reject("Netwrok error");
            }

            that.http.send();

        });
    }

    post(data)
    {
            this.url = "http://localhost:3000/products/";
            this.method = "POST";
            var that = this;
            data = JSON.stringify(data);
        return new Promise(function(resolve,reject){
            that.http.open(that.method,that.url);
            that.http.setRequestHeader("content-type","application/json");
            that.http.onload = function()
            {
                if (that.http.status == 200)
                    {
                        
                        resolve(that.http.response);
                    }
                else
                    {
                        reject(that.http.statusText);                                
                    }
            };

            that.http.onerror = function()
            {
                    reject("Netwrok error");
            }

            that.http.send(data);

        });
    }
    
        put(data,id)
        {
                this.url = "http://localhost:3000/products/"+ id;
                this.method = "put";
                var that = this;
                data = JSON.stringify(data);
            return new Promise(function(resolve,reject){
                that.http.open(that.method,that.url);
                that.http.setRequestHeader("content-type","application/json");
                that.http.onload = function()
                {
                    if (that.http.status == 200)
                        {
                            resolve(that.http.response);
                        }
                    else
                        {
                            reject(that.http.statusText);                                
                        }
                };
    
                that.http.onerror = function()
                {
                        reject("Netwrok error");
                }
    
                that.http.send(data);
    
            });
        }

        delete(id)
        {
                this.url = "http://localhost:3000/products/"+id;
                this.method = "delete";
                var that = this;
            return new Promise(function(resolve,reject){
                that.http.open(that.method,that.url);
                that.http.setRequestHeader("content-type","application/json");
                that.http.onload = function()
                {
                    if (that.http.status == 200)
                        {
                    
                            resolve(that.http.response);
                        }
                    else
                        {
                            reject(that.http.statusText);                                
                        }
                };
    
                that.http.onerror = function()
                {
                        reject("Netwrok error");
                }
    
                that.http.send();
    
            });
        }
}


