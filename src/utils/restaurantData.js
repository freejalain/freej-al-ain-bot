module.exports = {
  greetings: {
    ar: 'مرحبا بك في مطعم فريج العين الشعبي 🍽️',
    en: 'Welcome to Freej Al Ain Restaurant 🍽️'
  },
  initialGreetingOnly: 'حياك الله',

  upsell: { message_ar: 'تحب تضيف مشروب أو سلطة على طلبك؟ 😊' },
  combo: { message_ar: 'عندنا عروض خاصة للمجموعات — تحب أشوف لك شي يناسبك؟' },

  deliveryInfo: {
    phone: ['04 325 5777', '056-5589777'],
    location: 'البرشا مول، الطابق الأول'
  },

  menu: {
    soups: [
      { name: 'شوربة كريمة الفطر', nameEn: 'Mushroom Cream Soup', price: 16 },
      { name: 'شوربة كريمة الدجاج', nameEn: 'Chicken Cream Soup', price: 18 },
      { name: 'شوربة بحريات', nameEn: 'Seafood Soup', price: 26 },
      { name: 'شوربة عدس', nameEn: 'Lentil Soup', price: 18 }
    ],
    salads: [
      { name: 'سلطة جرجير', nameEn: 'Rocca Salad', price: 21 },
      { name: 'سلطة يونانية', nameEn: 'Greek Salad', price: 26 },
      { name: 'تبولة', nameEn: 'Taboula', price: 21 },
      { name: 'فتوش', nameEn: 'Fatoush', price: 21 },
      { name: 'سلطة همبرجر دجاج', nameEn: 'Chicken Caesar Salad', price: 26 },
      { name: 'سلطة عربية', nameEn: 'Arabic Salad', price: 21 }
    ],
    coldAppetizers: [
      { name: 'حمص', nameEn: 'Hummus', price: 21 },
      { name: 'متبل', nameEn: 'Moutabel', price: 21 },
      { name: 'بابا غنوج', nameEn: 'Baba Ghannouj', price: 21 },
      { name: 'ورق عنب', nameEn: 'Vine Leaves', price: 26 },
      { name: 'لبن بالخيار', nameEn: 'Yoghurt with Cucumber', price: 16 },
      { name: 'طبق مقبلات مشكل', nameEn: 'Mix Appetizers Dish', price: 42 }
    ],
    hotAppetizers: [
      { name: 'طبق حلوم مشوي', nameEn: 'Grilled Halloumi', price: 26 },
      { name: 'سمبوسة جبنة (5 حبة)', nameEn: 'Cheese Sambouk (5 Pcs)', price: 18 },
      { name: 'سمبوسة فيه (5 حبة)', nameEn: 'Meat Sambouk (5 Pcs)', price: 18 },
      { name: 'سمبوسة خضار (5 حبة)', nameEn: 'Vegetable Sambouk (5 Pcs)', price: 18 },
      { name: 'كبة مقلية (5 حبة)', nameEn: 'Fried Kubbeh (5 Pcs)', price: 18 },
      { name: 'حمص باللحمة والصنوبر', nameEn: 'Hummus with Meat & Pine Nuts', price: 30 },
      { name: 'بطاطا مقلية', nameEn: 'French Fries', price: 10 },
      { name: 'كريم ثوم', nameEn: 'Garlic Cream', price: 16 },
      { name: 'مسخن أردني', nameEn: 'Jordanian Musakhan', price: 26 }
    ],
    gulfDishes: [
      { name: 'ثريد دجاج', nameEn: 'Chicken Thereed', price: 39 },
      { name: 'ثريد لحم', nameEn: 'Meat Thereed', price: 44 },
      { name: 'صالونة لحم', nameEn: 'Meat Saloonah', price: 44 },
      { name: 'صالونة دجاج', nameEn: 'Chicken Saloonah', price: 37 },
      { name: 'صالونة خضار', nameEn: 'Vegetables Saloonah', price: 25 },
      { name: 'مجبوس دجاج', nameEn: 'Majboos Chicken', price: 39 },
      { name: 'حنيث', nameEn: 'Haneeth', price: 95 },
      { name: 'برياني دجاج', nameEn: 'Chicken Biryani', price: 37 },
      { name: 'برياني لحم', nameEn: 'Meat Biryani', price: 58 },
      { name: 'مدفون لحم', nameEn: 'Meat Madfon', price: 70 },
      { name: 'مندي دجاج', nameEn: 'Chicken Mandi', price: 36 },
      { name: 'مندي لحم', nameEn: 'Meat Mandi', price: 68 },
      { name: 'مظبي دجاج', nameEn: 'Chicken Madhbi', price: 38 },
      { name: 'مظبي لحم', nameEn: 'Meat Madhbi', price: 70 },
      { name: 'هريس لحم كبير', nameEn: 'Meat Harees Large', price: 42 },
      { name: 'هريس لحم صغير', nameEn: 'Meat Harees Small', price: 26 },
      { name: 'أرز أبيض', nameEn: 'White Rice', price: 10 },
      { name: 'أرز مندي', nameEn: 'Mandi Rice', price: 12 },
      { name: 'أرز برياني', nameEn: 'Biryani Rice', price: 15 }
    ],
    grills: [
      { name: 'مشاوي فريج العين (1 كيلو)', nameEn: 'Fereej Alain Mix Grill (1 KG)', price: 165 },
      { name: 'مشاوي مشكل', nameEn: 'Mix Grill', price: 55 },
      { name: 'تكا لحم', nameEn: 'Tikka Meat', price: 44 },
      { name: 'تكا مزة بالزبادي', nameEn: 'Tikka Mezat with Yoghurt', price: 44 },
      { name: 'كباب أورفالي', nameEn: 'Kabab Orfali', price: 44 },
      { name: 'كباب خشخاش', nameEn: 'Kabab Khash-Khash', price: 44 },
      { name: 'كباب حلبي', nameEn: 'Kabab Halabi', price: 44 },
      { name: 'كباب دجاج', nameEn: 'Chicken Kabab', price: 37 },
      { name: 'شيش طاووق', nameEn: 'Shish Tawooq', price: 37 },
      { name: 'دجاج مشوي كامل', nameEn: 'Grilled Chicken Whole', price: 68 },
      { name: 'دجاج مشوي نصف', nameEn: 'Grilled Chicken Half', price: 36 },
      { name: 'عرايس', nameEn: 'Arayes', price: 36 },
      { name: 'ريب لحم مشوي', nameEn: 'Grilled Lamb Ribs', price: 59 }
    ],
    seafood: [
      { name: 'مجبوس سمك كنعد', nameEn: 'Kanad Fish Majboos', price: 57 },
      { name: 'مجبوس سمك هامور', nameEn: 'Hammour Majboos', price: 63 },
      { name: 'برياني روبيان', nameEn: 'Biryani Prawns', price: 78 },
      { name: 'روبيان جامبو (مقلي/مشوي)', nameEn: 'Prawns Jumbo (Fried/Grilled)', price: 90 },
      { name: 'سمك شعري مع أرز', nameEn: 'Shari Fish (with rice)', price: 52 },
      { name: 'سمك قرش مع أرز', nameEn: 'Jashied (with rice)', price: 48 },
      { name: 'سمك هامور مع أرز', nameEn: 'Hamour Fish (with rice)', price: 52 },
      { name: 'سمك كنعد مع أرز', nameEn: 'Kanad Fish (with rice)', price: 52 },
      { name: 'سمك سيريم مع أرز', nameEn: 'Supreme (With Rice)', price: 58 },
      { name: 'سلمون', nameEn: 'Salmon', price: 80 },
      { name: 'سمك سي باس', nameEn: 'Sea Bas', price: 55 }
    ],
    desserts: [
      { name: 'تيراميسو', nameEn: 'Tiramisu', price: 12 },
      { name: 'كنافة', nameEn: 'Kunafah', price: 16 },
      { name: 'لقيمات كبير', nameEn: 'Lokaimat (Large)', price: 26 },
      { name: 'لقيمات صغير', nameEn: 'Lokaimat (Small)', price: 16 },
      { name: 'أرز بالقديمة', nameEn: 'Rice Pudding', price: 15 }
    ],
    freshJuices: [
      { name: 'سلطة فواكه', nameEn: 'Fruit Salad', price: 26 },
      { name: 'كوكتيل', nameEn: 'Cocktail', price: 23 },
      { name: 'برتقال', nameEn: 'Orange', price: 20 },
      { name: 'موز بالحليب', nameEn: 'Banana With Milk', price: 20 },
      { name: 'ليمون', nameEn: 'Lemon', price: 20 }
    ],
    beverages: [
      { name: 'مشروبات غازية', nameEn: 'Soft Drinks', price: 6.5 },
      { name: 'مياه صغير', nameEn: 'Water Small', price: 4 },
      { name: 'مياه كبير', nameEn: 'Water Large', price: 6 }
    ]
  }
};
