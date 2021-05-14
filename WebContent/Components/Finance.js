/**
 * 
 */
$(document).ready(function()
{ 
		if ($("#alertSuccess").text().trim() == "") 
		 { 
			$("#alertSuccess").hide(); 
		 } 
		 	$("#alertError").hide(); 
}); 

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
		// Clear alerts---------------------
		 $("#alertSuccess").text(""); 
		 $("#alertSuccess").hide(); 
		 $("#alertError").text(""); 
		 $("#alertError").hide(); 
		 
// Form validation-------------------
var status = validateItemForm(); 
		if (status != true) 
		 { 
			 $("#alertError").text(status); 
			 $("#alertError").show(); 
			 return; 
		 } 
		
		
// If valid------------------------
		var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
		 $.ajax( 
		 { 
		 url : "FinanceAPI", 
		 type : type, 
		 data : $("#formItem").serialize(), 
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onItemSaveComplete(response.responseText, status); 
		 } 
		 });
}); 

function onItemSaveComplete(response, status)
{ 

	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		}
		

		else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		} 
	else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
		
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidItemIDSave").val("");
	$("#formItem")[0].reset();
}
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
		 //$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
	     $("#hidItemIDSave").val($(this).data("investorID"));
		 $("#finance_Type").val($(this).closest("tr").find('td:eq(0)').text()); 
		  $("#cost").val($(this).closest("tr").find('td:eq(3)').text());
		 $("#account_Type").val($(this).closest("tr").find('td:eq(1)').text()); 
		
		 
}); 
	// CLIENT-MODEL================================================================
	function validateItemForm() 
	{ 
	// FINANCETYPE
		if ($("#finance_Type").val().trim() == "") 
		 { 
			return "InsertFinance finance_Type."; 
		 } 
	// ACCOUNTTYPE
		if ($("#account_Type").val().trim() == "") 
		 { 
			return "Insert .account_Type"; 
		 }

	//COST-------------------------------
		if ($("#cost").val().trim() == "") 
		 { 
			return "Insert Finance cost."; 
		 } 
	// is numerical value
var tmpcost = $("#cost").val().trim(); 
		if (!$.isNumeric(tmpcost)) 
		 { 
			return "Insert a numerical value for cost."; 
		 } 
	// convert to decimal price
	$("#cost").val(parseFloat(tmpPrice).toFixed(2)); 


return true; 
}
	
	//REMOVE
	$(document).on("click", ".btnRemove", function(event)
			{ 
			 $.ajax( 
			 { 
			 url : "FinanceAPI", 
			 type : "DELETE", 
			 data : "finance_ID=" + $(this).data("finance_ID"),
			 dataType : "text", 
			 complete : function(response, status) 
			 { 
			 onItemDeleteComplete(response.responseText, status); 
			 } 
		 }); 
});
	
	function onProductDeleteComplete(response, status) {

		if (status == "success") {
			var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success") {
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divItemsGrid").html(resultSet.data);
			}

			else if (resultSet.status.trim() == "error") {
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}

		}

		else if (status == "error") {
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
		}

		else {
			$("#alertError").text("Unknown error while deleting..");
			$("#alertError").show();

		}

	}

