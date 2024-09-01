var scrollMessage = document.getElementById("scrollMessage");

    function hideScrollMessage() {
    scrollMessage.style.visibility = "hidden";
    window.removeEventListener("scroll", hideScrollMessage);
    }

    function showScrollMessage() {
    scrollMessage.style.visibility = "visible";
    }

    function handleScroll() {
    if (window.scrollY > 0) {
        hideScrollMessage();
    } else {
        showScrollMessage();
    }
    }

    window.addEventListener("scroll", handleScroll);
    showScrollMessage();

    var options = document.getElementById("options")

    function showMenu(){
        options.style.left = '0';
    }

    function hideMenu(){
        options.style.left = '-200px';
    }