import koaRouter from 'koa-router'
const router = koaRouter()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/test', async (ctx, next) => {
  ctx.body = JSON.stringify({
    "qfishing": {
      "type": "fishing",
      "fishhook": "img/quiz/fishing/fishhook.png",
      "background": "img/quiz/fishing/background.jpg",
      "sea": "sea",
      "boat": "boat",
      "count": [
        {
          "countSrc": "img/quiz/number/2.png",
          "label": 2
        },
        {
          "countSrc": "img/quiz/number/4.png",
          "label": 4
        },
        {
          "countSrc": "img/quiz/number/6.png",
          "laber": 4
        }
      ],
      "episodes": [
        {
          "sound": "qfishing",
          "targets": [
            {
              "children": [
                {
                  "type": "number",
                  "src": "img/quiz/number/2.png"
                }
              ],
              "x": 800,
              "y": 350,
              "id": "fishing-4",
              "label": 2,
              "choice": "中"
            }
          ]
        },
        {
          "sound": "qfishing",
          "targets": [
            {
              "children": [
                {
                  "type": "number",
                  "src": "img/quiz/number/6.png"
                }
              ],
              "x": 800,
              "y": 450,
              "id": "fishing-8",
              "label": 6,
              "choice": "中"
            }
          ]
        },
        {
          "sound": "qfishing",
          "targets": [
            {
              "children": [
                {
                  "type": "number",
                  "src": "img/quiz/number/4.png"
                }
              ],
              "x": 800,
              "y": 550,
              "id": "fishing-6",
              "label": 4,
              "choice": "中"
            }
          ]
        }
      ],
      "level": "easy"
    },
    "q0": {
      "type": "fill",
      "question": "Two pigs plus three sheeps, there are totally ? animals here",
      "quizAnswer": 5,
      "level": "easy"
    },
    "qbowling": {
      "type": "bowling",
      "background": "img/mathquiz/train/background.jpg",
      "episodes": [
        {
          "sound": "qbowling1",
          "targets": [
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "bowling-bottle",
                  "x": 0,
                  "y": 100,
                  "physics": true
                }
              ],
              "x": 100,
              "y": 180,
              "label": -1
            },
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "bowling-bottle",
                  "x": 0,
                  "y": 100,
                  "physics": true
                }
              ],
              "x": 300,
              "y": 180,
              "label": 1
            }
          ]
        },
        {
          "sound": "qbowling2",
          "targets": [
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "bowling-bottle",
                  "x": 0,
                  "y": 100,
                  "physics": true
                }
              ],
              "x": 100,
              "y": 180,
              "label": -1
            },
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "bowling-bottle",
                  "x": 0,
                  "y": 100,
                  "physics": true
                }
              ],
              "x": 300,
              "y": 180,
              "label": 1
            }
          ]
        }
      ]
    },
    "qdomino": {
      "type": "domino",
      "background": "img/mathquiz/train/background.jpg",
      "episodes": [
        {
          "sound": "qdomino1",
          "targets": [
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "domino-card",
                  "x": 130,
                  "y": 160,
                  "physics": true
                }
              ],
              "x": 100,
              "y": 80,
              "label": 1
            },
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "domino-card",
                  "x": 130,
                  "y": 160,
                  "physics": true
                }
              ],
              "x": 200,
              "y": 80,
              "label": 2
            },
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "domino-dashed-box"
                }
              ],
              "x": 130,
              "y": 80,
              "drop": true,
              "label": 2
            }
          ],
          "selections": [
            {
              "children": [
                {
                  "type": "bitmap",
                  "id": "domino-selection",
                  "x": 130,
                  "y": 160
                }
              ],
              "label": 2
            }
          ]
        }
      ]
    },
    "qscale": {
      "type": "scale",
      "mushroom": [
        {
          "img": "img/mathquiz/scale/mushroom1.png",
          "weight": 2,
          "x": 100,
          "y": 100
        },
        {
          "img": "img/mathquiz/scale/mushroom2.png",
          "weight": 5,
          "x": 100,
          "y": 200
        },
        {
          "img": "img/mathquiz/scale/mushroom3.png",
          "weight": 5,
          "x": 100,
          "y": 200,
          "level": "medium"
        }
      ]
    },
    "qscene": {
      "type": "scene",
      "png": "img/quiz/q5/spritesheet.png",
      "json": "img/quiz/q5/spritesheet.json",
      "img": [
        [
          [
            "img/quiz/q5/background.png"
          ],
          [
            "img/quiz/q5/ground.png"
          ],
          [
            "img/quiz/q5/midground.png"
          ],
          [
            "img/quiz/q5/foreground.png"
          ]
        ],
        [
          [
            "img/quiz/q5/monalisa.jpg",
            10,
            10,
            "right"
          ],
          [
            "img/quiz/q5/mouse.png",
            400,
            10,
            "wrong"
          ]
        ]
      ],
      "level": "medium"
    },
    "qskywheel": {
      "type": "skywheel",
      "background": "img/mathquiz/skywheel/background.jpg",
      "choice-img": [
        {
          "src": "img/mathquiz/skywheel/choice2.png",
          "xOffset": 170,
          "yOffset": 210,
          "label": 2,
          "scale": 0.5
        },
        {
          "src": "img/mathquiz/skywheel/choice4.png",
          "xOffset": 250,
          "yOffset": 210,
          "label": 4,
          "scale": 0.5
        },
        {
          "src": "img/mathquiz/skywheel/choice7.png",
          "xOffset": 170,
          "yOffset": 290,
          "label": 7,
          "scale": 0.5
        },
        {
          "src": "img/mathquiz/skywheel/choice9.png",
          "xOffset": 250,
          "yOffset": 290,
          "label": 9,
          "scale": 0.5
        }
      ],
      "wheel-number": [
        {
          "id": "wheel-one",
          "label": 1,
          "scale": 0.5
        },
        {
          "id": "wheel-two",
          "label": 2,
          "scale": 0.5
        },
        {
          "id": "wheel-three",
          "label": 3,
          "scale": 0.5
        },
        {
          "id": "wheel-four",
          "label": 4,
          "scale": 0.5
        },
        {
          "id": "wheel-five",
          "label": 5,
          "scale": 0.5
        },
        {
          "id": "wheel-six",
          "label": 6,
          "scale": 0.5
        },
        {
          "id": "wheel-seven",
          "label": 7,
          "scale": 0.5
        },
        {
          "id": "wheel-eight",
          "label": 8,
          "scale": 0.5
        },
        {
          "id": "wheel-nine",
          "label": 9,
          "scale": 0.5
        },
        {
          "id": "wheel-ten",
          "label": 10,
          "scale": 0.5
        }
      ],
      "level": "medium"
    },
    "qconveyer": {
      "type": "conveyer",
      "conveyerImg": [
        [
          {
            "src": "img/rtlstorybook/loader_bone.png",
            "xOffset": 100,
            "yOffset": 500
          },
          {
            "src": "img/rtlstorybook/start_btn.png",
            "xOffset": 300,
            "yOffset": 500
          }
        ],
        [
          {
            "src": "img/rtlstorybook/process_star.png",
            "xOffset": 100,
            "yOffset": 100,
            "label": 1
          },
          {
            "src": "img/rtlstorybook/process_star.png",
            "xOffset": 300,
            "yOffset": 100,
            "label": 0
          }
        ]
      ],
      "level": "medium"
    },
    "qfootball": {
      "type": "rope",
      "background": "img/mathquiz/football/background.jpg",
      "bgSmall": [],
      "ropeImg": [
        [
          {
            "type": "qfootball"
          },
          [
            [
              {
                "src": "img/mathquiz/football/shirt_hanger1.png"
              },
              100,
              100,
              -1
            ],
            [
              {
                "src": "img/mathquiz/football/hanger.png"
              },
              300,
              100,
              2
            ],
            [
              {
                "src": "img/mathquiz/football/shirt_hanger3.png"
              },
              500,
              100,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/football/shirt.png",
                "x": 100,
                "y": 500,
                "label": 1
              },
              {
                "src": "img/mathquiz/football/shirt.png",
                "x": 300,
                "y": 500,
                "label": 0
              },
              {
                "src": "img/mathquiz/football/shirt.png",
                "x": 500,
                "y": 500,
                "label": 2
              }
            ]
          ]
        ]
      ],
      "level": "easy"
    },
    "qtrain": {
      "type": "rope",
      "background": "img/mathquiz/train/background.jpg",
      "bgSmall": [],
      "ropeImg": [
        [
          {
            "type": "train1"
          },
          [
            [
              {
                "id": "red-train",
                "src": "img/mathquiz/train/3.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              100,
              80,
              -1
            ],
            [
              {
                "id": "blue-train",
                "src": "img/mathquiz/train/4.png",
                "x": 130,
                "y": 160,
                "scale": 0.5,
                "targetX": 350,
                "targetY": 80
              },
              100,
              -300,
              4
            ],
            [
              {
                "id": "yellow-train",
                "src": "img/mathquiz/train/5.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              600,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/train/2.png",
                "x": 100,
                "y": 500,
                "label": 2,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/4.png",
                "x": 350,
                "y": 500,
                "label": 4,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/6.png",
                "x": 600,
                "y": 500,
                "label": 6,
                "type": "click"
              }
            ]
          ]
        ],
        [
          {
            "type": "train2"
          },
          [
            [
              {
                "id": "red-train",
                "src": "img/mathquiz/train/7.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              100,
              80,
              -1
            ],
            [
              {
                "id": "blue-train",
                "src": "img/mathquiz/train/8.png",
                "x": 130,
                "y": 160,
                "scale": 0.5,
                "targetX": 350,
                "targetY": 80
              },
              100,
              -300,
              8
            ],
            [
              {
                "id": "yellow-train",
                "src": "img/mathquiz/train/9.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              600,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/train/5.png",
                "x": 100,
                "y": 500,
                "label": 6,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/8.png",
                "x": 350,
                "y": 500,
                "label": 8,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/6.png",
                "x": 600,
                "y": 500,
                "label": 6,
                "type": "click"
              }
            ]
          ]
        ],
        [
          {
            "type": "train3"
          },
          [
            [
              {
                "id": "red-train",
                "src": "img/mathquiz/train/6.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              100,
              80,
              -1
            ],
            [
              {
                "id": "blue-train",
                "src": "img/mathquiz/train/7.png",
                "x": 130,
                "y": 160,
                "scale": 0.5,
                "targetX": 350,
                "targetY": 80
              },
              100,
              -300,
              7
            ],
            [
              {
                "id": "yellow-train",
                "src": "img/mathquiz/train/8.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              600,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/train/7.png",
                "x": 100,
                "y": 500,
                "label": 7,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/8.png",
                "x": 350,
                "y": 500,
                "label": 8,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/5.png",
                "x": 600,
                "y": 500,
                "label": 5,
                "type": "click"
              }
            ]
          ]
        ],
        [
          {
            "type": "train4"
          },
          [
            [
              {
                "id": "red-train",
                "src": "img/mathquiz/train/4.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              100,
              80,
              -1
            ],
            [
              {
                "id": "blue-train",
                "src": "img/mathquiz/train/5.png",
                "x": 130,
                "y": 160,
                "scale": 0.5,
                "targetX": 350,
                "targetY": 80
              },
              100,
              -300,
              5
            ],
            [
              {
                "id": "yellow-train",
                "src": "img/mathquiz/train/6.png",
                "x": 130,
                "y": 160,
                "scale": 0.5
              },
              600,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/train/7.png",
                "x": 100,
                "y": 500,
                "label": 7,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/4.png",
                "x": 350,
                "y": 500,
                "label": 4,
                "type": "click"
              },
              {
                "src": "img/mathquiz/train/5.png",
                "x": 600,
                "y": 500,
                "label": 5,
                "type": "click"
              }
            ]
          ]
        ]
      ],
      "level": "medium"
    },
    "qblock": {
      "type": "rope",
      "background": "img/mathquiz/block/background.jpg",
      "bgSmall": [
        {
          "id": "block-holdhands",
          "y": 50,
          "targetX": 100,
          "targetY": 100
        }
      ],
      "ropeImg": [
        [
          {
            "type": "qblock1"
          },
          [
            [
              {
                "id": "block-3"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/block/blank.png"
              },
              430,
              180,
              4
            ],
            [
              {
                "id": "block-5"
              },
              800,
              80,
              -1
            ]
          ],
          [
            [
              {
                "id": "block-2",
                "x": 100,
                "y": 400,
                "label": 2
              },
              {
                "id": "block-4-middle",
                "x": 350,
                "y": 400,
                "label": 4
              },
              {
                "id": "block-6",
                "x": 600,
                "y": 400,
                "label": 6
              }
            ]
          ]
        ],
        [
          {
            "type": "qblock2"
          },
          [
            [
              {
                "id": "block-6"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/block/blank.png"
              },
              430,
              180,
              7
            ],
            [
              {
                "id": "block-8"
              },
              800,
              80,
              -1
            ]
          ],
          [
            [
              {
                "id": "block-5",
                "x": 100,
                "y": 400,
                "label": 5
              },
              {
                "id": "block-4",
                "x": 350,
                "y": 400,
                "label": 4
              },
              {
                "id": "block-7-middle",
                "x": 600,
                "y": 400,
                "label": 7
              }
            ]
          ]
        ],
        [
          {
            "type": "qblock3"
          },
          [
            [
              {
                "id": "block-7"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/block/blank.png"
              },
              430,
              180,
              8
            ],
            [
              {
                "id": "block-9"
              },
              800,
              80,
              -1
            ]
          ],
          [
            [
              {
                "id": "block-8-middle",
                "x": 100,
                "y": 400,
                "label": 8
              },
              {
                "id": "block-9",
                "x": 350,
                "y": 400,
                "label": 9
              },
              {
                "id": "block-7",
                "x": 600,
                "y": 400,
                "label": 7
              }
            ]
          ]
        ],
        [
          {
            "type": "qblock4"
          },
          [
            [
              {
                "id": "block-2"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/block/blank.png"
              },
              430,
              180,
              3
            ],
            [
              {
                "id": "block-4"
              },
              800,
              80,
              -1
            ]
          ],
          [
            [
              {
                "id": "block-5",
                "x": 100,
                "y": 400,
                "label": 5
              },
              {
                "id": "block-3-middle",
                "x": 350,
                "y": 400,
                "label": 3
              },
              {
                "id": "block-4",
                "x": 600,
                "y": 400,
                "label": 4
              }
            ]
          ]
        ]
      ],
      "level": "medium"
    },
    "qfruit": {
      "type": "rope",
      "background": "img/mathquiz/fruit/background.jpg",
      "bgSmall": [],
      "ropeImg": [
        [
          {
            "type": "qfruit1"
          },
          [
            [
              {
                "src": "img/mathquiz/fruit/3-apple.png"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/fruit/blank.png"
              },
              350,
              80,
              4
            ],
            [
              {
                "src": "img/mathquiz/fruit/5-orange.png"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/fruit/4-banana.png",
                "x": 100,
                "y": 400,
                "label": 4
              },
              {
                "src": "img/mathquiz/fruit/5-strawberry.png",
                "x": 350,
                "y": 400,
                "label": 5
              },
              {
                "src": "img/mathquiz/fruit/3-pear.png",
                "x": 600,
                "y": 400,
                "label": 6
              }
            ]
          ]
        ],
        [
          {
            "type": "qfruit2"
          },
          [
            [
              {
                "src": "img/mathquiz/fruit/2-banana.png"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/fruit/blank.png"
              },
              350,
              80,
              3
            ],
            [
              {
                "src": "img/mathquiz/fruit/4-strawberry.png"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/fruit/4-banana.png",
                "x": 100,
                "y": 400,
                "label": 4
              },
              {
                "src": "img/mathquiz/fruit/2-cherry.png",
                "x": 350,
                "y": 400,
                "label": 2
              },
              {
                "src": "img/mathquiz/fruit/3-kiwi.png",
                "x": 600,
                "y": 400,
                "label": 3
              }
            ]
          ]
        ],
        [
          {
            "type": "qfruit3"
          },
          [
            [
              {
                "src": "img/mathquiz/fruit/5-strawberry.png"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/fruit/blank.png"
              },
              350,
              80,
              6
            ],
            [
              {
                "src": "img/mathquiz/fruit/7-cherry.png"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/fruit/6-apple.png",
                "x": 100,
                "y": 400,
                "label": 6
              },
              {
                "src": "img/mathquiz/fruit/5-strawberry.png",
                "x": 350,
                "y": 400,
                "label": 5
              },
              {
                "src": "img/mathquiz/fruit/8-pear.png",
                "x": 600,
                "y": 400,
                "label": 8
              }
            ]
          ]
        ],
        [
          {
            "type": "qfruit4"
          },
          [
            [
              {
                "src": "img/mathquiz/fruit/8-pear.png"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/fruit/blank.png"
              },
              350,
              80,
              9
            ],
            [
              {
                "src": "img/mathquiz/fruit/10-banana.png"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/fruit/8-strawberry.png",
                "x": 100,
                "y": 400,
                "label": 8
              },
              {
                "src": "img/mathquiz/fruit/1-pear.png",
                "x": 350,
                "y": 400,
                "label": 1
              },
              {
                "src": "img/mathquiz/fruit/9-strawberry.png",
                "x": 600,
                "y": 400,
                "label": 9
              }
            ]
          ]
        ]
      ],
      "level": "medium"
    },
    "qcard": {
      "type": "rope",
      "background": "img/mathquiz/card/background.jpg",
      "bgSmall": [],
      "ropeImg": [
        [
          {
            "type": "qcard1"
          },
          [
            [
              {
                "id": "card-3"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/card/blank.png"
              },
              350,
              80,
              4
            ],
            [
              {
                "id": "card-5"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/card/2.png",
                "x": 100,
                "y": 400,
                "label": 2
              },
              {
                "src": "img/mathquiz/card/4.png",
                "x": 300,
                "y": 400,
                "label": 4
              },
              {
                "src": "img/mathquiz/card/6.png",
                "x": 500,
                "y": 400,
                "label": 6
              },
              {
                "src": "img/mathquiz/card/8.png",
                "x": 700,
                "y": 400,
                "label": 8
              }
            ]
          ]
        ],
        [
          {
            "type": "qcard2"
          },
          [
            [
              {
                "id": "card-5"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/card/blank.png"
              },
              350,
              80,
              6
            ],
            [
              {
                "id": "card-7"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/card/4.png",
                "x": 100,
                "y": 400,
                "label": 4
              },
              {
                "src": "img/mathquiz/card/6.png",
                "x": 300,
                "y": 400,
                "label": 6
              },
              {
                "src": "img/mathquiz/card/8.png",
                "x": 500,
                "y": 400,
                "label": 8
              },
              {
                "src": "img/mathquiz/card/10.png",
                "x": 700,
                "y": 400,
                "label": 10
              }
            ]
          ]
        ],
        [
          {
            "type": "qcard3"
          },
          [
            [
              {
                "id": "card-6"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/card/blank.png"
              },
              350,
              80,
              7
            ],
            [
              {
                "id": "card-8"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/card/7.png",
                "x": 100,
                "y": 400,
                "label": 7
              },
              {
                "src": "img/mathquiz/card/5.png",
                "x": 300,
                "y": 400,
                "label": 5
              },
              {
                "src": "img/mathquiz/card/9.png",
                "x": 500,
                "y": 400,
                "label": 9
              },
              {
                "src": "img/mathquiz/card/4.png",
                "x": 700,
                "y": 400,
                "label": 4
              }
            ]
          ]
        ],
        [
          {
            "type": "qcard4"
          },
          [
            [
              {
                "id": "card-8"
              },
              50,
              80,
              -1
            ],
            [
              {
                "src": "img/mathquiz/card/blank.png"
              },
              350,
              80,
              9
            ],
            [
              {
                "id": "card-10"
              },
              700,
              80,
              -1
            ]
          ],
          [
            [
              {
                "src": "img/mathquiz/card/7.png",
                "x": 100,
                "y": 400,
                "label": 7
              },
              {
                "src": "img/mathquiz/card/6.png",
                "x": 300,
                "y": 400,
                "label": 6
              },
              {
                "src": "img/mathquiz/card/5.png",
                "x": 500,
                "y": 400,
                "label": 5
              },
              {
                "src": "img/mathquiz/card/9.png",
                "x": 700,
                "y": 400,
                "label": 9
              }
            ]
          ]
        ]
      ],
      "level": "medium"
    },
    "qstadium": {
      "type": "dragdrop",
      "narrations": "qstadium1, qstadium2, qstadium3, qstadium4",
      "background": "img/mathquiz/stadium/background.jpg",
      "srcImgs": [
        {
          "id": "dodo-sit",
          "x": 100,
          "y": 350,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "scale": 0.4,
          "targetX": -30,
          "targetY": -30,
          "clone": true
        }
      ],
      "desImgs": [
        {
          "src": "img/mathquiz/stadium/4.png",
          "x": 80,
          "y": 115,
          "labels": [
            -1,
            -1,
            -1,
            -1
          ]
        },
        {
          "src": "img/mathquiz/stadium/5.png",
          "x": 230,
          "y": 115,
          "labels": [
            -1,
            -1,
            1,
            -1
          ]
        },
        {
          "src": "img/mathquiz/stadium/6.png",
          "x": 380,
          "y": 115,
          "labels": [
            -1,
            -1,
            -1,
            1
          ]
        },
        {
          "src": "img/mathquiz/stadium/7.png",
          "x": 530,
          "y": 115,
          "labels": [
            -1,
            1,
            -1,
            -1
          ]
        },
        {
          "src": "img/mathquiz/stadium/8.png",
          "x": 680,
          "y": 115,
          "labels": [
            1,
            -1,
            -1,
            -1
          ]
        },
        {
          "src": "img/mathquiz/stadium/9.png",
          "x": 830,
          "y": 115,
          "labels": [
            -1,
            -1,
            -1,
            -1
          ]
        }
      ],
      "level": "easy"
    },
    "qpresenta": {
      "type": "dragdrop",
      "narrations": "qpresent1, qpresent2, qpresent3, qpresent4",
      "background": "img/mathquiz/present/background2.png",
      "srcImgs": [
        {
          "src": "img/mathquiz/present/package1.png",
          "x": 100,
          "y": 530,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "tagetx": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package2.png",
          "x": 150,
          "y": 540,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "tagetx": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package3.png",
          "x": 120,
          "y": 550,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "tagetx": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package4.png",
          "x": 160,
          "y": 560,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "tagetx": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package5.png",
          "x": 80,
          "y": 520,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "tagetx": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package6.png",
          "x": 200,
          "y": 540,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "tagetx": 10,
          "targetY": -10,
          "animation": "disappear"
        }
      ],
      "desImgs": [
        {
          "src": "img/mathquiz/present/door.png",
          "x": 455,
          "y": 410,
          "tagetx": 130,
          "labels": [
            1,
            -1,
            -1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 790,
          "y": 410,
          "tagetx": 130,
          "labels": [
            -1,
            1,
            -1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 275,
          "y": 135,
          "tagetx": 130,
          "labels": [
            -1,
            -1,
            1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 620,
          "y": 135,
          "tagetx": 130,
          "labels": [
            -1,
            -1,
            -1,
            1
          ],
          "mask": true
        }
      ],
      "level": "easy"
    },
    "qpresentb": {
      "type": "dragdrop",
      "narrations": "qpresent1, qpresent2, qpresent3, qpresent4",
      "background": "img/mathquiz/present/background1.png",
      "srcImgs": [
        {
          "src": "img/mathquiz/present/package1.png",
          "x": 100,
          "y": 530,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "targetX": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package2.png",
          "x": 150,
          "y": 540,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "targetX": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package3.png",
          "x": 120,
          "y": 550,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "targetX": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package4.png",
          "x": 160,
          "y": 560,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "targetX": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package5.png",
          "x": 80,
          "y": 520,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "targetX": 10,
          "targetY": -10,
          "animation": "disappear"
        },
        {
          "src": "img/mathquiz/present/package6.png",
          "x": 200,
          "y": 540,
          "labels": [
            1,
            1,
            1,
            1
          ],
          "targetX": 10,
          "targetY": -10,
          "animation": "disappear"
        }
      ],
      "desImgs": [
        {
          "src": "img/mathquiz/present/door.png",
          "x": 275,
          "y": 410,
          "targetX": 130,
          "labels": [
            1,
            -1,
            -1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 450,
          "y": 410,
          "targetX": 130,
          "labels": [
            -1,
            1,
            -1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 105,
          "y": 135,
          "targetX": 130,
          "labels": [
            -1,
            -1,
            1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 780,
          "y": 135,
          "targetX": 130,
          "labels": [
            -1,
            -1,
            -1,
            1
          ],
          "mask": true
        }
      ],
      "level": "easy"
    },
    "qsupermarket": {
      "type": "dragdrop",
      "narrations": "qsupermarket1, qsupermarket2, qsupermarket3, qsupermarket4",
      "background": "img/mathquiz/supermarket/background.jpg",
      "srcImgs": [
        {
          "src": "img/mathquiz/supermarket/biscuit.png",
          "x": 100,
          "y": 530,
          "labels": [
            1,
            -2,
            -2,
            -2
          ],
          "targetX": 10,
          "targetY": -10
        },
        {
          "src": "img/mathquiz/supermarket/sugar.png",
          "x": 250,
          "y": 540,
          "labels": [
            -2,
            1,
            -2,
            -2
          ],
          "targetX": 10,
          "targetY": -10
        },
        {
          "src": "img/mathquiz/supermarket/coco.png",
          "x": 400,
          "y": 550,
          "labels": [
            -2,
            -2,
            -2,
            1
          ],
          "targetX": 10,
          "targetY": -10
        },
        {
          "src": "img/mathquiz/supermarket/popcorn.png",
          "x": 550,
          "y": 560,
          "labels": [
            -2,
            -2,
            1,
            -2
          ],
          "targetX": 10,
          "targetY": -10
        }
      ],
      "desImgs": [
        {
          "src": "img/mathquiz/supermarket/blank.png",
          "x": 40,
          "y": 270,
          "targetX": 130,
          "labels": [
            -1,
            -1,
            1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/supermarket/blank.png",
          "x": 255,
          "y": 270,
          "targetX": 130,
          "labels": [
            -1,
            -1,
            -1,
            1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/supermarket/blank.png",
          "x": 460,
          "y": 270,
          "targetX": 130,
          "labels": [
            -1,
            1,
            -1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/supermarket/blank.png",
          "x": 680,
          "y": 55,
          "targetX": 130,
          "labels": [
            1,
            -1,
            -1,
            -1
          ],
          "mask": true
        }
      ],
      "level": "easy"
    },
    "q13": {
      "type": "dragdrop2",
      "direction": "x",
      "srcImgs": [
        [
          {
            "src": "img/quiz/animal/pig.png",
            "numsrc": "img/quiz/number/7.png",
            "choice": "中",
            "xOffset": 100,
            "yOffset": 550,
            "rank": 4
          }
        ],
        [
          {
            "src": "img/quiz/animal/cow.png",
            "numsrc": "img/quiz/number/6.png",
            "choice": "中",
            "xOffset": 300,
            "yOffset": 550,
            "rank": 3
          }
        ],
        [
          {
            "src": "img/quiz/animal/cat.png",
            "numsrc": "img/quiz/number/3.png",
            "choice": "中",
            "xOffset": 550,
            "yOffset": 550,
            "rank": 0
          }
        ],
        [
          {
            "src": "img/quiz/animal/dog.png",
            "numsrc": "img/quiz/number/4.png",
            "choice": "中",
            "xOffset": 750,
            "yOffset": 550,
            "rank": 1
          }
        ],
        [
          {
            "src": "img/quiz/animal/sheep.png",
            "numsrc": "img/quiz/number/5.png",
            "choice": "中",
            "xOffset": 950,
            "yOffset": 550,
            "rank": 2
          }
        ]
      ],
      "background": "img/bg/background.jpg",
      "level": "easy"
    },
    "qanimal": {
      "type": "dragdrop",
      "narrations": "qanimal1, qanimal2, qanimal3, qanimal4",
      "background": "img/mathquiz/animal/background.jpg",
      "srcImgs": [
        {
          "id": "animal-cat",
          "x": 100,
          "y": 450,
          "labels": [
            -2,
            -2,
            -2,
            1
          ]
        },
        {
          "id": "animal-dog",
          "x": 300,
          "y": 450,
          "labels": [
            -2,
            -2,
            1,
            -2
          ]
        },
        {
          "id": "animal-monkey",
          "x": 100,
          "y": 450,
          "labels": [
            -2,
            1,
            -2,
            -2
          ]
        },
        {
          "id": "animal-rabbit",
          "x": 500,
          "y": 450,
          "labels": [
            1,
            -2,
            -2,
            -2
          ]
        }
      ],
      "desImgs": [
        {
          "src": "img/mathquiz/present/door.png",
          "x": 535,
          "y": 355,
          "targetX": 350,
          "labels": [
            1,
            -1,
            -1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 690,
          "y": 355,
          "targetX": 955,
          "labels": [
            -1,
            -1,
            1,
            -1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 220,
          "y": 110,
          "targetX": 455,
          "labels": [
            -1,
            -1,
            -1,
            1
          ],
          "mask": true
        },
        {
          "src": "img/mathquiz/present/door.png",
          "x": 380,
          "y": 110,
          "targetX": 915,
          "labels": [
            -1,
            1,
            -1,
            -1
          ],
          "mask": true
        }
      ],
      "level": "easy"
    },
    "q2": {
      "type": "link",
      "question": "When you want to find out how tall someone is, you measure their...",
      "srcImgs": [
        [
          "img/quiz/dragdrop_appendage/dogs.png",
          100,
          300,
          "1",
          "火星"
        ],
        [
          "img/quiz/dragdrop_appendage/dogs.png",
          600,
          300,
          "2",
          "火星"
        ]
      ],
      "desImgs": [
        [
          "img/quiz/dragdrop_appendage/plate.png",
          100,
          100,
          "1",
          "水星"
        ],
        [
          "img/quiz/dragdrop_appendage/plate.png",
          600,
          100,
          "2",
          "水星"
        ]
      ],
      "level": "medium"
    },
    "qblocklink": {
      "type": "link2",
      "background": "img/mathquiz/block_link/background.jpg",
      "srcImgs": {
        "points": "214,17,1;4,276,2;192,443,3;472,444,4;553,249,5;499,195,6;485,68,7;453,163,8;386,68,9;278,5,10",
        "src": "img/mathquiz/block_link/block.png",
        "foreground": "img/mathquiz/block_link/eyes.png",
        "x": 200,
        "y": 200
      },
      "level": "medium"
    },
    "qpiglink": {
      "type": "link2",
      "background": "img/mathquiz/pig_link/background.jpg",
      "srcImgs": {
        "points": "135,4,1;134,53,2;89,44,3;103,108,4;87,143,5;6,86,6;85,169,7;100,302,8;77,397,9;116,309,10;",
        "src": "img/mathquiz/pig_link/pig.png",
        "foreground": "img/mathquiz/pig_link/line.png",
        "x": 200,
        "y": 200
      },
      "level": "medium"
    },
    "q21": {
      "type": "memory",
      "srcImgs": [
        [
          "img/quiz/pickitems/monalisa.jpg",
          100,
          100
        ],
        [
          "img/quiz/pickitems/mouse.png",
          100,
          100
        ]
      ],
      "memoryAnswer": "wrong",
      "level": "medium"
    },
    "q22": {
      "type": "match",
      "srcImgs": [
        [
          "img/quiz/pickitems/monalisa.jpg",
          "img/quiz/match/back.jpg",
          2
        ],
        [
          "img/quiz/pickitems/mouse.png",
          "img/quiz/match/back.jpg",
          2
        ]
      ],
      "table": {
        "row": 1,
        "column": 2
      },
      "level": "medium"
    },
    "q3": {
      "type": "select",
      "question": "离地球最近的行星?",
      "srcImgs": [
        {
          "word": "金星",
          "image": "img/quiz/q3/jinxing.png"
        },
        {
          "word": "火星",
          "image": "img/quiz/q3/huoxing.png"
        },
        {
          "word": "水星",
          "image": "img/quiz/q3/shuixing.png"
        }
      ],
      "level": "medium"
    },
    "q4": {
      "type": "select",
      "question": "When you want to find the size or amount of something you…",
      "parameters": [
        "measure",
        "estimate",
        "compare"
      ],
      "level": "hard"
    },
    "q5": {
      "type": "select",
      "question": "When you measure how long something is, what are you measuring?",
      "parameters": [
        "length",
        "height",
        "weight"
      ],
      "level": "hard"
    },
    "q6": {
      "type": "select",
      "question": "When you find something out you…",
      "parameters": [
        "determine it",
        "construct it",
        "divide it"
      ],
      "level": "hard"
    },
    "q7": {
      "type": "select",
      "question": "When you use what you know about measuring to find something out you...",
      "parameters": [
        "apply it",
        "sweep it",
        "comfort it"
      ],
      "level": "hard"
    },
    "q8": {
      "type": "select",
      "question": "What do you need to measure to figure out how hot or cold something is?",
      "parameters": [
        "temperature",
        "distance",
        "speed"
      ],
      "level": "hard"
    },
    "q9": {
      "type": "select",
      "question": "What does a scale measure?",
      "parameters": [
        "weight",
        "height",
        "length"
      ],
      "level": "hard"
    },
    "q10": {
      "type": "select",
      "question": "To figure out how far apart two things are, you need to figure out its...",
      "parameters": [
        "distance",
        "weight",
        "height"
      ],
      "level": "hard"
    }
  })
})
// 允许跨域请求的路径
router.post('/test2', async(ctx, next) => {
  ctx.body =  {status: 'ok'}
  console.log(ctx.request.body)
})

export default router
