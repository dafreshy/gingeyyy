const images = [
    { src: '20221118_132022.jpg', comment: 'Beautiful sunset together' },
    { src: '20230608_173859.jpg', comment: 'Our first vacation' },
    { src: '20230608_173934.jpg', comment: 'Fun times at the beach' },
    { src: '20230608_174045.jpg', comment: 'Silly moments at the park' },
    { src: '20230608_175206.jpg', comment: 'Celebrating your birthday' },
    { src: '20230608_182359.jpg', comment: 'Quiet evening at home' },
    { src: '20231019_141806.jpg', comment: 'Exploring new places' },
    { src: '20231020_201158.jpg', comment: 'Memorable dinner date' },
    { src: '20231020_201159.jpg', comment: 'Road trip adventures' },
    { src: '20231203_142432.jpg', comment: 'Winter wonderland' },
    { src: '20231203_181145.jpg', comment: 'Springtime blooms' },
    { src: '20231203_181322.jpg', comment: 'Autumn colors' },
    { src: '20231206_195341.jpg', comment: 'Festive holiday season' },
    { src: '20231207_135953.jpg', comment: 'Lazy weekend mornings' },
    { src: '20240206_133150.jpg', comment: 'Cozy fireplace evenings' },
    { src: '20240206_133152.jpg', comment: 'Picnic in the park' },
    { src: '20240217_190118.jpg', comment: 'Fun fair memories' },
    { src: '20240217_191131.jpg', comment: 'Spring festival fun' },
    { src: '20240305_161045.jpg', comment: 'Summer beach vibes' },
    { src: '20240307_162034.jpg', comment: 'City skyline views' },
    { src: '20240307_162045.jpg', comment: 'Mountain hiking adventures' },
    { src: '20240311_122051.jpg', comment: 'Art gallery exploration' },
    { src: '20240316_125636.jpg', comment: 'Cooking together' },
    { src: '20240316_125639.jpg', comment: 'Gardening joys' },
    { src: '20240316_125646.jpg', comment: 'Puppy love' },
    { src: '20240316_125650.jpg', comment: 'Stargazing nights' },
    { src: '20240316_125909.jpg', comment: 'Sporting events excitement' },
    { src: '20240316_125926.jpg', comment: 'Music concert thrill' },
    { src: '20240316_174104.jpg', comment: 'Sunday brunch tradition' },
    { src: '20240410_105911.jpg', comment: 'Family reunion happiness' },
    { src: '20240410_110822.jpg', comment: 'Friendship forever' },
    { src: '20240410_145934.jpg', comment: 'Graduation day pride' },
    { src: '20240411_122000.jpg', comment: 'Traveling adventures' },
    { src: '20240513_134621.jpg', comment: 'Fitness journey milestones' },
    { src: '20240520_122157.jpg', comment: 'Book club meetings' },
    { src: '20240520_122200.jpg', comment: 'Movie nights' },
    { src: '20240520_143615.jpg', comment: 'Anniversary celebrations' },
    { src: 'image000001 (3).jpg', comment: 'Vintage photography' },
    { src: 'image000003.jpg', comment: 'Springtime blossoms' },
    { src: 'image_2006_222001zip_2006_222212.lnk', comment: 'Tech gadgets excitement' },
    { src: 'IMG_20230303_221342_974.jpg', comment: 'Outdoor adventures' },
    { src: 'IMG_20230513_161104_411.jpg', comment: 'Beachside relaxation' },
    { src: 'IMG_20230513_161105_838.jpg', comment: 'Cityscape exploration' },
    { src: 'IMG_20230801_221827_159.jpg', comment: 'Nighttime city lights' },
    { src: 'IMG_20230801_221830_073.jpg', comment: 'Rooftop dinners' },
    { src: 'IMG_20230801_221833_556.jpg', comment: 'Coffee shop chats' },
    { src: 'IMG_20230802_110214_412.jpg', comment: 'Morning bike rides' },
    { src: 'IMG_20230802_110221_120.jpg', comment: 'Spring break adventures' },
    { src: 'IMG_20230815_125755_673.jpg', comment: 'Camping under the stars' },
    { src: 'IMG_20230815_125758_543.jpg', comment: 'Road trip memories' },
    { src: 'IMG_20230917_161009_444.jpg', comment: 'Skiing in the Alps' },
    { src: 'IMG_20231009_125238_181.jpg', comment: 'Winter wonderland' },
    { src: 'IMG_20231009_125245_128.jpg', comment: 'Spring blooms' },
    { src: 'IMG_20231020_212456_124.jpg', comment: 'Summer road trips' },
    { src: 'IMG_20231020_212506_125.jpg', comment: 'Autumn hikes' },
    { src: 'IMG_20231110_201818_193.jpg', comment: 'Music festival vibes' },
    { src: 'IMG_20231110_201924_830.jpg', comment: 'Gourmet food adventures' },
    { src: 'IMG_20231110_201933_951.jpg', comment: 'Cultural festival joy' },
    { src: 'IMG_20231110_201951_352.jpg', comment: 'Sunny beach days' },
    { src: 'IMG_20231110_202020_341.jpg', comment: 'Holiday market cheer' },
    { src: 'IMG_20231204_103749_111.jpg', comment: 'Cooking class fun' },
    { src: 'IMG_20231204_103830_658.jpg', comment: 'Art museum visits' },
    { src: 'IMG_20231204_104059_931.jpg', comment: 'Picnic in the park' },
    { src: 'IMG_20231204_104120_852.jpg', comment: 'Rock climbing adventures' },
    { src: 'IMG_20231204_104158_665.jpg', comment: 'Spa day relaxation' },
    { src: 'IMG_20231204_104202_153.jpg', comment: 'Shopping spree excitement' },
    { src: 'IMG_20231204_104206_287.jpg', comment: 'Gardening therapy' },
    { src: 'IMG_20231204_104209_747.jpg', comment: 'Yoga retreat bliss' },
    { src: 'IMG_20231204_104213_366.jpg', comment: 'Nature trail discoveries' },
    { src: 'IMG_20231209_072112_828.jpg', comment: 'Starlit camping nights' },
    { src: 'IMG_20231209_072118_204.jpg', comment: 'Tropical beach escapes' },
    { src: 'IMG_20231229_004235_409.jpg', comment: 'City park picnics' },
    { src: 'IMG_20231229_004326_273.jpg', comment: 'Sailing adventures' },
    { src: 'IMG_20240305_092757_260.jpg', comment: 'Morning beach walks' },
    { src: 'IMG_20240305_092811_995.jpg', comment: 'Mountain cabin retreats' },
    { src: 'IMG_20240313_153257_857.jpg', comment: 'Cultural city tours' },
    { src: 'IMG_20240313_153312_671.jpg', comment: 'Antique market finds' },
    { src: 'IMG_20240313_153326_675.jpg', comment: 'Family barbecue joy' },
    { src: 'IMG_20240316_202705_634.jpg', comment: 'Gardening together' },
    { src: 'IMG_20240316_202734_461.jpg', comment: 'Cooking delicious meals' },
    { src: 'IMG_20240316_202737_449.jpg', comment: 'Scenic mountain views' },
    { src: 'IMG_20240410_124421_915.jpg', comment: 'Lakeside cabin vacations' },
    { src: 'IMG_20240428_123849_760.jpg', comment: 'Family road trip adventures' },
    { src: 'Snapchat-1313307410.jpg', comment: 'Summer music festival fun' },
    { src: 'Snapchat-134211939.jpg', comment: 'Winter wonderland' },
    { src: 'Snapchat-1414422713.jpg', comment: 'Sunny beach days' },
    { src: 'Snapchat-1457308929.jpg', comment: 'Cityscape adventures' },
    { src: 'Snapchat-1576142584.jpg', comment: 'Autumn hiking' },
    { src: 'Snapchat-1806629909.jpg', comment: 'Springtime blooms' },
    { src: 'Snapchat-1810378294.jpg', comment: 'Cultural festival joy' },
    { src: 'Snapchat-1909109102.jpg', comment: 'Mountain skiing' },
    { src: 'Snapchat-1935359792.jpg', comment: 'Beachside relaxation' },
    { src: 'Snapchat-287980199.jpg', comment: 'Picnic in the park' },
    { src: 'Snapchat-373081335.jpg', comment: 'Food truck delights' },
    { src: 'Snapchat-534973087.jpg', comment: 'Adventure park fun' },
    { src: 'Snapchat-847119581.jpg', comment: 'Winter wonderland' },
    { src: 'Snapchat-876136559.jpg', comment: 'Music festival vibes' },
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
