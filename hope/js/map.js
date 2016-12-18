var myCenter=new google.maps.LatLng(35.0383289,-80.6937068);
    var charlotte=new google.maps.LatLng(35.1498909,-80.8360379);
    var charleston=new google.maps.LatLng(32.9290809,-80.07004);
    var greenville=new google.maps.LatLng(34.8199439,-82.2888926);

    function initialize()
    {
        var mapProp = {
          center:myCenter,
          zoom:7,
          mapTypeId:google.maps.MapTypeId.ROADMAP
          };

        var map=new google.maps.Map(document.getElementById("gmap"),mapProp);

        //Markers
        var CLTmarker=new google.maps.Marker({
          position:charlotte
          });
        
        var CTONmarker=new google.maps.Marker({
            position:charleston
        });
        
        var GVILLEmarker=new google.maps.Marker({
            position:greenville
        });

        CLTmarker.setMap(map);
        CTONmarker.setMap(map);
        GVILLEmarker.setMap(map);
        
        //Info Windows
        var CLTinfo=new google.maps.InfoWindow({
            content: '<img src="http://placehold.it/60/999" alt="placeholder" class="locationimage" />6230 Fairview Rd Suite 290<br /> Charlotte, NC 28210<br /> Office: 980.335.0066<br /> Fax: 980.335.0113<br /> <a class="directions" target="_blank" href="https://www.google.com/maps/dir//6230+Fairview+Rd,+Charlotte,+NC+28210/@35.1498908,-80.8406513,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88569e6bb3f5ca4f:0x27bbd0f7d1eb881!2m2!1d-80.8360379!2d35.1498909" id="get_location">Get Directions ></a>'
        });
        
        var CTONinfo=new google.maps.InfoWindow({
            content: '<img src="http://placehold.it/60/999" alt="placeholder" class="locationimage" />3255 Landmark Dr Suite 301<br /> Charleston, SC 29418<br /> Office: 843.789.3984<br /> Fax: 843.789.3987<br /> <a class="directions" target="_blank" href="https://www.google.com/maps/dir//Landmark+Dr,+North+Charleston,+SC+29418/@32.9297516,-80.0778302,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88fe62476628e247:0xf22d2179cabb4602!2m2!1d-80.0686033!2d32.9297519">Get Directions ></a>'
        });
        
        var GVILLEinfo=new google.maps.InfoWindow({
            content: '<img src="http://placehold.it/60/999" alt="placeholder" class="locationimage" />1200 Woodruff Rd Suite A3<br /> Greenville, SC 29627<br /> Office: 864.423.5360<br /> Fax: 1.877.676.0748<br /> <a class="directions" target="_blank" href="https://www.google.com/maps/dir//1200+Woodruff+Rd,+Greenville,+SC+29607/@34.8199439,-82.2888926,17z/data=!4m13!1m4!3m3!1s0x8858286b05f3e717:0xd7ff4c69cee18b2!2s1200+Woodruff+Rd,+Greenville,+SC+29607!3b1!4m7!1m0!1m5!1m1!1s0x8858286b05f3e717:0xd7ff4c69cee18b2!2m2!1d-82.2888926!2d34.8199439">Get Directions ></a>'
        });
        
        google.maps.event.addListener(CLTmarker, 'click', function() {
            CLTinfo.open(map, CLTmarker)
        });
        
        google.maps.event.addListener(CTONmarker, 'click', function() {
           CTONinfo.open(map, CTONmarker) 
        });
        
        google.maps.event.addListener(GVILLEmarker, 'click', function() {
           GVILLEinfo.open(map, GVILLEmarker) 
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);