var carbonFootPrintData = {
    // food quantity in grams
    food: {
        coffee: 0.00314,
        chocolate: 0.00487,
        redMeat: 0.033100000000000004,
        whiteMeat: 0.009966666666666667,
        fish: 0.0060999999999999995,
        lamb: 0.039200000000000006,
        beef: 0.027,
        cheese: 0.0135,
        pork: 0.0121,
        turkey: 0.0109,
        chicken: 0.006900000000000001,
        tuna: 0.0060999999999999995,
        eggs: 0.0048,
        potatoes: 0.0029,
        rice: 0.0027,
        nuts: 0.0023,
        beans: 0.002,
        tofu: 0.002,
        vegetables: 0.002,
        milk: 0.0019,
        fruit: 0.0011,
        lentils: 0.0009
    },
    FoodType: {
        coffee: 'coffee',
        chocolate: 'chocolate',
        redMeat: 'redMeat',
        whiteMeat: 'whiteMeat',
        fish: 'fish',
        lamb: 'lamb',
        beef: 'beef',
        cheese: 'cheese',
        pork: 'pork',
        turkey: 'turkey',
        chicken: 'chicken',
        tuna: 'tuna',
        eggs: 'eggs',
        potatoes: 'potatoes',
        rice: 'rice',
        nuts: 'nuts',
        beans: 'beans',
        tofu: 'tofu',
        vegetables: 'vegetables',
        milk: 'milk',
        fruit: 'fruit',
        lentils: 'lentils'
    },
    // transport in Km
    transport: {
        bus: 0.103,
        plane: 0.28833333333333337,
        car: 0.257,
        fossilFueledCar: 0.257,
        electricVehicle: 0.081,
        hybridCar: 0.18,
        carSharing: 0.147,
        motorbike: 0.108,
        shortDistanceBus: 0.103,
        longDistanceBus: 0.052,
        train: 0.042,
        boat: 0.803,
        shortHaulFlight: 0.34,
        mediumHaulFlight: 0.286,
        longHaulFlight: 0.239
    },
    TransportType: {
        plane: 'plane',
        bus: 'bus',
        boat: 'boat',
        car: 'car',
        fossilFueledCar: 'fossilFueledCar',
        electricVehicle: 'electricVehicle',
        hybridCar: 'hybridCar',
        carSharing: 'carSharing',
        motorbike: 'motorbike',
        shortDistanceBus: 'shortDistanceBus',
        longDistanceBus: 'longDistanceBus',
        train: 'train',
        shortHaulFlight: 'shortHaulFlight',
        mediumHaulFlight: 'mediumHaulFlight',
        longHaulFlight: 'longHaulFlight'
    },
    // electricity per kWh
    electricity: {
        europe: 0.409,
        usa: 0.384,
        china: 0.549,
        world: 0.520,
        france: 0.163,
        uk: 0.193,
        ireland: 0.401,
        spain: 0.608,
        portugal: 0.220,
        netherlands: 0.387,
        belgium: 0.169,
        germany: 0.637,
        poland: 0.958,
        italy: 0.463,
        turkey: 0.359,
        finland: 0.249,
        norway: 0.030,
        czechia: 0.609,
        austria: 0.354,
        serbia: 0.302,
        slovenia: 0.184,
        hungary: 0.346,
        slovakia: 0.400,
        romania: 0.626,
        estonia: 0.534,
        latvia: 0.414,
        lithuania: 0.221,
        bolivia: 0.430,
        argentina: 0.454,
        uruguay: 0.075,
        brazil: 0.096,
        australia: 0.510,
        russia: 0.426,
        india: 0.734,
        nigeria: 0.340,
        canada: 0.146,
        iceland: 0.027,
        israel: 0.559
    },
    ElectricityType: {
        europe: 'europe',
        usa: 'usa',
        china: 'china',
        world: 'world',
        france: 'france',
        uk: 'uk',
        ireland: 'ireland',
        spain: 'spain',
        portugal: 'portugal',
        netherlands: 'netherlands',
        danmark: 'danmark',
        germany: 'germany',
        poland: 'poland',
        italy: 'italy',
        turkey: 'turkey',
        finland: 'finland',
        norway: 'norway',
        czechia: 'czechia',
        austria: 'austria',
        serbia: 'serbia',
        slovenia: 'slovenia',
        hungary: 'hungary',
        slovakia: 'slovakia',
        romania: 'romania',
        estonia: 'estonia',
        latvia: 'latvia',
        lithuania: 'lithuania',
        bolivia: 'bolivia',
        argentina: 'argentina',
        uruguay: 'uruguay',
        brazil: 'brazil',
        australia: 'australia',
        russia: 'russia',
        india: 'india',
        nigeria: 'nigeria',
        canada: 'canada',
        iceland: 'iceland',
        israel: 'israel'
    },
    // streaming in hours
    streaming: {
        HDVideo: 0.0458,
        fullHDVideo: 0.1286,
        ultraHDVideo: 0.53784,
        audioMP3: 0.03156
    },
    StreamingType: {
        HDVideo: 'HDVideo',
        fullHDVideo: 'fullHDVideo',
        ultraHDVideo: 'ultraHDVideo',
        audioMP3: 'audioMP3'
    },
    // purchase quantity in count
    purchase: {
        smartphone: 80,
        tablet: 87,
        computer: 588,
        laptop: 210,
        tv: 500,
        fossilFuelCar: 5600,
        hybridCar: 6500,
        eletricCar: 8800,
        cryptoCurrencyPoW: 20,
        singleEditionNFT: 211
    },
    PurchaseType: {
        smartphone: 'smartphone',
        tablet: 'tablet',
        computer: 'computer',
        laptop: 'laptop',
        tv: 'tv',
        fossilFuelCar: 'fossilFuelCar',
        hybridCar: 'hybridCar',
        eletricCar: 'eletricCar',
        cryptoCurrencyPoW: 'cryptoCurrencyPoW',
        singleEditionNFT: 'singleEditionNFT'
    },
    // fashion quantity in count
    fashion: {
        shirt: 12.5,
        tshirt: 7.666666666666667,
        jeans: 25,
        sweater: 30.6,
        coat: 51,
        dress: 54.333333333333336,
        shoes: 18
    },
    FashionType: {
        shirt: 'shirt',
        tshirt: 'tshirt',
        jeans: 'jeans',
        sweater: 'sweater',
        coat: 'coat',
        dress: 'dress',
        shoes: 'shoes'
    },
    // meal count
    meal: {
        highMeat: 2.157,
        mediumMeat: 1.689,
        lowMeat: 1.401,
        pescetarian: 1.173,
        vegetarian: 1.143,
        vegan: 0.867
    },
    MealType: {
        highMeat: 'highMeat',
        mediumMeat: 'mediumMeat',
        lowMeat: 'lowMeat',
        pescetarian: 'pescetarian',
        vegetarian: 'vegetarian',
        vegan: 'vegan'
    }
}

carbonFootPrintMap = {
    electricity: "ElectricityType",
    fashion: "FashionType",
    food: "FoodType",
    meal: "MealType",
    purchase: "PurchaseType",
    streaming: "StreamingType",
    transport: "TransportType"
}

var quantityPlaceHolder = {
    electricity: "Power in kWh",
    fashion: "Quantity of items",
    food: "Quantity in grams",
    meal: "Number of meals",
    purchase: "Quantity of items",
    streaming: "Duration in hours",
    transport: "Distance in kilometer"
}

var typeUnits = {
    electricity: "kWh",
    fashion: "units",
    food: "grams",
    meal: "meals",
    purchase: "units",
    streaming: "hours",
    transport: "km"
}

var usAverageCo2 = 42.5;
var twitterHashTags = 'c1o2,climatechange';
var encodedUrl = "";

var co2 = parseFloat(0);
var electricityCo2 = 0;
var fashionCo2 = 0;
var foodCo2 = 0;
var mealCo2 = 0;
var purchaseCo2 = 0;
var streamingCo2 = 0;
var transportCo2 = 0;
var chartData = [
    ['Type', 'kgCO2eq']
];

var sno = 0;