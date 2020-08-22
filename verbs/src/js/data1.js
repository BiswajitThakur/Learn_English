'use strict';

const verbs = `

[
    {
        "bn": "\u0985\u09a8\u09c1\u09ae\u09a4\u09bf \u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "allow",
        "v2": "allowed",
        "v3": "allowed"
    },
    {
        "bn": "\u09aa\u09cd\u09b0\u0995\u099f \u09b9\u0993\u09af\u09bc\u09be",
        "v1": "appear",
        "v2": "appeared",
        "v3": "appeared"
    },
    {
        "bn": "\u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09be",
        "v1": "build",
        "v2": "built",
        "v3": "built"
    },
    {
        "bn": "\u09ab\u09cb\u099f\u09be\u09a8\u09cb",
        "v1": "boil",
        "v2": "boiled",
        "v3": "boiled"
    },
    {
        "bn": "\u099c\u09cd\u09ac\u09be\u09b2\u09be\u09a8\u09cb",
        "v1": "burn",
        "v2": "burnt",
        "v3": "burnt"
    },
    {
        "bn": "\u09a7\u09b0\u09be",
        "v1": "catch",
        "v2": "caught",
        "v3": "caught"
    },
    {
        "bn": "\u09a8\u0995\u09b2 \u0995\u09b0\u09be",
        "v1": "copy",
        "v2": "copied",
        "v3": "copied"
    },
    {
        "bn": "\u09ac\u09b9\u09a8 \u0995\u09b0\u09be",
        "v1": "carry",
        "v2": "carried",
        "v3": "carried"
    },
    {
        "bn": "\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 \u0995\u09b0\u09be",
        "v1": "clean",
        "v2": "cleaned",
        "v3": "cleaned"
    },
    {
        "bn": "\u099a\u09a1\u09bc\u09be",
        "v1": "climb",
        "v2": "climbed",
        "v3": "climbed"
    },
    {
        "bn": "\u09ac\u09a8\u09cd\u09a7 \u0995\u09b0\u09be",
        "v1": "close",
        "v2": "closed",
        "v3": "closed"
    },
    {
        "bn": "\u09b0\u09be\u09a8\u09cd\u09a8\u09be \u0995\u09b0\u09be",
        "v1": "cook",
        "v2": "cooked",
        "v3": "cooked"
    },
    {
        "bn": "\u09b8\u09ac\u09a7\u09be\u09a8 \u09a5\u09be\u0995\u09be",
        "v1": "care",
        "v2": "cared",
        "v3": "cared"
    },
    {
        "bn": "\u0985\u09a4\u09bf\u0995\u09cd\u09b0\u09ae \u0995\u09b0\u09be",
        "v1": "cross",
        "v2": "crossed",
        "v3": "crossed"
    },
    {
        "bn": "\u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u0995\u09b0\u09be",
        "v1": "complete",
        "v2": "completed",
        "v3": "completed"
    },
    {
        "bn": "\u0996\u09cb\u09dc\u09be",
        "v1": "dig",
        "v2": "dug",
        "v3": "dug"
    },
    {
        "bn": "\u09aa\u09cd\u09b0\u09a4\u09be\u09b0\u09a8\u09be \u0995\u09b0\u09be",
        "v1": "deceive",
        "v2": "deceived",
        "v3": "deceived"
    },
    {
        "bn": "\u09b8\u09be\u099c\u09be\u09a8\u09cb",
        "v1": "decorate",
        "v2": "decorated",
        "v3": "decorated"
    },
    {
        "bn": "\u09ae\u09b0\u09c7 \u09af\u09be\u0993\u09af\u09bc\u09be",
        "v1": "die",
        "v2": "died",
        "v3": "died"
    },
    {
        "bn": "\u09a7\u09be\u09b0 \u09a8\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "borrow",
        "v2": "borrowed",
        "v3": "borrowed"
    },
    {
        "bn": "\u09ad\u09be\u0997 \u0995\u09b0\u09be",
        "v1": "divide",
        "v2": "divided",
        "v3": "divided"
    },
    {
        "bn": "\u0989\u09aa\u09be\u09b0\u09cd\u099c\u09a8 \u0995\u09b0\u09be",
        "v1": "earn",
        "v2": "earned",
        "v3": "earned"
    },
    {
        "bn": "\u09ad\u09bf\u09a4\u09b0\u09c7 \u0986\u09b8\u09be",
        "v1": "enter",
        "v2": "entered",
        "v3": "entered"
    },
    {
        "bn": "\u09af\u09c1\u09a6\u09cd\u09a7 \u0995\u09b0\u09be",
        "v1": "fight",
        "v2": "fought",
        "v3": "fought"
    },
    {
        "bn": "\u09a6\u09c7\u0996\u09be \u09aa\u09be\u0993\u09af\u09bc\u09be",
        "v1": "find",
        "v2": "found",
        "v3": "found"
    },
    {
        "bn": "\u0996\u09be\u0993\u09af\u09bc\u09be\u09a8\u09cb",
        "v1": "feed",
        "v2": "fed",
        "v3": "fed"
    },
    {
        "bn": "\u09b6\u09c7\u09b7 \u0995\u09b0\u09be",
        "v1": "finish",
        "v2": "finished",
        "v3": "finished"
    },
    {
        "bn": "\u09ad\u09df \u0995\u09b0\u09be",
        "v1": "fear",
        "v2": "feared",
        "v3": "feared"
    },
    {
        "bn": "\u099d\u09cb\u09b2\u09be\u09a8\u09cb",
        "v1": "hang",
        "v2": "hung",
        "v3": "hung"
    },
    {
        "bn": "\u09ab\u09be\u0981\u09b8\u09bf \u09a6\u09c7\u09df\u09be",
        "v1": "hang",
        "v2": "hanged",
        "v3": "hanged"
    },
    {
        "bn": "\u09a7\u09b0\u09be",
        "v1": "hold",
        "v2": "held",
        "v3": "held"
    },
    {
        "bn": "\u09ad\u09be\u09a1\u09bc\u09be \u0995\u09b0\u09be",
        "v1": "hire",
        "v2": "hired",
        "v3": "hired"
    },
    {
        "bn": "\u09b6\u09bf\u0995\u09be\u09b0 \u0995\u09b0\u09be",
        "v1": "hunt",
        "v2": "hunted",
        "v3": "hunted"
    },
    {
        "bn": "\u0987\u09b8\u09cd\u09a4\u09cd\u09b0\u09bf \u0995\u09b0\u09be",
        "v1": "iron",
        "v2": "ironed",
        "v3": "ironed"
    },
    {
        "bn": "\u09a8\u09bf\u09ae\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3 \u0995\u09b0\u09be",
        "v1": "invite",
        "v2": "invited",
        "v3": "invited"
    },
    {
        "bn": "\u099d\u09be\u0981\u09aa\u09be\u09a8\u09cb",
        "v1": "jump",
        "v2": "jumped",
        "v3": "jumped"
    },
    {
        "bn": "\u09a6\u09b0\u099c\u09be \u09a7\u09be\u0995\u09cd\u0995\u09be \u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "knock",
        "v2": "knocked",
        "v3": "knocked"
    },
    {
        "bn": "\u09b2\u09be\u09a5\u09bf \u09ae\u09be\u09b0\u09be",
        "v1": "kick",
        "v2": "kicked",
        "v3": "kicked"
    },
    {
        "bn": "\u09a7\u09be\u09b0 \u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "lend",
        "v2": "lent",
        "v3": "lent"
    },
    {
        "bn": "\u09b9\u09be\u09b0\u09be\u09a8\u09cb",
        "v1": "lose",
        "v2": "lost",
        "v3": "lost"
    },
    {
        "bn": "\u099c\u09cd\u09ac\u09be\u09b2\u09be\u09a8\u09cb , \u0986\u09b2\u09cb\u0995\u09bf\u09a4 \u0995\u09b0\u09be",
        "v1": "light",
        "v2": "lighted",
        "v3": "lighted"
    },
    {
        "bn": "\u09b6\u09c7\u0996\u09be",
        "v1": "learn",
        "v2": "learnt",
        "v3": "learnt"
    },
    {
        "bn": "\u09ac\u09bf\u09ac\u09be\u09b9\u09bf\u09a4 \u0995\u09b0\u09be",
        "v1": "marry",
        "v2": "married",
        "v3": "married"
    },
    {
        "bn": "\u09b8\u09b0\u09be\u09a8\u09cb , \u099a\u09be\u09b2\u09be\u09a8\u09cb",
        "v1": "move",
        "v2": "moved",
        "v3": "moved"
    },
    {
        "bn": "\u0996\u09cb\u09b2\u09be",
        "v1": "open",
        "v2": "opened",
        "v3": "opened"
    },
    {
        "bn": "\u0986\u099e\u09cd\u099c\u09be \u09aa\u09be\u09b2\u09a8 \u0995\u09b0\u09be",
        "v1": "obey",
        "v2": "obeyed",
        "v3": "obeyed"
    },
    {
        "bn": "\u0986\u09a6\u09c7\u09b6 \u0995\u09b0\u09be",
        "v1": "order",
        "v2": "ordered",
        "v3": "ordered"
    },
    {
        "bn": "\u0995\u09c1\u09a1\u09bc\u09be\u09a8\u09cb",
        "v1": "pick",
        "v2": "picked",
        "v3": "picked"
    },
    {
        "bn": "\u09aa\u09cd\u09b0\u09be\u09b0\u09cd\u09a5\u09a8\u09be \u0995\u09b0\u09be",
        "v1": "pray",
        "v2": "prayed",
        "v3": "prayed"
    },
    {
        "bn": "\u099f\u09be\u09a8\u09be",
        "v1": "pull",
        "v2": "pulled",
        "v3": "pulled"
    },
    {
        "bn": "\u09b6\u09be\u09b8\u09cd\u09a4\u09bf \u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "punish",
        "v2": "punished",
        "v3": "punished"
    },
    {
        "bn": "\u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09be",
        "v1": "prepare",
        "v2": "prepared",
        "v3": "prepared"
    },
    {
        "bn": "\u09b2\u09be\u0999\u09cd\u0997\u09b2 \u099a\u09b7\u09be",
        "v1": "plough",
        "v2": "ploughed",
        "v3": "ploughed"
    },
    {
        "bn": "\u09aa\u09cd\u09b0\u09b8\u09a8\u09cd\u09a8 \u0995\u09b0\u09be",
        "v1": "please",
        "v2": "pleased",
        "v3": "pleased"
    },
    {
        "bn": "\u09a0\u09c7\u09b2\u09be",
        "v1": "push",
        "v2": "pushed",
        "v3": "pushed"
    },
    {
        "bn": "\u099d\u0997\u09a1\u09bc\u09be \u0995\u09b0\u09be",
        "v1": "quarrel",
        "v2": "quarrelled",
        "v3": "quarrelled"
    },
    {
        "bn": "\u09ac\u09c3\u09b7\u09cd\u099f\u09bf \u09b9\u0993\u09af\u09bc\u09be",
        "v1": "rain",
        "v2": "rained",
        "v3": "rained"
    },
    {
        "bn": "\u09aa\u09cc\u0981\u099b\u09be\u09a8\u09cb",
        "v1": "reach",
        "v2": "reached",
        "v3": "reached"
    },
    {
        "bn": "\u0985\u09b8\u09cd\u09ac\u09c0\u0995\u09be\u09b0 \u0995\u09b0\u09be",
        "v1": "refuse",
        "v2": "refused",
        "v3": "refused"
    },
    {
        "bn": "\u09a7\u09cd\u09ac\u0982\u09b8 \u0995\u09b0\u09be",
        "v1": "ruin",
        "v2": "ruined",
        "v3": "ruined"
    },
    {
        "bn": "\u099a\u0995\u099a\u0995 \u0995\u09b0\u09be",
        "v1": "shine",
        "v2": "shone",
        "v3": "shone"
    },
    {
        "bn": "\u09ac\u09bf\u0995\u09cd\u09b0\u09bf \u0995\u09b0\u09be",
        "v1": "sell",
        "v2": "sold",
        "v3": "sold"
    },
    {
        "bn": "\u0997\u09c1\u09b2\u09bf \u099a\u09be\u09b2\u09be\u09a8\u09cb",
        "v1": "shoot",
        "v2": "shot",
        "v3": "shot"
    },
    {
        "bn": "\u0998\u09c1\u09ae\u09cb\u09a8\u09cb",
        "v1": "sleep",
        "v2": "slept",
        "v3": "slept"
    },
    {
        "bn": "\u099d\u09be\u0981\u099f \u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "sweep",
        "v2": "swept",
        "v3": "swept"
    },
    {
        "bn": "\u0997\u09a8\u09cd\u09a7 \u09b8\u09cb\u0995\u09be",
        "v1": "smell",
        "v2": "smelt",
        "v3": "smelt"
    },
    {
        "bn": "\u0996\u09b0\u099a \u0995\u09b0\u09be",
        "v1": "spend",
        "v2": "spent",
        "v3": "spent"
    },
    {
        "bn": "\u09a7\u09a8\u09cd\u09af\u09ac\u09be\u09a6 \u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "thank",
        "v2": "thanked",
        "v3": "thanked"
    },
    {
        "bn": "\u09ac\u09be\u0981\u09a7\u09be",
        "v1": "tie",
        "v2": "tied",
        "v3": "tied"
    },
    {
        "bn": "\u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09be",
        "v1": "test",
        "v2": "tested",
        "v3": "tested"
    },
    {
        "bn": "\u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09be",
        "v1": "wait",
        "v2": "waited",
        "v3": "waited"
    },
    {
        "bn": "\u0995\u09be\u099c \u0995\u09b0\u09be",
        "v1": "work",
        "v2": "worked",
        "v3": "worked"
    },
    {
        "bn": "\u0987\u099a\u09cd\u099b\u09be \u09aa\u09cd\u09b0\u0995\u09be\u09b6 \u0995\u09b0\u09be",
        "v1": "wish",
        "v2": "wished",
        "v3": "wished"
    },
    {
        "bn": "\u099c\u09df\u09b2\u09be\u09ad \u0995\u09b0\u09be",
        "v1": "win",
        "v2": "won",
        "v3": "won"
    },
    {
        "bn": "\u0995\u09be\u0981\u09a6\u09be",
        "v1": "weep \/ cry",
        "v2": "wept \/ cried",
        "v3": "wept \/ cried"
    },
    {
        "bn": "\u0993\u099c\u09a8 \u0995\u09b0\u09be",
        "v1": "weigh",
        "v2": "weighed",
        "v3": "weighed"
    },
    {
        "bn": "\u09b9\u09be\u09b0 \u09ae\u09be\u09a8\u09be",
        "v1": "yield",
        "v2": "yielded",
        "v3": "yielded"
    },
    {
        "bn": "\u0993\u09a0\u09be",
        "v1": "arise",
        "v2": "arose",
        "v3": "arisen"
    },
    {
        "bn": "\u09aa\u09cd\u09b0\u09b9\u09b0 \u0995\u09b0\u09be",
        "v1": "beat",
        "v2": "beat",
        "v3": "beaten"
    },
    {
        "bn": "\u09ad\u09be\u0999\u09be",
        "v1": "break",
        "v2": "broke",
        "v3": "broken"
    },
    {
        "bn": "\u0995\u09be\u09ae\u09a1\u09bc\u09be\u09a8\u09cb",
        "v1": "bite",
        "v2": "bit",
        "v3": "bitten"
    },
    {
        "bn": "\u099c\u09a8\u09cd\u09ae \u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "bear",
        "v2": "bore",
        "v3": "bore"
    },
    {
        "bn": "\u09b8\u09b9\u09cd\u09af \u0995\u09b0\u09be",
        "v1": "bear",
        "v2": "bore",
        "v3": "bore"
    },
    {
        "bn": "\u09b9\u09be\u0993\u09af\u09bc\u09be",
        "v1": "be [ is , am , are ]",
        "v2": "was \/ were",
        "v3": "been"
    },
    {
        "bn": "\u09aa\u099b\u09a8\u09cd\u09a6 \u0995\u09b0\u09be",
        "v1": "choose",
        "v2": "chose",
        "v3": "chosen"
    },
    {
        "bn": "\u099a\u09be\u09b2\u09be\u09a8\u09cb",
        "v1": "drive",
        "v2": "drove",
        "v3": "drove"
    },
    {
        "bn": "\u099f\u09be\u09a8\u09be",
        "v1": "draw",
        "v2": "drew",
        "v3": "drawn"
    },
    {
        "bn": "\u09ad\u09c1\u09b2\u09c7 \u09af\u09be\u0993\u09af\u09bc\u09be",
        "v1": "forget",
        "v2": "forgot",
        "v3": "forgotten"
    },
    {
        "bn": "\u09aa\u09dc\u09c7 \u09af\u09be\u0993\u09af\u09bc\u09be",
        "v1": "fall",
        "v2": "fell",
        "v3": "fallen"
    },
    {
        "bn": "\u099c\u09ae\u09c7 \u09af\u09be\u0993\u09af\u09bc\u09be",
        "v1": "freeze",
        "v2": "froze",
        "v3": "frozen"
    },
    {
        "bn": "\u0993\u09dc\u09be",
        "v1": "fly",
        "v2": "flew",
        "v3": "flown"
    },
    {
        "bn": "\u09a6\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "give",
        "v2": "gave",
        "v3": "given"
    },
    {
        "bn": "\u09ac\u09dc \u09b9\u0993\u09af\u09bc\u09be",
        "v1": "grow",
        "v2": "grew",
        "v3": "grown"
    },
    {
        "bn": "\u09b2\u09c1\u0995\u09be\u09a8\u09cb",
        "v1": "hide",
        "v2": "hid",
        "v3": "hidden"
    },
    {
        "bn": "\u099c\u09be\u09a8\u09be",
        "v1": "know",
        "v2": "knew",
        "v3": "known"
    },
    {
        "bn": "\u09b6\u09cb\u0993\u09af\u09bc\u09be",
        "v1": "lie",
        "v2": "lay",
        "v3": "laid"
    },
    {
        "bn": "\u0998\u09cb\u09a1\u09bc\u09be\u09af\u09bc \u099a\u09a1\u09bc\u09be",
        "v1": "ride",
        "v2": "rode",
        "v3": "ridden"
    },
    {
        "bn": "\u0993\u09a0\u09be",
        "v1": "rise",
        "v2": "rose",
        "v3": "risen"
    },
    {
        "bn": "\u09a6\u09c7\u0996\u09be",
        "v1": "see",
        "v2": "saw",
        "v3": "seen"
    },
    {
        "bn": "\u09a8\u09be\u09a1\u09bc\u09be\u09a8\u09cb",
        "v1": "shake",
        "v2": "shook",
        "v3": "shaken"
    },
    {
        "bn": "\u099a\u09c1\u09b0\u09bf \u0995\u09b0\u09be",
        "v1": "steal",
        "v2": "stole",
        "v3": "stolen"
    },
    {
        "bn": "\u09ac\u09b2\u09be",
        "v1": "speak",
        "v2": "spoke",
        "v3": "spoken"
    },
    {
        "bn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u0999\u09cd\u0997\u09be \u0995\u09b0\u09be",
        "v1": "swear",
        "v2": "swore",
        "v3": "sworn"
    },
    {
        "bn": "\u099b\u09c7\u0981\u09a1\u09bc\u09be",
        "v1": "tear",
        "v2": "tore",
        "v3": "torn"
    },
    {
        "bn": "\u09a8\u09c7\u0993\u09af\u09bc\u09be",
        "v1": "take",
        "v2": "took",
        "v3": "taken"
    },
    {
        "bn": "\u099b\u09cb\u09a1\u09bc\u09be",
        "v1": "throw",
        "v2": "threw",
        "v3": "thrown"
    },
    {
        "bn": "\u099c\u09be\u0997\u09be",
        "v1": "wake",
        "v2": "woke",
        "v3": "woken"
    },
    {
        "bn": "\u099c\u09be\u09ae\u09be\u0995\u09be\u09aa\u09a1\u09bc \u09aa\u09b0\u09be",
        "v1": "wear",
        "v2": "wore",
        "v3": "worn"
    },
    {
        "bn": "\u0995\u09be\u09aa\u09a1\u09bc \u09ac\u09cb\u09a8\u09be",
        "v1": "weave",
        "v2": "wove",
        "v3": "woven"
    },
    {
        "bn": "\u09b2\u09c7\u0996\u09be",
        "v1": "write",
        "v2": "wrote",
        "v3": "written"
    },
    {
        "bn": "\u0986\u09b0\u09ae\u09cd\u09ad \u0995\u09b0\u09be",
        "v1": "begin",
        "v2": "began",
        "v3": "begun"
    },
    {
        "bn": "\u09aa\u09be\u09a8 \u0995\u09b0\u09be",
        "v1": "drink",
        "v2": "drank",
        "v3": "drunk"
    },
    {
        "bn": "\u0998\u09a8\u09cd\u099f\u09be \u09ac\u09be\u099c\u09be\u09a8\u09cb",
        "v1": "ring",
        "v2": "rang",
        "v3": "rung"
    },
    {
        "bn": "\u09a6\u09cc\u09a1\u09bc\u09be\u09a8\u09cb",
        "v1": "run",
        "v2": "ran",
        "v3": "run"
    },
    {
        "bn": "\u09a1\u09c1\u09ac\u09c7 \u09af\u09be\u0993\u09af\u09bc\u09be",
        "v1": "sink",
        "v2": "sank",
        "v3": "sunk"
    },
    {
        "bn": "\u0997\u09be\u09a8 \u0997\u09be\u0993\u09af\u09bc\u09be",
        "v1": "sing",
        "v2": "sang",
        "v3": "sung"
    },
    {
        "bn": "\u09b2\u09be\u09ab\u09be\u09a8\u09cb",
        "v1": "spring",
        "v2": "sprang",
        "v3": "sprung"
    },
    {
        "bn": "\u09b8\u09be\u0981\u09a4\u09be\u09b0 \u0995\u09be\u099f\u09be",
        "v1": "swim",
        "v2": "swam",
        "v3": "swum"
    },
    {
        "bn": "\u0995\u09c1\u0981\u0995\u09a1\u09bc\u09c7 \u09af\u09be\u0993\u09af\u09bc\u09be",
        "v1": "shrink",
        "v2": "shrank",
        "v3": "shrunk"
    }
]
 `;

const data = JSON.parse(verbs);

