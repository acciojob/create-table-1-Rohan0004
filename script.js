function insert_Row() {
    //Write your code here
	let tableRef=document.getElementById("sampleTable");
	let row = document.createElement("tr");
	let col1=row.insertCell(0);
	let col2=row.insertCell(1);
	col1.innerHTML="<td>New Cell1</td>";
	col2.innerHTML="<td>New Cell2</td>";
	let fchild = tableRef.childNodes[0];
    fchild.before(row);
}
