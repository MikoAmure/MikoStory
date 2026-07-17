const komik = [
{
judul: "Solo Leveling",
chapter: "Chapter 201",
gambar: "https://picsum.photos/300/420?1"
},
{
judul: "One Piece",
chapter: "Chapter 1155",
gambar: "https://picsum.photos/300/420?2"
},
{
judul: "Blue Lock",
chapter: "Chapter 312",
gambar: "https://picsum.photos/300/420?3"
},
{
judul: "Kaiju No. 8",
chapter: "Chapter 128",
gambar: "https://picsum.photos/300/420?4"
},
{
judul: "Jujutsu Kaisen",
chapter: "Chapter 271",
gambar: "https://picsum.photos/300/420?5"
},
{
judul: "Chainsaw Man",
chapter: "Chapter 210",
gambar: "https://picsum.photos/300/420?6"
}
];

const daftar = document.querySelector(".comic-list");

komik.forEach(item => {
    daftar.innerHTML += `
    <div class="card">
        <img src="${item.gambar}" alt="${item.judul}">
        <h3>${item.judul}</h3>
        <p>${item.chapter}</p>
    </div>
    `;
});
