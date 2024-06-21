const images = [
    { src: '20221118_132022.jpg', comment: 'first picture of snebs that ive ever taken 😱' },
    { src: '20230608_173859.jpg', comment: 'prom with sneby baby' },
    { src: '20230608_173934.jpg', comment: 'queen is flipping niks off' },
    { src: '20230608_174045.jpg', comment: 'snebs always making me laugh, although here she was just bullying me for being "awkward" :(' },
    { src: '20230608_175206.jpg', comment: 'Prom!' },
    { src: '20230608_182359.jpg', comment: 'someone is SLAAAYING (hint its the boy)' },
    { src: '20231019_141806.jpg', comment: 'busch student center vibes' },
    { src: '20231020_201158.jpg', comment: 'i may have been bullied by snebs brother' },
    { src: '20231020_201159.jpg', comment: 'snebs glass broke bc some dummy knocked it down smh' },
    { src: '20231203_142432.jpg', comment: 'always nom nomming' },
    { src: '20231203_181145.jpg', comment: 'ehehhhhhh' },
    { src: '20231203_181322.jpg', comment: 'snebs is NOT taller for the record, just the angle hehe' },
    { src: '20231206_195341.jpg', comment: 'if yk yk' },
    { src: '20231207_135953.jpg', comment: 'mwah MWAH princess' },
    { src: '20240206_133150.jpg', comment: 'EEEEP SHES SQUISHING MY FACE' },
    { src: '20240206_133152.jpg', comment: 'MWAHHHHHHH i got butterflies in my tummy' },
    { src: '20240217_190118.jpg', comment: 'two kaala bachas as mrs.shinde would say' },
    { src: '20240217_191131.jpg', comment: 'someones mad... RUNNN' },
    { src: '20240305_161045.jpg', comment: 'i think i may be taller than snebs' },
    { src: '20240307_162034.jpg', comment: 'late night bus from livi' },
    { src: '20240307_162045.jpg', comment: 'snebs bullied me so much ab my hair that i got a haircut the next day...ish' },
    { src: '20240311_122051.jpg', comment: 'HAIRCUT!' },
    { src: '20240316_125636.jpg', comment: 'cool dewds' },
    { src: '20240316_125639.jpg', comment: 'say cheeeeeese 🧀!' },
    { src: '20240316_125646.jpg', comment: 'i love when snebs squishes my face like that' },
    { src: '20240316_125650.jpg', comment: 'as usual snebs chomping habits are persistent' },
    { src: '20240316_125909.jpg', comment: 'hmmm' },
    { src: '20240316_125926.jpg', comment: 'HMMMM' },
    { src: '20240316_174104.jpg', comment: 'horngy snebs' },
    { src: '20240410_105911.jpg', comment: 'yummy tummy happy snebs' },
    { src: '20240410_110822.jpg', comment: 'look at all that food' },
    { src: '20240410_145934.jpg', comment: 'i didnt wave, mb!' },
    { src: '20240411_122000.jpg', comment: 'sip sip' },
    { src: '20240513_134621.jpg', comment: 'a pic of the girls' },
    { src: '20240520_122157.jpg', comment: 'cheers hehe' },
    { src: '20240520_122200.jpg', comment: 'what a menacing smile from a crazy lady' },
    { src: '20240520_143615.jpg', comment: 'mwahehehe' },
    { src: 'image000001 (3).jpg', comment: '"it tasted yummy" - snebs' },
    { src: 'image000003.jpg', comment: 'CHEEEEEEEEEESE NOM NOM' },
    { src: 'IMG_20230303_221342_974.jpg', comment: 'yakshas bday restaraunt pic, i wanted to be closer' },
    { src: 'IMG_20230513_161104_411.jpg', comment: 'grad yippe' },
    { src: 'IMG_20230513_161105_838.jpg', comment: '1 degree? nah TWO DEGREES (well 4 bc we 2 peoples)' },
    { src: 'IMG_20230801_221827_159.jpg', comment: 'snebs is SOOOOO CUTE and it makes me giggle when she squeezes my face' },
    { src: 'IMG_20230801_221830_073.jpg', comment: 'MWAH my love' },
    { src: 'IMG_20230801_221833_556.jpg', comment: 'ngl this is one of my fav pics' },
    { src: 'IMG_20230802_110214_412.jpg', comment: 'hugwah WHY IS PIC SIDEWAYS'},
    { src: 'IMG_20230802_110221_120.jpg', comment: 'MWAHHHHH RAHHHHH' },
    { src: 'IMG_20230815_125755_673.jpg', comment: 'celebrating pakistani independences days, we are traitors like that' },
    { src: 'IMG_20230815_125758_543.jpg', comment: 'best birthday spent with this amazing girl' },
    { src: 'IMG_20230917_161009_444.jpg', comment: 'the skin care routine has just started' },
    { src: 'IMG_20231009_125238_181.jpg', comment: 'GRAD PICS WOOPWOOP' },
    { src: 'IMG_20231009_125245_128.jpg', comment: 'SQUISHHHHHHHH' },
    { src: 'IMG_20231020_212456_124.jpg', comment: 'snebs slaying at everything except carving bc IM BETTER' },
    { src: 'IMG_20231020_212506_125.jpg', comment: 'MIKE WAZOWSKI ON TOP' },
    { src: 'IMG_20231110_201818_193.jpg', comment: 'gingey smash hehe' },
    { src: 'IMG_20231110_201924_830.jpg', comment: 'and take off for one snebs!' },
    { src: 'IMG_20231110_201933_951.jpg', comment: 'what a beauty' },
    { src: 'IMG_20231110_201951_352.jpg', comment: 'hugwah after going around pond' },
    { src: 'IMG_20231110_202020_341.jpg', comment: 'im crazy for snebs as usual' },
    { src: 'IMG_20231204_103749_111.jpg', comment: 'snebs made me angey, idk whoy :(' },
    { src: 'IMG_20231204_103830_658.jpg', comment: 'ny visits' },
    { src: 'IMG_20231204_104059_931.jpg', comment: 'snebs thinks the camera did her dirty but nah she looks amazing' },
    { src: 'IMG_20231204_104120_852.jpg', comment: 'oh no is snebs getting taller?' },
    { src: 'IMG_20231204_104158_665.jpg', comment: 'im sorry, im sorry, im sorry that you love me ;)' },
    { src: 'IMG_20231204_104202_153.jpg', comment: 'ny trip GONE WRONG (snebs took us to the bronx hehe)' },
    { src: 'IMG_20231204_104206_287.jpg', comment: 'pretty lights beautiful wifey' },
    { src: 'IMG_20231204_104209_747.jpg', comment: 'lean on me all you want, i love it' },
    { src: 'IMG_20231204_104213_366.jpg', comment: 'one of the better pics from that day' },
    { src: 'IMG_20231209_072112_828.jpg', comment: 'I LOVE THIS SWING' },
    { src: 'IMG_20231209_072118_204.jpg', comment: 'snebs made me like tacoria this day' },
    { src: 'IMG_20231229_004235_409.jpg', comment: 'unexplainable prettiness' },
    { src: 'IMG_20231229_004326_273.jpg', comment: 'yes, we are very serious people' },
    { src: 'IMG_20240305_092757_260.jpg', comment: 'very hungry people at action, snebs at so much fr fr' },
    { src: 'IMG_20240305_092811_995.jpg', comment: 'if you see this that means you get a diner meal for 2 sponsored by snebs coupon' },
    { src: 'IMG_20240313_153257_857.jpg', comment: 'cocos MY bestie, she loves me' },
    { src: 'IMG_20240313_153312_671.jpg', comment: 'big chair for very big hearted people (if i leave out hearted snebs would kill me)' },
    { src: 'IMG_20240313_153326_675.jpg', comment: 'bestfwen and niks' },
    { src: 'IMG_20240316_202705_634.jpg', comment: 'yeah keep showing off the pretty smile snebs WHEN I DO ALL THE ROWING 😠' },
    { src: 'IMG_20240316_202734_461.jpg', comment: 'SLAYYYYYYY' },
    { src: 'IMG_20240316_202737_449.jpg', comment: 'kayaking with snebs while all she does is talk ab how dirty the water is hm' },
    { src: 'IMG_20240410_124421_915.jpg', comment: 'NIKS NEEDS HIS FOOD.' },
    { src: 'IMG_20240428_123849_760.jpg', comment: 'snebs ate... both ways hehe' },
    { src: 'Snapchat-1313307410.jpg', comment: 'ofc snebs ate ALL my pancakes AND my food (not joking fr fr)' },
    { src: 'Snapchat-134211939.jpg', comment: 'dont look at me like that yk i like milkshakes, IM NOT FAT' },
    { src: 'Snapchat-1414422713.jpg', comment: 'snebs chomping on me at colonial park' },
    { src: 'Snapchat-1457308929.jpg', comment: 'snebs bday dinner and i was too shy around her + weird girls' },
    { src: 'Snapchat-1576142584.jpg', comment: 'moments before the wild lady chomps' },
    { src: 'Snapchat-1806629909.jpg', comment: 'when i realized i was taller than snebs (sonias house)' },
    { src: 'Snapchat-1810378294.jpg', comment: 'ofc snebs ate ALL my pancakes AND my food (not joking fr fr)' },
    { src: 'Snapchat-1909109102.jpg', comment: 'why no movieeeee' },
    { src: 'Snapchat-1935359792.jpg', comment: 'laying on snebs and giving her woodchips in colonial park (she threw them away)' },
    { src: 'Snapchat-287980199.jpg', comment: 'another picture of a wild animal doing wild things' },
    { src: 'Snapchat-373081335.jpg', comment: 'snebs makes me so cozy, can she keep leaning on me pleeeeease' },
    { src: 'Snapchat-534973087.jpg', comment: 'big men got some big business' },
    { src: 'Snapchat-847119581.jpg', comment: 'WILD LADY CHOMPS' },
    { src: 'Snapchat-876136559.jpg', comment: 'we was laying behind princeton battle memorial on a picnic blanket' },
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function displayImage() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clear any existing content

    const randomImage = getRandomImage();
    const imgElement = document.createElement('img');
    imgElement.src = 'images/' + randomImage.src;
    imgElement.alt = 'Memories Image';
    imgElement.classList.add('gallery-image');
    gallery.appendChild(imgElement);

    const commentElement = document.createElement('p');
    commentElement.textContent = randomImage.comment;
    gallery.appendChild(commentElement);
}

window.onload = displayImage;
