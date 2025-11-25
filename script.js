function d6(event) {
    const fileInput = document.getElementById('d5');
    const imgView = document.getElementById('imgview');


    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '343px';
            img.style.height = '343px';
            imgView.innerHTML = '';
            imgView.appendChild(img);

        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function addchat1() {
    document.getElementById("contact1").style.marginLeft = "0px";
    document.getElementById("page1").style.marginLeft = "-360px";

}
function cancel1() {
    document.getElementById("contact1").style.marginLeft = "360px";
    document.getElementById("page1").style.marginLeft = "0";
}
function done1() {
    let text1 = document.getElementById("d1").value;
    let length1 = text1.length;
    let text2 = document.getElementById("d2").value;
    let length2 = text2.length;

    if (length1 > 0 && length2 > 0) {
        document.getElementById("contact1").style.marginLeft = "360px";
        document.getElementById("page1").style.marginLeft = "0";

        document.getElementById("chat1").style.display = "block";
        document.getElementById("name1").innerHTML = document.getElementById("d1").value;


        const fileInput = document.getElementById('d5');
        const imgView = document.getElementById('pfp1');

        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '60px';
                img.style.height = '60px';
                img.style.borderRadius = '100%';
                imgView.innerHTML = '';
                imgView.appendChild(img);

            }
            reader.readAsDataURL(fileInput.files[0]);
        }
    } else {
        alert("Name and NEEP are required !")
    }
}








//for body functions

function chat1() {
    document.getElementById("span1").style.marginLeft = "-8px";
    document.getElementById("page1").style.marginLeft = "-360px";

    document.getElementById("n1").innerHTML = document.getElementById("d1").value;

    document.getElementById("neepno1").innerHTML = document.getElementById("d2").value;
    document.getElementById("relation1").innerHTML = document.getElementById("d3").value;
    document.getElementById("sd1").innerHTML=document.getElementById("d4").value;
}
function bb1() {
    document.getElementById("span1").style.marginLeft = "360px";
    document.getElementById("page1").style.marginLeft = "0px";
}

function downbu1() {
    document.getElementById("mibu1").style.display = "none";
    document.getElementById("emibu1").style.display = "block";
    document.getElementById("tbar1").style.height = "200px";
    document.getElementById("smenu").style.transform = "scale(0.0)";

    document.getElementById("neepno1").style.opacity = "100%";
    document.getElementById("relation1").style.opacity = "100%";
    document.getElementById("sd1").style.opacity="100%";
}
function upbu1() {
    document.getElementById("mibu1").style.display = "block";
    document.getElementById("emibu1").style.display = "none";
    document.getElementById("tbar1").style.height = "55px";
    document.getElementById("smenu").style.transform = "scale(0.0)";

    document.getElementById("neepno1").style.opacity = "0%";
    document.getElementById("relation1").style.opacity = "0%";
    document.getElementById("sd1").style.opacity="0%";
}

function more() {
    document.getElementById("smenu").style.transform = "scale(1.0)";
    document.getElementById("mb").style.display="none";
    document.getElementById("cmb").style.display="block";
}
function cmore(){
    document.getElementById("smenu").style.transform = "scale(0.0)";
    document.getElementById("mb").style.display="block";
    document.getElementById("cmb").style.display="none";
}




function msg1(){
    document.getElementById("chatwall1").style.height="310px";
    document.getElementById("msg1").style.marginTop="380px";
    document.getElementById("sendBtn1").style.marginTop="385px";
}
function chatwall1(){
    document.getElementById("chatwall1").style.height="580px";
    document.getElementById("msg1").style.marginTop="655px";
    document.getElementById("sendBtn1").style.marginTop="660px";
    document.getElementById("smenu").style.transform = "scale(0.0)";
    document.getElementById("tbar1").style.height = "55px";
    document.getElementById("neepno1").style.opacity = "0%";
    document.getElementById("relation1").style.opacity = "0%";
    document.getElementById("mibu1").style.display = "block";
    document.getElementById("emibu1").style.display = "none";
    document.getElementById("sd1").style.opacity="0%";
}

function sendBtn1(){
    document.getElementById("sms1").style.display="block";
    document.getElementById("sms1").innerHTML= document.getElementById("msg1").value;
    
    document.getElementById("chatwall1").style.height="580px";
    document.getElementById("msg1").style.marginTop="655px";
    document.getElementById("sendBtn1").style.marginTop="660px";
    document.getElementById("smenu").style.transform = "scale(0.0)";
    document.getElementById("tbar1").style.height = "55px";
    document.getElementById("neepno1").style.opacity = "0%";
    document.getElementById("relation1").style.opacity = "0%";
    document.getElementById("mibu1").style.display = "block";
    document.getElementById("emibu1").style.display = "none";
    document.getElementById("sd1").style.opacity="0%";
    
    document.getElementById("msg1").value="";
}

