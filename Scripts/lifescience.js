//Rig Details 
var initializeRigDetails = function(){
	if(getParameterByName("RigID") == "") //Check for rig id
		return;
		
	var query = "RigID:" + getParameterByName("RigID");
	query = query + " path:http://demosp2016.bainsight.com/sites/Energy/OilandGas/Lists/Rig/";
	
	//Set the fields to be the properties/columns from the SharePoint List
	var fields =["title","excerpt","ContentSource","API_x0020_Number","Lease_x0020_Name","Latitude","Longitude","Spud_x0020_Date_x002c__x0020_M_x"];
	
	//Query the OIL backend
	var searchQuery = { q: query, cq: '{searchboxquery} FederatorBackends:"Oil"', groupBy: [], firstRow: 0, numberOfResults: 10, fieldsToInclude:fields};
	Coveo.SearchEndpoint.endpoints["default"].search(searchQuery, {}, {queryString:""}).then(function(results){
		var results = results.results;
        
		//get the 1st result and get the properties and initialize the components
        results[0].RigName; 
        results[0].RigLocation; 
        results[0].RigGeo; 
        results[0].RigType; 
        results[0].RigSupervisor; 
        results[0].RigTelephone; 
        
		//TODO: intialize the gauge
            gaugeInit(); 
		//TODO: intialize the map
            initMap(); 
		//TODO: initialize the graph
            graphInit(); 
	});
};


//Assets 

var initializeAssets = function() {
	if(getParameterByName("RigID") == "") //Check for rig id
		return;
		
	var query = "RigID:" + getParameterByName("RigID");
	query = query + " path:http://demosp2016.bainsight.com/sites/Energy/OilandGas/Lists/Assets/";
	
	//Set the fields to be the properties/columns from the SharePoint List
	var fields =["title","excerpt","ContentSource","API_x0020_Number","Lease_x0020_Name","Latitude","Longitude","Spud_x0020_Date_x002c__x0020_M_x"];
	
	//Query the OIL backend
	var searchQuery = { q: query, cq: '{searchboxquery} FederatorBackends:"Oil"', groupBy: [], firstRow: 0, numberOfResults: 10, fieldsToInclude:fields};
	Coveo.SearchEndpoint.endpoints["default"].search(searchQuery, {}, {queryString:""}).then(function(results){
		var results = results.results;
		//iterate through the results and get the columns and init the assets grid
        
        //for loop?
        for (var i = 0; i<results.length; i++) {
            
            //gridInit function   
            gridInit(); 
            
            //Asset Properties 
            results[i].AssetAPINumber; 
            results[i].AssetLeaseName; 
            results[i].AssetLongitude; 
            results[i].AssetLatitude; 
            results[i].AssetSpudDate; 
        }
        
	});
};

//Datasheets 

var initializeDatasheets = function() {
		if(getParameterByName("RigID") == "") //Check for rig id
		return;
		
	var query = "RigID:" + getParameterByName("RigID");
	query = query + " path:http://demosp2016.bainsight.com/sites/Energy/OilandGas/Datasheets%20MSDS/";
	
	//Set the fields to be the properties/columns from the SharePoint List
	var fields =["title","excerpt","ContentSource","API_x0020_Number","Lease_x0020_Name","Latitude","Longitude","Spud_x0020_Date_x002c__x0020_M_x"];
	
	//Query the OIL backend
	var searchQuery = { q: query, cq: '{searchboxquery} FederatorBackends:"Oil"', groupBy: [], firstRow: 0, numberOfResults: 10, fieldsToInclude:fields};
	Coveo.SearchEndpoint.endpoints["default"].search(searchQuery, {}, {queryString:""}).then(function(results){
		var results = results.results;
		//iterate through the results and get the columns and init the assets grid
        
        //for loop?
        for (var i = 0; i<results.length; i++) {
            
            //gridInit function    
            gridInit(); 
            
            //properties 
            results[i].DataSheet; 
            results[i].DataSheetClassification; 
            results[i].DataSheetSupplier;    
        }
	});
};

//Maintenance History 

var initializeMaintainanceHistory= function() {
		if(getParameterByName("RigID") == "") //Check for rig id
		return;
		
	var query = "RigID:" + getParameterByName("RigID");
	query = query + " path:http://demosp2016.bainsight.com/sites/Energy/OilandGas/Lists/Maintenance History/";
	
	//Set the fields to be the properties/columns from the SharePoint List
	var fields =["title","excerpt","ContentSource","API_x0020_Number","Lease_x0020_Name","Latitude","Longitude","Spud_x0020_Date_x002c__x0020_M_x"];
	
	//Query the OIL backend
	var searchQuery = { q: query, cq: '{searchboxquery} FederatorBackends:"Oil"', groupBy: [], firstRow: 0, numberOfResults: 10, fieldsToInclude:fields};
	Coveo.SearchEndpoint.endpoints["default"].search(searchQuery, {}, {queryString:""}).then(function(results){
		var results = results.results;
		//iterate through the results and get the columns and init the assets grid
        
        //for loop?
        for (var i = 0; i<results.length; i++) {
            
            //gridInit   
            gridInit(); 
            
            //Properties 
            results[i].MaintenanceWellAPI; 
            results[i].MaintenanceInspection; 
            results[i].MaintenancePurpose; 
            results[i].MaintenanceViolation; 
            results[i].MaintenanceViolationDate; 
        }
        
	});
};