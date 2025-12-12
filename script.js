// --- The Entries Database ---
const entries = {
    1: {
        title: "Birthdays",
        type: "letter",
        // Double \n creates a gap between paragraphs. Single \n forces a new line.
        body: `Birthdays never truly felt like my day. I used to sit at those family dinners, watching everyone talk and laugh while I just waited for the night to end. I was physically present, but emotionally somewhere far away. I didn’t feel celebrated just included out of routine.

But then you walked into my 21st birthday and everything changed.

You showed up with flowers you knew I’d love. A cake with a flavor that felt chosen just for me. You put in so much thought and effort into every little detail, even with everything else you had going on. You didn’t need grand gestures, your care spoke louder than any celebration ever could.

You made me feel like the day actually belonged to me.

I remember how you tried every bit of food with me, even when your teeth were hurting, because you knew it made me happy. And when you were too full to finish your food, I gladly ate the rest for you, happy just to share anything with you. And when the wine I picked was too bitter for me, you didn’t let it go to waste. You drank it for me with that small smile of yours, like it was the easiest act of love in the world.

Those may seem like tiny things… but they meant everything.

We laughed, we scrolled through reels. When we were too full to eat another bite, we just leaned against each other. In that moment, I realized something:

I didn’t want the night to end.
For once, I wanted time to slow down.

And for the first time in my life, I didn’t feel like I had to compromise or hide on my birthday. I didn’t feel out of place. I felt loved, simply because you were there.

You made me feel seen. You made me feel chosen. You made me feel loved in a way I had never felt on any birthday before — and in so many moments beyond that night.

Thank you for making my birthday more than a date on a calendar.
Thank you for making me feel like I am worth celebrating.
Thank you for giving my heart its first memory of what a special birthday truly feels like.
You turned my birthday into something special.
You make me feel special.

That's why I'm always grateful for you, and because of that I'll reciprocate your love beyond special days, I love you!`
    },
    2: {
        title: "Missing You Pt. 2",
        type: "letter",
        body: `I know sometimes you tease me, thinking I don’t miss you as much as I say I do, but let me assure you, I do. More than you probably realize. These past few weeks apart have made me discover just how much I want to be near you, to hold you, kiss you, and just exist in your presence.

Even when we see each other, I find myself wanting more, more time, more jokes, more of you. I wasn’t like this before, back when we weren’t together, but now my heart has a mind of its own, and it seems to belong entirely to you.

I catch myself thinking about you constantly, your smile, your laughter, the way your presence makes everything brighter. Every little memory of you fills me with warmth, and every moment apart makes me realize just how lucky I am. How did I get so fortunate to have someone as wonderful, as beautiful, and as perfectly you as you?

I may act a little clingy, but it’s only because my heart yearns for you. Being near you makes everything feel right, and being away makes me long for that closeness even more like i'm missing home when i'm at school.

I’ve missed you more than words can say, and now, finally, I get to hold you again after reading this hehehehe`
    },
    3: {
        title: "Blocks",
        type: "letter",
        body: `I’ve been thinking a lot about Minecraft lately, but not because of the game itself. It has always been about us. Even back in grade school, when we were just friends and seatmates, playing together felt different. Single-player always felt off, incomplete somehow. But when we were in the same world, building, exploring, laughing, everything clicked. That’s when the game felt alive, and that’s when I felt happiest.

Even now, in senior high and college, playing with you feels exactly the same. It doesn’t matter if we’re building a house, setting up a market, or just mining endlessly. The joy comes from being with you. Every scream when a spider attacks me, every laugh when something goes wrong, every quiet moment leaning into each other while we watch the sunset in our little world. It’s all the experience of being together that makes it special. Minecraft is just the excuse.

Looking back, I realize that this feeling has always been there. I bonded with friends over it before I even knew what it meant, but it wasn’t the same as this. I remember feeling frustrated when people didn’t see it the way I did, when my ex dismissed it as nerdy. I think I just wanted someone to understand why shared moments mattered so much, to want to play alongside me the way I had always imagined. Now I see that he wasn’t the right person, and I’m so grateful that I get to share it with you, someone who makes every moment feel alive and joyful simply by being there.

It was never about the game. It’s the way we explore together. How we want to just make and sit in a tiny, cozy house we built and listen to the in-game music while we talk over call.

Single-player always felt incomplete. Like something was missing. But with you there, suddenly the world feels bigger, funnier, more alive. Every little moment turns into a memory worth keeping. It makes something simple like a block game from our childhood into something more, because we made it something more.`
    },
    4: {
        title: "Let Me See You",
        type: "poem",
        body: `Even when the room is full
and silence keeps you still,
I love when your camera flickers on
like a secret just for me.

I watch the way you smile without speaking,
how your eyes tell me everything
you’re too shy to say out loud.
Your little gestures become whole stories
only I get to understand.

I place your window on the left of my screen,
like a picture frame I never want to close.
There you are, doing nothing and everything
all at once.
I admire you quietly
and my world feels warmer.

You don’t have to talk.
You don’t have to pose.
Just let me see you
in your softest moments,
your everyday light.

Because every time your face appears
I feel lucky,
like the universe decided
that my day deserved
a little more beauty.

So stay where I can see you,
even for a minute.
Let my heart be reminded
of the simple truth
that you’re real
and right there with me.`
    },
    
    // --- ENTRY 5: IMAGE, POEM & VIDEO ---
    // Don't forget to update the image and youtube links!
    5: {
        title: "Made for You",
        type: "poem",
        
        // 1. YOUR IMAGE LINK:
        image: "<a href="<a href="https://i.ibb.co/KcjqMxB2/9th-hehe.jpg", 

        // 2. THE POEM
        body: `There’s a song I’ll sing for you
about love found far away
but really every lyric
is just my heart saying your name.

No matter the distance
or night turning into day
I’m always guided back
to the love my heart chose.`,

        // 3. YOUR YOUTUBE LINK (must be 'embed' link):
        youtube: "https://www.youtube.com/embed/br8pmexVUzE?si=ouv7xGEOygELZ8BR" 
    }
};

// --- DOM Elements ---
const introScreen = document.getElementById('intro-screen');
const diaryContainer = document.getElementById('diary-container');
const dynamicText = document.getElementById('dynamic-text');
const entryItems = document.querySelectorAll('.entry-item');

const modal = document.getElementById('reader-modal');
const closeBtn = document.getElementById('close-btn');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// State Variables
let currentDefaultText = "What will you read first?";
let hasReadFirst = false;

// --- Intro Logic ---
window.addEventListener('load', () => {
    setTimeout(() => {
        introScreen.style.opacity = '0';
        setTimeout(() => {
            introScreen.style.display = 'none';
            diaryContainer.classList.remove('hidden');
        }, 1000);
    }, 3500);
});

// --- Hover Interaction Logic ---
entryItems.forEach(item => {
    const id = item.getAttribute('data-id');
    const entryTitle = entries[id].title;

    // Hover ENTER
    item.addEventListener('mouseenter', () => {
        dynamicText.style.opacity = 0;
        dynamicText.style.transform = "translateY(-5px)";
        
        setTimeout(() => {
            dynamicText.textContent = entryTitle;
            dynamicText.style.color = "#ff6b6b"; 
            dynamicText.style.opacity = 1;
            dynamicText.style.transform = "translateY(0)";
        }, 200);
    });

    // Hover LEAVE
    item.addEventListener('mouseleave', () => {
        dynamicText.style.opacity = 0;
        dynamicText.style.transform = "translateY(5px)";

        setTimeout(() => {
            dynamicText.textContent = currentDefaultText;
            dynamicText.style.color = "#5d5d5d"; 
            dynamicText.style.opacity = 1;
            dynamicText.style.transform = "translateY(0)";
        }, 200);
    });

    // CLICK
    item.addEventListener('click', () => {
        openEntry(id);
    });
});

// --- Modal Logic ---
function openEntry(id) {
    const entry = entries[id];
    
    modalTitle.textContent = entry.title;
    modalBody.innerHTML = ''; 
    
    // 1. Add Image
    if (entry.image) {
        const img = document.createElement('img');
        img.src = entry.image;
        img.className = 'media-image';
        modalBody.appendChild(img);
    }

    // 2. Add Text
    const div = document.createElement('div');
    div.textContent = entry.body;
    
    if (entry.type === 'poem') {
        div.className = 'poem-style';
    } else {
        div.className = 'letter-style';
    }
    modalBody.appendChild(div);

    // 3. Add Video
    if (entry.youtube) {
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';
        
        const iframe = document.createElement('iframe');
        iframe.src = entry.youtube;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        
        videoWrapper.appendChild(iframe);
        modalBody.appendChild(videoWrapper);
    }
    
    // Show modal
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal() {
    modal.classList.remove('active');
    
    // Switch to "Next" logic
    if (!hasReadFirst) {
        hasReadFirst = true;
        currentDefaultText = "What will you read next?";
        dynamicText.textContent = currentDefaultText;
    }
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 400); 
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
    }
});
