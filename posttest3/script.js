var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
    if (menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
// alert("Tekan OK untuk menyetujui Syarat dan Ketentuan dari situs ini")
// var nama = prompt("Ketik nama:")
// alert("Selamat Datang di Playstation Game Store, " + nama + "!")

const tombolBeli = document.getElementById('buynow');
const tombolKeranjang = document.getElementById('addCart');

tombolBeli.addEventListener("click",
    function(){
        alert("Mohon maaf, tombol Beli Sekarang belum dapat digunakan. Situs sedang dalam masa pengembangan.");
    },
)
tombolKeranjang.addEventListener("click",
    function(){
        alert("Mohon maaf, tombol Add to Cart belum dapat digunakan. Situs sedang dalam masa pengembangan.");
    },
)

