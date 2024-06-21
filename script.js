const images = [
    '20221118_132022.jpg',
    '20230608_173859.jpg',
    '20230608_173934.jpg',
    '20230608_174045.jpg',
    '20230608_175206.jpg',
    '20230608_182359.jpg',
    '20231019_141806.jpg',
    '20231020_201158.jpg',
    '20231020_201159.jpg',
    '20231203_142432.jpg',
    '20231203_181145.jpg',
    '20231203_181322.jpg',
    '20231206_195341.jpg',
    '20231207_135953.jpg',
    '20240206_133150.jpg',
    '20240206_133152.jpg',
    '20240217_190118.jpg',
    '20240217_191131.jpg',
    '20240305_161045.jpg',
    '20240307_162034.jpg',
    '20240307_162045.jpg',
    '20240311_122051.jpg',
    '20240316_125636.jpg',
    '20240316_125639.jpg',
    '20240316_125646.jpg',
    '20240316_125650.jpg',
    '20240316_125909.jpg',
    '20240316_125926.jpg',
    '20240316_174104.jpg',
    '20240410_105911.jpg',
    '20240410_110822.jpg',
    '20240410_145934.jpg',
    '20240411_122000.jpg',
    '20240513_134621.jpg',
    '20240520_122157.jpg',
    '20240520_122200.jpg',
    '20240520_143615.jpg',
    'image000001 (3).jpg',
    'image000003.jpg',
    'image_2006_222001zip_2006_222212.lnk',
    'IMG_20230303_221342_974.jpg',
    'IMG_20230513_161104_411.jpg',
    'IMG_20230513_161105_838.jpg',
    'IMG_20230801_221827_159.jpg',
    'IMG_20230801_221830_073.jpg',
    'IMG_20230801_221833_556.jpg',
    'IMG_20230802_110214_412.jpg',
    'IMG_20230802_110221_120.jpg',
    'IMG_20230815_125755_673.jpg',
    'IMG_20230815_125758_543.jpg',
    'IMG_20230917_161009_444.jpg',
    'IMG_20231009_125238_181.jpg',
    'IMG_20231009_125245_128.jpg',
    'IMG_20231020_212456_124.jpg',
    'IMG_20231020_212506_125.jpg',
    'IMG_20231110_201818_193.jpg',
    'IMG_20231110_201924_830.jpg',
    'IMG_20231110_201933_951.jpg',
    'IMG_20231110_201951_352.jpg',
    'IMG_20231110_202020_341.jpg',
    'IMG_20231204_103749_111.jpg',
    'IMG_20231204_103830_658.jpg',
    'IMG_20231204_104059_931.jpg',
    'IMG_20231204_104120_852.jpg',
    'IMG_20231204_104158_665.jpg',
    'IMG_20231204_104202_153.jpg',
    'IMG_20231204_104206_287.jpg',
    'IMG_20231204_104209_747.jpg',
    'IMG_20231204_104213_366.jpg',
    'IMG_20231209_072112_828.jpg',
    'IMG_20231209_072118_204.jpg',
    'IMG_20231229_004235_409.jpg',
    'IMG_20231229_004326_273.jpg',
    'IMG_20240305_092757_260.jpg',
    'IMG_20240305_092811_995.jpg',
    'IMG_20240313_153257_857.jpg',
    'IMG_20240313_153312_671.jpg',
    'IMG_20240313_153326_675.jpg',
    'IMG_20240316_202705_634.jpg',
    'IMG_20240316_202734_461.jpg',
    'IMG_20240316_202737_449.jpg',
    'IMG_20240410_124421_915.jpg',
    'IMG_20240428_123849_760.jpg',
    'Snapchat-1313307410.jpg',
    'Snapchat-134211939.jpg',
    'Snapchat-1414422713.jpg',
    'Snapchat-1457308929.jpg',
    'Snapchat-1576142584.jpg',
    'Snapchat-1806629909.jpg',
    'Snapchat-1810378294.jpg',
    'Snapchat-1909109102.jpg',
    'Snapchat-1935359792.jpg',
    'Snapchat-287980199.jpg',
    'Snapchat-373081335.jpg',
    'Snapchat-534973087.jpg',
    'Snapchat-847119581.jpg',
    'Snapchat-876136559.jpg'
];

function getRandomImages() {
    let selectedImages = [];
    while (selectedImages.length < 3) {
        let randomIndex = Math.floor(Math.random() * images.length);
        if (!selectedImages.includes(images[randomIndex])) {
            selectedImages.push(images[randomIndex]);
        }
    }
    return selectedImages;
}

function displayImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clear any existing images
    const randomImages = getRandomImages();
    randomImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = 'images/' + image;
        gallery.appendChild(imgElement);
    });
}

window.onload = displayImages;
