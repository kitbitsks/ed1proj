
alert("Welcome to JSON dataset of flipkart !");
alert("------We have dataset of 5 users which have been logged in to the flipkart------");
function display(){
	var mydata = JSON.parse(data);
		for(var i=0;i<mydata.length;i++)
		{
			console.log(mydata[i]);
		}
		alert("please check your console window by inspecting on the browser !!")
}


function findbyindex(){
var mydata = JSON.parse(data);
alert("there are details of interest and buying choices of 5 users!\n1.Sourav\n2.Ravi\n3.Rajshree\n4.Yashshwi\n5.Amit\nPlease Enter the position like 1,2,3....");
var index = prompt("Enter the position of particular entry that you want to find out");
if(index>5 || index<1)
	{alert("Invalid position entered!!");
		return;}
var result2 = JSON.stringify(mydata[index-1]);
alert(result2);
}

function search(namekey, myarray)
{
	var flag=0;
	for(var i=0;i<myarray.length;i++)
	{
		if(myarray[i].username.toUpperCase() === namekey.toUpperCase())
			return myarray[i];
				

	}
	alert("Invalid Name entered !!!");
	return;
}

function findbyname(){
	var mydata = JSON.parse(data);
	alert("there are details of interest and buying choices of 5 users!\n1.Sourav\n2.Ravi\n3.Rajshree\n4.Yashshwi\n5.Amit");
	var name = prompt("Enter the name whose particular entry you want to find out?");
	var result= search(name,mydata)
	var result2 = JSON.stringify(result)
	alert(result2);
}
