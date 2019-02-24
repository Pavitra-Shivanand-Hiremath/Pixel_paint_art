window.onload = function(){

var grid_dimension = document.getElementById("submit");     
grid_dimension.addEventListener('click',function(){

    var heights, widths;
    heights = document.getElementById("height").value;
    widths = document.getElementById("width").value;
   // window.alert("The height is "+ heights+ " with width as "+ widths);
    addGrid(heights,widths);

    function addGrid(x,y){        
        for( var i = 1; i<=x; i++){
            var grid_height = document.createElement("tr");
            grid_height.setAttribute("id", "row"+i);
            document.getElementById("canvas").appendChild(grid_height);
            for(var j = 1; j<=y; j++){
                var grid_width = document.createElement("td");
                document.getElementById("row"+i).appendChild(grid_width);
            }
        }
        
    
    var color_selector = document.getElementById("colors").value; 
    var cell_selector = document.getElementsByTagName("td");
    var clear_btn = document.getElementById("clear_screen");
    clear_btn.addEventListener('click', function(){
        for(var n = 0; n<cell_selector.length; n++){
            cell_selector[n].style.backgroundColor = "#ffffff";
        }
    })
    for(var m = 0; m < cell_selector.length; m++){
        cell_selector[m].addEventListener('click',function(){
             var color_selector = document.getElementById("colors").value; 
            this.style.backgroundColor = color_selector;
            
            
    });
  
}

} 

})    


}