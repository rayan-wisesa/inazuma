// Button Narukami
const btnnarukami = document.getElementById('readnarukami');
const paragraphnarukami = document.getElementById('paragnarukami');

const narukamiparagraphshow = "Narukami Island (Japanese: 鳴神島 Narukami-jima) is an area located in Inazuma. The area spans across Ritou, its port of entry, to Mt. Yougou which is home to the Grand Narukami Shrine, and on its coast is Inazuma City. It also has a mass of dense forests under the moonlight and underwater ruins alike. It is where the Inazuma Shogunate primarily takes rule, enforcing policies and laws in accordance to the Sakoku Decree. Inazuman public festivals and cultural events are being held here."

    btnnarukami.addEventListener('click', function() {
        paragraphnarukami.textContent=narukamiparagraphshow;
    });


// Button Kannazuka
const btnkannazuka = document.getElementById('readkannazuka');
const paragraphkannazuka = document.getElementById('paragkannazuka');

const kannazukaparagraphshow = "Kannazuka (Japanese: 神無塚 Kanna-dzuka) is an area located in Inazuma. Behind the rocky outcrops lies Mikage Furnace, the largest smelting facility in Inazuma and is also home to the battlefront fortress of the Shogunate's forces. It is considered to be disputed territory between the Inazuma Shogunate and the Watatsumi Army. The area neither belongs to both armies and neither Inazuman faith nor Sangonomiya faith has any influence.[1] For this reason, this area is called Kannazuka, which means the hill where no gods reside.";

    btnkannazuka.addEventListener('click', function() {
        paragraphkannazuka.textContent=kannazukaparagraphshow;
    });

// Button Yashiori

const btnyashiori = document.getElementById('readyashiori');
const paragraphyashiori = document.getElementById('paragyashiori');

const yashioriparagraphshow = "Yashiori Island (Japanese: ヤシオリ島 Yashiori-jima) is an area located in Inazuma. At some point within the last two thousand years, the island was attacked by the Watatsumi Omikami Orobashi no Mikoto, an ancient god who created Watatsumi Island. As a result of the heavy concentration of Tatarigami energy, the island suffers from torrential rainfall and frequent thunderstorms in the open.";

btnyashiori.addEventListener('click', function() {
    paragraphyashiori.textContent=yashioriparagraphshow;
});

const btnwatatsumi = document.getElementById('readnarukami');
const btntsurumi = document.getElementById('readnarukami');
const btnseirai = document.getElementById('readnarukami');




const paragraphwatatsumi = document.getElementById('paragwatatsumi');
const paragraphtsurumi = document.getElementById('paragtsurumi');
const paragraphseirai = document.getElementById('paragseirai');


/* btn.addEventListener('click', function() {
paragnarukami.textContent=narukamiparagraphshow;
});
*/

