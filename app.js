let show = document.querySelector(".show")


if (window.innerWidth < 767) {

    show.addEventListener('mouseover', _ => {
        document.querySelector(".mune").style.display = "block"
    })

    document.addEventListener("click", (e) => {

        if (e.target.id === "show" || e.target.id === "bars") {
            document.querySelector(".mune").style.display = "block"
        }
        else {
            document.querySelector(".mune").style.display = "none"
            console.log("ss")
        }

    })
}


let images = ["image/img2.jpg", "image/img3.jpg", "image/44.jpg", "image/55.jpg"];


setInterval(() => {
    let randomImage = Math.floor(Math.random() * images.length);
    document.getElementById("back").src = images[randomImage]
}, 5000)



let imagesName = document.querySelectorAll(".costmuer-image img");



if (window.innerWidth < 767) {
    imagesName.forEach(el => {
        el.classList.remove("active")
        if (el.className === "last") {
            el.classList.add("active");

            document.getElementById("chang-name").textContent = "Hassan G"
        }



    })
}


let listItem = document.querySelectorAll(".main .container ul li");

let products = document.querySelectorAll(".main .container .product .my-photo");



listItem.forEach(li => {
    li.onclick = function () {
        listItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        const value = li.textContent;
        console.log(value);
        products.forEach(product => {
            product.style.display = "none";
            if (product.getAttribute("data-filter") === value.toLowerCase() || value === "All") {
                product.style.display = "block";
            }
        })
    }
})



let toTop = document.querySelector(".to-top");


window.onscroll = function () {
    if (window.scrollY >= 1383) {
        toTop.style.display = "inline"
    } else {
        toTop.style.display = "none"
    }
}

toTop.addEventListener("click", _ => {
    window.scrollTo(0, 0)
})

