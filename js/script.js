// Button Narukami
const btnnarukami = document.getElementById("readnarukami");
const paragraphnarukami = document.getElementById("paragnarukami");

const narukamiparagraphshow =
  "Narukami Island (Japanese: Narukami-jima) is an area located in Inazuma. The area spans across Ritou, its port of entry, to Mt. Yougou which is home to the Grand Narukami Shrine, and on its coast is Inazuma City. It also has a mass of dense forests under the moonlight and underwater ruins alike. It is where the Inazuma Shogunate primarily takes rule, enforcing policies and laws in accordance to the Sakoku Decree. Inazuman public festivals and cultural events are being held here.";

let narukamiShown = false;

btnnarukami.addEventListener("click", () => {
  narukamiShown = !narukamiShown;

  if (narukamiShown) {
    paragraphnarukami.textContent = narukamiparagraphshow;
  } else {
    paragraphnarukami.textContent = "";
  }
});

// Button Kannazuka
const btnkannazuka = document.getElementById("readkannazuka");
const paragraphkannazuka = document.getElementById("paragkannazuka");

const kannazukaparagraphshow =
  "Kannazuka (Japanese: Kanna-dzuka) is an area located in Inazuma. Behind the rocky outcrops lies Mikage Furnace, the largest smelting facility in Inazuma and is also home to the battlefront fortress of the Shogunate's forces. It is considered to be disputed territory between the Inazuma Shogunate and the Watatsumi Army. The area neither belongs to both armies and neither Inazuman faith nor Sangonomiya faith has any influence. For this reason, this area is called Kannazuka, which means the hill where no gods reside.";

let kannazukaShown = false;

btnkannazuka.addEventListener("click", () => {
  kannazukaShown = !kannazukaShown;

  if (kannazukaShown) {
    paragraphkannazuka.textContent = kannazukaparagraphshow;
  } else {

    paragraphkannazuka.textContent = "";
  }
});

// Button Yashiori

const btnyashiori = document.getElementById("readyashiori");
const paragraphyashiori = document.getElementById("paragyashiori");

const yashioriparagraphshow =
  "Yashiori Island (Japanese: Yashiori-jima) is an area located in Inazuma. At some point within the last two thousand years, the island was attacked by the Watatsumi Omikami Orobashi no Mikoto, an ancient god who created Watatsumi Island. As a result of the heavy concentration of Tatarigami energy, the island suffers from torrential rainfall and frequent thunderstorms in the open.";

let yashioriShown = false;

btnyashiori.addEventListener("click", () => {
  yashioriShown = !yashioriShown;

  if (yashioriShown) {
    paragraphyashiori.textContent = yashioriparagraphshow;
  } else {
    paragraphyashiori.textContent = "";
  }
});

// Button Watatsumi

const btnwatatsumi = document.getElementById("readwatatsumi");
const paragraphwatatsumi = document.getElementById("paragwatatsumi");

const watatsumiparagraphshow =
  "Watatsumi Island (Japanese: Watatsumi-jima) is an area located in Inazuma. Among these islands, it is located the farthest and on the opposite end of Narukami Island. It is known for its dense foliage in breathtaking colors which are distinct from plants found elsewhere.";

let watatsumiShown = false;

btnwatatsumi.addEventListener("click", () => {
  watatsumiShown = !watatsumiShown;

  if (watatsumiShown) {
    paragraphwatatsumi.textContent = watatsumiparagraphshow;
  } else {
    paragraphwatatsumi.textContent = "";
  }
});

// Button Seirai

const btnseirai = document.getElementById("readseirai");
const paragraphseirai = document.getElementById("paragseirai");

const seiraiparagraphshow =
  "Seirai Island (Japanese: Seirai-jima) is an area located in Inazuma. It is said that the island once experienced a calamity and the center of the island was enveloped by a perpetual thunderstorm. This storm has resulted in the unique geography of the island.";

let seiraiShown = false;

btnseirai.addEventListener("click", () => {
  seiraiShown = !seiraiShown;

  if (seiraiShown) {
    paragraphseirai.textContent = seiraiparagraphshow;
  } else {
    paragraphseirai.textContent = "";
  }
});

// Button Tsurumi

const btntsurumi = document.getElementById("readtsurumi");
const paragraphtsurumi = document.getElementById("paragtsurumi");

const tsurumiparagraphshow =
  "Tsurumi Island (Japanese: Tsurumi) is an area located in Inazuma.Shrouded in a dense Fog, Tsurumi Island was home to two ancient civilizations. One buried deep underground, before the time of the Thunderbird's reign, known as the Pre-Thunderbird Civilization. The other coming some time after, the civilization where a tribe worshipped Kanna Kapatcir (becoming known as the Thunderbird Civilization) and were subsequently wiped out by it. The land has since somewhat regrown and is now inhabited by hilichurls, riftwolves and automatons.";

let tsurumiShown = false;

btntsurumi.addEventListener("click", () => {
  tsurumiShown = !tsurumiShown;

  if (tsurumiShown) {
    paragraphtsurumi.textContent = tsurumiparagraphshow;
  } else {
    paragraphtsurumi.textContent = "";
  }
});
