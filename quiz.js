// ============================================================
// QUIZ MASTER — COMPLETE JAVASCRIPT FILE
// Tumhe sirf allQuestions array mein questions add karne hain
// Baaki sab automatically kaam karega
// ============================================================




// ============================================================
// STEP 1: QUESTIONS POOL
// Yahan apne saare questions add karo
// Jitne chahiye utne daal sakte ho (100, 500, 1000+)
//
// Format har question ka:
// {
//   category: "category naam",   → jaise "GK", "science", "computer", "history"
//   question: "sawaal?",         → actual question text
//   options: ["A", "B", "C", "D"], → exactly 4 options (array)
//   correct: 0                   → sahi answer ka INDEX (0=pehla, 1=doosra, 2=teesra, 3=chautha)
// }
// ============================================================

const allQuestions = [
  {
    category: "computer",
    question: "Which method adds an item to the END of a JavaScript array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0  // "push()" sahi answer hai (index 0)
  },
  {
    category: "science",
    question: "What gas do plants absorb from the air?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 1  // "Carbon Dioxide" sahi answer hai (index 1)
  },
  {
    category: "science",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Saturn", "Mars"],
    correct: 3  // "Mars" sahi answer hai (index 3)
  },
  {
    category: "computer",
    question: "What does 'HTML' stand for?",
    options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    correct: 0  // "Hyper Text Markup Language" sahi answer hai (index 0)
  },

  {
    category: "GK",
    question: "Who was the first Prime Minister of India?",
    options: ["Indira Gandhi", "Jawaharlal Nehru", "Rajiv Gandhi", "Manmohan Singh"],
    correct: 1  // "Jawaharlal Nehru" sahi answer hai (index 1)
  },

{
category: "history",
question: "Who was the founder of the Maratha Empire?",
options: ["Shivaji Maharaj", "Sambhaji", "Baji Rao I", "Balaji Vishwanath"],
correct: 0
},
{
category: "history",
question: "Which Viceroy announced the partition of Bengal in 1905?",
options: ["Lord Curzon", "Lord Ripon", "Lord Mountbatten", "Lord Wellesley"],
correct: 0
},
{
category: "history",
question: "Who was the first Indian Governor-General of independent India?",
options: ["Rajendra Prasad", "C. Rajagopalachari", "Jawaharlal Nehru", "Sardar Patel"],
correct: 1
},
{
category: "history",
question: "The famous Sun Temple is located at?",
options: ["Khajuraho", "Konark", "Madurai", "Ajanta"],
correct: 1
},
{
category: "history",
question: "Who founded the Chola Dynasty?",
options: ["Karikala Chola", "Vijayalaya Chola", "Rajaraja Chola", "Rajendra Chola"],
correct: 1
},
{
category: "history",
question: "In which year did the Revolt of 1857 begin?",
options: ["1855", "1856", "1857", "1858"],
correct: 2
},
{
category: "history",
question: "Who was the court poet of Akbar?",
options: ["Tansen", "Birbal", "Abul Fazl", "Kalidasa"],
correct: 2
},
{
category: "history",
question: "Which dynasty built the Brihadeeswarar Temple?",
options: ["Pallava", "Chola", "Pandya", "Maurya"],
correct: 1
},
{
category: "history",
question: "Who gave the slogan 'Swaraj is my birthright'?",
options: ["Gokhale", "Tilak", "Gandhi", "Nehru"],
correct: 1
},
{
category: "history",
question: "Ajanta Caves are located in which state?",
options: ["Gujarat", "Maharashtra", "Madhya Pradesh", "Karnataka"],
correct: 1
},

{
category: "coding",
question: "Which HTML tag is used to create an unordered list?",
options: ["<ol>", "<ul>", "<li>", "<list>"],
correct: 1
},
{
category: "coding",
question: "Which HTML element contains page metadata?",
options: ["<body>", "<footer>", "<head>", "<section>"],
correct: 2
},
{
category: "coding",
question: "Which CSS property changes the font style to italic?",
options: ["font-weight", "font-style", "text-style", "font-italic"],
correct: 1
},
{
category: "coding",
question: "Which CSS value makes an element invisible but keeps its space?",
options: ["display:none", "visibility:hidden", "opacity:0", "hidden:true"],
correct: 1
},
{
category: "coding",
question: "Which JavaScript function is used to delay execution?",
options: ["wait()", "delay()", "setTimeout()", "pause()"],
correct: 2
},
{
category: "coding",
question: "Which method adds an element at the end of an array?",
options: ["pop()", "shift()", "push()", "unshift()"],
correct: 2
},
{
category: "coding",
question: "Which method removes the last element of an array?",
options: ["pop()", "push()", "shift()", "splice()"],
correct: 0
},
{
category: "coding",
question: "What will 5 + '5' return in JavaScript?",
options: ["10", "55", "Error", "Undefined"],
correct: 1
},
{
category: "coding",
question: "Which keyword stops a loop immediately?",
options: ["continue", "stop", "break", "return"],
correct: 2
},
{
category: "coding",
question: "Which HTML tag is used for a checkbox?",
options: ["<check>", "<input type='checkbox'>", "<box>", "<tick>"],
correct: 1
},

{
category: "science",
question: "What is the SI unit of pressure?",
options: ["Pascal", "Newton", "Joule", "Watt"],
correct: 0
},
{
category: "science",
question: "Which planet is called the Morning Star?",
options: ["Mars", "Venus", "Mercury", "Saturn"],
correct: 1
},
{
category: "science",
question: "Which scientist discovered the electron?",
options: ["Rutherford", "J.J. Thomson", "Bohr", "Einstein"],
correct: 1
},
{
category: "science",
question: "What is the chemical symbol of Gold?",
options: ["Go", "Gd", "Au", "Ag"],
correct: 2
},
{
category: "science",
question: "Which part of the cell contains genetic material?",
options: ["Nucleus", "Cytoplasm", "Cell Wall", "Ribosome"],
correct: 0
},
{
category: "science",
question: "Which gas is most abundant in Earth's atmosphere?",
options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
correct: 2
},
{
category: "science",
question: "What is the pH of a strong acid generally?",
options: ["Above 7", "7", "Below 7", "Exactly 14"],
correct: 2
},
{
category: "science",
question: "Which instrument measures atmospheric pressure?",
options: ["Thermometer", "Barometer", "Hygrometer", "Ammeter"],
correct: 1
},
{
category: "science",
question: "Which vitamin helps in blood clotting?",
options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
correct: 3
},
{
category: "science",
question: "What is the nearest star to Earth?",
options: ["Sirius", "Alpha Centauri", "Sun", "Polaris"],
correct: 2
},

{
category: "GK",
question: "What is the capital of South Korea?",
options: ["Busan", "Seoul", "Incheon", "Daegu"],
correct: 1
},
{
category: "GK",
question: "Which Indian city is known as the Pink City?",
options: ["Udaipur", "Jodhpur", "Jaipur", "Bikaner"],
correct: 2
},
{
category: "GK",
question: "Which is the largest island in the world?",
options: ["Greenland", "Madagascar", "Borneo", "Sri Lanka"],
correct: 0
},
{
category: "GK",
question: "Who wrote 'Ramcharitmanas'?",
options: ["Kabir", "Surdas", "Tulsidas", "Valmiki"],
correct: 2
},
{
category: "GK",
question: "Which is the highest civilian award in India?",
options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Param Vir Chakra"],
correct: 2
},
{
category: "GK",
question: "Which country is known as the Land of Thunder Dragon?",
options: ["Nepal", "Bhutan", "Mongolia", "Myanmar"],
correct: 1
},
{
category: "GK",
question: "Which river passes through Egypt?",
options: ["Amazon", "Yangtze", "Nile", "Danube"],
correct: 2
},
{
category: "GK",
question: "How many continents are there on Earth?",
options: ["5", "6", "7", "8"],
correct: 2
},
{
category: "GK",
question: "What is the national currency of the United Kingdom?",
options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
correct: 2
},
{
category: "GK",
question: "Which is the largest democracy in the world?",
options: ["USA", "India", "Brazil", "Indonesia"],
correct: 1
},

{
category: "sports",
question: "How many players are on the field for one football (soccer) team?",
options: ["9", "10", "11", "12"],
correct: 2
},
{
category: "sports",
question: "Which country won the ICC Cricket World Cup 2011?",
options: ["Australia", "India", "England", "Pakistan"],
correct: 1
},
{
category: "sports",
question: "In tennis, what is the score called when both players have 40 points?",
options: ["Advantage", "Love", "Deuce", "Tie"],
correct: 2
},
{
category: "sports",
question: "Which sport uses a shuttlecock?",
options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
correct: 1
},
{
category: "sports",
question: "Who is known as the 'Flying Sikh'?",
options: ["Milkha Singh", "P.T. Usha", "Neeraj Chopra", "Kapil Dev"],
correct: 0
},
{
category: "sports",
question: "How many rings are there in the Olympic symbol?",
options: ["4", "5", "6", "7"],
correct: 1
},
{
category: "sports",
question: "Which country originated the game of cricket?",
options: ["India", "Australia", "England", "South Africa"],
correct: 2
},
{
category: "sports",
question: "How many points is a free throw worth in basketball?",
options: ["1", "2", "3", "4"],
correct: 0
},
{
category: "sports",
question: "Which sport is associated with Wimbledon?",
options: ["Cricket", "Football", "Tennis", "Golf"],
correct: 2
},
{
category: "sports",
question: "What is the length of a cricket pitch?",
options: ["20 yards", "22 yards", "24 yards", "26 yards"],
correct: 1
},
{
category: "history",
question: "Who was the founder of the Mughal Empire in India?",
options: ["Akbar", "Babur", "Humayun", "Aurangzeb"],
correct: 1
},
{
category: "history",
question: "Which Governor-General abolished Sati?",
options: ["Lord Curzon", "Lord Ripon", "Lord William Bentinck", "Lord Dalhousie"],
correct: 2
},
{
category: "history",
question: "Who was the first woman ruler of Delhi Sultanate?",
options: ["Noor Jahan", "Razia Sultan", "Jodha Bai", "Begum Hazrat Mahal"],
correct: 1
},
{
category: "history",
question: "The Battle of Haldighati was fought between Akbar and?",
options: ["Rana Sanga", "Maharana Pratap", "Shivaji", "Prithviraj Chauhan"],
correct: 1
},
{
category: "history",
question: "Who founded the Slave Dynasty?",
options: ["Iltutmish", "Balban", "Qutub-ud-din Aibak", "Razia Sultan"],
correct: 2
},
{
category: "history",
question: "Who gave the slogan 'Jai Jawan Jai Kisan'?",
options: ["Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Patel"],
correct: 1
},
{
category: "history",
question: "Which city was the capital of the Vijayanagara Empire?",
options: ["Hampi", "Mysore", "Madurai", "Warangal"],
correct: 0
},
{
category: "history",
question: "Who established the Sikh Khalsa in 1699?",
options: ["Guru Nanak", "Guru Arjan Dev", "Guru Gobind Singh", "Guru Tegh Bahadur"],
correct: 2
},
{
category: "history",
question: "Who was known as Sher Shah before becoming ruler?",
options: ["Farid Khan", "Daulat Khan", "Bairam Khan", "Ibrahim Lodi"],
correct: 0
},
{
category: "history",
question: "The First Battle of Panipat was fought in?",
options: ["1526", "1556", "1761", "1857"],
correct: 0
},

{
category: "coding",
question: "Which HTML tag is used to create a table row?",
options: ["<td>", "<th>", "<tr>", "<table>"],
correct: 2
},
{
category: "coding",
question: "Which HTML tag is used for the largest heading?",
options: ["<h6>", "<head>", "<h1>", "<title>"],
correct: 2
},
{
category: "coding",
question: "Which CSS property is used to make text bold?",
options: ["font-style", "font-weight", "text-bold", "weight"],
correct: 1
},
{
category: "coding",
question: "Which CSS property is used to center text?",
options: ["align", "text-align", "center", "justify"],
correct: 1
},
{
category: "coding",
question: "Which JavaScript method converts text to integer?",
options: ["parseInt()", "Number()", "Integer()", "parseNumber()"],
correct: 0
},
{
category: "coding",
question: "Which keyword is used for conditions in JavaScript?",
options: ["if", "loop", "case", "switcher"],
correct: 0
},
{
category: "coding",
question: "What will typeof '123' return?",
options: ["number", "integer", "string", "object"],
correct: 2
},
{
category: "coding",
question: "Which event occurs when a button is clicked?",
options: ["onhover", "onclick", "onfocus", "onchange"],
correct: 1
},
{
category: "coding",
question: "Which HTML tag is used to insert a line break?",
options: ["<lb>", "<break>", "<br>", "<hr>"],
correct: 2
},
{
category: "coding",
question: "Which CSS property rounds corners?",
options: ["border-radius", "corner-radius", "round-corner", "radius"],
correct: 0
},

{
category: "science",
question: "Which planet has the most moons?",
options: ["Earth", "Mars", "Saturn", "Venus"],
correct: 2
},
{
category: "science",
question: "What is the SI unit of frequency?",
options: ["Newton", "Hertz", "Joule", "Volt"],
correct: 1
},
{
category: "science",
question: "Which element has the symbol Fe?",
options: ["Fluorine", "Iron", "Francium", "Fermium"],
correct: 1
},
{
category: "science",
question: "Which organ purifies blood in the human body?",
options: ["Heart", "Liver", "Kidney", "Lungs"],
correct: 2
},
{
category: "science",
question: "What is the chemical formula of common salt?",
options: ["NaCl", "KCl", "CaCO3", "HCl"],
correct: 0
},
{
category: "science",
question: "Which vitamin is produced by sunlight?",
options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
correct: 3
},
{
category: "science",
question: "Which gas is essential for respiration?",
options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
correct: 2
},
{
category: "science",
question: "What is the boiling point of water at sea level?",
options: ["90°C", "95°C", "100°C", "110°C"],
correct: 2
},
{
category: "science",
question: "Which blood group is called universal donor?",
options: ["A", "B", "AB", "O Negative"],
correct: 3
},
{
category: "science",
question: "Which metal is the best conductor of electricity?",
options: ["Copper", "Silver", "Iron", "Aluminium"],
correct: 1
},

{
category: "GK",
question: "Which is the largest desert in the world?",
options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
correct: 0
},
{
category: "GK",
question: "Who is known as the Father of the Nation in India?",
options: ["Nehru", "Patel", "Mahatma Gandhi", "Subhash Bose"],
correct: 2
},
{
category: "GK",
question: "What is the capital of Canada?",
options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
correct: 1
},
{
category: "GK",
question: "Which is the national bird of India?",
options: ["Peacock", "Parrot", "Sparrow", "Eagle"],
correct: 0
},
{
category: "GK",
question: "Which country has the largest population?",
options: ["India", "USA", "China", "Russia"],
correct: 0
},
{
category: "GK",
question: "Which ocean lies between Africa and Australia?",
options: ["Atlantic", "Pacific", "Indian", "Arctic"],
correct: 2
},
{
category: "GK",
question: "What is the capital of New Zealand?",
options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
correct: 1
},
{
category: "GK",
question: "How many players are there in a cricket team?",
options: ["9", "10", "11", "12"],
correct: 2
},
{
category: "GK",
question: "Which is the longest dam in India?",
options: ["Bhakra", "Tehri", "Hirakud", "Sardar Sarovar"],
correct: 2
},
{
category: "GK",
question: "Which Indian state is known as the Spice Garden of India?",
options: ["Kerala", "Punjab", "Rajasthan", "Gujarat"],
correct: 0
},
{
category: "history",
question: "Who was the founder of the Gupta Empire?",
options: ["Samudragupta", "Chandragupta I", "Ashoka", "Harsha"],
correct: 1
},
{
category: "history",
question: "Which movement was led by Mahatma Gandhi in 1930?",
options: ["Quit India", "Non-Cooperation", "Salt March", "Khilafat"],
correct: 2
},
{
category: "history",
question: "Who was the first President of independent India?",
options: ["Rajendra Prasad", "Nehru", "Patel", "Radhakrishnan"],
correct: 0
},
{
category: "history",
question: "The Jallianwala Bagh massacre occurred in?",
options: ["1917", "1918", "1919", "1920"],
correct: 2
},
{
category: "history",
question: "Who built Fatehpur Sikri?",
options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
correct: 0
},
{
category: "history",
question: "Who was known as the Nightingale of India?",
options: ["Sarojini Naidu", "Indira Gandhi", "Annie Besant", "Kasturba Gandhi"],
correct: 0
},
{
category: "history",
question: "Which dynasty built the Khajuraho temples?",
options: ["Maurya", "Chola", "Chandela", "Gupta"],
correct: 2
},
{
category: "history",
question: "Who succeeded Ashoka?",
options: ["Bindusara", "Dasharatha", "Chandragupta", "Harsha"],
correct: 1
},
{
category: "history",
question: "Which European power first came to India by sea?",
options: ["British", "French", "Portuguese", "Dutch"],
correct: 2
},
{
category: "history",
question: "Who wrote 'Discovery of India'?",
options: ["Gandhi", "Patel", "Nehru", "Tagore"],
correct: 2
},

{
category: "coding",
question: "Which HTML tag creates a paragraph?",
options: ["<h1>", "<p>", "<div>", "<span>"],
correct: 1
},
{
category: "coding",
question: "Which HTML tag is used for images?",
options: ["<pic>", "<image>", "<img>", "<src>"],
correct: 2
},
{
category: "coding",
question: "Which CSS property changes background color?",
options: ["bgcolor", "background-color", "color", "fill"],
correct: 1
},
{
category: "coding",
question: "Which CSS property controls text size?",
options: ["font-size", "text-size", "size", "font-style"],
correct: 0
},
{
category: "coding",
question: "How do you write 'Hello' in console?",
options: ["print()", "console.log()", "echo()", "show()"],
correct: 1
},
{
category: "coding",
question: "JavaScript file extension is?",
options: [".java", ".jsx", ".js", ".script"],
correct: 2
},
{
category: "coding",
question: "Which operator checks equality and type?",
options: ["==", "=", "===", "!="],
correct: 2
},
{
category: "coding",
question: "Which loop runs at least once?",
options: ["for", "while", "do...while", "foreach"],
correct: 2
},
{
category: "coding",
question: "Which keyword creates a constant?",
options: ["var", "let", "const", "static"],
correct: 2
},
{
category: "coding",
question: "What does DOM stand for?",
options: ["Document Object Model", "Data Object Method", "Document Order Model", "Desktop Object Model"],
correct: 0
},

{
category: "science",
question: "Who proposed the theory of relativity?",
options: ["Newton", "Einstein", "Bohr", "Galileo"],
correct: 1
},
{
category: "science",
question: "What is the chemical formula of water?",
options: ["H2O", "CO2", "O2", "NaCl"],
correct: 0
},
{
category: "science",
question: "Which particle has a negative charge?",
options: ["Proton", "Neutron", "Electron", "Photon"],
correct: 2
},
{
category: "science",
question: "SI unit of power is?",
options: ["Watt", "Volt", "Ampere", "Joule"],
correct: 0
},
{
category: "science",
question: "Which acid is present in lemon?",
options: ["Citric Acid", "Sulfuric Acid", "Nitric Acid", "Hydrochloric Acid"],
correct: 0
},
{
category: "science",
question: "What is the atomic number of Oxygen?",
options: ["6", "7", "8", "9"],
correct: 2
},
{
category: "science",
question: "Which law explains action and reaction?",
options: ["Newton's First", "Newton's Second", "Newton's Third", "Ohm's Law"],
correct: 2
},
{
category: "science",
question: "What is the SI unit of resistance?",
options: ["Ohm", "Volt", "Ampere", "Tesla"],
correct: 0
},
{
category: "science",
question: "Which gas is used in electric bulbs?",
options: ["Argon", "Oxygen", "Nitrogen", "Hydrogen"],
correct: 0
},
{
category: "science",
question: "What is the hardest natural substance?",
options: ["Iron", "Diamond", "Gold", "Quartz"],
correct: 1
},

{
category: "GK",
question: "Which is the national animal of India?",
options: ["Lion", "Tiger", "Elephant", "Leopard"],
correct: 1
},
{
category: "GK",
question: "Which is the largest ocean?",
options: ["Indian", "Atlantic", "Pacific", "Arctic"],
correct: 2
},
{
category: "GK",
question: "How many states are there in India?",
options: ["26", "27", "28", "29"],
correct: 2
},
{
category: "GK",
question: "Currency of the USA?",
options: ["Euro", "Dollar", "Pound", "Yen"],
correct: 1
},
{
category: "GK",
question: "Which is the tallest mountain in the world?",
options: ["K2", "Kanchenjunga", "Everest", "Makalu"],
correct: 2
},
{
category: "GK",
question: "Who wrote the National Anthem of India?",
options: ["Tagore", "Premchand", "Gandhi", "Nehru"],
correct: 0
},
{
category: "GK",
question: "Which is the smallest continent?",
options: ["Europe", "Australia", "Antarctica", "Africa"],
correct: 1
},
{
category: "GK",
question: "Which country is famous for the Eiffel Tower?",
options: ["Italy", "Germany", "France", "Spain"],
correct: 2
},
{
category: "GK",
question: "Which river is called the Ganga of the South?",
options: ["Godavari", "Krishna", "Kaveri", "Narmada"],
correct: 0
},
{
category: "GK",
question: "Who invented the telephone?",
options: ["Edison", "Bell", "Tesla", "Newton"],
correct: 1
},

{
category: "current_affairs",
question: "Which Indian agency launches satellites?",
options: ["DRDO", "ISRO", "BARC", "HAL"],
correct: 1
},
{
category: "current_affairs",
question: "India's currency is issued by?",
options: ["SBI", "RBI", "SEBI", "NABARD"],
correct: 1
},
{
category: "current_affairs",
question: "G20 is a group of how many countries?",
options: ["18", "19", "20", "21"],
correct: 2
},
{
category: "current_affairs",
question: "Which mission landed Chandrayaan-3 on the Moon?",
options: ["ISRO", "NASA", "ESA", "JAXA"],
correct: 0
},
{
category: "current_affairs",
question: "Which digital payment system is popular in India?",
options: ["UPI", "PayPal", "Stripe", "Swift"],
correct: 0
},
{
category: "current_affairs",
question: "What does AI stand for?",
options: ["Artificial Intelligence", "Automatic Internet", "Advanced Interface", "Applied Information"],
correct: 0
},
{
category: "current_affairs",
question: "Which organization conducts IPL?",
options: ["ICC", "BCCI", "FIFA", "IOC"],
correct: 1
},
{
category: "current_affairs",
question: "Which country launched the James Webb Space Telescope with NASA partnership?",
options: ["Canada", "France", "USA", "Brazil"],
correct: 2
},
{
category: "current_affairs",
question: "What does GDP stand for?",
options: ["Gross Domestic Product", "General Domestic Profit", "Global Development Plan", "Gross Development Product"],
correct: 0
},
{
category: "current_affairs",
question: "Which technology is used for cryptocurrencies like Bitcoin?",
options: ["Blockchain", "Cloud", "IoT", "VPN"],
correct: 0
},
{
category: "history",
question: "Who founded the Maurya Empire?",
options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
correct: 1
},
{
category: "history",
question: "Who was known as the Iron Man of India?",
options: ["Subhash Chandra Bose", "Jawaharlal Nehru", "Sardar Patel", "Bhagat Singh"],
correct: 2
},
{
category: "history",
question: "In which year did India gain independence?",
options: ["1945", "1946", "1947", "1948"],
correct: 2
},
{
category: "history",
question: "Who built the Red Fort?",
options: ["Akbar", "Babur", "Shah Jahan", "Humayun"],
correct: 2
},
{
category: "history",
question: "Who was the first Mughal Emperor?",
options: ["Akbar", "Babur", "Humayun", "Jahangir"],
correct: 1
},
{
category: "history",
question: "Who wrote Arthashastra?",
options: ["Kalidasa", "Chanakya", "Tulsidas", "Kabir"],
correct: 1
},
{
category: "history",
question: "Which battle established British rule in India?",
options: ["Battle of Panipat", "Battle of Plassey", "Battle of Buxar", "Battle of Haldighati"],
correct: 1
},
{
category: "history",
question: "Who was called Netaji?",
options: ["Bhagat Singh", "Subhash Chandra Bose", "Rajguru", "Lala Lajpat Rai"],
correct: 1
},
{
category: "history",
question: "The Quit India Movement started in?",
options: ["1940", "1941", "1942", "1943"],
correct: 2
},
{
category: "history",
question: "Who was the last Mughal Emperor?",
options: ["Bahadur Shah Zafar", "Akbar II", "Aurangzeb", "Jahangir"],
correct: 0
},

{
category: "coding",
question: "HTML stands for?",
options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Markup Language"],
correct: 0
},
{
category: "coding",
question: "Which tag is used for a hyperlink in HTML?",
options: ["<link>", "<a>", "<href>", "<url>"],
correct: 1
},
{
category: "coding",
question: "Which CSS property changes text color?",
options: ["font-color", "text-color", "color", "background"],
correct: 2
},
{
category: "coding",
question: "Which CSS property is used for spacing outside an element?",
options: ["padding", "margin", "border", "gap"],
correct: 1
},
{
category: "coding",
question: "Which symbol is used for id selector in CSS?",
options: [".", "#", "*", "&"],
correct: 1
},
{
category: "coding",
question: "Which symbol is used for class selector in CSS?",
options: ["#", ".", "&", "*"],
correct: 1
},
{
category: "coding",
question: "JavaScript is mainly used for?",
options: ["Styling", "Database", "Interactivity", "Hosting"],
correct: 2
},
{
category: "coding",
question: "How do you write a comment in JavaScript?",
options: ["<!-- -->", "//", "**", "##"],
correct: 1
},
{
category: "coding",
question: "Which method displays a popup message?",
options: ["print()", "alert()", "popup()", "show()"],
correct: 1
},
{
category: "coding",
question: "Which keyword declares a variable?",
options: ["var", "int", "string", "define"],
correct: 0
},

{
category: "science",
question: "What is the SI unit of force?",
options: ["Joule", "Newton", "Pascal", "Watt"],
correct: 1
},
{
category: "science",
question: "Who discovered gravity?",
options: ["Einstein", "Newton", "Galileo", "Tesla"],
correct: 1
},
{
category: "science",
question: "Speed of light is approximately?",
options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10¹⁰ m/s"],
correct: 0
},
{
category: "science",
question: "Chemical symbol of Sodium?",
options: ["So", "Na", "S", "N"],
correct: 1
},
{
category: "science",
question: "pH value of pure water is?",
options: ["5", "6", "7", "8"],
correct: 2
},
{
category: "science",
question: "Which gas is known as laughing gas?",
options: ["Oxygen", "Nitrous Oxide", "Nitrogen", "Helium"],
correct: 1
},
{
category: "science",
question: "Unit of electric current?",
options: ["Volt", "Ohm", "Ampere", "Watt"],
correct: 2
},
{
category: "science",
question: "Which metal is liquid at room temperature?",
options: ["Iron", "Mercury", "Gold", "Silver"],
correct: 1
},
{
category: "science",
question: "Chemical formula of methane?",
options: ["CH4", "CO2", "H2O", "NH3"],
correct: 0
},
{
category: "science",
question: "What is the SI unit of energy?",
options: ["Watt", "Pascal", "Joule", "Newton"],
correct: 2
},

{
category: "GK",
question: "Who is the President of India in 2026?",
options: ["Droupadi Murmu", "Narendra Modi", "Jagdeep Dhankhar", "Ram Nath Kovind"],
correct: 0
},
{
category: "GK",
question: "Which country hosted the Cricket World Cup 2023?",
options: ["England", "Australia", "India", "South Africa"],
correct: 2
},
{
category: "GK",
question: "G20 Summit 2023 was hosted by?",
options: ["China", "India", "USA", "Japan"],
correct: 1
},
{
category: "GK",
question: "ISRO belongs to which country?",
options: ["China", "India", "Russia", "Japan"],
correct: 1
},
{
category: "GK",
question: "Capital of Australia?",
options: ["Sydney", "Melbourne", "Canberra", "Perth"],
correct: 2
},
{
category: "GK",
question: "Largest continent in the world?",
options: ["Africa", "Europe", "Asia", "Australia"],
correct: 2
},
{
category: "GK",
question: "Currency of Japan?",
options: ["Won", "Yuan", "Yen", "Dollar"],
correct: 2
},
{
category: "GK",
question: "Which is the longest river in the world?",
options: ["Amazon", "Nile", "Ganga", "Yangtze"],
correct: 1
},
{
category: "GK",
question: "Which country is known as the Land of Rising Sun?",
options: ["China", "Japan", "Thailand", "Korea"],
correct: 1
},
{
category: "GK",
question: "Which planet is closest to the Sun?",
options: ["Venus", "Mercury", "Earth", "Mars"],
correct: 1
}
,
{
category: "computer",
question: "What does CPU stand for?",
options: ["Central Processing Unit","Computer Processing Unit","Central Program Unit","Control Processing Unit"],
correct: 0
},
{
category: "computer",
question: "Which company developed Windows?",
options: ["Apple","Google","Microsoft","IBM"],
correct: 2
},
{
category: "computer",
question: "What does RAM stand for?",
options: ["Random Access Memory","Read Access Memory","Rapid Access Memory","Run Access Memory"],
correct: 0
},
{
category: "computer",
question: "Which device is used to input text?",
options: ["Monitor","Keyboard","Printer","Speaker"],
correct: 1
},
{
category: "computer",
question: "Which language is used for web page structure?",
options: ["CSS","JavaScript","HTML","Python"],
correct: 2
},
{
category: "computer",
question: "Which key is used to delete text on the left side of cursor?",
options: ["Shift","Backspace","Ctrl","Alt"],
correct: 1
},
{
category: "computer",
question: "What does USB stand for?",
options: ["Universal Serial Bus","United Service Bus","Universal System Bus","Unique Serial Bus"],
correct: 0
},
{
category: "computer",
question: "Which is an operating system?",
options: ["Windows","Chrome","Google","Intel"],
correct: 0
},
{
category: "computer",
question: "What is the brain of a computer?",
options: ["RAM","Hard Disk","CPU","Monitor"],
correct: 2
},
{
category: "computer",
question: "Which company created the iPhone?",
options: ["Samsung","Apple","Nokia","Sony"],
correct: 1
},
{
category: "computer",
question: "What does WWW stand for?",
options: ["World Wide Web","World Web Wide","Wide World Web","Web World Wide"],
correct: 0
},
{
category: "computer",
question: "Which device displays output?",
options: ["Keyboard","Mouse","Monitor","Scanner"],
correct: 2
},
{
category: "computer",
question: "Which is used to move the pointer?",
options: ["Printer","Mouse","Speaker","Router"],
correct: 1
},
{
category: "computer",
question: "What is the full form of ROM?",
options: ["Read Only Memory","Run Only Memory","Random Only Memory","Read Open Memory"],
correct: 0
},
{
category: "computer",
question: "Which software is used for presentations?",
options: ["Excel","PowerPoint","Paint","Notepad"],
correct: 1
},
{
category: "computer",
question: "Which is a web browser?",
options: ["Chrome","Excel","Word","Paint"],
correct: 0
},
{
category: "computer",
question: "Which company owns Android?",
options: ["Microsoft","Apple","Google","Intel"],
correct: 2
},
{
category: "computer",
question: "What is the shortcut for Copy?",
options: ["Ctrl+V","Ctrl+X","Ctrl+C","Ctrl+P"],
correct: 2
},
{
category: "computer",
question: "What is the shortcut for Paste?",
options: ["Ctrl+P","Ctrl+V","Ctrl+C","Ctrl+S"],
correct: 1
},
{
category: "computer",
question: "What is the shortcut for Save?",
options: ["Ctrl+S","Ctrl+P","Ctrl+Z","Ctrl+A"],
correct: 0
},
{
category: "computer",
question: "Which storage device has the largest capacity?",
options: ["CD","DVD","Blu-ray","Floppy Disk"],
correct: 2
},
{
category: "computer",
question: "Which is not an input device?",
options: ["Mouse","Keyboard","Scanner","Monitor"],
correct: 3
},
{
category: "computer",
question: "What is the full form of PDF?",
options: ["Portable Document Format","Public Document File","Print Data File","Portable Data Form"],
correct: 0
},
{
category: "computer",
question: "Which company developed Java?",
options: ["Sun Microsystems","Google","Apple","IBM"],
correct: 0
},
{
category: "computer",
question: "Which key refreshes a webpage?",
options: ["F1","F5","F9","F12"],
correct: 1
},
{
category: "science",
question: "What gas do plants absorb?",
options: ["Oxygen","Hydrogen","Carbon Dioxide","Nitrogen"],
correct: 2
},
{
category: "science",
question: "Which planet is called the Red Planet?",
options: ["Venus","Jupiter","Mars","Saturn"],
correct: 2
},
{
category: "science",
question: "What is H2O?",
options: ["Salt","Water","Oxygen","Hydrogen"],
correct: 1
},
{
category: "science",
question: "Which organ pumps blood?",
options: ["Liver","Brain","Heart","Kidney"],
correct: 2
},
{
category: "science",
question: "What is the nearest star to Earth?",
options: ["Polaris","Sun","Sirius","Alpha Centauri"],
correct: 1
},
{
category: "science",
question: "Which vitamin is obtained from sunlight?",
options: ["A","B","C","D"],
correct: 3
},
{
category: "science",
question: "What is the boiling point of water?",
options: ["50°C","75°C","100°C","120°C"],
correct: 2
},
{
category: "science",
question: "Which gas is essential for breathing?",
options: ["Nitrogen","Oxygen","Carbon Dioxide","Helium"],
correct: 1
},
{
category: "science",
question: "How many bones are in an adult human body?",
options: ["206","208","210","212"],
correct: 0
},
{
category: "science",
question: "Which planet is largest?",
options: ["Earth","Mars","Jupiter","Venus"],
correct: 2
},
{
category: "science",
question: "What is the chemical symbol of gold?",
options: ["Ag","Au","Go","Gd"],
correct: 1
},
{
category: "science",
question: "What force pulls objects toward Earth?",
options: ["Magnetism","Gravity","Pressure","Energy"],
correct: 1
},
{
category: "science",
question: "Which blood cells fight infection?",
options: ["RBC","WBC","Platelets","Plasma"],
correct: 1
},
{
category: "science",
question: "Which part of plant makes food?",
options: ["Root","Stem","Leaf","Flower"],
correct: 2
},
{
category: "science",
question: "What is the center of an atom called?",
options: ["Shell","Nucleus","Electron","Proton"],
correct: 1
},
{
category: "science",
question: "Which gas forms most of Earth's atmosphere?",
options: ["Oxygen","Nitrogen","Hydrogen","Carbon Dioxide"],
correct: 1
},
{
category: "science",
question: "What is the hardest natural substance?",
options: ["Gold","Iron","Diamond","Silver"],
correct: 2
},
{
category: "science",
question: "Which organ helps us think?",
options: ["Heart","Brain","Liver","Kidney"],
correct: 1
},
{
category: "science",
question: "Which planet has rings?",
options: ["Mercury","Mars","Saturn","Earth"],
correct: 2
},
{
category: "science",
question: "What is the chemical symbol for oxygen?",
options: ["Ox","O","Og","On"],
correct: 1
},
{
category: "GK",
question: "Who was the first Prime Minister of India?",
options: ["Indira Gandhi","Jawaharlal Nehru","Rajiv Gandhi","Manmohan Singh"],
correct: 1
},
{
category: "GK",
question: "What is the capital of India?",
options: ["Mumbai","Kolkata","New Delhi","Chennai"],
correct: 2
},
{
category: "GK",
question: "National animal of India?",
options: ["Lion","Tiger","Elephant","Peacock"],
correct: 1
},
{
category: "GK",
question: "National bird of India?",
options: ["Peacock","Parrot","Sparrow","Eagle"],
correct: 0
},
{
category: "GK",
question: "Which is the largest country?",
options: ["USA","China","Russia","India"],
correct: 2
},
{
category: "GK",
question: "How many states are there in India?",
options: ["28","29","30","27"],
correct: 0
},
{
category: "GK",
question: "What is the currency of India?",
options: ["Dollar","Euro","Rupee","Yen"],
correct: 2
},
{
category: "GK",
question: "Who wrote the National Anthem of India?",
options: ["Bankim Chandra","Rabindranath Tagore","Premchand","Nehru"],
correct: 1
},
{
category: "GK",
question: "Which ocean is largest?",
options: ["Atlantic","Pacific","Indian","Arctic"],
correct: 1
},
{
category: "GK",
question: "Which is the tallest mountain?",
options: ["K2","Kanchenjunga","Everest","Makalu"],
correct: 2
},
{
category: "history",
question: "Who built the Taj Mahal?",
options: ["Akbar","Shah Jahan","Babur","Humayun"],
correct: 1
},
{
category: "history",
question: "Who was known as Iron Man of India?",
options: ["Nehru","Patel","Gandhi","Bose"],
correct: 1
},
{
category: "history",
question: "When did India gain independence?",
options: ["1945","1946","1947","1948"],
correct: 2
},
{
category: "history",
question: "Who discovered sea route to India?",
options: ["Columbus","Vasco da Gama","Cook","Magellan"],
correct: 1
},
{
category: "history",
question: "Who founded the Maurya Empire?",
options: ["Ashoka","Bindusara","Chandragupta Maurya","Harsha"],
correct: 2
},
{
category: "history",
question: "Who was the teacher of Chandragupta Maurya?",
options: ["Kalidas","Chanakya","Aryabhata","Tulsidas"],
correct: 1
},
{
category: "history",
question: "Who was the first Mughal emperor?",
options: ["Akbar","Babur","Humayun","Aurangzeb"],
correct: 1
},
{
category: "history",
question: "Who gave the slogan 'Jai Hind'?",
options: ["Nehru","Patel","Subhas Chandra Bose","Tilak"],
correct: 2
},
{
category: "history",
question: "Who wrote Ramcharitmanas?",
options: ["Tulsidas","Kabir","Kalidas","Valmiki"],
correct: 0
},
{
category: "history",
question: "Who was called Nightingale of India?",
options: ["Indira Gandhi","Sarojini Naidu","Annie Besant","Aruna Asaf Ali"],
correct: 1
},
{
category: "sports",
question: "How many players are in a cricket team?",
options: ["9","10","11","12"],
correct: 2
},
{
category: "sports",
question: "Which country won the Cricket World Cup 2011?",
options: ["Australia","India","England","Pakistan"],
correct: 1
},
{
category: "sports",
question: "Who is known as the God of Cricket?",
options: ["Dhoni","Kohli","Sachin Tendulkar","Dravid"],
correct: 2
},
{
category: "sports",
question: "Which sport uses a shuttlecock?",
options: ["Tennis","Badminton","Hockey","Golf"],
correct: 1
},
{
category: "sports",
question: "How many players are on a football team?",
options: ["9","10","11","12"],
correct: 2
},
{
category: "sports",
question: "Which country hosted Olympics 2024?",
options: ["Japan","France","China","USA"],
correct: 1
},
{
category: "sports",
question: "Who is famous for sprinting?",
options: ["Usain Bolt","Federer","Messi","Jordan"],
correct: 0
},
{
category: "sports",
question: "Which game uses a racket?",
options: ["Football","Tennis","Hockey","Kabaddi"],
correct: 1
},
{
category: "sports",
question: "Which country invented cricket?",
options: ["India","Australia","England","South Africa"],
correct: 2
},
{
category: "sports",
question: "Kabaddi originated in?",
options: ["India","China","Japan","Nepal"],
correct: 0
},

{
category: "mixed",
question: "5 + 7 = ?",
options: ["10","11","12","13"],
correct: 2
},
{
category: "mixed",
question: "Square root of 81?",
options: ["7","8","9","10"],
correct: 2
},
{
category: "mixed",
question: "How many days in a week?",
options: ["5","6","7","8"],
correct: 2
},
{
category: "mixed",
question: "Which is a programming language?",
options: ["Python","Tiger","Mango","Table"],
correct: 0
},
{
category: "mixed",
question: "Which is the largest continent?",
options: ["Asia","Europe","Africa","Australia"],
correct: 0
},
{
category: "mixed",
question: "How many months in a year?",
options: ["10","11","12","13"],
correct: 2
},
{
category: "mixed",
question: "Capital of Japan?",
options: ["Tokyo","Osaka","Kyoto","Seoul"],
correct: 0
},
{
category: "mixed",
question: "15 × 2 = ?",
options: ["25","30","35","40"],
correct: 1
},
{
category: "mixed",
question: "Which animal is called King of Jungle?",
options: ["Tiger","Lion","Elephant","Leopard"],
correct: 1
},
{
category: "mixed",
question: "How many colors in rainbow?",
options: ["5","6","7","8"],
correct: 2
},


];




// ============================================================
// STEP 2: STATE VARIABLES
// Ye variables quiz ka current "state" (halat) track karte hain
// Jaise score kitna hai, abhi kaunsa question chal raha hai, etc.
// ============================================================

let questions     = [];   // active quiz ke questions — allQuestions se random subset niklega yahan
                          // shuru mein khaali hai, jab user "Start" dabayega tab bharega

let selectedCount = 0;    // user ne start screen pe kitne questions select kiye (5/10/20/50)
                          // shuru mein 0 hai (matlab kuch select nahi hua)

let currentQuestion = 0;  // abhi kaunsa question chal raha hai — array index hai
                          // 0 = pehla question, 1 = doosra, etc.
                          // har "Next" click par ye +1 hota hai

let score = 0;            // user ne kitne sahi jawab diye abhi tak
                          // har sahi answer par +1 hota hai (checkAnswer mein)

let timeLeft = 15;        // har question ke liye kitne second bacha hai timer mein
                          // har second 1 se ghatta hai (setInterval mein)

let timer;                // setInterval ka "ID/reference" store karta hai
                          // iske bina hum timer ko band (clearInterval) nahi kar sakte
                          // shuru mein undefined hai — koi timer nahi chal raha

let categoryStats = {};   // category-wise score track karta hai
                          // jaise: { science: { correct: 1, total: 2 }, GK: { correct: 1, total: 1 } }
                          // showResults() mein isi se breakdown banate hain




// ============================================================
// STEP 3: HTML ELEMENTS SELECT KARNA
// document.getElementById() se HTML ke elements ko JS mein "pakad" rahe hain
// taaki baad mein unka content/class/style change kar sakein
// ============================================================

// --- Teen screens (start, quiz, results) ---
const startScreen   = document.getElementById("start-screen");   // pehli screen (rules + start button)
const quizScreen    = document.getElementById("quiz-screen");     // doosri screen (question + options + timer)
const resultsScreen = document.getElementById("results-screen"); // teesri screen (score + breakdown)

// --- Start screen ke elements ---
const startBtn  = document.getElementById("start-btn");          // "Start quiz" button
const countBtns = document.querySelectorAll(".count-btn");       // saare count buttons (5/10/20/50)
                                                                  // querySelectorAll = SABHI matching elements

// --- Quiz screen ke elements ---
const progressLabel    = document.getElementById("progress-label");  // "Question 1 of 20" text
const timerDisplay     = document.getElementById("timer");           // "00:15" timer text
const progressFill     = document.getElementById("progress-fill");   // orange progress bar (width % change hogi)
const categoryTag      = document.getElementById("category");        // "SCIENCE" / "GK" badge
const questionText     = document.getElementById("question-text");   // actual sawaal ka text
const optionsContainer = document.getElementById("options");         // 4 option buttons ka container (JS se fill hoga)
const feedback         = document.getElementById("feedback");        // "Correct!" / "Wrong!" / "Time's up!" message
const nextBtn          = document.getElementById("next-btn");        // "Next question" button

// --- Results screen ke elements ---
const finalScore   = document.getElementById("final-score");    // "18/20" jaisa score
const finalPercent = document.getElementById("final-percent");  // "90%" percentage
const verdict      = document.getElementById("verdict");        // "Great job!" jaisa message
const breakdown    = document.getElementById("breakdown");      // category-wise rows ka container
const restartBtn   = document.getElementById("restart-btn");    // "Play again" button




// ============================================================
// STEP 4: EVENT LISTENERS
// Yahan define karte hain — "jab X ho, tab Y karo"
// ============================================================


// --- Count buttons (5 / 10 / 20 / 50) ---
// Jab user koi count button click kare:
// 1. Pehle sab buttons se "selected" class hata do (deselect)
// 2. Sirf clicked button pe "selected" class lagao (highlight)
// 3. Us button ka number selectedCount mein store karo

countBtns.forEach(function (btn) {
  // forEach = har button pe ek-ek karke ye listener lagao
  btn.addEventListener("click", function () {

    // Step 1: Sab buttons se "selected" class hatao
    // Taaki ek waqt mein sirf EK button selected dikhe
    countBtns.forEach(function (b) {
      b.classList.remove("selected");
    });

    // Step 2: Sirf is (clicked) button pe "selected" class lagao
    // CSS mein .count-btn.selected ka style orange/filled dikhata hai
    btn.classList.add("selected");

    // Step 3: Is button ka data-count attribute padho aur store karo
    // btn.dataset.count → HTML mein data-count="20" se "20" (string) milti hai
    // parseInt(...) → "20" (string) ko 20 (number) mein convert karta hai
    selectedCount = parseInt(btn.dataset.count);
  });
});


// --- Start button ---
// Jab user "Start quiz" dabaye:
// 1. Check karo kya count select hua hai
// 2. allQuestions se random questions nikalo
// 3. State reset karo
// 4. Start screen chhupao, quiz screen dikhao
// 5. Pehla question load karo

startBtn.addEventListener("click", function () {

  // Agar selectedCount abhi bhi 0 hai (user ne koi count button nahi dabaya)
  // toh alert dikhao aur "return" se function rok do (quiz shuru mat karo)
  if (selectedCount === 0) {
    alert("Please select how many questions you want to attempt!");
    return; // function yahan rok do, aage ki lines mat chalao
  }

  // Safety check: agar user ne 50 select kiya lekin pool mein sirf 5 hain
  // toh Math.min() se jo bhi kam ho woh lo (crash se bachao)
  // Example: Math.min(50, 5) = 5 → sirf 5 questions milenge
  const num = Math.min(selectedCount, allQuestions.length);

  // allQuestions se 'num' random unique questions nikalo
  // aur 'questions' variable mein store karo (active quiz ki list)
  questions = getRandomQuestions(num);

  // State variables reset karo (fresh start ke liye)
  currentQuestion = 0;  // pehle question se shuru
  score = 0;            // score 0 se shuru
  categoryStats = {};   // category tracking khaali karo

  // Screen switch karo
  startScreen.classList.add("hidden");    // start screen chhupao
  quizScreen.classList.remove("hidden"); // quiz screen dikhao

  // Pehla question load karo
  loadQuestion();
});


// --- Next button ---
// Jab user "Next question" dabaye:
// 1. currentQuestion ko +1 karo (agla index)
// 2. Check karo aur questions baaki hain ya nahi
//    - Agar haan: agla question load karo
//    - Agar nahi: results dikhao

nextBtn.addEventListener("click", function () {
  currentQuestion++; // shortcut for: currentQuestion = currentQuestion + 1

  // Agar currentQuestion abhi bhi valid index range mein hai
  // questions.length = 20 hai toh valid indexes 0-19 hain
  // jab currentQuestion = 20 ho jaye, matlab quiz khatam
  if (currentQuestion < questions.length) {
    loadQuestion(); // agla question load karo
  } else {
    showResults();  // sab questions ho gaye, result dikhao
  }
});


// --- Restart button ---
// Jab user "Play again" dabaye:
// 1. Sab state variables reset karo
// 2. Count buttons ka selection bhi reset karo
// 3. Results screen chhupao, start screen wapas dikhao

restartBtn.addEventListener("click", function () {
  currentQuestion = 0;  // wapas pehle question pe
  score = 0;            // score reset
  categoryStats = {};   // category stats reset
  selectedCount = 0;    // count selection bhi reset (user phir se choose kare)

  // Sab count buttons ka "selected" highlight hata do
  // Taaki user fresh selection kare
  countBtns.forEach(function (b) {
    b.classList.remove("selected");
  });

  // Screen switch karo
  resultsScreen.classList.add("hidden");   // results chhupao
  startScreen.classList.remove("hidden"); // start screen wapas dikhao
});




// ============================================================
// STEP 5: CORE FUNCTIONS
// Yahan quiz ka actual logic hai
// ============================================================


// --- getRandomQuestions(num) ---
// allQuestions pool se 'num' random unique questions nikalta hai
// Koi repeat nahi hoga (shuffle karke pehle 'num' items lete hain)

function getRandomQuestions(num) {
  // [...allQuestions] → allQuestions ki ek COPY banao (original disturb na ho)
  // Spread operator (...) array ko copy karta hai

  // .sort(function() { return Math.random() - 0.5; })
  // → Array ko randomly shuffle karta hai
  // Math.random() → 0 aur 1 ke beech random number deta hai
  // - 0.5 → kabhi negative (-0.5 to 0), kabhi positive (0 to 0.5)
  // sort() negative result pe swap karta hai, positive pe nahi → random order!

  const shuffled = [...allQuestions].sort(function () {
    return Math.random() - 0.5;
  });

  // .slice(0, num) → shuffled array se sirf pehle 'num' items lo
  // Example: slice(0, 20) → index 0 se 19 tak = 20 items
  return shuffled.slice(0, num);
}



// --- loadQuestion() ---
// Current question ko screen pe dikhata hai
// Har baar nextBtn click hone par ya quiz start hone par call hota hai

function loadQuestion() {

  // Reset karo pehle:
  feedback.textContent = "";        // purana "Correct!"/"Wrong!" message saaf karo
  nextBtn.classList.add("hidden"); // "Next" button chhupao (answer dene ke baad dikhega)

  // Current question ka poora data ek variable mein lo
  // currentQuestion = index hai (0, 1, 2...) → questions[0], questions[1], etc.
  const current = questions[currentQuestion];

  // Category badge aur question text update karo
  categoryTag.textContent  = current.category; // jaise "science", "GK"
  questionText.textContent = current.question;  // actual sawaal

  // Progress label update karo: "Question 3 of 20"
  // currentQuestion + 1 → kyunki index 0 se shuru hota hai, user ko 1 se dikhana hai
  progressLabel.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;

  // Progress bar ki width update karo (percentage mein)
  // Example: 3rd question of 20 → (3/20)*100 = 15%
  progressFill.style.width = ((currentQuestion + 1) / questions.length) * 100 + "%";

  // Purane option buttons hatao (pichle question ke)
  // innerHTML = "" → container ke andar sab kuch delete
  optionsContainer.innerHTML = "";

  // 4 naye option buttons banao (forEach se loop)
  current.options.forEach(function (optionText, index) {
    // Naya button element banao (abhi sirf memory mein hai, screen pe nahi)
    const btn = document.createElement("button");

    // "option" class lagao (CSS styling ke liye)
    btn.classList.add("option");

    // Button ka text: "1. push()" ya "2. pop()" jaisa
    // index + 1 → 0 ke bajaye 1 se dikhao
    btn.textContent = (index + 1) + ". " + optionText;

    // Click listener lagao is button pe
    // Jab click ho: checkAnswer ko batao (1) user ne kaunsa index click kiya,
    // (2) sahi answer kaunsa hai, (3) category kya hai
    btn.addEventListener("click", function () {
      checkAnswer(index, current.correct, current.category);
    });

    // Button ko options container mein daalo (ab screen pe dikhega)
    optionsContainer.appendChild(btn);
  });

  // Timer shuru karo — current question ka sahi answer aur category pass karo
  // (Taaki time khatam hone par bhi checkAnswer ko pata ho)
  startTimer(current.correct, current.category);
}


// --- checkAnswer(selectedIndex, correctIndex, category) ---
// Jab user koi option click kare ya time khatam ho, tab ye function chalta hai
// selectedIndex = user ne jo click kiya uska index (ya -1 agar time khatam hua)
// correctIndex  = sahi answer ka index
// category      = is question ki category (tracking ke liye)

function checkAnswer(selectedIndex, correctIndex, category) {

  // Timer band karo — answer mil gaya, ab countdown ki zaroorat nahi
  clearInterval(timer);

  // Category-wise tracking update karo
  // Pehli baar is category ka sawaal aaya? Toh naya entry banao
  if (!categoryStats[category]) {
    // !categoryStats[category] → "agar ye category abhi exist NAHI karti"
    categoryStats[category] = { correct: 0, total: 0 }; // naya entry banao
  }
  categoryStats[category].total++;  // is category ka ek aur question aaya → total +1

  // Agar sahi answer diya toh category ka correct bhi +1 karo
  if (selectedIndex === correctIndex) {
    categoryStats[category].correct++;
  }

  // Sab option buttons pakdo
  const allButtons = document.querySelectorAll(".option");

  // Sab buttons disable karo aur sahi answer green karo
  allButtons.forEach(function (btn, index) {
    btn.disabled = true; // disable → ab click nahi hoga (ek baar answer dene ke baad)

    // Sahi answer wale button pe "correct" class lagao (green ho jayega)
    if (index === correctIndex) {
      btn.classList.add("correct");
    }
  });

  // Feedback message aur color set karo (teen cases hain):

  if (selectedIndex === correctIndex) {
    // Case 1: User ne SAHI answer click kiya
    score++;                              // score +1 karo
    feedback.textContent = "Correct!";   // green message
    feedback.className   = "feedback correct-text"; // green color CSS class

  } else if (selectedIndex !== -1) {
    // Case 2: User ne GALAT answer click kiya (selectedIndex valid hai lekin wrong)
    // -1 nahi hai matlab user ne kuch click kiya tha
    allButtons[selectedIndex].classList.add("wrong"); // clicked button red karo
    feedback.textContent = "Wrong answer!";            // red message
    feedback.className   = "feedback wrong-text";     // red color CSS class

  } else {
    // Case 3: selectedIndex === -1 → matlab TIME KHATAM hua, user ne kuch click hi nahi kiya
    // Koi button red nahi karenge (user ne kuch choose nahi kiya)
    feedback.textContent = "Time's up!";           // red message
    feedback.className   = "feedback wrong-text"; // red color CSS class
  }

  // "Next question" button dikhao (pehle hidden tha)
  nextBtn.classList.remove("hidden");
}


// --- startTimer(correctIndex, category) ---
// 15 second ka countdown timer chalta hai
// Har second timerDisplay update hota hai
// 0 pe pahunchne par automatically checkAnswer(-1, ...) call hota hai

function startTimer(correctIndex, category) {

  // Timer 15 se reset karo
  timeLeft = 15;

  // Display update karo: "00:15"
  // Ternary operator: timeLeft < 10 ? "0" + timeLeft : timeLeft
  // → Agar 10 se chhota hai toh aage "0" lagao (jaise "09"), warna seedha dikhao (jaise "15")
  timerDisplay.textContent = "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);

  // Purana timer band karo (agar koi chal raha tha pichle question ka)
  // Warna multiple timers ek saath chalenge aur countdown double speed mein hoga
  clearInterval(timer);

  // Naya timer shuru karo — har 1000ms (1 second) baad ye function chalega
  timer = setInterval(function () {

    timeLeft--; // shortcut: timeLeft = timeLeft - 1

    // Display update karo naye timeLeft ke saath
    timerDisplay.textContent = "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);

    // Check karo: kya time khatam ho gaya?
    if (timeLeft <= 0) {
      clearInterval(timer); // timer band karo (warna -1, -2... jaata rahega)

      // checkAnswer ko -1 bhejo → matlab "user ne kuch click nahi kiya, time khatam hua"
      // correctIndex aur category isliye pass kar rahe hain taaki:
      // - Sahi answer green ho jaye
      // - Category ka total bhi update ho
      checkAnswer(-1, correctIndex, category);
    }

  }, 1000); // 1000 milliseconds = 1 second
}


// --- showResults() ---
// Quiz khatam hone par results screen dikhata hai
// Score, percentage, verdict message, aur category-wise breakdown

function showResults() {

  // Screen switch karo
  quizScreen.classList.add("hidden");      // quiz screen chhupao
  resultsScreen.classList.remove("hidden"); // results screen dikhao

  // Final score dikhao: "18/20"
  finalScore.textContent = score + "/" + questions.length;

  // Percentage calculate karo aur dikhao: "90%"
  // Math.round() → decimal hata ke nearest whole number
  // Example: 18/20 * 100 = 90 → "90%"
  // Example: 7/20 * 100 = 35 → "35%"
  const percent = Math.round((score / questions.length) * 100);
  finalPercent.textContent = percent + "%";

  // Verdict message — score ke hisaab se encouraging message
  if (percent === 100) {
    verdict.textContent = "Perfect score! 🏆";         // 100%
  } else if (percent >= 60) {
    verdict.textContent = "Great job! 👏";              // 60% ya usse zyada
  } else if (percent >= 40) {
    verdict.textContent = "Not bad, keep practicing! 💪"; // 40-59%
  } else {
    verdict.textContent = "Keep trying, you'll get better! 📚"; // 40% se kam
  }

  // Category-wise breakdown dikhao
  // categoryStats object mein saari categories ka data hai
  // Example: { science: {correct:3, total:5}, GK: {correct:2, total:3} }

  breakdown.innerHTML = ""; // pehle khaali karo (agar pichla quiz ka data tha)

  // for...in loop → object ki har KEY pe loop chalao
  // (forEach sirf arrays pe kaam karta hai, objects pe for...in use karte hain)
  for (let cat in categoryStats) {
    // cat = category ka naam (jaise "science", "GK", "computer")

    // Ek naya row div banao is category ke liye
    const row = document.createElement("div");
    row.classList.add("breakdown-row"); // CSS se left-right layout milega

    // Category naam ka span (left side pe dikhega)
    const catName = document.createElement("span");
    catName.textContent = cat; // jaise "science"

    // Category score ka span (right side pe dikhega)
    // Example: "3/5" ya "2/3"
    const catScore = document.createElement("span");
    catScore.textContent = categoryStats[cat].correct + "/" + categoryStats[cat].total;

    // Row mein dono spans daalo, phir row ko breakdown container mein daalo
    row.appendChild(catName);   // naam left mein
    row.appendChild(catScore);  // score right mein
    breakdown.appendChild(row); // row screen pe daalo
  }
}
// const questions = [
//   {
//     category: "computer",
//     question: "Which method adds an item to the END of a JavaScript array?",
//     options: ["push()", "pop()", "shift()", "unshift()"],
//     correct: 0  // index 0 = "push()" sahi answer hai
//   },
//     {
//     category: "science",
//     question: "What gas do plants absorb from the air?",
//     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//     correct: 1  // index 1 = "Carbon Dioxide" sahi answer hai
//   },
//     {
//     category: "science",
//     question: "Which planet is known as the Red Planet?",
//     options: [ "Venus", "Jupiter", "Saturn", "Mars"],
//     correct: 3  // index 3 = "Mars" sahi answer hai
//   },
//     {
//     category: "computer",
//     question: "What does 'HTML' stand for?",
//     options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
//     correct: 0  // index 0 = "Hyper Text Markup Language" sahi answer hai
//   },
//     {
//     category: "GK",
//     question: "Who was the first Prime Minister of India?",
//     options: [ "Indira Gandhi","Jawaharlal Nehru", "Rajiv Gandhi", "Manmohan Singh"],
//     correct: 1  // index 1 = "Jawaharlal Nehru" sahi answer hai
//   },
// ];
// let selectedCount = 0;  // user ne kitne questions select kiye

// let categoryStats = {};
// let currentQuestion = 0;
// let score = 0;
// let timeLeft = 15;
// let timer;

// // Screens
// const startScreen = document.getElementById("start-screen");
// const quizScreen = document.getElementById("quiz-screen");
// const resultsScreen = document.getElementById("results-screen");

// // Start screen
// const startBtn = document.getElementById("start-btn");

// // Quiz screen
// const progressLabel = document.getElementById("progress-label");
// const timerDisplay = document.getElementById("timer");
// const progressFill = document.getElementById("progress-fill");
// const categoryTag = document.getElementById("category");
// const questionText = document.getElementById("question-text");
// const optionsContainer = document.getElementById("options");
// const feedback = document.getElementById("feedback");
// const nextBtn = document.getElementById("next-btn");

// // Results screen
// const finalScore = document.getElementById("final-score");
// const finalPercent = document.getElementById("final-percent");
// const verdict = document.getElementById("verdict");
// const breakdown = document.getElementById("breakdown");
// const restartBtn = document.getElementById("restart-btn");
// const countBtns = document.querySelectorAll(".count-btn");

// countBtns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     // pehle sab buttons se "selected" class hata do
//     countBtns.forEach(function (b) {
//       b.classList.remove("selected");
//     });

//     // sirf is button pe "selected" class lagao
//     btn.classList.add("selected");

//     // is button ka count store karo
//     selectedCount = parseInt(btn.dataset.count);
//   });
// });
// startBtn.addEventListener("click", function () {
//   if (selectedCount === 0) {
//     alert("How many question are you want to attempt? Please select a number of questions.");
//     return;
//   }

//   questions = getRandomQuestions(selectedCount);
//   currentQuestion = 0;
//   score = 0;
//   categoryStats = {};

//   startScreen.classList.add("hidden");
//   quizScreen.classList.remove("hidden");
//   loadQuestion();
// });
// nextBtn.addEventListener("click", function () {
//   currentQuestion++;

//   if (currentQuestion < questions.length) {
//     loadQuestion();
//   } else {
//     showResults();
//   }
// });
// restartBtn.addEventListener("click", function () {
//   currentQuestion = 0;
//   score = 0;
//   categoryStats = {};

//   resultsScreen.classList.add("hidden");
//   startScreen.classList.remove("hidden");
// });
// function loadQuestion() {
//   // 1. Reset feedback aur next button
//   feedback.textContent = "";
//   nextBtn.classList.add("hidden");

//   // 2. Current question ka data nikalo
//   const current = questions[currentQuestion];

//   // 3. Category aur question text dikhao
//   categoryTag.textContent = current.category;
//   questionText.textContent = current.question;

//   // 4. Progress label aur progress bar update karo
//   progressLabel.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
//   progressFill.style.width = ((currentQuestion + 1) / questions.length) * 100 + "%";

//   // 5. Purane options hatao, naye options banao
//   optionsContainer.innerHTML = "";
//   current.options.forEach(function (optionText, index) {
//     const btn = document.createElement("button");
//     btn.classList.add("option");
//     btn.textContent = (index + 1) + ". " + optionText;

//     btn.addEventListener("click", function () {
//       checkAnswer(index, current.correct,current.category);
//     });

//     optionsContainer.appendChild(btn);
//   });

//   // 6. Timer reset aur start karo
// startTimer(current.correct,current.category);
// }
// // function checkAnswer(selectedIndex, correctIndex, category) {
// //   clearInterval(timer);

// //   const allButtons = document.querySelectorAll(".option");

// //   allButtons.forEach(function (btn, index) {
// //     btn.disabled = true;

// //     if (index === correctIndex) {
// //       btn.classList.add("correct");
// //     }
// //   });
// function checkAnswer(selectedIndex, correctIndex, category) {
//   clearInterval(timer);

  
//   if (!categoryStats[category]) {
//     categoryStats[category] = { correct: 0, total: 0 };
//   }
//   categoryStats[category].total++;
//   if (selectedIndex === correctIndex) {
//     categoryStats[category].correct++;
//   }

//   const allButtons = document.querySelectorAll(".option");
  
//   // if (selectedIndex === correctIndex) {
//   //   score++;
//   //   feedback.textContent = "Correct!";
//   // } else if (selectedIndex !== -1) {
//   //   allButtons[selectedIndex].classList.add("wrong");
//   //   feedback.textContent = "Wrong answer!";
//   // } else {
//   //   feedback.textContent = "Time's up!";
//   // }
//   if (selectedIndex === correctIndex) {
//   score++;
//   feedback.textContent = "Correct!";
//   feedback.className = "feedback correct-text";
// } else if (selectedIndex !== -1) {
//   allButtons[selectedIndex].classList.add("wrong");
//   feedback.textContent = "Wrong answer!";
//   feedback.className = "feedback wrong-text";
// } else {
//   feedback.textContent = "Time's up!";
//   feedback.className = "feedback wrong-text";
// }

//   nextBtn.classList.remove("hidden");
// }

// // function startTimer(correctIndex) {
// //   timeLeft = 15;
// //   timerDisplay.textContent = "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);// Reset timer display ynai ("09" na ki "9") ye  0 add bhi krgea  
// //  // agar 10 se chhota hai toh uske aage 0 add krdo warna timeLeft hi dikhao
// //   clearInterval(timer);//clearInterval(timer) ka matlab: "agar koi purana timer chal raha hai (uski ID timer variable mein store thi), use band kar do."
// // //setInterval ek built-in JS function hai jiska kaam hai: "ek kaam ko baar-baar, fix time gap pe, automatically dohrana."
// //   timer = setInterval(function () {
// //     timeLeft--;
// //     timerDisplay.textContent = "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);

// //   if (timeLeft <= 0) {
// //   clearInterval(timer);
// //   checkAnswer(-1, correctIndex);
// //       // time khatam, answer galat maan lo
// //     }
// //   }, 1000);//1000ms = 1 second
// // }
// function startTimer(correctIndex, category) {
//   timeLeft = 15;
//   timerDisplay.textContent = "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);
//   clearInterval(timer);

//   timer = setInterval(function () {
//     timeLeft--;
//     timerDisplay.textContent = "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);

//     if (timeLeft <= 0) {
//       clearInterval(timer);
//       checkAnswer(-1, correctIndex, category);   // yahan category add karo
//     }
//   }, 1000);
// }
// function showResults() {
//   quizScreen.classList.add("hidden");
//   resultsScreen.classList.remove("hidden");

//   finalScore.textContent = score + "/" + questions.length;

//   const percent = Math.round((score / questions.length) * 100);
//  // Math.round(...) → ye number ko round karta hai (decimal hata ke). Agar calculation 66.666... aaye (jaise 2/3 questions), Math.round use 67 bana dega (nearest whole number).
//   finalPercent.textContent = percent + "%";
//   if (percent === 100) {
//   verdict.textContent = "Perfect score! 🏆";
// } else if (percent >= 60) {
//   verdict.textContent = "Great job! 👏";
// } else if (percent >= 40) {
//   verdict.textContent = "Not bad, keep practicing! 💪";
// } else {
//   verdict.textContent = "Keep trying, you'll get better! 📚";
// }
// breakdown.innerHTML = "";

// for (let cat in categoryStats) {
//   const row = document.createElement("div");
//   row.classList.add("breakdown-row");

//   const catName = document.createElement("span");
//   catName.textContent = cat;

//   const catScore = document.createElement("span");
//   catScore.textContent = categoryStats[cat].correct + "/" + categoryStats[cat].total;

//   row.appendChild(catName);
//   row.appendChild(catScore);
//   breakdown.appendChild(row);
// }
// }
// function getRandomQuestions(num) {
//   const shuffled = [...questions].sort(function () {
//     return Math.random() - 0.5;
//   });
//   return shuffled.slice(0, num);
// }

