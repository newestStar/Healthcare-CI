function selectList(e,t,n){var o='<select id="'+t.replace(/\s+/g,"")+'" name="'+n.replace(/\s+/g,"")+'">',i=e[t];o+="<option>Click to select</option>";for(key in i)o+='<option value="'+key+'">'+key+"</option>";o+="</select>";var s=document.getElementById(n);s.innerHTML+=o}function selectListArray(e,t,n){var o='<select id="'+t.replace(/\s+/g,"")+'" name="'+n.replace(/\s+/g,"")+'">',s=e[t];for(o+="<option>Click to select</option>",i=0;i<s.length;i++)o+='<option value="'+s[i]+'">'+s[i]+"</option>";o+="</select>";var c=document.getElementById(n);c.innerHTML+=o}var xmlhttp=new XMLHttpRequest,url="services/medical-diagnosis/data/diagnosis.json";selection="",xmlhttp.onreadystatechange=function(){4==xmlhttp.readyState&&200==xmlhttp.status&&(diagnosisJSON=JSON.parse(xmlhttp.responseText),selectList(diagnosisJSON,"pathologies-section","category"))},xmlhttp.open("GET",url,!0),xmlhttp.send(),$(document).on("click",function(){$(document).ready(function(){$("#pathologies-section").change(function(){selection=this.value,document.getElementById("subcategory").innerHTML="<h5>Please select a sub-category for "+selection+" below:</h5><br>",document.getElementById("diagnosis").innerHTML="",selectList(diagnosisJSON["pathologies-section"],selection,"subcategory")})})}),$(document).on("click",function(){$(document).ready(function(){$("#"+selection.replace(/\s+/g,"")).change(function(){var e=this.value;document.getElementById("diagnosis").innerHTML="<h5>Please select a sub-category for "+e+" below:</h5><br>",selectListArray(diagnosisJSON["pathologies-section"][selection],e,"diagnosis"),document.getElementById("submit_form").innerHTML='<input type="submit" value="Submit">'})})});