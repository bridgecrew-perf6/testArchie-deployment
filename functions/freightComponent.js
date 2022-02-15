const IMAGEURL = ["https://cdn.pacificgroup.net/res/6e4ad500-1b00-11eb-a920-8125b1a2392f-smgi-ship-clr-1200px.png",
                  "https://cdn.pacificgroup.net/res/cc1c6c10-8681-11eb-9191-65630f880ca6-gmail-flying-p-white-bg.jpg",
                  "https://cdn9.pacificgroup.net/i/stk/USA-flag-cupcake-150.jpg",
                  "https://cdn9.pacificgroup.net/i/stk/canada-container-150.png",
                  "https://cdn.pacificgroup.net/res/95260e70-7242-11ec-bcdf-3f57d19e6568-pcb-archie-profile-pic-360x360.png",
                  "https://cdn.pacificgroup.net/res/ed984b30-e599-11eb-86ca-0164c3ba3da2-pfm-new-400x124.png",
                  ]
const EMOJIS = ["🤔"];

exports = function (arg){
  
  const [user, freightData] = arg;
  
  console.log('user: ', JSON.stringify(user))
  
  console.log("Freight Status: ", JSON.stringify(freightData));
  
  const component = {}
  const cards = [];
  const firstName = user.name.split(' ')[0];

  if (freightData.length === 0) {
    component.text= "Oh, hm...";
    
    cards.push({
        "header": {
        "title": "Archie",
        "subtitle": "Freight Status",
        "imageUrl": `${IMAGEURL[1]}`,
        "imageStyle": "IMAGE"
      },
        "sections": [
          {
            "widgets": [
              {
                "textParagraph": {
                    "text": `<font> Couldn't find anything for "${user.userTyped}", ${firstName}  ${EMOJIS[0]} </font>`
                }
              }
            ]
          }
        ]
         });
    component.cards = cards;
   }  
  
    
  if (freightData.length >= 1) {
    component.text =  `${context.functions.execute("getTextMessage", {type:"freightSearch", userFirstName: firstName})}`;
    const data = freightData[0];
  
    cards.push({
      "header": {
        "title": "Archie",
        "subtitle": "Freight Status",
        "imageUrl": IMAGEURL[1],
        "imageStyle": "IMAGE"
      },
  
      "sections": [
        {
          "widgets": [
            {
            "textParagraph": {
                "text": `<b>Searched for: </b>  <b><font color=\"#42AD46\">${user.userTyped}</font></b>`
              }
            },
              {
            "textParagraph": {
                "text": `<b>Tracking #: </b>  <b><font color=\"#42AD46\">${data.entityKey} </font></b>`
              }
            },
            {
            "textParagraph": {
                "text": `<b>Updated Date & Time: </b>  <font color=\"#A6192E\">${new Date(data.releaseData).toString()} </font>`
              }
            },
            {
              "textParagraph": {
                "text": `<b>Client: </b>  <font color=\"#A6192E\">${data.custQuickName} </font>`
              }
            },
            {
              "textParagraph": {
                "text": `<b>Cosnignees: </b>  <font color=\"#A6192E\">${data.consignees} </font>`
              }
            },
            {
            "textParagraph": {
                "text": `<b>Mode of Transportation: </b>  <font color=\"#A6192E\" size=\"20px\">${data.modeoftrans} </font>`
              }
            },
            {
            "textParagraph": {
                "text": `<b>Port of Entry: </b>  <font color=\"#A6192E\" size=\"20px\">${data.portEntry} </font>`
              }
            },
              {
            "textParagraph": {
                "text": `<b>Bill of Landing #: </b>  <font color=\"#A6192E\" size=\"20px\">${data.billOfLanding} </font>`
              }
            },
            {
            "textParagraph": {
                "text": `<b>Status: </b>  <b><font color=\"#42AD46\">${data.returnInfo} </font></b>`
              }
            },
            {
            "textParagraph": {
                "text": `<b>Status Detail: </b>  <font color=\"#A6192E\">${data.returnStatus} </font>`
              }
            },
            
            {
                  "buttons": [{
                      "textButton": {
                        "text": "Track Checker",
                        "onClick": {
                            "openLink": {
                                  "url": `https://www.pcbfreight.com/tools/release-status?q=${data.entityKey}`
                              }
                          }
                        }
                  }
                ]
              }
          // },
          ]
        }
      ],
    })
   
   component.cards = cards;
  }
  
    
    console.log('cards: ', JSON.stringify(cards))
    
    return component;
};
