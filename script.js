function addNewEdu() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edu");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter more");

    let edob = document.getElementById("ed");
    let eduButtonob = document.getElementById("eduButton");

    edob.insertBefore(newNode, eduButtonob);
}
function addNewWork() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workex");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter more");

    let weob = document.getElementById("we");
    let workButtonob = document.getElementById("workButton");

    weob.insertBefore(newNode, workButtonob);
}
function addNewSkill() {
    var newNode = document.createElement("input");
    newNode.type = "text";

    newNode.classList.add("form-control");
    newNode.classList.add("skill");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter more");
    let skob = document.getElementById("sk");
    let skillButtonob = document.getElementById("skillButton");

    skob.insertBefore(newNode, skillButtonob);
}

function addNewAchieve() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ach");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter more");

    let acob = document.getElementById("ac");
    let achieveButtonob = document.getElementById("achieveButton");

    acob.insertBefore(newNode, achieveButtonob);
}
function addNewLang() {
    var newNode = document.createElement("input");
    newNode.type = "text";

    newNode.classList.add("form-control");
    newNode.classList.add("lang");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter more");
    let lnob = document.getElementById("ln");
    let langButtonob = document.getElementById("langButton");

    lnob.insertBefore(newNode, langButtonob);
}
function addNewProject(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pro");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter more");

    let prob = document.getElementById("pr");
    let proButtonob = document.getElementById("proButton");

   prob.insertBefore(newNode, proButtonob);
}

function generateCV() {
    let name = document.getElementById("name").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = name;
    document.getElementById("phnoT").innerHTML = document.getElementById("phno").value;
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
    document.getElementById("addrT").innerHTML = document.getElementById("addr").value;
    let bd = document.getElementById("bd").value;
    let bdT = document.getElementById("bdT").value;
    document.getElementById("bdT").innerHTML = bd;

    let linkid = document.getElementById("linkid").value;
    document.getElementById("linkidT").setAttribute("href", linkid);
    document.getElementById("linkidT").innerHTML = document.getElementById("linkid").value;

    document.getElementById("obT").innerHTML = document.getElementById("ob").value;
    //   multiple datas

    let edua = document.getElementsByClassName("edu");
    let s = '';
    for (let i of edua) {
        s = s + `<li> ${i.value} </li>`;
    }
    document.getElementById("edT").innerHTML = s;

    let worka = document.getElementsByClassName("workex");
    s = '';
    for (let i of worka) {
        s = s + `<li> ${i.value} </li>`;
    }
    document.getElementById("weT").innerHTML = s;

    let acha = document.getElementsByClassName("ach");
    s = '';
    for (let i of acha) {
        s = s + `<li> ${i.value} </li>`;
    }
    document.getElementById("acT").innerHTML = s;

    let langa = document.getElementsByClassName("lang");
    s = '';
    for (let i of langa) {
        s = s + `<li> ${i.value} </li>`;
    }
    document.getElementById("lnT").innerHTML = s;

    let skilla = document.getElementsByClassName("skill");
    s = '';
    for (let i of skilla) {
        s = s + `<li> ${i.value} </li>`;
    }
    document.getElementById("skT").innerHTML = s;

    let f = document.getElementById("pic").files[0];
    let r = new FileReader();
    r.readAsDataURL(f);
    r.onloadend = function () {
        document.getElementById("picT").src = r.result;
    }
    let pra = document.getElementsByClassName("pro");
    s = '';
    for (let i of pra) {
        s = s + `<li> ${i.value} </li>`;
    }
    document.getElementById("prT").innerHTML = s;

    document.getElementById('cv').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function download() {
    window.print();
}
