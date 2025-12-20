/* ==========
   Editable quiz content
   - Questions and answers are loaded from the data object below.
   - Rotation sequences are in q1Order and q23Order.
   - Search term rotations are in searchTerms.
   - correctKey tracks which answer text is correct (position randomized at runtime)
========== */
const QUIZ_DATA = {"secretCode": "GRANDNEWYEAR2026", "q1Order": ["Got Your Six Dispensary", "Peninsula Mobile Screens", "Printastic", "Bigger Better Banner", "A21 Wellness Dispensary", "SOS Survival Products", "Platon Graphics", "WASH BINS", "CROTRAN Custom Rub On Transfers", "There You Have It 3D", "DTL Dry Transfer Letters", "ESA Awnings", "Geeks on Command", "PASWM Peel and Stick Wall Murals", "WASH BINS Newport Beach"], "q23Order": ["A21 Wellness Dispensary", "Got Your Six Dispensary", "Peninsula Mobile Screens", "Printastic", "Bigger Better Banner", "A21 Wellness Dispensary", "SOS Survival Products", "Platon Graphics", "WASH BINS", "CROTRAN Custom Rub On Transfers", "A21 Wellness Dispensary", "Got Your Six Dispensary", "There You Have It 3D", "Printastic", "DTL Dry Transfer Letters", "A21 Wellness Dispensary", "SOS Survival Products", "ESA Awnings", "WASH BINS", "Geeks on Command", "A21 Wellness Dispensary", "Got Your Six Dispensary", "PASWM Peel and Stick Wall Murals", "Printastic", "WASH BINS Newport Beach", "SOS Survival Products", "Peninsula Mobile Screens", "There You Have It 3D", "Bigger Better Banner", "Platon Graphics"], "aliases": {"CROTRAN Custom Rub On Transfers": "CROTRAN", "PASWM": "PASWM Peel and Stick Wall Murals", "DTL": "DTL Dry Transfer Letters", "ESA Awnings": "ESA Awnings Inc."}, "searchTerms": {"A21 Wellness Dispensary": ["A21 Wellness Dispensary", "A21 Dispensary", "a21 dispensary", "A21 dispensary Scotch Plains"], "Bigger Better Banner": ["Bigger Better Banner", "bigger better banner"], "CROTRAN": ["CROTRAN", "Crotran"], "DTL Dry Transfer Letters": ["DTL Dry Transfer Letters", "dtl dry transfer letters"], "ESA Awnings Inc.": ["ESA Awnings Inc.", "ESA Awnings"], "Geeks on Command": ["Geeks On Command Montclair", "geeks on command montclair"], "Got Your Six Dispensary": ["Got Your Six Dispensary", "got your six dispensary"], "PASWM Peel and Stick Wall Murals": ["PASWM", "paswm"], "Peninsula Mobile Screens": ["Peninsula Mobile Screens", "peninsula mobile screens"], "Platon Graphics": ["Platon Graphics", "platon graphics"], "Printastic": ["Printastic", "printastic"], "SOS Survival Products": ["SOS Survival Products", "sos survival products"], "There You Have It 3D": ["There You Have It 3D", "there you have it 3D"], "WASH BINS": ["WASH BINS", "washbins", "wash bins pacific palisades"], "WASH BINS Newport Beach": ["WASH BINS Newport Beach", "washbins newport beach"]}, 
"q1": {
"A21 Wellness Dispensary": {"bodyHtml": "A21 Wellness Dispensary has a 5-star Google review that was left by Ashley Molnar.\nThe review praises a specific employee, saying he was \"nothing but kind and informative.\"\nWhat is the name of this employee?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"A21 Wellness Dispensary\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Ashley Molnar about 2 months ago (in mid-October).</li>\n<li>You'll find the name of the employee (the answer) in the first sentence of this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is the name of this employee?", "choices": [{"text": "Kenny", "correct": true}, {"text": "Liz", "correct": false}, {"text": "Kyle", "correct": false}, {"text": "Maya", "correct": false}]},
"Bigger Better Banner": {"bodyHtml": "Bigger Better Banner has a 5-star Google review that was left by Ryan Wells. What does this review say?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Bigger Better Banner Stanford Ave\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review left by Ryan Wells last month (in mid-November).</li>\n</ol>\n<div class=\"hr\"></div>\nWhat does Ryan Wells' review say?", "choices": [{"text": "Easy", "correct": true}, {"text": "Awesome", "correct": false}, {"text": "Thanks!", "correct": false}, {"text": "Cheers", "correct": false}]},
"CROTRAN Custom Rub On Transfers": {"bodyHtml": "CROTRAN\nWhat is the ship time for Custom Dry Rub on Transfer Sheets?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"CROTRAN\".</li>\n<li>Open the CROTRAN (Custom Rub On Transfers) website.</li>\n<li>Scroll to the very bottom of the page and open the \"FAQs\" link.</li>\n<li>Click on the last question: \"How fast can I have my Custom Dry Rub on Transfer sheet\".</li>\n<li>You'll find the ship time (the answer) in the very first sentence.</li>\n</ol>\n<div class=\"hr\"></div>\nCustom Dry Rub on Transfer sheet can ship _________.", "choices": [{"text": "the next day", "correct": true}, {"text": "within 48 hours", "correct": false}, {"text": "the same day", "correct": false}, {"text": "as soon as production is completed", "correct": false}]},
"DTL": {"bodyHtml": "What does the button say on the Pricing page of DTL's website?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"DTL Dry Transfer Letters\".</li>\n<li>Open the DTL (Dry Transfer Letters) website.</li>\n<li>Open the \"Pricing\" link in the top menu.</li>\n<li>Locate the pink button to find the button text (the answer).</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is the text inside the pink button on DTL's Pricing page?", "choices": [{"text": "Start My Order", "correct": true}, {"text": "Get Started Now", "correct": false}, {"text": "Add To Cart", "correct": false}, {"text": "Delivery Options", "correct": false}]},
"ESA Awnings Inc.": {"bodyHtml": "ESA Awnings has a 5-star Google review that was left by Jamie Saure. What does it say on their restaurant awning?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"ESA Awnings Inc.\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review left by Jamie Saure last month (in early-November).</li>\n<li>Find the image (of the restaurant awning) attached to the review, and read the text on the awning.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat does it say on the awning in the review photo (black awning with white text)?", "choices": [{"text": "Cow Belly", "correct": true}, {"text": "Pork Chops", "correct": false}, {"text": "T-Bone and Only", "correct": false}, {"text": "The Codfather", "correct": false}]},
"Geeks on Command": {"bodyHtml": "Geeks On Command Montclair has a 5-star Google review that was left by Maurieke Shyelle. What is her occupation?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Geeks On Command Montclair\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review left by Maurieke Shyelle about 9 months ago (in early-March).</li>\n<li>You'll find Maurieke's occupation (the answer) in the first sentence of this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is Maurieke Shyelle's occupation?", "choices": [{"text": "Physician", "correct": true}, {"text": "Lawyer", "correct": false}, {"text": "Accountant", "correct": false}, {"text": "Firefighter", "correct": false}]},
"Got Your Six Dispensary": {"bodyHtml": "Got Your Six Dispensary has a 5-star Google review that was left by Moise Baptiste. What does this review say?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Got Your Six Dispensary\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Moise Baptiste about 3 months ago (in early-September).</li>\n<li>You'll find the answer in this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat does Moise Baptiste's review say?", "choices": [{"text": "Great vibe.", "correct": true}, {"text": "Helpful staff.", "correct": false}, {"text": "Delivered fast.", "correct": false}, {"text": "Good product.", "correct": false}]},
"PASWM Peel and Stick Wall Murals": {"bodyHtml": "What is the phone number for PASWM Peel and Stick Wall Murals?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"PASWM Peel and Stick Wall Murals\".</li>\n<li>Find and open their official website.</li>\n<li>Locate the phone number on their contact page.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is the phone number for PASWM Peel and Stick Wall Murals?", "choices": [{"text": "(888) 958-1991", "correct": true}, {"text": "(888) 958-1992", "correct": false}, {"text": "(888) 958-1993", "correct": false}, {"text": "(888) 958-1994", "correct": false}]},
"Peninsula Mobile Screens": {"bodyHtml": "Peninsula Mobile Screens has a 5-star Google review that was left by Z J. What does Z J say in their review?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Peninsula Mobile Screens\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Z J about 9 months ago (in early-March).</li>\n<li>You'll find the answer in the first sentence of this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat does Z J say in the first sentence of their review?", "choices": [{"text": "These guys were the bees knees", "correct": true}, {"text": "These guys were the best", "correct": false}, {"text": "These guys were the real deal", "correct": false}, {"text": "These guys were the gold standard", "correct": false}]},
"Platon Graphics": {"bodyHtml": "Platon Graphics has a 5-star Google review that was left by Lisa Lerman.\nThe review mentions a specific product. What is this product?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Platon Graphics\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Lisa Lerman about 3 months ago (in mid-September).</li>\n<li>You'll find the answer in the first sentence of this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhich product is mentioned in the first sentence of Lisa Lerman's review? \"Platon Graphics is our go-to place for _________.\"", "choices": [{"text": "Transfer Logos", "correct": true}, {"text": "Graphic Designs", "correct": false}, {"text": "Rub-On Lettering", "correct": false}, {"text": "Custom Decals", "correct": false}]},
"Printastic": {"bodyHtml": "Printastic has a 5-star Google review that was left by Alexander Medvedev. What does Alexander Medvedev say in their review?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Printastic\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Alexander Medvedev about 8 months ago (in mid-April).</li>\n<li>You'll find the answer in this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat does Alexander Medvedev say in their review?", "choices": [{"text": "Best printing company out there.", "correct": true}, {"text": "Fast turnaround, great quality as always.", "correct": false}, {"text": "Clean prints, fair pricing.", "correct": false}, {"text": "Reliable delivery every time - thanks!", "correct": false}]},
"SOS Survival Products": {"bodyHtml": "SOS Survival Products has a 5-star Google review that was left by Mark Siegal.\nThe review mentions a specific class. What is the name of this class?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"SOS Survival Products\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Mark Siegal about 9 months ago (in mid-March).</li>\n<li>You'll find the answer in the first sentence of this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhich class is mentioned in the first sentence of Mark Siegal's review?", "choices": [{"text": "Emergency Preparedness Class", "correct": true}, {"text": "Preparedness for Power Outages Class", "correct": false}, {"text": "Disaster Preparedness Webinar", "correct": false}, {"text": "Outdoor Survival Class", "correct": false}]},
"There You Have It 3D": {"bodyHtml": "There You Have It 3D has a 5-star Google review that was left by Moe Wolf. What does Moe Wolf say in their review?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"There You Have It 3D\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Moe Wolf about 4 months ago (in mid-August).</li>\n<li>You'll find the answer in this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat does Moe Wolf say in their review?", "choices": [{"text": "great job on prototypes", "correct": true}, {"text": "so happy with the 3D Prints", "correct": false}, {"text": "super professional prompt service", "correct": false}, {"text": "there you have it, there I have it", "correct": false}]},
"WASH BINS": {"bodyHtml": "WASH BINS has a 5-star Google review that was left by Randi Grigsby. For how long has Randi Grigsby used WASH BINS' service?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"WASH BINS Los Angeles\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by Randi Grigsby about 2 months ago (in mid-October).</li>\n<li>You'll find the answer in the first sentence of this review.</li>\n</ol>\n<div class=\"hr\"></div>\nHow long has Randi Grigsby used the WASH BINS service for?", "choices": [{"text": "over a year", "correct": true}, {"text": "3 years", "correct": false}, {"text": "only a few months", "correct": false}, {"text": "over 5 years", "correct": false}]},
"WASH BINS Newport Beach": {"bodyHtml": "WASH BINS Newport Beach has a 5-star Google review that was left by David Hilton. Which plan is David Hilton on?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"WASH BINS Newport Beach\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review by sorting the reviews by \"Newest\", then scrolling down to the review left by David Hilton about 2 months ago (in mid-October).</li>\n<li>You'll find the answer in the first sentence of this review.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat type of service plan does David Hilton use?", "choices": [{"text": "quarterly plan", "correct": true}, {"text": "monthly plan", "correct": false}, {"text": "weekly plan", "correct": false}, {"text": "bi-weekly plan", "correct": false}]}
},
"q2": {
"A21 Wellness Dispensary": {"bodyHtml": "What time does A21 Dispensary open on Thursdays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"A21 Wellness Dispensary\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does A21 Dispensary open on Thursdays?", "choices": [{"text": "10 AM", "correct": true}, {"text": "9 AM", "correct": false}, {"text": "11 AM", "correct": false}, {"text": "12 PM", "correct": false}]},
"Bigger Better Banner": {"bodyHtml": "What is Bigger Better Banner's most Popular Banner Size?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Bigger Better Banner\".</li>\n<li>Open their official website.</li>\n<li>Scroll to the very bottom of the page.</li>\n<li>On the left side, find the heading: \"Popular Banner Sizes\"</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is the very first banner size under the heading \"Popular Banner Sizes\" at the bottom of their site?", "choices": [{"text": "2x10 banner", "correct": true}, {"text": "3x4 banner", "correct": false}, {"text": "4x12 banner", "correct": false}, {"text": "3x20 banner", "correct": false}]},
"CROTRAN": {"bodyHtml": "Who is the owner of CROTRAN?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"CROTRAN\".</li>\n<li>Open the CROTRAN (Custom Rub On Transfers) website.</li>\n<li>Scroll to the very bottom of the page and open the \"About Us\" link.</li>\n<li>The owner's name (the answer) can be found in the first line of text.</li>\n</ol>\n<div class=\"hr\"></div>\nWho is the owner of CROTRAN?", "choices": [{"text": "Charles Platon", "correct": true}, {"text": "Andrew Collins", "correct": false}, {"text": "Michael Prescott", "correct": false}, {"text": "Jonathan Reeves", "correct": false}]},
"DTL": {"bodyHtml": "How many years of experience does DTL have?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"DTL Dry Transfer Letters\".</li>\n<li>Open the DTL (Dry Transfer Letters) website.</li>\n<li>Open the \"About\" link in the top menu.</li>\n<li>Scroll to the bottom of the page to the section labeled \"Looking Ahead\".</li>\n<li>The number of years (the answer) can be found in the first line of the text below this heading.</li>\n</ol>\n<div class=\"hr\"></div>\nHow many years of experience does DTL carry forward?", "choices": [{"text": "More than 70 Years", "correct": true}, {"text": "Over 50 Years", "correct": false}, {"text": "Celebrating 25 Years", "correct": false}, {"text": "Nearly 10 Years", "correct": false}]},
"ESA Awnings Inc.": {"bodyHtml": "ESA Awnings has a 5-star Google review that was left by Carina Castaneda in which she mentions an employee's name.\nWhich employee does she mention?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"ESA Awnings Inc.\".</li>\n<li>Click the option to view their Google Reviews.</li>\n<li>Find the review left by Carina Castaneda about a year ago (in December 2024).</li>\n</ol>\n<div class=\"hr\"></div>\nWhich employee does Carina Castaneda mention in the first sentence of her review?", "choices": [{"text": "Jairo", "correct": true}, {"text": "Emanuel", "correct": false}, {"text": "Hassan", "correct": false}, {"text": "Dimitar", "correct": false}]},
"Geeks on Command": {"bodyHtml": "What time does the Montclair branch of Geeks on Command close on Saturdays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Geeks on Command Montclair\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does Geeks on Command Montclair close on Saturdays?", "choices": [{"text": "7 PM", "correct": true}, {"text": "5 PM", "correct": false}, {"text": "3 PM", "correct": false}, {"text": "They're closed on Saturdays", "correct": false}]},
"Got Your Six Dispensary": {"bodyHtml": "What time does Got Your Six Dispensary open on Sundays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Got Your Six Dispensary\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does Got Your Six Dispensary open on Sundays?", "choices": [{"text": "10 AM", "correct": true}, {"text": "9 AM", "correct": false}, {"text": "12 PM", "correct": false}, {"text": "They're closed on Sundays", "correct": false}]},
"PASWM": {"bodyHtml": "Who is the founder of PASWM?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"PASWM\".</li>\n<li>Open the PASWM (Peel and Stick Wall Murals) website.</li>\n<li>Scroll to the very bottom of the page and open the \"CONTACT US\" link.</li>\n<li>The founder's name (the answer) can be found in the last line of text before the contact form.</li>\n</ol>\n<div class=\"hr\"></div>\nWho is the founder of PASWM?", "choices": [{"text": "Charles Platon", "correct": true}, {"text": "Daniel Whitmore", "correct": false}, {"text": "Bruce Kaminsky", "correct": false}, {"text": "Marcus Feldman", "correct": false}]},
"Peninsula Mobile Screens": {"bodyHtml": "What time does Peninsula Mobile Screens open on Saturdays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Peninsula Mobile Screens\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does Peninsula Mobile Screens open on Saturdays?", "choices": [{"text": "They're open 24 hours", "correct": true}, {"text": "9 AM", "correct": false}, {"text": "10 AM", "correct": false}, {"text": "They're closed on Saturdays", "correct": false}]},
"Platon Graphics": {"bodyHtml": "What time does Platon Graphics close on Fridays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Platon Graphics\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does Platon Graphics close on Fridays?", "choices": [{"text": "5:30 PM", "correct": true}, {"text": "4:30 PM", "correct": false}, {"text": "6:30 PM", "correct": false}, {"text": "3:30 PM", "correct": false}]},
"Printastic": {"bodyHtml": "What time does Printastic open on Sundays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Printastic\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does Printastic open on Sundays?", "choices": [{"text": "They're open 24 hours", "correct": true}, {"text": "9 AM", "correct": false}, {"text": "10 AM", "correct": false}, {"text": "They're closed on Sundays", "correct": false}]},
"SOS Survival Products": {"bodyHtml": "What time does SOS Survival Products close on Saturdays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"SOS Survival Products\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does SOS Survival Products close on Saturdays?", "choices": [{"text": "4 PM", "correct": true}, {"text": "5 PM", "correct": false}, {"text": "6 PM", "correct": false}, {"text": "7 PM", "correct": false}]},
"There You Have It 3D": {"bodyHtml": "What time does There You Have It 3D close on Fridays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"There You Have It 3D\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does There You Have It 3D close on Fridays?", "choices": [{"text": "5:30 PM", "correct": true}, {"text": "4:30 PM", "correct": false}, {"text": "6:30 PM", "correct": false}, {"text": "3:30 PM", "correct": false}]},
"WASH BINS": {"bodyHtml": "What time does WASH BINS open on Sundays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"WASH BINS\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does WASH BINS open on Sundays?", "choices": [{"text": "They're open 24 hours", "correct": true}, {"text": "8 AM", "correct": false}, {"text": "10 AM", "correct": false}, {"text": "They're closed on Sundays", "correct": false}]},
"WASH BINS Newport Beach": {"bodyHtml": "What time does WASH BINS Newport Beach open on Sundays?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"WASH BINS Newport Beach\".</li>\n<li>Locate the store hours.</li>\n<li>Click \"more hours\" to see the business hours for all days.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat time does WASH BINS Newport Beach open on Sundays?", "choices": [{"text": "They're open 24 hours", "correct": true}, {"text": "8 AM", "correct": false}, {"text": "10 AM", "correct": false}, {"text": "They're closed on Sundays", "correct": false}]}
},
"q3": {
"A21 Wellness Dispensary": {"bodyHtml": "What is the phone number for A21 Wellness Dispensary?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"A21 Wellness Dispensary\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is A21 Dispensary's phone number?", "correctPhone": "(908) 228-2619"},
"Bigger Better Banner": {"bodyHtml": "What is the phone number for Bigger Better Banner?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Bigger Better Banner\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is Bigger Better Banner's phone number?", "correctPhone": "(888) 958-1991"},
"CROTRAN": {"bodyHtml": "What is the phone number for CROTRAN?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"CROTRAN\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is CROTRAN's phone number?", "correctPhone": "(800) 499-0292"},
"DTL": {"bodyHtml": "What is the phone number for DTL?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"DTL\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is DTL's phone number?", "correctPhone": "(800) 499-0292"},
"ESA Awnings Inc.": {"bodyHtml": "What is the phone number for ESA Awnings Inc.?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"ESA Awnings Inc.\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is ESA Awnings Inc.'s phone number?", "correctPhone": "(323) 441-0108"},
"Geeks on Command": {"bodyHtml": "What is the phone number for Geeks on Command?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Geeks on Command\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is Geeks on Command's phone number?", "correctPhone": null},
"Got Your Six Dispensary": {"bodyHtml": "What is the phone number for Got Your Six Dispensary?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Got Your Six Dispensary\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is Got Your Six Dispensary's phone number?", "correctPhone": "(732) 444-2060"},
"PASWM": {"bodyHtml": "What is the phone number for PASWM (Peel and Stick Wall Murals)?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"PASWM\".</li>\n<li>Locate the phone number on their website (in the very top left corner).</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is PASWM's phone number?", "correctPhone": "(888) 958-1991"},
"Peninsula Mobile Screens": {"bodyHtml": "What is the phone number for Peninsula Mobile Screens?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Peninsula Mobile Screens\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is Peninsula Mobile Screens' phone number?", "correctPhone": "(310) 836-5746"},
"Platon Graphics": {"bodyHtml": "What is the phone number for Platon Graphics?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Platon Graphics\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is Platon Graphics' phone number?", "correctPhone": "(310) 227-8027"},
"Printastic": {"bodyHtml": "What is the phone number for Printastic?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"Printastic\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is Printastic's phone number?", "correctPhone": "(800) 575-5805"},
"SOS Survival Products": {"bodyHtml": "What is the phone number for SOS Survival Products?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"SOS Survival Products\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is SOS Survival Products' phone number?", "correctPhone": "(818) 909-0131"},
"There You Have It 3D": {"bodyHtml": "What is the phone number for There You Have It 3D?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"There You Have It 3D\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is There You Have It 3D's phone number?", "correctPhone": "(213) 513-5210"},
"WASH BINS": {"bodyHtml": "What is the phone number for WASH BINS?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"WASH BINS\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is WASH BINS' phone number?", "correctPhone": "(833) 927-4246"},
"WASH BINS Newport Beach": {"bodyHtml": "What is the phone number for WASH BINS Newport Beach?\n\n<div class=\"spacer\"></div>\n<strong>How to Find the Answer:</strong>\n<ol>\n<li>Search Google for \"WASH BINS Newport Beach\".</li>\n<li>Locate the phone number on Google, or on their website.</li>\n<li>Copy the phone number, and paste (or enter) it below.</li>\n</ol>\n<div class=\"hr\"></div>\nWhat is WASH BINS Newport Beach's phone number?", "correctPhone": "(833) 927-4246"}
}};

// ---------- utilities ----------
const $ = (sel) => document.querySelector(sel);

function safeText(s) {
  return String(s ?? "");
}

function digitsOnly(s) {
  return safeText(s).replace(/\D+/g, "");
}

function normalizeClient(name) {
  return safeText(name).trim();
}

function resolveClient(name, dataSection) {
  const n = normalizeClient(name);
  if (QUIZ_DATA[dataSection][n]) return n;
  const alias = QUIZ_DATA.aliases[n];
  if (alias && QUIZ_DATA[dataSection][alias]) return alias;

  const keys = Object.keys(QUIZ_DATA[dataSection]);
  const lower = n.toLowerCase();
  const exactLower = keys.find(k => k.toLowerCase() === lower);
  if (exactLower) return exactLower;
  const contains = keys.find(k => k.toLowerCase().includes(lower) || lower.includes(k.toLowerCase()));
  if (contains) return contains;
  return keys[0];
}

function storageGetInt(key, fallback = 0) {
  const raw = localStorage.getItem(key);
  const n = Number.parseInt(raw ?? "", 10);
  return Number.isFinite(n) ? n : fallback;
}

function storageSetInt(key, n) {
  localStorage.setItem(key, String(Math.max(0, n|0)));
}

function nextIndex(key, mod) {
  const cur = storageGetInt(key, 0);
  const next = (cur + 1) % mod;
  storageSetInt(key, next);
  return cur % mod;
}

function getSearchTermForClient(clientDisplayName) {
  const key = clientDisplayName in QUIZ_DATA.searchTerms
    ? clientDisplayName
    : (QUIZ_DATA.aliases[clientDisplayName] || clientDisplayName);

  const terms = QUIZ_DATA.searchTerms[key] || [clientDisplayName];
  const idxKey = `stidx::${key}`;
  const i = nextIndex(idxKey, terms.length);
  return terms[i];
}

function injectSearchTerm(bodyHtml, searchTerm) {
  const re = /(Search\s+Google\s+for\s+")([^"]+)(")/gi;
  return bodyHtml.replace(re, (m, a, _old, c) => `${a}${searchTerm}${c}`);
}

// Shuffle array using Fisher-Yates
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Prepare choices with randomized positions and letter keys
function prepareChoices(choices) {
  const keys = ["A", "B", "C", "D"];
  const shuffled = shuffleArray(choices);
  return shuffled.map((choice, idx) => ({
    key: keys[idx],
    text: choice.text,
    correct: choice.correct
  }));
}

function setProgress(step) {
  const clamped = Math.max(0, Math.min(3, step));
  const fill = $("#progressFill");
  const label = $("#progressLabel");
  const track = document.querySelector(".progress__track");
  const pct = (clamped / 3) * 100;
  fill.style.width = `${pct}%`;
  label.textContent = `${clamped} of 3`;
  track.setAttribute("aria-valuenow", String(clamped));
}

function render(html) {
  $("#card").innerHTML = html;
}

// ---------- quiz state ----------
let state = {
  step: 0,
  q1Client: null,
  q23Client: null,
  q1Selected: null,
  q2Selected: null,
  q3Input: "",
  q1Choices: null,
  q2Choices: null
};

// Question 1 weighted selection (percentages must sum to 100)
const Q1_WEIGHTS = {
  "A21 Wellness Dispensary": 14,
  "Got Your Six Dispensary": 12,
  "WASH BINS": 12,
  "SOS Survival Products": 10,
  "Printastic": 10,
  "Peninsula Mobile Screens": 6,
  "Platon Graphics": 6,
  "There You Have It 3D": 6,
  "Bigger Better Banner": 4,
  "CROTRAN Custom Rub On Transfers": 4,
  "DTL Dry Transfer Letters": 4,
  "ESA Awnings Inc.": 4,
  "Geeks on Command": 4,
  "PASWM Peel and Stick Wall Murals": 4,
  "WASH BINS Newport Beach": 4
};

// Question 2 pool (equal odds, Q3 always matches Q2 client)
const Q2_CLIENTS = [
  "A21 Wellness Dispensary",
  "Got Your Six Dispensary",
  "Peninsula Mobile Screens",
  "Printastic",
  "Bigger Better Banner",
  "SOS Survival Products",
  "Platon Graphics",
  "WASH BINS",
  "CROTRAN",
  "There You Have It 3D",
  "DTL",
  "ESA Awnings Inc.",
  "Geeks on Command",
  "PASWM",
  "WASH BINS Newport Beach"
];

// Weighted random selection for Q1
function selectQ1Client() {
  const rand = Math.random() * 100;
  let cumulative = 0;
  for (const [client, weight] of Object.entries(Q1_WEIGHTS)) {
    cumulative += weight;
    if (rand < cumulative) {
      return client;
    }
  }
  // Fallback (shouldn't happen if weights sum to 100)
  return Object.keys(Q1_WEIGHTS)[0];
}

// Equal random selection for Q2 (Q3 uses same client)
function selectQ2Client() {
  const idx = Math.floor(Math.random() * Q2_CLIENTS.length);
  return Q2_CLIENTS[idx];
}

function newQuizContext() {
  // Q1: weighted random selection
  state.q1Client = resolveClient(selectQ1Client(), "q1");
  
  // Q2: equal random selection (Q3 automatically uses same client)
  state.q23Client = resolveClient(selectQ2Client(), "q2");
  
  state.q1Selected = null;
  state.q2Selected = null;
  state.q3Input = "";
  
  // Prepare randomized choices for this quiz session
  const q1Data = QUIZ_DATA.q1[state.q1Client];
  const q2Data = QUIZ_DATA.q2[state.q23Client];
  state.q1Choices = prepareChoices(q1Data.choices);
  state.q2Choices = prepareChoices(q2Data.choices);
}

function landingView() {
  setProgress(0);
  render(`
    <img src="Take%20our%20Quiz%20for%20250%20EXTRA%20ENTRIES%20in%20our%20%241000%20Amazon%20Gift%20Card%20-%20Sweepstakes%20Giveaway.jpg" alt="Take the Quiz - Unlock a Secret Code for 250 Extra Entries" class="quiz-hero-img" />
        
    <p class="quiz-supertext">Take this short quiz for</p>
    <h1 class="quiz-headline">500 BONUS ENTRIES</h1>
    <p class="quiz-subtext">in our $1,000 Amazon Sweepstakes</p>

    <div class="actions">
      <button class="btn-green" id="startBtn">Start Quiz</button>
    </div>
  `);

  $("#startBtn").addEventListener("click", () => {
    newQuizContext();
    state.step = 1;
    question1View();
  });
}

function question1View() {
  const q = QUIZ_DATA.q1[state.q1Client];
  const searchTerm = getSearchTermForClient(state.q1Client);
  const body = injectSearchTerm(q.bodyHtml, searchTerm);

  setProgress(1);
  const optionsHtml = `<div class="options" role="group" aria-label="Answer choices">
    ${state.q1Choices.map(c => `
      <button type="button" class="optionBtn" data-key="${c.key}" aria-pressed="${state.q1Selected === c.key}">
        <strong>${c.key}.</strong> ${safeText(c.text)}
      </button>
    `).join("")}
  </div>`;

  render(`
    <div class="kicker"><span class="badge">Question 1</span> <span class="small">of 3</span></div>
    <div class="hr"></div>
    <div class="content">${body}</div>
    ${optionsHtml}
    <div class="actions actions-between">
      <button class="btn-green" id="submitBtn" ${!state.q1Selected ? "disabled" : ""}>Submit</button>
      <span></span>
    </div>
  `);

  document.querySelectorAll(".optionBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const k = btn.getAttribute("data-key");
      state.q1Selected = k;
      question1View();
    });
  });

  $("#submitBtn").addEventListener("click", () => {
    if (!state.q1Selected) return;
    state.step = 2;
    question2View();
  });
}

function question2View() {
  const q = QUIZ_DATA.q2[state.q23Client];
  const searchTerm = getSearchTermForClient(state.q23Client);
  const body = injectSearchTerm(q.bodyHtml, searchTerm);

  setProgress(2);
  const optionsHtml = `<div class="options" role="group" aria-label="Answer choices">
    ${state.q2Choices.map(c => `
      <button type="button" class="optionBtn" data-key="${c.key}" aria-pressed="${state.q2Selected === c.key}">
        <strong>${c.key}.</strong> ${safeText(c.text)}
      </button>
    `).join("")}
  </div>`;

  render(`
    <div class="kicker"><span class="badge">Question 2</span> <span class="small">of 3</span></div>
    <div class="hr"></div>
    <div class="content">${body}</div>
    ${optionsHtml}
    <div class="actions actions-between">
      <button class="btn-green" id="submitBtn" ${!state.q2Selected ? "disabled" : ""}>Submit</button>
      <button class="btn-ghost" id="goBackBtn" type="button">Go Back</button>
    </div>
  `);

  document.querySelectorAll(".optionBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const k = btn.getAttribute("data-key");
      state.q2Selected = k;
      question2View();
    });
  });

  $("#goBackBtn").addEventListener("click", () => {
    state.step = 1;
    question1View();
  });

  $("#submitBtn").addEventListener("click", () => {
    if (!state.q2Selected) return;
    state.step = 3;
    question3View();
  });
}

function question3View() {
  const q = QUIZ_DATA.q3[resolveClient(state.q23Client, "q3")];
  const searchTerm = getSearchTermForClient(state.q23Client);
  const body = injectSearchTerm(q.bodyHtml, searchTerm);

  setProgress(3);

  const inputHtml = `
    <div class="inputRow">
      <input class="input" id="phoneInput" autocomplete="tel" inputmode="tel" placeholder="Paste or type the phone number" value="${safeText(state.q3Input).replace(/"/g, "&quot;")}" />
    </div>
  `;

  render(`
    <div class="kicker"><span class="badge">Question 3</span> <span class="small">of 3</span></div>
    <div class="hr"></div>
    <div class="content">${body}</div>
    ${inputHtml}
    <div class="actions actions-between">
      <button class="btn-green" id="submitBtn">Submit</button>
      <button class="btn-ghost" id="goBackBtn" type="button">Go Back</button>
    </div>
  `);

  $("#phoneInput").addEventListener("input", (e) => {
    state.q3Input = e.target.value;
  });

  $("#goBackBtn").addEventListener("click", () => {
    state.step = 2;
    question2View();
  });

  $("#submitBtn").addEventListener("click", () => {
    const v = $("#phoneInput").value;
    state.q3Input = v;
    gradeQuiz();
  });
}

function gradeQuiz() {
  const q3 = QUIZ_DATA.q3[resolveClient(state.q23Client, "q3")];

  // Find if selected answer is correct based on the randomized choices
  const q1SelectedChoice = state.q1Choices.find(c => c.key === state.q1Selected);
  const q2SelectedChoice = state.q2Choices.find(c => c.key === state.q2Selected);
  
  const correct1 = q1SelectedChoice && q1SelectedChoice.correct;
  const correct2 = q2SelectedChoice && q2SelectedChoice.correct;

  const userDigits = digitsOnly(state.q3Input);
  const correctDigits = digitsOnly(q3.correctPhone);
  const correctDigitsWith1 = "1" + correctDigits;
  const correct3 = userDigits === correctDigits || userDigits === correctDigitsWith1;

  const score = [correct1, correct2, correct3].filter(Boolean).length;

  if (score === 3) {
    successView();
  } else {
    failView(score);
  }
}

function successView() {
  setProgress(3);
  const code = QUIZ_DATA.secretCode;

  render(`
    <div class="kicker"><span class="badge">Perfect score</span> <span class="small note-good">3 of 3 correct</span></div>
    <h2>Congrats - You've Unlocked a Secret Code!</h2>

    <div class="secret secret-inline">
      <code id="secretCode">${code}</code>
      <button class="btn-primary" id="copyBtn" type="button">Copy code</button>
    </div>

    <div class="actions">
      <a class="btn-green" href="https://gleam.io/8eHMC/enter-to-win-a-1000-amazon-gift-card" target="_blank" rel="noopener">Redeem Your Code Now</a>
    </div>
  `);

  $("#copyBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code);
      $("#copyBtn").textContent = "Copied";
      setTimeout(() => $("#copyBtn").textContent = "Copy code", 1200);
    } catch {
      alert("Copy failed. Please highlight the code and copy it.");
    }
  });
}

function failView(score) {
  setProgress(3);
  render(`
    <div class="kicker"><span class="small note-bad">${score} of 3 correct</span></div>
    <h2>So Close!</h2>
    <p>You need 3 out of 3 to unlock the code. Give it another shot!</p>
    
    <img src="Take our Quiz for 250 EXTRA ENTRIES in our $1000 Amazon Gift Card - Sweepstakes Giveaway.jpg" alt="Take the Quiz - Unlock a Secret Code for 250 Extra Entries" class="quiz-fail-img" />

    <div class="actions">
      <button class="btn-green" id="tryAgainBtn" type="button">Try Again</button>
    </div>
  `);

  $("#tryAgainBtn").addEventListener("click", () => {
    newQuizContext();
    state.step = 1;
    question1View();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  landingView();
});
