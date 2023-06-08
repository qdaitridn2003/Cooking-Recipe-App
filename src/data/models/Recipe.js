class Recipe {
    constructor(id, title, url, time, calories, type, material, guide) {
        this.id = id
        this.title = title;
        this.url = url;
        this.time = time;
        this.calories = calories;
        this.type = type;
        this.material = material;
        this.guide = guide;
    }
}

module.exports = { Recipe };