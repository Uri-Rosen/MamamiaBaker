const ALL_RECIPES_DATA = [
    {
        id: "croissants",
        img: "images/recipe-croissants.jpg",
        mainImage: "images/recipe-croissants-main.jpg",
        title: "קרואסונים שמיימיים",
        shortDesc: "פריכים, חמאתיים, ובלתי ניתנים לעמוד בפניהם. מאפה צרפתי קלאסי מושלם.",
        longDesc: "הקרואסונים האלה הם התגלמות השלמות הצרפתית. שכבות על גבי שכבות של בצק חמאתי פריך, שנמס בפה. למרות שההכנה דורשת סבלנות, התוצאה שווה כל רגע. מושלם לארוחת בוקר מפנקת או כפינוק לצד הקפה.",
        story: "התאהבתי בקרואסונים בטיול הראשון שלי לפריז. מאז, חלמתי לשחזר את הטעם והמרקם המושלמים. אחרי אינספור ניסיונות, זה המתכון המנצח שלי, שמזכיר לי את בתי הקפה הקטנים והקסומים של העיר.",
        reelLink: "#reel-croissants",
        ingredients: [
            "500 גרם קמח לבן",
            "60 גרם סוכר",
            "10 גרם מלח",
            "10 גרם שמרים יבשים",
            "250 מ\"ל חלב קר",
            "50 גרם חמאה רכה (לבצק)",
            "280 גרם חמאה קרה (לקיפול)"
        ],
        instructions: [
            "בקערת מיקסר עם וו לישה, ערבבו קמח, סוכר, מלח ושמרים.",
            "הוסיפו חלב וחמאה רכה ולשו במהירות נמוכה כ-3 דקות, עד שהבצק מתחיל להתאחד.",
            "העלו למהירות בינונית ולשו עוד 5-7 דקות, עד לקבלת בצק חלק ואלסטי.",
            "שטחו את הבצק למלבן, עטפו בניילון נצמד והכניסו למקרר לשעה לפחות (ועד לילה).",
            "הכינו את משטח החמאה: רדדו את החמאה הקרה בין שני ניירות אפייה למלבן בגודל של כ-15x20 ס\"מ. שמרו במקרר.",
            "רדדו את הבצק הקר למלבן הגדול פי שניים ממשטח החמאה. הניחו את החמאה במרכז הבצק וקפלו את שולי הבצק מעל החמאה, כך שהיא תהיה עטופה לחלוטין.",
            "רדדו את הבצק עם החמאה למלבן ארוך. בצעו קיפול 'ספר' (קיפול לשלוש). עטפו והכניסו למקרר ל-30 דקות.",
            "חזרו על פעולת הרידוד והקיפול עוד 2-3 פעמים, עם קירור של 30 דקות בין כל קיפול.",
            "לאחר הקיפול האחרון, רדדו את הבצק למלבן גדול ודק (כ-3-4 מ\"מ עובי). חתכו למשולשים ארוכים.",
            "גלגלו כל משולש מהבסיס הרחב לקצה הדק ליצירת צורת קרואסון. הניחו על תבנית מרופדת בנייר אפייה.",
            "התפיחו את הקרואסונים במקום חמים כשעה-שעתיים, עד להכפלת הנפח.",
            "חממו תנור ל-200 מעלות צלזיוס. הברישו את הקרואסונים בביצה טרופה.",
            "אפו 15-20 דקות, עד שהקרואסונים זהובים ותפוחים."
        ]
    },
    {
        id: "red-velvet-cupcakes",
        img: "images/recipe-red-velvet-cupcakes.jpg",
        mainImage: "images/recipe-red-velvet-cupcakes-main.jpg",
        title: "קאפקייקס קטיפה אדומה",
        shortDesc: "קאפקייקס רד ולווט לחים עם ציפוי גבינת שמנת עשיר.",
        longDesc: "קאפקייקס רד ולווט קלאסיים, עם צבע אדום עמוק וטעם עדין של קקאו. הציפוי של גבינת שמנת מוסיף מתיקות מאוזנת ומרקם קרמי מפנק. קינוח מושלם לאירועים מיוחדים או סתם כשמתחשק משהו טעים.",
        story: "תמיד היה לי קסם מיוחד לעוגות רד ולווט. הצבע המהפנט, המרקם הרך והשילוב עם גבינת שמנת. המתכון הזה הוא תוצאה של שנים של חיפוש אחר הקאפקייק המושלם – לא מתוק מדי, לח במידה הנכונה, ועם טעם בלתי נשכח.",
        reelLink: "#reel-cupcakes",
        ingredients: [
            "1 ו-1/2 כוסות קמח",
            "1 כפית אבקת אפייה",
            "1/2 כפית מלח",
            "1 כף אבקת קקאו",
            "1/2 כוס חמאה רכה",
            "1 כוס סוכר",
            "2 ביצים",
            "1 כפית תמצית וניל",
            "1 כוס רוויון ( buttermilk)",
            "2 כפות צבע מאכל אדום נוזלי",
            "1 כפית חומץ לבן",
            "1 כפית סודה לשתייה",
            "לציפוי: 200 גרם גבינת שמנת, 1/2 כוס חמאה רכה, 2 כוסות אבקת סוכר, 1 כפית וניל"
        ],
        instructions: [
            "חממו תנור ל-175 מעלות צלזיוס. רפדו תבנית שקעים במנז'טים.",
            "בקערה, נפו יחד קמח, אבקת אפייה, מלח ואבקת קקאו.",
            "בקערה נפרדת, הקציפו חמאה וסוכר עד לקבלת תערובת קרמית. הוסיפו ביצים אחת אחת, תוך כדי הקצפה. הוסיפו וניל.",
            "בקערית קטנה, ערבבו רוויון וצבע מאכל אדום.",
            "הוסיפו את תערובת הקמח ותערובת הרוויון לסירוגין לתערובת החמאה, החל וסיימו עם הקמח. ערבבו רק עד לאיחוד.",
            "בקערית נפרדת, ערבבו חומץ וסודה לשתייה (זה יתסוס מעט). הוסיפו מיד לבלילה וערבבו קלות.",
            "חלקו את הבלילה בין השקעים, מלאו כ-2/3 גובה.",
            "אפו 18-20 דקות, או עד שקיסם הננעץ במרכז יוצא נקי. צננו לחלוטין.",
            "להכנת הציפוי: הקציפו גבינת שמנת וחמאה. הוסיפו בהדרגה אבקת סוכר ווניל והמשיכו להקציף עד לקבלת קרם חלק. צפו את הקאפקייקס לאחר שהתקררו."
        ]
    },
    {
        id: "apple-pie",
        img: "images/recipe-apple-pie.jpg",
        mainImage: "images/recipe-apple-pie-main.jpg",
        title: "פאי תפוחים אומנותי",
        shortDesc: "קלאסיקה מנחמת עם קלתית פריכה מושלמת ומילוי תפוחים מתוק.",
        longDesc: "אין כמו ריח של פאי תפוחים ביתי נאפה בתנור. המתכון הזה משלב בצק פריך וחמאתי עם מילוי תפוחים מתובל בקינמון ונגיעות של לימון. כל ביס הוא חגיגה של טעמים ומרקמים.",
        story: "פאי תפוחים מזכיר לי את סבתא שלי. היא הייתה מכינה אותו בכל חג, והבית היה מתמלא בריח משכר. ניסיתי לשמר את המתכון שלה, עם כמה התאמות קטנות שהופכות אותו לשלי.",
        reelLink: "#reel-apple-pie",
        ingredients: [
            "לבצק: 2.5 כוסות קמח, 1 כפית מלח, 220 גרם חמאה קרה חתוכה לקוביות, 1/2 כוס מים קרים מאוד",
            "למילוי: 6-8 תפוחי עץ (גרני סמית או פינק ליידי), קלופים וחתוכים לפרוסות, 1/2 כוס סוכר (או לפי הטעם), 1/4 כוס קמח, 1 כפית קינמון, 1/4 כפית אגוז מוסקט, מיץ מחצי לימון, 2 כפות חמאה חתוכה לקוביות קטנות",
            "1 ביצה טרופה להברשה"
        ],
        instructions: [
            "להכנת הבצק: בקערה גדולה, ערבבו קמח ומלח. הוסיפו קוביות חמאה ובעזרת קצות האצבעות או מעבד מזון בפולסים, עבדו עד לקבלת פירורים גסים.",
            "הוסיפו מים קרים בהדרגה, כף אחת בכל פעם, עד שהבצק מתחיל להתאחד. אל תעבדו יותר מדי.",
            "חלקו את הבצק לשני חלקים (אחד מעט גדול יותר מהשני), שטחו כל חלק לדיסקית, עטפו בניילון נצמד וקררו במקרר לפחות שעה.",
            "להכנת המילוי: בקערה גדולה, ערבבו תפוחי עץ, סוכר, קמח, קינמון, אגוז מוסקט ומיץ לימון.",
            "חממו תנור ל-200 מעלות צלזיוס.",
            "רדדו את החלק הגדול יותר של הבצק על משטח מקומח קלות לעיגול הגדול מקוטר תבנית הפאי. העבירו לתבנית פאי (בקוטר 22-24 ס\"מ).",
            "מלאו את הקלתית במילוי התפוחים. פזרו מעל את קוביות החמאה הקטנות.",
            "רדדו את החלק השני של הבצק. ניתן לחתוך לרצועות ליצירת שתי וערב, או להניח ככיסוי שלם עם חריצים לאוורור.",
            "הדקו את שולי הבצק העליון והתחתון. הברישו בביצה טרופה.",
            "אפו 45-55 דקות, או עד שהבצק זהוב והמילוי מבעבע. אם החלק העליון משחים מהר מדי, כסו קלות בנייר אלומיניום. צננו לפני ההגשה."
        ]
    },
    {
        id: "chai-cookies",
        img: "images/recipe-chai-cookies.jpg",
        mainImage: "images/recipe-chai-cookies-main.jpg",
        title: "עוגיות צ'אי מתובלות",
        shortDesc: "עוגיות לעיסות בניחוח תבלינים חם, שמרגישות כמו חיבוק נעים.",
        longDesc: "עוגיות צ'אי הן פינוק מושלם לימים קרירים. הן משלבות את הטעמים הארומטיים של תה צ'אי – קינמון, הל, ג'ינג'ר וציפורן – בעוגייה רכה ולעיסה. כל ביס הוא חוויה מחממת ומנחמת.",
        story: "אני מכורה לתה צ'אי, והרעיון לשלב את הטעמים האהובים עליי בעוגייה נראה לי טבעי. אחרי כמה ניסויים עם יחסי התבלינים, הגעתי למתכון הזה, שהוא בדיוק מה שדמיינתי – עוגייה שהיא כמו לגימה חמה של צ'אי.",
        reelLink: "#reel-chai-cookies",
        ingredients: [
            "2 ו-1/4 כוסות קמח",
            "1 כפית סודה לשתייה",
            "1/2 כפית מלח",
            "2 כפיות קינמון טחון",
            "1 כפית הל טחון",
            "1/2 כפית ג'ינג'ר טחון",
            "1/4 כפית ציפורן טחונה",
            "1 כוס חמאה רכה",
            "3/4 כוס סוכר לבן",
            "1/2 כוס סוכר חום דמררה",
            "2 ביצים גדולות",
            "1 כפית תמצית וניל",
            "לציפוי (אופציונלי): 1/4 כוס סוכר, 1 כפית קינמון"
        ],
        instructions: [
            "חממו תנור ל-190 מעלות צלזיוס. רפדו תבניות בנייר אפייה.",
            "בקערה, ערבבו קמח, סודה לשתייה, מלח ואת כל התבלינים (קינמון, הל, ג'ינג'ר, ציפורן).",
            "בקערה גדולה, הקציפו חמאה עם שני סוגי הסוכר עד לקבלת תערובת בהירה ותפוחה.",
            "הוסיפו ביצים אחת אחרי השנייה, תוך הקצפה לאחר כל הוספה. הוסיפו תמצית וניל.",
            "הוסיפו בהדרגה את תערובת הקמח לתערובת החמאה וערבבו עד לאיחוד (לא לערבב יתר על המידה).",
            "אם משתמשים בציפוי: ערבבו סוכר וקינמון בקערית.",
            "צרו כדורים מהבצק (בערך כף לכדור). אם רוצים, גלגלו כל כדור בתערובת הסוכר-קינמון.",
            "סדרו את הכדורים על תבניות האפייה במרווחים.",
            "אפו 10-12 דקות, או עד שהשוליים מתחילים להזהיב והמרכז עדיין מעט רך.",
            "הניחו לעוגיות להתקרר על התבנית כ-5 דקות לפני העברה לרשת לצינון מלא."
        ]
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButtons = document.querySelectorAll('.mobile-menu-button');
    const mobileNavMenus = document.querySelectorAll('.mobile-nav-menu');

    mobileMenuButtons.forEach(button => {
        const targetMenuId = button.getAttribute('data-target-menu');
        const targetMenu = document.getElementById(targetMenuId);

        if (button && targetMenu) {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                const isHidden = targetMenu.classList.contains('hidden');
                
                mobileNavMenus.forEach(menu => {
                    if (menu.id !== targetMenuId) {
                        menu.classList.add('hidden');
                    }
                });
                mobileMenuButtons.forEach(btn => {
                    if (btn !== button) {
                        btn.setAttribute('aria-expanded', 'false');
                    }
                });

                targetMenu.classList.toggle('hidden');
                button.setAttribute('aria-expanded', String(!isHidden));
            });
        }
    });

    document.addEventListener('click', (event) => {
        mobileNavMenus.forEach(menu => {
            if (!menu.classList.contains('hidden')) {
                let correspondingButton = null;
                mobileMenuButtons.forEach(btn => {
                    if(btn.getAttribute('data-target-menu') === menu.id) {
                        correspondingButton = btn;
                    }
                });

                const isClickInsideMenu = menu.contains(event.target);
                const isClickOnButton = correspondingButton ? correspondingButton.contains(event.target) : false;

                if (!isClickInsideMenu && !isClickOnButton) {
                    menu.classList.add('hidden');
                    if (correspondingButton) {
                        correspondingButton.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });

    function generateRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = "flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl group";
        card.innerHTML = `
            <a class="block overflow-hidden" href="recipe-template.html?id=${recipe.id}">
                <div class="w-full bg-center bg-no-repeat aspect-[3/2] bg-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" style='background-image: url("${recipe.img}");'></div>
            </a>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-stone-800 text-xl font-semibold leading-snug mb-2 text-start">${recipe.title}</h3>
                <p class="text-stone-600 text-sm font-normal leading-relaxed flex-grow mb-3 text-start">${recipe.shortDesc}</p>
                <div class="mt-auto flex items-center justify-between">
                    <a class="inline-flex items-center text-sm font-medium custom-text-orange hover-text-orange-dark transition-colors" href="recipe-template.html?id=${recipe.id}">
                        <span>הצג מתכון</span>
                        <svg class="ms-1.5 size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 8.25 3 12m0 0 3.75 3.75M3 12h18" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </a>
                    <a class="text-stone-500 hover:custom-text-orange transition-colors" href="${recipe.reelLink}" rel="noopener noreferrer" target="_blank" title="צפו בריל באינסטגרם">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.822 118.822 0 0 1 12 2.163M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.358-2.621-6.78-6.979-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"></path></svg>
                    </a>
                </div>
            </div>
        `;
        return card;
    }

    const homeRecipeGrid = document.getElementById('home-recipe-grid');
    if (homeRecipeGrid) {
        const recipesToDisplay = ALL_RECIPES_DATA.slice(0, 4);
        recipesToDisplay.forEach(recipe => {
            homeRecipeGrid.appendChild(generateRecipeCard(recipe));
        });
    }

    const allRecipesGrid = document.getElementById('all-recipes-grid');
    if (allRecipesGrid) {
        ALL_RECIPES_DATA.forEach(recipe => {
            allRecipesGrid.appendChild(generateRecipeCard(recipe));
        });
    }
    

    const recipeDetailContainer = document.getElementById('recipe-detail-container');
    if (recipeDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        const recipeData = ALL_RECIPES_DATA.find(r => r.id === recipeId);

        if (recipeData) {
            document.title = `MamamiaBaker - ${recipeData.title}`;

            document.getElementById('breadcrumb-recipe-name').textContent = recipeData.title;
            
            document.getElementById('recipe-title').textContent = recipeData.title;
            document.getElementById('recipe-long-desc').textContent = recipeData.longDesc;
            document.getElementById('recipe-main-image').src = recipeData.mainImage || recipeData.img;
            document.getElementById('recipe-main-image').alt = recipeData.title;
            
            const karinStorySection = document.getElementById('karin-story-section');
            if(recipeData.story && karinStorySection) {
                karinStorySection.classList.remove('hidden');
                document.getElementById('karin-story-content').textContent = recipeData.story;
            } else if (karinStorySection) {
                karinStorySection.classList.add('hidden');
            }

            const ingredientsListEl = document.getElementById('ingredients-list');
            ingredientsListEl.innerHTML = '';
            recipeData.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.className = "flex items-center gap-x-3";
                li.innerHTML = `
                    <input class="custom-checkbox h-5 w-5 rounded border-[#e6dedb] border-2 bg-transparent text-[#f26321] checked:bg-[#f26321] checked:border-[#f26321] focus:ring-1 focus:ring-[#f26321] focus:ring-offset-0 focus:border-[#f26321] focus:outline-none appearance-none" type="checkbox"/>
                    <p class="text-[#3a2e28] text-base leading-normal">${ingredient}</p>
                `;
                ingredientsListEl.appendChild(li);
            });

            const instructionsListEl = document.getElementById('instructions-list');
            instructionsListEl.innerHTML = '';
            recipeData.instructions.forEach((instruction, index) => {
                const li = document.createElement('li');
                li.className = "flex gap-x-3";
                li.innerHTML = `
                    <div class="flex-shrink-0 w-6 h-6 bg-[#f26321] text-white rounded-full flex items-center justify-center text-xs font-bold">${index + 1}</div>
                    <p class="text-[#57453d] text-base leading-relaxed text-start">${instruction}</p>
                `;
                instructionsListEl.appendChild(li);
            });

            const watchReelLink = document.getElementById('watch-reel-link');
            if (recipeData.reelLink) {
                watchReelLink.href = recipeData.reelLink;
            } else {
                watchReelLink.classList.add('hidden');
            }

        } else {
            recipeDetailContainer.innerHTML = '<p class="text-center text-red-500">מתכון לא נמצא.</p>';
        }
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('header nav a, footer nav a, .mobile-nav-menu a');

    navLinks.forEach(link => {
        let linkPage = link.getAttribute('href').split("/").pop().split("#")[0];
        if (linkPage === "") linkPage = "index.html";

        link.classList.remove('active-nav-link');

        if (linkPage === currentPage) {
            link.classList.add('active-nav-link');
        }
        if (currentPage === 'index.html' && linkPage === 'index.html' && link.textContent.trim() === 'ראשי') {
             link.classList.add('active-nav-link');
        }
        if (currentPage === 'recipes.html' && linkPage === 'recipes.html' && link.textContent.trim() === 'המאפים שלי') {
             link.classList.add('active-nav-link');
        }
        if (currentPage === 'about.html' && linkPage === 'about.html' && link.textContent.trim() === 'על קארין') {
            link.classList.add('active-nav-link');
        }
    });
});
