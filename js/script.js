function f() {
    try {
        let e = document.getElementById("free_play_form_button");
        "display: none;" !== e.style.cssText && e.click()
    } catch (e) {
        console.error(e)
    }
}

f();