const { errorResponse, successResponse, makeDelay } = require('../utils/utils')

const getListOfFoods = async () => {
    await makeDelay(115)
    const foodItems = [
        {id : 1, name: 'Fafda', description: 'Famous Gujarati Snack type of Gathiya', price: 300},
        {id : 2, name: 'Jalebi', description: 'Sweet dish', price: 250}, 
        {id : 3, name: 'Patra', description: 'Gujarati Snack', price: 200}, 
        {id : 4, name: 'Dhokla', description: 'Gujarati Snack', price: 280}, 
        {id : 5, name: 'Thepla', description: 'Type of bread', price: 80}, 
        {id : 6, name: 'Dosa', description: 'South Indian dish', price: 120}, 
        {id : 7, name: 'Idli', description: 'South Indian dish', price: 80}, 
        {id : 8, name: 'Rasamrice', description: 'South Indian dish', price: 130}, 
        {id : 9, name: 'Menduvada', description: 'South Indian dish', price: 90}, 
        {id : 10, name: 'Vadapav', description: 'Maharashtrian Snank', price: 30}, 
        {id : 11, name: 'Misalpav', description: 'Maharashtrian dish', price: 150}, 
        {id : 12, name: 'Kothimbirvadi', description: 'Maharashtrian dish', price: 150}, 
    ]
    return foodItems
}

const getFoodLocation = async () => {
    await makeDelay(2 * 60 * 1000)
    return ["Ahmedabad", "Jamnagar", "Baroda"];
}

const getFoodNutritionDetail = async () => {
    await makeDelay(300)
    return {
        Fafda : { calories: 350, protein: "15g" },
        Jalebi : { calories: 600, protein: "5g" },
        Patra : { calories: 200, protein: "10g" },
        Dhokla : { calories: 300, protein: "10g" },
        Thepla : { calories: 100, protein: "11g" },
        Dosa : { calories: 50, protein: "8g" },
        Idli : { calories: 80, protein: "10g" },
        Rasamrice : { calories: 80, protein: "18g" },
        Menduvada : { calories: 300, protein: "8g" },
        Vadapav : { calories: 150, protein: "5g" },
        Misalpav : { calories: 90, protein: "10g" },
        Kothimbirvadi : { calories: 200, protein: "10g" },
    }
}

const getOutOfStockFoods = async () => {
    await makeDelay(100)
    return ["Kothimbirvadi", "Thepla"]
}

const getAllFoodDetail = async () => {
    const [foodList, foodLocation, nutritionalDetail, outOfStockFoods] = await Promise.all([
        getListOfFoods(),
        getFoodLocation(),
        getFoodNutritionDetail(),
        getOutOfStockFoods(),
    ]);
    return {
        foodList,
        foodLocation,
        nutritionalDetail,
        outOfStockFoods,
    };
}

const getAllFood = async (req, res) => {
    try {
        const data = await getAllFoodDetail();
        successResponse(res, data)
    } catch (error) {
        console.error("Error fetching food data:", error);
        errorResponse(res, error)
    }
}
module.exports = { getAllFood }
