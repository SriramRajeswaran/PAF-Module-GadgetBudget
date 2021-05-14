
<%@page import="com.Finance"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
 
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/bootstrap.min.js">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/jquery-3.2.1.js"></script>
<script src="Components/Finance.js"></script>
<meta charset="ISO-8859-1">
<title>Finance service</title>
</head>
<body>
	
<div class="container">
<div class="row">
	
	<div class="col-8">
	<form id="formItem" name="formItem">
	
			 finance_Type: 
			<input id="finance Type" name="finance Type" type="text" 
			 class="form-control form-control-sm">
			 
			 <br> cost: 
			<input id="cost" name="cost" type="text" 
			 class="form-control form-control-sm">
			<br>
			 
			<br> account_Type: 
			<input id="account Type" name="account Type" type="text" 
			 class="form-control form-control-sm">
			 
			
			
			
			<input id="btnSave" name="btnSave" type="button" value="Save" 
			 class="btn btn-primary">
			<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
			</form>
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			
			<br>
			<div id="divItemsGrid">
			<%
			Finance itemObj = new Finance();
					out.print(itemObj.readFinance());
			%>	
			</div>
			
			
			
			
	
		</div>

	</div>

</div>
	
</body>
</html>