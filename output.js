
let t = new URLSearchParams(window.location.search);
let x = t.get("value")
let y = t.get("value").length;
let ans = "";
for(let i=1; i<y; i++)
{
    ans += x[i];
}


if(x[0]=="0")
    document.getElementById("yoyo").innerHTML = "The synonyms are : " + ans; 

if(x[0]=="1")
    document.getElementById("yoyo").innerHTML = "The antonyms are : " + ans; 

if(x[0]=="2")
    document.getElementById("yoyo").innerHTML = "The definition is : " + ans;

if(x[0]=="3")
    document.getElementById("yoyo").innerHTML = "The examples are : " + ans;