namespace backend.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<string> Ingredients { get; set; } = new List<string>();
        public List<RecipeStep> Steps { get; set; } = new List<RecipeStep>();
        public string ImageUrl { get; set; } = string.Empty;
        public int PrepTimeMinutes { get; set; }
        public int CookTimeMinutes { get; set; }
        public int Servings { get; set; }
    }

    public class RecipeStep
    {
        public int StepNumber { get; set; }
        public string Description { get; set; } = string.Empty;
        public string? Tip { get; set; }
    }
} 