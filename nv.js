
/*
  高德地图导航插件by SLdragon
  技术交流群：551278936
*/

var krpanoplugin = function () {

    var local = this;
    // save the 'this' pointer from the current plugin object

    var krpano = null;
    // the krpano and plugin interface objects
    var plugin = null;

    var plugincanvas = null;
    // optionally - a canvas object for graphic content
    var plugincanvascontext = null;



    // registerplugin - startup point for the plugin (required)
    // - krpanointerface = krpano interface object
    // - pluginpath = string with the krpano path of the plugin (e.g. "plugin[pluginname]")
    // - pluginobject = the plugin object itself (the same as: pluginobject = krpano.get(pluginpath) )
    local.registerplugin = function (krpanointerface, pluginpath, pluginobject) {
        krpano = krpanointerface;
        plugin = pluginobject;

        // add a from xml callable functions:
		plugin.setdes=setdes;
		plugin.navigation=navigation;
    }
	
	var desLocation;
	var desName;
	
	function setdes(des,name) {
		
		desLocation=des;
		desName=name;
		//alert(desLocation);
		//alert(desName);
    }
	
	function navigation()
    {
      if (navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
      }
      else
      {
        alert("Geolocation is not supported by this browser.");
      }
    }
	
	function showPosition(position)
    {
  	  //alert("http://m.amap.com/?from="+position.coords.latitude+","+position.coords.longitude+"(我的位置)&to="+desLocation+"("+desName+")&type=0");
	  window.location.href="http://m.amap.com/?from="+position.coords.latitude+","+position.coords.longitude+"(我的位置)&to="+desLocation+"("+desName+")&type=0";
    }
    
    function showError(error)
    {
      switch(error.code) 
      {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            x.innerHTML=
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
      }
	}

    // unloadplugin - end point for the plugin (optionally)
    // - will be called from krpano when the plugin will be removed
    // - everything that was added by the plugin (objects,intervals,...) should be removed here
    local.unloadplugin = function () {
        plugin = null;
        krpano = null;
    }
	

	
};
