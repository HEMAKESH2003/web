function sendmail(){
var params ={
    name:document.getElementById("name").value,
    eamil:document.getElementById("email").value,
    mobile:document.getElementById("mobile").value,
    message:document.getElementById("message").value,

}
emailjs.send("service_llc21zb","template_mv2rdjj",params).then(function(res)
{
    alert("email sent succesfully")
}
)
}