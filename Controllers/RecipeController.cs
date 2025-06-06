using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private static readonly Recipe SweetAndSourFishRecipe = new Recipe
        {
            Id = 1,
            Name = "Sweet and Sour Fish Fillet",
            Description = "A delicious Chinese-inspired dish featuring crispy fish fillets coated in a tangy sweet and sour sauce.",
            Ingredients = new List<string>
            {
                "500g fish fillets (preferably cream dory or cod)",
                "1 cup all-purpose flour",
                "1 tsp salt",
                "1/2 tsp white pepper",
                "2 eggs, beaten",
                "Oil for frying",
                "1 red bell pepper, cut into chunks",
                "1 green bell pepper, cut into chunks",
                "1 onion, cut into chunks",
                "2 cloves garlic, minced",
                "1 cup pineapple chunks",
                "For the sauce:",
                "1/2 cup ketchup",
                "1/4 cup white vinegar",
                "1/4 cup brown sugar",
                "2 tbsp soy sauce",
                "1 cup water",
                "2 tbsp cornstarch mixed with 3 tbsp water"
            },
            Steps = new List<RecipeStep>
            {
                new RecipeStep { 
                    StepNumber = 1, 
                    Description = "Cut fish fillets into bite-sized pieces. Season with salt and pepper.",
                    Tip = "Make sure the fish pieces are similar in size for even cooking"
                },
                new RecipeStep {
                    StepNumber = 2,
                    Description = "Coat fish pieces in flour, dip in beaten egg, then coat again with flour."
                },
                new RecipeStep {
                    StepNumber = 3,
                    Description = "Heat oil in a deep pan. Fry fish pieces until golden brown and crispy. Set aside."
                },
                new RecipeStep {
                    StepNumber = 4,
                    Description = "In a separate pan, sauté garlic and onions until fragrant. Add bell peppers and pineapple chunks."
                },
                new RecipeStep {
                    StepNumber = 5,
                    Description = "Mix sauce ingredients except cornstarch slurry. Pour into the pan and bring to a simmer.",
                    Tip = "Adjust sweetness and sourness to taste"
                },
                new RecipeStep {
                    StepNumber = 6,
                    Description = "Add cornstarch slurry and stir until sauce thickens."
                },
                new RecipeStep {
                    StepNumber = 7,
                    Description = "Add fried fish pieces to the sauce. Toss gently to coat evenly.",
                    Tip = "Don't over-stir to maintain the crispiness of the fish"
                }
            },
            ImageUrl = "/images/sweet-and-sour-fish.jpg",
            PrepTimeMinutes = 20,
            CookTimeMinutes = 25,
            Servings = 4
        };

        [HttpGet]
        public ActionResult<Recipe> Get()
        {
            return Ok(SweetAndSourFishRecipe);
        }
    }
} 