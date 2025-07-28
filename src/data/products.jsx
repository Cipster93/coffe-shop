const menuData = {
    coffeeDrinks: [
        {
            name: "Espresso",
            image: "/esspreso.jpg",
            ingredients: ["Ground coffee", "Water"],
            dose_grams: "7g coffee, 30ml water",
            price: 2.5
        },
        {
            name: "Latte Macchiato",
            image: "/LatteM.jpg",
            ingredients: ["Espresso", "Steamed milk", "Milk foam"],
            dose_grams: "7g coffee, 150ml milk, 20ml foam",
            price: 3.5
        },
        {
            name: "Cappuccino",
            image: "/cappuccino.jpg",
            ingredients: ["Espresso", "Steamed milk", "Milk foam"],
            dose_grams: "7g coffee, 100ml milk, 30ml foam",
            price: 3.2
        },
        {
            name: "Americano",
            image: "/americano.jpg",
            ingredients: ["Espresso", "Hot water"],
            dose_grams: "7g coffee, 120ml water",
            price: 2.8
        },
        {
            name: "Flat White",
            image: "/flat.jpg",
            ingredients: ["Espresso", "Steamed milk"],
            dose_grams: "14g coffee, 120ml milk",
            price: 3.8
        },
        {
            name: "Mocha",
            image: "/moca.jpg",
            ingredients: ["Espresso", "Steamed milk", "Chocolate syrup", "Whipped cream"],
            dose_grams: "7g coffee, 120ml milk, 20ml chocolate syrup",
            price: 4.0
        },
        {
            name: "Macchiato",
            image: "/machiato.jpg",
            ingredients: ["Espresso", "Milk foam"],
            dose_grams: "7g coffee, 15ml foam",
            price: 2.9
        }
    ],
    teaInfusions: [
        {
            name: "Earl Grey Tea",
            image: "/Vanilla-Earl-Grey-Tea.jpg",
            ingredients: ["Black tea", "Bergamot oil"],
            dose_grams: "3g tea, 250ml water",
            price: 2.0
        },
        {
            name: "Green Tea",
            image: "/GreenTea.jpg",
            ingredients: ["Green tea leaves"],
            dose_grams: "2g tea, 200ml water",
            price: 1.8
        },
        {
            name: "Chamomile Tea",
            image: "/Chamomile-Tea.jpg",
            ingredients: ["Chamomile flowers"],
            dose_grams: "3g flowers, 250ml water",
            price: 2.2
        },
        {
            name: "Peppermint Tea",
            image: "/Peppermint-Tea.jpg",
            ingredients: ["Peppermint leaves"],
            dose_grams: "2g leaves, 250ml water",
            price: 2.0
        },
        {
            name: "Jasmine Tea",
            image: "/Jasmine-Tea.jpg",
            ingredients: ["Green tea leaves", "Jasmine flowers"],
            dose_grams: "3g tea, 250ml water",
            price: 2.5
        },
        {
            name: "Rooibos Tea",
            image: "/Rooibos-Tea.jpg",
            ingredients: ["Rooibos leaves"],
            dose_grams: "3g leaves, 250ml water",
            price: 2.3
        },
        {
            name: "Hibiscus Tea",
            image: "/Hibiscus-tea.jpg",
            ingredients: ["Dried hibiscus petals"],
            dose_grams: "3g petals, 250ml water",
            price: 2.4
        }
    ],
    coldDrinks: [
        {
            name: "Iced Coffee",
            image: "/Iced-Coffee.jpg",
            ingredients: ["Cold brew coffee", "Ice", "Milk"],
            dose_grams: "200ml coffee, 50ml milk",
            price: 3.0
        },
        {
            name: "Orange Juice",
            image: "/orangejuice.jpg",
            ingredients: ["Fresh oranges"],
            dose_grams: "250ml fresh juice",
            price: 2.5
        },
        {
            name: "Apple Juice",
            image: "/appleJuice.jpg",
            ingredients: ["Fresh apples"],
            dose_grams: "250ml fresh juice",
            price: 2.7
        },
        {
            name: "Carrot Juice",
            image: "/10-benefits-of-carrot-juice-1.jpg",
            ingredients: ["Fresh carrots"],
            dose_grams: "250ml fresh juice",
            price: 2.8
        },
        {
            name: "Pineapple Juice",
            image: "/How-to-Juice-a-Pineapple-Square.jpg",
            ingredients: ["Fresh pineapple"],
            dose_grams: "250ml fresh juice",
            price: 3.0
        },
        {
            name: "Watermelon Juice",
            image: "/Watermelon-Juice-6.jpg",
            ingredients: ["Fresh watermelon"],
            dose_grams: "250ml fresh juice",
            price: 2.9
        },
        {
            name: "Grapefruit Juice",
            image: "/0032-how-to-can-grapefruit-juice-780x524.jpg",
            ingredients: ["Fresh grapefruit"],
            dose_grams: "250ml fresh juice",
            price: 2.8
        }
    ],
    cakesPastries: [
        {
            name: "Chocolate Cake",
            image: "/cake.jpg",
            ingredients: ["Chocolate", "Flour", "Eggs", "Sugar"],
            dose_grams: "120g slice",
            price: 4.5
        },
        {
            name: "Croissant",
            image: "/Croissant.jpg",
            ingredients: ["Butter", "Flour", "Yeast"],
            dose_grams: "80g pastry",
            price: 2.2
        },
        {
            name: "Cheesecake",
            image: "/Cheesecake.jpg",
            ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham crackers"],
            dose_grams: "100g slice",
            price: 4.8
        },
        {
            name: "Apple Pie",
            image: "/Apple-Pie.jpg",
            ingredients: ["Apples", "Flour", "Butter", "Sugar", "Cinnamon"],
            dose_grams: "110g slice",
            price: 4.0
        },
        {
            name: "Blueberry Muffin",
            image: "/Blueberry-Muffin.jpg",
            ingredients: ["Flour", "Blueberries", "Sugar", "Eggs", "Butter"],
            dose_grams: "90g muffin",
            price: 3.0
        },
        {
            name: "Banana Bread",
            image: "/Banana-Bread.jpg",
            ingredients: ["Bananas", "Flour", "Sugar", "Eggs", "Butter"],
            dose_grams: "100g slice",
            price: 3.5
        },
        {
            name: "Strudel",
            image: "/Strudel.jpg",
            ingredients: ["Apples", "Flour", "Butter", "Sugar", "Cinnamon", "Raisins"],
            dose_grams: "120g slice",
            price: 4.2
        }
    ],
    lightSnacks: [
        {
            name: "Avocado Toast",
            image: "/avocado.jpg",
            ingredients: ["Avocado", "Sourdough bread", "Salt", "Pepper"],
            dose_grams: "150g serving",
            price: 5.0
        },
        {
            name: "Granola Bowl",
            image: "/da.jpg",
            ingredients: ["Granola", "Yogurt", "Berries", "Honey"],
            dose_grams: "200g serving",
            price: 4.8
        }
    ]
};

export default menuData;