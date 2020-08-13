const mongoose = require("./connection.js");
const db = mongoose.connection;
const Verses = require("../models/verses");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Verses.deleteMany({});

  const verses = [
    {
      happy: [
        {
          versePath: "Proverbs 15:13",
          content:
            "A glad heart makes a cheerful face, but by sorrow of heart the spirit is crushed",
        },
        {
          versePath: "Psalm 144:15",
          content:
            "Blessed are the people to whom such blessings fall! Blessed are the people whose God is the Lord!",
        },
        {
          versePath: "Matthew 5:7",
          content: "Blessed are the merciful, for they shall receive mercy",
        },
        {
          versePath: "John 13:17",
          content: "If you know these things, blessed are you if you do them.",
        },
        {
          versePath: "James 5:13",
          content:
            "Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing praise",
        },
        {
          versePath: "1 Timothy 6:18",
          content:
            "They are to do good, to be rich in good works, to be generous and ready to share",
        },
      ],
      angry: [
        {
          versePath: "Proverbs 15:1",
          content:
            "A soft answer turns away wrath, but a harsh word stirs up anger.",
        },
        {
          versePath: "Ephesians 4:26-27",
          content:
            "Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil",
        },
        {
          versePath: "Proverbs 29:11",
          content:
            "A fool gives full vent to his spirit, but a wise man quietly holds it back",
        },
        {
          versePath: "Psalm 37:8",
          content:
            "Refrain from anger, and forsake wrath! Fret not yourself; it tends only to evil",
        },
        {
          versePath: "Proverbs 19:11",
          content:
            "Good sense makes one slow to anger, and it is his glory to overlook an offense",
        },
        {
          versePath: "Proverbs 14:29",
          content:
            "Whoever is slow to anger has great understanding, but he who has a hasty temper exalts folly",
        },
      ],
      sad: [
        {
          versePath: "Matthew 5:4",
          content: "“Blessed are those who mourn, for they shall be comforted.",
        },
        {
          versePath: "Matthew 5:4",
          content: "Blessed are those who mourn, for they shall be comforted",
        },
        {
          versePath: "Revelation 21:4",
          content:
            "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.",
        },
        {
          versePath: "2 Timothy 2:1",
          content:
            "You then, my child, be strengthened by the grace that is in Christ Jesus",
        },
      ],
      frustrated: [
        {
          versePath: "1 Peter 4:19",
          content:
            "Therefore let those who suffer according to God's will entrust their souls to a faithful Creator while doing good.",
        },
        {
          versePath: "John 14:26",
          content:
            "But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things and bring to your remembrance all that I have said to you.",
        },
        {
          versePath: "1 Peter 3:15",
          content:
            "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect",
        },
        {
          versePath: "Colossians 4:6",
          content:
            "Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person",
        },
        {
          versePath: "John 3:16",
          content:
            "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life",
        },
      ],
      empathy: [
        {
          versePath: "John 15:12",
          content:
            "This is my commandment, that you love one another as I have loved you",
        },
        {
          versePath: "Galatians 6:2",
          content:
            "Bear one another's burdens, and so fulfill the law of Christ",
        },
        {
          versePath: "1 Corinthians 12:26",
          content:
            "If one member suffers, all suffer together; if one member is honored, all rejoice together.",
        },
        {
          versePath: "Matthew 9:36",
          content:
            "When he saw the crowds, he had compassion for them, because they were harassed and helpless, like sheep without a shepherd",
        },
        {
          versePath: "Hebrews 13:3",
          content:
            "Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.",
        },
        {
          versePath: "Psalm 34:18",
          content:
            "The Lord is near to the brokenhearted and saves the crushed in spirit.",
        },
      ],
      politeness: [
        {
          versePath: "1 Peter 3:8",
          content:
            "Finally, all of you, have unity of mind, sympathy, brotherly love, a tender heart, and a humble mind.",
        },
      ],
      worried: [
        {
          versePath: "Philippians 4:6-7",
          content:
            "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus",
        },
        {
          versePath: "Proverbs 12:25",
          content:
            "Anxiety in a man's heart weighs him down, but a good word makes him glad",
        },
        {
          versePath: "Matthew 28:19",
          content:
            "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit",
        },
        {
          versePath: "Acts 2:21",
          content:
            "And it shall come to pass that everyone who calls upon the name of the Lord shall be saved.",
        },
        {
          versePath: "Ephesians 1:11-12",
          content:
            "In him we have obtained an inheritance, having been predestined according to the purpose of him who works all things according to the counsel of his will, so that we who were the first to hope in Christ might be to the praise of his glory.",
        },

        {
          versePath: "Hebrews 11:1",
          content:
            "Now faith is the assurance of things hoped for, the conviction of things not seen.",
        },
      ],
      vengeful: [
        {
          versePath: "Romans 12:19",
          content:
            "Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, “Vengeance is mine, I will repay, says the Lord.”",
        },
        {
          versePath: "1 Peter 3:9",
          content:
            "Do not repay evil for evil or reviling for reviling, but on the contrary, bless, for to this you were called, that you may obtain a blessing",
        },
        {
          versePath: "Matthew 5:38-39",
          content:
            "“You have heard that it was said, ‘An eye for an eye and a tooth for a tooth.’ But I say to you, Do not resist the one who is evil. But if anyone slaps you on the right cheek, turn to him the other also",
        },
        {
          versePath: "Leviticus 19:18",
          content:
            "You shall not take vengeance or bear a grudge against the sons of your own people, but you shall love your neighbor as yourself: I am the Lord.",
        },
        {
          versePath: "James 1:19-20",
          content:
            "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God",
        },
        {
          versePath: "Matthew 5:7",
          content: "“Blessed are the merciful, for they shall receive mercy.",
        },
      ],
      thankful: [
        {
          versePath: "Psalm 103:2",
          content: "Bless the Lord, O my soul, and forget not all his benefits",
        },
        {
          versePath: "1 Thessalonians 5:16-18",
          content:
            "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you",
        },
        {
          versePath: "1 Corinthians 10:13",
          content:
            "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it",
        },
        {
          versePath: "1 Samuel 12:24",
          content:
            "Only fear the Lord and serve him faithfully with all your heart. For consider what great things he has done for you",
        },
        {
          versePath: "Romans 10:10",
          content:
            "For with the heart one believes and is justified, and with the mouth one confesses and is saved",
        },
        {
          versePath: "Psalm 33:21",
          content:
            "For our heart is glad in him, because we trust in his holy name.",
        },
      ],
      excited: [
        {
          versePath: "James 1:4",
          content:
            "And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing",
        },
        {
          versePath: "2 Peter 1:21",
          content:
            "For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit",
        },
        {
          versePath: "2 Timothy 3:16",
          content:
            "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness",
        },
        {
          versePath: "Psalm 28:7",
          content:
            "The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him",
        },
        {
          versePath: "Philippians 4:13",
          content: "I can do all things through him who strengthens me",
        },
        {
          versePath: "Philippians 4:8",
          content:
            "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things",
        },
      ],
      peaceful: [
        {
          versePath: "John 16:33",
          content:
            "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
        },
        {
          versePath: "Colossians 3:15",
          content:
            "And let the peace of Christ rule in your hearts, to which indeed you were called in one body.",
        },
        {
          versePath: "Romans 5:1",
          content:
            "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ",
        },
        {
          versePath: "Romans 8:6",
          content:
            "For to set the mind on the flesh is death, but to set the mind on the Spirit is life and peace",
        },
        {
          versePath: "Philippians 4:6-7",
          content:
            "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus",
        },
        {
          versePath: "Psalm 119:165",
          content:
            "Great peace have those who love your law; nothing can make them stumble",
        },
      ],
      jealous: [
        {
          versePath: "James 4:2",
          content:
            "You desire and do not have, so you murder. You covet and cannot obtain, so you fight and quarrel. You do not have, because you do not ask",
        },
        {
          versePath: "Proverbs 14:30",
          content:
            "A tranquil heart gives life to the flesh, but envy makes the bones rot",
        },
        {
          versePath: "James 3:14-18",
          content:
            "But if you have bitter jealousy and selfish ambition in your hearts, do not boast and be false to the truth. This is not the wisdom that comes down from above, but is earthly, unspiritual, demonic. For where jealousy and selfish ambition exist, there will be disorder and every vile practice. But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere. And a harvest of righteousness is sown in peace by those who make peace",
        },
        {
          versePath: "Ephesians 5:10-11",
          content:
            "And try to discern what is pleasing to the Lord. Take no part in the unfruitful works of darkness, but instead expose them.",
        },
        {
          versePath: "1 Corinthians 14:1",
          content:
            "Pursue love, and earnestly desire the spiritual gifts, especially that you may prophesy",
        },
        {
          versePath: "Romans 12:1-3",
          content:
            "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship. Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. For by the grace given to me I say to everyone among you not to think of himself more highly than he ought to think, but to think with sober judgment, each according to the measure of faith that God has assigned.",
        },
      ],
      heartbroken: [
        {
          versePath: "Psalm 34:18-20",
          content:
            "The Lord is near to the brokenhearted and saves the crushed in spirit. Many are the afflictions of the righteous, but the Lord delivers him out of them all. He keeps all his bones; not one of them is broken.",
        },
        {
          versePath: "John 13:7",
          content:
            "Jesus answered him, “What I am doing you do not understand now, but afterward you will understand.”",
        },
        {
          versePath: "Psalm 55:22",
          content:
            "Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved",
        },
        {
          versePath: "Proverbs 12:25",
          content:
            "Anxiety in a man's heart weighs him down, but a good word makes him glad.",
        },
        {
          versePath: "Hebrews 4:15",
          content:
            "For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin",
        },
        {
          versePath: "Proverbs 14:13-14",
          content:
            "Even in laughter the heart may ache, and the end of joy may be grief. The backslider in heart will be filled with the fruit of his ways, and a good man will be filled with the fruit of his ways",
        },
      ],
      apathetic: [
        {
          versePath: "Romans 12:11",
          content:
            "Do not be slothful in zeal, be fervent in spirit, serve the Lord",
        },
        {
          versePath: "Revelation 3:16",
          content:
            "So, because you are lukewarm, and neither hot nor cold, I will spit you out of my mouth.",
        },
        {
          versePath: "Zephaniah 1:12-13",
          content:
            "At that time I will search Jerusalem with lamps, and I will punish the men who are complacent, those who say in their hearts, ‘The Lord will not do good, nor will he do ill.’ Their goods shall be plundered, and their houses laid waste. Though they build houses, they shall not inhabit them; though they plant vineyards, they shall not drink wine from them.”",
        },
        {
          versePath: "Romans 12:9-13",
          content:
            "Let love be genuine. Abhor what is evil; hold fast to what is good. Love one another with brotherly affection. Outdo one another in showing honor. Do not be slothful in zeal, be fervent in spirit, serve the Lord. Rejoice in hope, be patient in tribulation, be constant in prayer. Contribute to the needs of the saints and seek to show hospitality",
        },
        {
          versePath: "John 5:39-40",
          content:
            "You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me, yet you refuse to come to me that you may have life.",
        },
        {
          versePath: "Hebrews 5:11-12",
          content:
            "About this we have much to say, and it is hard to explain, since you have become dull of hearing. For though by this time you ought to be teachers, you need someone to teach you again the basic principles of the oracles of God. You need milk, not solid food",
        },
      ],
      joyful: [
        {
          versePath: "Romans 12:12",
          content:
            "Rejoice in hope, be patient in tribulation, be constant in prayer.",
        },
        {
          versePath: "Psalm 28:7",
          content:
            "The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him",
        },
        {
          versePath: "Nehemiah 8:10",
          content:
            "Then he said to them, “Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the Lord is your strength.”",
        },
        {
          versePath: "Isaiah 61:10",
          content:
            "I will greatly rejoice in the Lord; my soul shall exult in my God, for he has clothed me with the garments of salvation; he has covered me with the robe of righteousness, as a bridegroom decks himself like a priest with a beautiful headdress, and as a bride adorns herself with her jewels",
        },
        {
          versePath: "Ephesians 5:19",
          content:
            "Addressing one another in psalms and hymns and spiritual songs, singing and making melody to the Lord with your heart",
        },
        {
          versePath: "1 Peter 1:8-9",
          content:
            "Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory, obtaining the outcome of your faith, the salvation of your souls",
        },
      ],
      annoyed: [
        {
          versePath: "Proverbs 29:11",
          content:
            "A fool gives full vent to his spirit, but a wise man quietly holds it back.",
        },
        {
          versePath: "Proverbs 12:16",
          content:
            "The vexation of a fool is known at once, but the prudent ignores an insult.",
        },
        {
          versePath: "Proverbs 27:3",
          content:
            "A stone is heavy, and sand is weighty, but a fool's provocation is heavier than both",
        },
        {
          versePath: "Revelation 3:10-11",
          content:
            "Because you have kept my word about patient endurance, I will keep you from the hour of trial that is coming on the whole world, to try those who dwell on the earth. I am coming soon. Hold fast what you have, so that no one may seize your crown",
        },
        {
          versePath: "Proverbs 25:17",
          content:
            "Let your foot be seldom in your neighbor's house, lest he have his fill of you and hate you",
        },
        {
          versePath: "Proverbs 27:15",
          content:
            "A continual dripping on a rainy day and a quarrelsome wife are alike",
        },
      ],
      confused: [
        {
          versePath: "2 Timothy 2:7",
          content:
            "Think over what I say, for the Lord will give you understanding in everything.",
        },
        {
          versePath: "1 John 4:1",
          content:
            "Beloved, do not believe every spirit, but test the spirits to see whether they are from God, for many false prophets have gone out into the world",
        },
        {
          versePath: "Matthew 7:7",
          content:
            "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you",
        },
        {
          versePath: "John 16:13",
          content:
            "When the Spirit of truth comes, he will guide you into all the truth, for he will not speak on his own authority, but whatever he hears he will speak, and he will declare to you the things that are to come",
        },
        {
          versePath: "Proverbs 3:5-6",
          content:
            "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
        },
        {
          versePath: "Jeremiah 17:9",
          content:
            "The heart is deceitful above all things, and desperately sick; who can understand it?",
        },
      ],
      uncomfortable: [
        {
          versePath: "Psalm 23:4",
          content:
            "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
        },
        {
          versePath: "Matthew 11:28-30",
          content:
            "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light",
        },
        {
          versePath: "Psalm 23:6",
          content:
            "Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.",
        },
        {
          versePath: "James 3:1",
          content:
            "Not many of you should become teachers, my brothers, for you know that we who teach will be judged with greater strictness.",
        },
        {
          versePath: "2 Timothy 3:16-17",
          content:
            "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be competent, equipped for every good work.",
        },
        {
          versePath: "Colossians 3:5",
          content:
            "Put to death therefore what is earthly in you: sexual immorality, impurity, passion, evil desire, and covetousness, which is idolatry",
        },
      ],
    },
  ];
  await Verses.insertMany(verses);
  console.log("Created some verses, yay!");
};

const run = async () => {
  await main();
  db.close();
};

run();
