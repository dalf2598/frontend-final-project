export const GAME_TITLE = 'BrainQuest';

export const GAME_DESCRIPTION = 'Challenge yourself and race against the clock to prove your mastery of general knowledge!';

export const CATEGORIES_TITLE = 'Categories';

export const CATEGORIES = [
    { type: "history", label: "History", color: "#116D6E" },
    { type: "geography", label: "Geography", color: "#00337C" },
    { type: "music", label: "Music", color: "#750E21" },
    { type: "science", label: "Science", color: "#E36414" },
];

export const PLAYER_LABEL = 'Enter your name';

export const MAX_CHARACTERS_ALLOWED = 20;

export const DIFFICULTY_LABEL = 'Pick a difficulty';

export const DIFFICULTIES = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
];

export const LOADING_DIALOG_TITLE = 'Loading...';

export const RESULTS_DIALOG_TITLE = 'Results';

export const RESULTS_LEVEL = 'Awarded Level';

export const LEADERBOARD_TITLE = 'Leaderboard';

export const LEADERBOARD_HEADERS = ['RANK', 'PLAYER', 'LEVEL', 'SCORE'];

export const CORRECT_ANSWER_TITLES = [
    "Nailed It!",
    "Bingo!",
    "Spot On!",
    "Bravo!",
    "Eureka!",
    "You Rock!",
    "Bullseye!",
];

export const INCORRECT_ANSWER_TITLES = [
    "Oops!",
    "Uh-Oh!",
    "Not Quite!",
    "Close!",
    "Almost!",
    "Try Again!",
    "Oh, Snap!",
];

export const INITIAL_LEADERBOARD_ROWS = [
    { rank: 1, player: "Infinity", score: 450, level: "Sage" },
    { rank: 2, player: "Zero", score: 420, level: "Sage" },
    { rank: 3, player: "IKnowALot", score: 380, level: "Expert" },
    { rank: 4, player: "RandomPlayer", score: 350, level: "Expert" },
    { rank: 5, player: "Fleia", score: 320, level: "Expert" },
];
