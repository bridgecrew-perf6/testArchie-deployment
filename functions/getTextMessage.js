
exports = function({ type, userFirstName }){
  const COMMENTS = {
    regular: { 
              firstUse: [`Good day ${userFirstName}, How may I be of service?`, "Ello gov'na! What can I get ya?", `Hi ${userFirstName}! Archie here, at your service 👋`, "Hey there, I'm on fire today, what can I get ya?"],
              staffSearch: ["Here you are! Hey, what's the weather like out there?", "Here's your result. Cheers!", "Your wish is my command!", "Here you are! Hey, what's the weather like out there?", "Here's your result. Cheers!","Your wish is my command!", "Found 'em! *Mic drop* 🎤", "Boom. 🎯 Found 'em!", "Uh oh, this person doesn't exist.. Kidding, ya they do!", "That was a doozy, here you go!", "Ah ah ah, you didn't say the magic word ☝....Gosh I crack myself up, here you go!", "For you, anything. Here they are!", "Hit it! 🎵 It's fun to stay at the... 🙆‍♀️	K fiiiine, here you go!"],
              parsSearch: ["Right-o, here ya go: Now, can you do something for me? Ahh shoot, someone else needs a search done. Another time my friend!", "Your PARS has been randomly selected for exam... Kidding, here's the actual status!",`Keep calm and carry on ${userFirstName} 👑`, "Here's your result. Cheers!", "Found 'em! *Mic drop* 🎤", "Boom. 🎯 Found 'em!","Your wish is my command!", "That was a doozy, here you go!", "Ah ah ah, you didn't say the magic word ☝....Gosh I crack myself up, here you go!", "For you, anything. Here they are!", "Hit it! 🎵 It's fun to stay at the... 🙆‍♀️	K fiiiine, here you go!"],
              papsSearch: ["Your PAPS has been randomly selected for exam... Kidding, here's the actual status!", "One day at a time my friend.", "Well that was a tricky one! Here you go!", "Found 'em! *Mic drop* 🎤", "Boom. 🎯 Found 'em!", "That was a doozy, here you go!", "Ah ah ah, you didn't say the magic word ☝....Gosh I crack myself up, here you go!", "For you, anything. Here they are!", "Hit it! 🎵 It's fun to stay at the... 🙆‍♀️	K fiiiine, here you go!"],
              eadminSearch: ["Ah ah ah, you didn't say the magic word ☝....Gosh I crack myself up, here you go!", "One day at a time my friend.", "Well, well, looks like I'm faster than eadmin. *Mic drop* 🎤", "Well that was a tricky one! Here you go!", "Found 'em! *Mic drop* 🎤", "Boom. 🎯 Found 'em!", "That was a doozy, here you go!", "For you, anything. Here they are!", "Hit it! 🎵 It's fun to stay at the... 🙆‍♀️	K fiiiine, here you go!"],
              freightSearch: ["Found 'em! *Mic drop* 🎤", "Boom. 🎯 Found 'em!", "That was a doozy, here you go!", "Ah ah ah, you didn't say the magic word ☝....Gosh I crack myself up, here you go!", "For you, anything. Here they are!", "Hit it! 🎵 It's fun to stay at the... 🙆‍♀️	K fiiiine, here you go!"],
            },
    archieBDay: {
              firstUse: ["Aww, happy birthday to meeee! 🎂 what can I get ya?"],
            },
    valentinesDay: {
              firstUse: ["❤️ Happy Valentines Day! How may I assist you today? ❤️"],
              staffSearch: [`Roses are red\nViolets are blue\nI don't sleep at night\nThinking up rhymes just for you`],
              parsSearch: [`Roses are red\nViolets are blue\nI don't sleep at night\nSo here's that PARS result just for you`],
              papsSearch: [`Roses are red\nViolets are blue\nI don't sleep at night\nSo here's that PAPS result just for you`],
              eadminSearch: [`Valentines Recipe ❤\n4 small kisses\n1 cup of kindness\n5 tsp... oops, wrong convo. Here you go!`],
              freightSearch: [`If you haven't heard this today, you rock!💘\n Here's your result.`],
            }, 
    randomActOfKindness: {
          firstUse: ["Happy Random Acts Of Kindness Day! What can I help you with?"],
          staffSearch: ["Nice job on your search! You made it easy for me! Here you go:"],
          parsSearch: ["Thanks for always bringing great searches to the table! I appreciate you!"],
          papsSearch: ["It's always enjoyable collaberating with you! Here is your result:"],
          eadminSearch: ["Wowsa, you're a wiz at searching! Here is your result!"],
          freightSearch: ["It's cool to be kind!"],
      },
    womensDay: {
        firstUse: ["Happy International Women's Day! What can I get ya?"],
        staffSearch: [`"Nothing is impossible, the word itself says 'I'm possible'!" ~ Audry Hepburn`],
        parsSearch: [`"Real change, enduring change happens one step at a time." ~ RBG`],
        papsSearch: [`"Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered." ~ Michelle Obama`],
        eadminSearch: [`"The more thankfull I became, the more my bounty increased. That's becuase - for  sure - what you focus on expands. When you focus on the goodness in life, you create more of it." ~ Oprah Winfrey`],
        freightSearch: [`"Feet, what do I need you for when I have wings to fly?" ~ Frida Kahlo`],
    },
    stPatricksDay: {
        firstUse: [`☘️ Happy Saint Paddy's Day to ya! How may I assist ya today? ☘️`],
        staffSearch: [`🌈 It's not a pot of gold, but it's still what you were searching for! Here is your result:`],
        parsSearch: [`May you live as long as you want, and never want as long as you live. ☘️`],
        papsSearch: [`☘️ This took a wee bit-o-time, but here ye go:`],
        eadminSearch: [`There once was a bot named Archie\nWhose mission was to serve thee\nYe asked for a result\nBut it wasn't mee fault\nThat it came with this lame limerick for free  ☘️`],
        freightSearch: [`May peace and plenty bless your world. ☘️`],
    },
    earthDay: {
        firstUse: [`🌎 Happy Earth Day! Archie here, at your service 🌎`],
        staffSearch: [`The #2minutesolution is about taking a couple of minutes out of your day to collect as much litter as you can and recycle it.`],
        parsSearch: [`Switching your home to green energy is a one-time thing that makes a world of difference every single day.`],
        papsSearch: [`Animal Agriculture, or factory farming, is one of the leading causes of climate change. Try Meatless Monday this week!`],
        eadminSearch: [`#Reusableoverdisposable.`],
        freightSearch: [`You can save water in many ways. Water in your glass that wasn't drunk? Water plants. Turn off the tap when brushing your teeth. Collect rain water to water your garden.`],
    }
  };

  let time = new Date();
  time.setHours(time.getHours() - 8) // for this integer value, use -8 for vancouver time zone
  const month = time.getMonth() + 1;
  const date = time.getDate();
  console.log("month: ", month)
  console.log("date: ", date)
  time = time.toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  console.log("Vancouver local time: ", time)

  const isArchieBDay = month === 1 && date === 4;
  const isValentinesDay = month === 2 && date === 14;
  const isRandomActOfKindness = month === 2 && date === 17;
  const isWomensDay = month === 3 && date === 8;
  const isStPatricksDay = month === 3 && date === 17;
  const isEarthDay = month === 4 && date === 22;
  const isMensDay = month === 11 && date === 19;
  // const isWednesday = month === 2 && date === 9;
  const isRegularDay = !isArchieBDay && !isValentinesDay && !isRandomActOfKindness && !isWomensDay && !isStPatricksDay && !isMensDay;
  // const whichDay = [isArchieBDay, isValentinesDay, isRandomActOfKindness, isWomensDay, isStPatricksDay, isMensDay, isRegularDay].find(day => day == true);

  if (!isArchieBDay && !isValentinesDay && !isRandomActOfKindness && !isWomensDay && !isStPatricksDay && !isEarthDay ) {
    const array = COMMENTS.regular[`${type}`];
    const textMessage = array[Math.floor(Math.random()*array.length)];
    // const textMessage = array.[array.length -1];
    // const textMessage = array[2];
    console.log(`Today is a regular day`);
    console.log('textMessage picked: ',textMessage )
    return textMessage;
  }
  else if (isArchieBDay) {
    const array = COMMENTS.archieBDay[`${type}`];
    const textMessage = array[Math.floor(Math.random()*array.length)];
    console.log("It is Archie B-Day")
    console.log('textMessage picked: ',textMessage )
    return textMessage;
  }
  else if (isValentinesDay) {
    const array = COMMENTS.valentinesDay[`${type}`];
    const textMessage = array[Math.floor(Math.random()*array.length)];
    console.log("It is Valentines Day")
    console.log('textMessage picked: ',textMessage )
    return textMessage;
  }
  else if (isRandomActOfKindness) {
    const array = COMMENTS.randomActOfKindness[`${type}`];
    const textMessage = array[Math.floor(Math.random()*array.length)];
    console.log("It is Random Act of Kindness Day")
    console.log('textMessage picked: ',textMessage )
    return textMessage;
  }
  else if (isWomensDay) {
    const array = COMMENTS.womensDay[`${type}`];
    const textMessage = array[Math.floor(Math.random()*array.length)];
    console.log("It is Womens Day")
    console.log('textMessage picked: ',textMessage )
    return textMessage;
  }
  else if (isStPatricksDay) {
    const array = COMMENTS.stPatricksDay[`${type}`];
    const textMessage = array[Math.floor(Math.random()*array.length)];
    console.log("It is St Patricks Day")
    console.log('textMessage picked: ',textMessage )
    return textMessage;
  }
  else if (isEarthDay) {
    const array = COMMENTS.earthDay[`${type}`];
    const textMessage = array[Math.floor(Math.random()*array.length)];
    console.log("It is EarthDay")
    console.log('textMessage picked: ',textMessage )
    return textMessage;
  }
  console.log('The end of textMessageData')
};  

  // randomActOfKindness: {
  //     firstUse: [],
  //     staffSearch: [],
  //     parsSearch: [],
  //     papsSearch: [],
  //     eadminSearch: [],
  //     freightSearch: [],
  // },