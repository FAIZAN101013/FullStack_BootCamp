const axios = require('axios'); // For making HTTP requests
const cheerio = require('cheerio'); // For parsing and analyzing HTML

// Function to scrape and analyze data
const scrapeWebsite = async () => {
  try {
    const url = 'https://webscrapper.inside-ai.xyz';
    
    // Fetch the website content
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML using cheerio
    const $ = cheerio.load(html);

    // Extract and analyze specific data
    const data = [];
    $('div').each((index, element) => {
      const text = $(element).text().trim();
      if (text) {
        data.push(text);
      }
    });

    // Example: Count the number of unique words on the page
    const wordCount = {};
    data.forEach((text) => {
      text.split(/\s+/).forEach((word) => {
        word = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
        if (word) {
          wordCount[word] = (wordCount[word] || 0) + 1;
        }
      });
    });

    // Print analyzed data
    console.log('Analyzed Data:', data);
    console.log('Word Count:', wordCount);
  } catch (error) {
    console.error('Error fetching or analyzing the website:', error);
  }
};

// Call the function
scrapeWebsite();
