const btnsRef = document.querySelectorAll("button");



btnsRef.forEach((btn) => {

    btn.addEventListener("click", () => {

        console.log("Button Clicked: " + btn.textContent);

    });

});




