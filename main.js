canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 car1_width = 120;
  car1_height = 70;
   car1_image = url ("car1.png");
    car1_x = 10;
     car1_y = 10;
     car2_width = 120;
      car2_height = 70;
       car2_image =url ("car1-Copy.png");
        car2_x = 10;
         car2_y = 100;
         background_image=url ("racing.jpg");
         function add()  {
             background_imgTag = new Image();// Defining an variable with a new image
             background_imgTag.onload = uploadBackground; // setting a funktion, onloading this variable
             background_imgTag.src = background_image // load image


             car1_imgTag = new Image();// Defining an variable with a new image
             car1_imgTag.onload = uploadBackground; // setting a funktion, onloading this variable
             car1_imgTag.src = car1_image // load image


              car2_imgTag = new Image();// Defining an variable with a new image
             car2_imgTag.onload = uploadBackground; // setting a funktion, onloading this variable
             car2_imgTag.src = car2_image // load image
         }
         function uploadBackground () {
             ctx.drawimage(background_imgTag, 0,0, canvas.width, canvas.height);
         }


         function uploadcar1 () {
            ctx.drawimage(car1_imgTag, car1_x,car1_y, car1_width, car1_height);
        }
       
        
        function uploadcar2 () {
            ctx.drawimage(car2_imgTag, car2_x,car2_y, car2_width, car2_height);
        }