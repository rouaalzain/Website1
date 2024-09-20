	// calcule daily weekly monthly rent price Page home
	function rentCul(name,value){

		var dallyRent = document.getElementById("custId["+name+"]").value;
		var	totalPrice;

		var tva1 = 1 / 100;
		var tva2 = 5 / 100;
		var photo2;

		if (value == "daily") {
			totalPrice = dallyRent;
		}else if (value == "weekly") {
			totalPrice = dallyRent * 7;
		}else if (value == "monthly") {
			totalPrice = dallyRent * 30;    
		}
		document.getElementById("popupPhoto").src = "imgs/"+name+".png";
		document.getElementById("DailyRent["+name+"]").innerHTML = totalPrice;
		document.getElementById("price").innerHTML = totalPrice;
		document.getElementById("TVA").innerHTML = totalPrice * tva1;
		document.getElementById("TVA2").innerHTML = totalPrice * tva2;

	}
	function alert12(){
		var alertText = document.getElementById("price").innerHTML;
		console.log(alertText);

		alert("Total Price Is : "+alertText);
		
	}





	// popup__________________________________________
function openPopup() {
  document.getElementById("carInfos").style.display = "block";
}


function closePopup() {
  document.getElementById("carInfos").style.display = "none";
}

function checkBoxFollow() {
	var checkBox = document.getElementById("vehicle1");
	if (checkBox.checked == true) {
		document.getElementById("followInfos").style.display = "block";
	}else if (checkBox.checked == false) {
		document.getElementById("followInfos").style.display = "none";
	}
}

//check name_____________________________________________________
function chkName() {
    var myName = document.getElementById("Fname");
    var pos = myName.value.search(
        /[ء-ي]/);
    if (pos != 0) {
        swal("أدخل الاسم باللغة العربية", "", "error");
        myName.focus();
        myName.select();
        return false;
    } else
        return true;
}
//chek date_____________________________________________
function chkDate() {

    var mydate = document.getElementById("date");
    if (!mydate.checkValidity()) {
        swal("أدخل تاريخ صحيح", "", "error");
        mydate.focus();
        mydate.select();
        return false;
    } else
        return true;
}
//test cap
let captcha;
function generate() {
 
    // Clear old input
    document.getElementById("submit").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    let uniquechar = "";
 
    const randomchar =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}
 
function printmsg() {
    const usr_input = document
        .getElementById("submit").value;
 
    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        let s = document.getElementById("key")
            .innerHTML = "Matched";
        generate();
    }
    else {
        let s = document.getElementById("key")
            .innerHTML = "not Matched";
        generate();
    }
}
//slider about page
    var slideIndex = 1;
                showDivs(slideIndex);

                function plusDivs(n) {
                  showDivs(slideIndex += n);
                }

                function showDivs(n) {
                  var i;
                  var x = document.getElementsByClassName("mySlides");
                  if (n > x.length) {slideIndex = 1}
                  if (n < 1) {slideIndex = x.length}
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                  }
                  x[slideIndex-1].style.display = "block";  
                }



