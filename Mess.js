let daysOfWeek = {
'MONDAY' : {
    'BREAKFAST': ['Bread', 'Butter', 'Jam', 'Millet Dosa', 'Idly', 'Podi', 'Oil', 'Chutney', 'Sambar', 'Chapathi', 'White Khuruma', 'Tea/Coffee/ Milk', 'Boiled Egg'],

    'LUNCH' : ['Chappathi', 'Rajma Masala', 'Jeera Pulao' ,'Steamed Rice', 'Arachivitta Sambar', 'Panchratna Dal', 'Drumstick Brinjal Mochai', 'Dum Aloo','Pineapple Rasam', 'Pickle', 'Butter Milk','Fryums'],

    'SNACKS' : ['Pav Bajji','Tea/Coffee'],

    'DINNER' : ['MadrasParatha', 'Mattar-Pannaer Masala', 'Vegetable Idly /Idly','Podi', 'Special Chutney', 'Steamed Rice', 'Hara Moong Dal','Sambar', 'Rasam', 'Pickle', 'Fryums', 'Veg Salad', 'Milk', 'Banana', 'FishGravy']


},
'TUESDAY' : {
    'BREAKFAST': ['Bread', 'Butter', 'Jam', 'Poori', 'Dal Allo',
        'Masala', 'Semia Veg Kichadi', 'Chutney',
        'Tea/Coffee/Milk'],

    'LUNCH' : ['Sweet', 'Millet Chappathi', 'Meal Maker Curry', 'Bahara Pulao', 'Variety Rice', 'Curd Rice', 'Steamed Rice', 'Dal Fry', 'Tomato Rasam', 'Urulai Peas Rosted Pickle'],

    'SNACKS' : ['Mysore Bonda','Chutney','Tea/Coffee'],

    'DINNER' : ['Panjabi Paratha', 'Black Chenna', 'Steamed Rice', 'Dal Fry', 'Veg/Chilly Gobi Dry', 'Milet Dosa', 'Idly Podi','Sambar', 'Pepper', 'Rasam', 'Pickle Fryums','Veg Salad', 'Milk', 'Special Fruits','Mutton Gravy']
},
'WEDNESDAY' : {
    'BREAKFAST': ['Bread', 'Butter', 'Jam', 'Millet Idly, Idly',
        'Podi', 'Oil', 'Sambar', 'Chutney', 'Poha, Mint','Chutney', 'Tea/Coffee/ Milk', 'Masala Omelet'],

    'LUNCH' : ['Chappati', 'Muttar Masala', 'Bhindi Aloo Bujjiya', 'Veg Pulao', 'Steamed Rice', 'Masala', 'Sambar', 'Tomato Dal', 'Garlic Rasam', 'Pickle','Poriyal', 'Butter Milk', 'Fryums'],

    'SNACKS' : ['Veg Puff(or)Sweet Puff','Tea/Coffee'],

    'DINNER' : ['Chappathi', 'Steamed Rice', 'Dal Tadka', 'Butter Chicken Masala(Non-Veg)','Panneer Butter Masala/Butter Panneer', 'Rasam','Pickle' ,'Fryums', 'Veg Salad', 'Milk', 'Banana', 'Chicken Gravy']
},
'THURSDAY' : {
    "BREAKFAST": ['Bread Butter', 'Jam', 'Idiyappam (Lemon(or) Mala) Or Millet Idiyappam',
        'Chappa', 'Channa Masala / White Khurma Chutney', 'Tea/Coffee/ Milk'],
    
    'LUNCH' : ['Chappathi', 'Aloo Gobi Athiraki', 'Onion Pulao', 'Steamed Rice', 'Punjabi Dal Fry', 'Kadi Pakoda', 'Rasam', 'Pickle', 'Yam Varuval', 'Butter Milk', 'Fryums'],

    'SNACKS' : ['Pani Poori (or) Chenna','Sundal','Tea/Coffee'],

    'DINNER' : ['Millet Sweet (or) Kasari', 'Chole Pattora', 'Chole Masala',
        'Steamed Rice', 'Tomato Dal', 'Idly', 'Sambar', 'Coconut chutney', 'Idly Podi', 'Oil', 'Rasam', 'Pickle Fryums', 'Veg Salad', 'Milk', 'Banana','Mutton Gravy']
},
'FRIDAY' : {
    "BREAKFAST": ['Bread', 'Butter', 'Jam', 'Chappathi', 'Rajma Masala', 'Dosa', 'Idly', 'Podi Oil', 'Sambar', 'Coconut Chutney/ Tomato Chutney', 'Tea/Coffee / Milk'],

    'LUNCH' : ['Dry Jamun / Bread Halwa', 'Capscum Gobi Curry', 'Dal Tadka', 'Veg Briyani', 'Mix Raihta', 'Bisibelabath Rice', 'Curd Rice', 'Steamed Rice', 'Tomato Rasam', 'Pickle','Fryums'],

    'SNACKS' : ['SambarVada (or) MilletVada', 'Tea/Coffee'],

    'DINNER' : ['Millet Chappathi', 'Veg Manchurian/ Gobi Manchurian',
    'Veg Fried Rice / Veg Noodles', 'Samed Rice', 'Dal Maharani Sambar', 'Rasam', 'Pickle', 'Fryums', 'Veg Salad', 'Milk', 'Special Fruits','Chicken Gravy']
},
'SATURDAY' : {
    "BREAKFAST": ['Bread', 'Butter', 'Jam', 'Chappathi', 'Veg Khruma', 'Sambar', 'Pongal(or) Millet','Pongal Vada', 'Chutney','Tea/Coffee/ Milk'],

    'LUNCH' : ['Poori', 'White Peas Curry', 'AlooThindeli',
        'Khismiri Pulao', 'Steamed Rice', 'Dal Fry','KaraKozhambu', 'Kootu(Cabbage)', 'Rasam', 'Pickle', 'Butter Milk', 'Fryums'],

    'SNACKS' : ['Cake(or) Browni','Tea/Coffee'],

    'DINNER' : ['Panjabi Paratha', 'Potato Fry', 'Steamed rice', 'Veg Jhal Pyaza','bagara Dal', 'Idly', 'Idly Podi', 'Oil', 'Chutney', 'Kathamba Sambar', 'Rasam', 'Pickle', 'Fryums', 'Veg Salad', 'Milk', 'Banana','Chicken Gravy']
},
'SUNDAY' : {
    "BREAKFAST": ['Bread', 'Butter Jam', 'Chole Bhature','Chenna Masala','Samba RavaUpma', 'Coconut chutney','Tea/Coffee/Milk'],

    'LUNCH' : ['Chapathi', 'Chicken (Pepper/Kadai)','Panneer Butter Masala', 'Dal Dhadka', 'MintPulao/ Stearned Rice', 'Rasam Pickle', 'Mixed Veg Poriyal','Butter Milk', 'yums'],

    'SNACKS' : ['Corn / Bajji with Chutney','Tea/Coffee'],

    'DINNER' : ['Aloo Paratha', 'Masala Curd', 'Steamed Rice', 'Hara Moong Dal Tadka', 'Kathamba Sambar', 'Poriyal', 'Rasam', 'Pickle Fryums', 'Veg Salad', 'Milk', 'Banana', 'Cone Ice Cream', 'Chicken Gravy']
},
}

let colour = ['#26425A','#05161A','#072E33','#294D61','#06142E','#1B3358','#F1916D','#190019']

let daycount = 0

function getday() {
    const date = new Date();
    let Day = date.getDay() + daycount;
    
    // Use modulo operator to ensure Day is within the valid range (0 to 6)
    Day = (Day + 7) % 7;

    if (Day === 0){
        return 'SUNDAY';
    }
    else if (Day === 1){
        return 'MONDAY'
    }
    else if (Day === 2){
        return 'TUESDAY'
    }
    else if (Day === 3){
        return 'WEDNESDAY'
    }
    else if (Day === 4){
        return 'THURSDAY'
    }
    else if (Day === 5){
        return 'FRIDAY'
    }
    else if (Day === 6){
        return 'SATURDAY'
    }
}

function getmeals(){
    const date = new Date();

    if (date.getHours()>=0 && date.getHours()<=8){
        return 'BREAKFAST'
    }
    else if (date.getHours()>8 && date.getHours()<=13){
        return 'LUNCH'
    }
    else if (date.getHours()>13 && date.getHours()<=17){
        return 'SNACKS'
    }
    else{
        return 'DINNER'
    }
}


let next_times = 1
function next_meal(now){
    let meals = ['BREAKFAST', 'LUNCH', 'SNACKS', 'DINNER'];
    let currentIndex = meals.indexOf(meals);
    let nextIndex = (currentIndex + next_times + 1) % meals.length;
    next_times+=1
    return meals[nextIndex]
}

function getRandomColor(colours) {
    let randomIndex = Math.floor(Math.random() * colours.length);
    let selectedColor = colours[randomIndex];
    if (selectedColor.startsWith('#')) {
        selectedColor = selectedColor.slice(1);
        let hexR = parseInt(selectedColor.slice(0, 2), 16);
        let hexG = parseInt(selectedColor.slice(2, 4), 16);
        let hexB = parseInt(selectedColor.slice(4, 6), 16);
        return `rgb(${hexR}, ${hexG}, ${hexB})`;
    }
    return selectedColor;
}



let currentDayName = getday();
let currentDayObject = daysOfWeek[currentDayName];
let Menu = currentDayObject[getmeals()]
menu_append(Menu,colour);


let next = document.getElementById('next');
next.addEventListener('click', function() {

    menu_append(getNextMeal(getmeals(), currentDayName), colour);
});


function menu_append(meals,colour) {

    let daytext = document.createElement('day-text');
    daytext.innerHTML= `<h2>${getday()}-${next_meal(getday())}</h2>`

    let menu = document.getElementById('menu');
    
    menu.innerHTML = ''
    menu.appendChild(daytext);
    
    for (const item of meals) {
        let menuItem = document.createElement('div');
        menuItem.className = 'col';
        menuItem.style.backgroundColor = getRandomColor(colour);
        menuItem.innerHTML = `<h1>${item}</h1>`;
        menu.appendChild(menuItem);
    }
}

let temp = 0
function getNextMeal(currentMeal, currentDay) {
    const mealOrder = ['tempo','BREAKFAST', 'LUNCH', 'SNACKS', 'DINNER'];
    
    let currentIndex = mealOrder.indexOf(currentMeal);

    let nextIndex = currentIndex + temp + 1;
    if (nextIndex > 4) {
        temp = 0;
        getNextDay(currentDay);
        return getNextMeal('tempo',getday());
    }

    console.log(nextIndex)
    let currentDayObject = daysOfWeek[currentDay];
    console.log(currentDayObject)
    temp += 1
    let m = mealOrder[nextIndex]
    return currentDayObject[m];
}


function getNextDay(currentDay) {
    daycount += 1
}
