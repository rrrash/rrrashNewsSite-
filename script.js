function big(element) {
    element.style.fontSize="30px";
}
function small(element) {
    element.style.fontSize="25px";

}
function close_popup() {
    document.querySelector(".popup").style.display="none";
}
function login(name) {
    document.querySelector(".user_profile").style.display="inline";
    document.getElementById("user_name").innerHTML=name;

}
function logout(name) {
    document.querySelector(".user_profile").style.display="none";

}