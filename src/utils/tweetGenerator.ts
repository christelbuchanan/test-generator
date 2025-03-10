// This is a simplified tweet generator that mimics CZ's style
// In a real application, you would use an actual AI model or API

interface TweetTemplate {
  prefix: string[]
  middle: string[]
  suffix: string[]
  hashtags: string[]
  emojis: string[]
}

const tweetTemplates: Record<string, TweetTemplate> = {
  informative: {
    prefix: [
      "Just to clarify,",
      "FYI,",
      "For those asking,",
      "To be clear,",
      "Simple explanation:",
    ],
    middle: [
      "this is how it works.",
      "we are working on this.",
      "this is our approach.",
      "this is what's happening.",
      "this is the situation.",
    ],
    suffix: [
      "Stay tuned for updates.",
      "We will keep you posted.",
      "As always, thanks for your support.",
      "Appreciate your understanding.",
      "We're here for the long term.",
    ],
    hashtags: ["#Binance", "#BNB", "#Crypto", "#BUIDL", "#SAFU"],
    emojis: ["🔶", "👍", "💪", "🙏", "🚀"],
  },
  optimistic: {
    prefix: [
      "Good progress.",
      "Exciting times ahead.",
      "This is just the beginning.",
      "We keep building.",
      "Steady growth.",
    ],
    middle: [
      "The future is bright for crypto.",
      "adoption continues to increase.",
      "more innovations are coming.",
      "we're seeing positive developments.",
      "the ecosystem is expanding.",
    ],
    suffix: [
      "Onwards and upwards.",
      "The best is yet to come.",
      "Long term thinking wins.",
      "Focus on building real value.",
      "We're just getting started.",
    ],
    hashtags: ["#BNB", "#Crypto", "#BUIDL", "#Adoption", "#Innovation"],
    emojis: ["🚀", "💪", "🔶", "📈", "🌱"],
  },
  cautious: {
    prefix: [
      "Be careful.",
      "Please note,",
      "A friendly reminder:",
      "Important to understand:",
      "Take note:",
    ],
    middle: [
      "always do your own research.",
      "security should be your priority.",
      "markets will fluctuate, that's normal.",
      "there are risks in every investment.",
      "verify information from official sources only.",
    ],
    suffix: [
      "Stay SAFU.",
      "Protect your assets.",
      "Think long term.",
      "Don't invest more than you can afford to lose.",
      "Education is key.",
    ],
    hashtags: ["#SAFU", "#Security", "#DYOR", "#CryptoSafety", "#Binance"],
    emojis: ["🔒", "⚠️", "🛡️", "🔶", "👀"],
  },
  neutral: {
    prefix: [
      "Just sharing,",
      "Observation:",
      "My thoughts:",
      "Perspective:",
      "For what it's worth,",
    ],
    middle: [
      "this is an interesting development.",
      "we're monitoring the situation.",
      "there are multiple factors at play.",
      "it's important to consider all angles.",
      "the market is evolving as expected.",
    ],
    suffix: [
      "Let's see how it unfolds.",
      "Time will tell.",
      "We remain focused on our goals.",
      "Adaptability is key in this space.",
      "We continue to serve our users.",
    ],
    hashtags: ["#Crypto", "#Blockchain", "#Binance", "#BNB", "#Industry"],
    emojis: ["🔶", "👀", "🤔", "📊", "🌐"],
  },
  announcement: {
    prefix: [
      "We are pleased to announce",
      "Excited to share that",
      "New update:",
      "Important announcement:",
      "Just in:",
    ],
    middle: [
      "we've launched a new feature.",
      "we're introducing improvements to our platform.",
      "we've reached a new milestone.",
      "we're expanding our services.",
      "we've formed a new partnership.",
    ],
    suffix: [
      "Check it out now.",
      "More details on our blog.",
      "Thanks to our community for the support.",
      "This is just the beginning.",
      "Feedback welcome.",
    ],
    hashtags: ["#Binance", "#BNB", "#Announcement", "#Crypto", "#Innovation"],
    emojis: ["🔶", "🎉", "✨", "🚀", "🆕"],
  },
};

// Helper function to get random item from array
const getRandomItem = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)];
};

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const generateTweet = (topic: string, tone: string, length: string): string => {
  const template = tweetTemplates[tone] || tweetTemplates.informative;
  
  // Generate topic-specific content
  let topicContent = "";
  if (topic) {
    const topicPhrases = [
      `${topic} is an important area we're focusing on.`,
      `Regarding ${topic}, we're making steady progress.`,
      `${topic} continues to evolve in the crypto space.`,
      `We're seeing interesting developments in ${topic}.`,
      `Our team is working hard on ${topic}.`,
      `${topic} presents both challenges and opportunities.`,
      `The community's feedback on ${topic} has been valuable.`,
      `${topic} is showing promising signs.`,
    ];
    topicContent = getRandomItem(topicPhrases);
  }
  
  // Build the tweet based on length
  let tweet = "";
  const prefix = getRandomItem(template.prefix);
  const middle = topicContent || getRandomItem(template.middle);
  const suffix = getRandomItem(template.suffix);
  
  if (length === "short") {
    tweet = `${prefix} ${middle}`;
  } else if (length === "medium") {
    tweet = `${prefix} ${middle} ${suffix}`;
  } else {
    // For long tweets, add an additional sentence
    const extraSentences = [
      "This is how we approach things at Binance.",
      "Our users always come first.",
      "We believe in sustainable growth.",
      "Transparency is a core value for us.",
      "We're in this for the long term.",
      "Building takes time, but results last.",
      "The crypto industry continues to mature.",
      "Education remains a priority for wider adoption.",
    ];
    const extraSentence = getRandomItem(extraSentences);
    tweet = `${prefix} ${middle} ${extraSentence} ${suffix}`;
  }
  
  // Add hashtag and emoji with some probability
  if (Math.random() > 0.3) {
    tweet += ` ${getRandomItem(template.hashtags)}`;
  }
  
  if (Math.random() > 0.5) {
    tweet += ` ${getRandomItem(template.emojis)}`;
  }
  
  return capitalizeFirstLetter(tweet);
};
