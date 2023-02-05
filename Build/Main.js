"use strict";
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.ƒ = FudgeCore;
    VisualNovel.ƒS = FudgeStory;
    console.log("### Start of Main ###");
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            // Scenes are executed in given order OR can jump directly to the scene via id
            { scene: VisualNovel.NeueSzene00, name: "Einleitung", id: "001" },
            { scene: VisualNovel.NeueSzene01, name: "Akt1 Schule im Gang", id: "002" },
            { scene: VisualNovel.NeueSzene02, name: "Akt1 Klassenzimmer", id: "003" },
            { scene: VisualNovel.NeueSzene03, name: "Akt1 Schule im Gang", id: "004" },
            { scene: VisualNovel.NeueSzene04, name: "Akt1 Bei Aiko", id: "005" },
            { scene: VisualNovel.NeueSzene05, name: "Akt1 Zuhause", id: "006" },
            { scene: VisualNovel.NeueSzene06, name: "Akt1 Aiko abholen", id: "007" },
            { scene: VisualNovel.NeueSzene07, name: "Akt1 Der Weg 1", id: "008" },
            { scene: VisualNovel.NeueSzene08, name: "Akt1 Der Weg 2", id: "009" },
            { scene: VisualNovel.NeueSzene09, name: "Akt1 Der Weg 3", id: "010" },
            { scene: VisualNovel.NeueSzene10, name: "Akt2 IG Zentrale", id: "011" },
            { scene: VisualNovel.NeueSzene11, name: "Akt2 Alice", id: "012" },
            { scene: VisualNovel.NeueSzene12, name: "Akt2 Hand von DoS", id: "013" },
            { scene: VisualNovel.NeueSzene13, name: "Akt2 Raumschiff", id: "014" },
            { scene: VisualNovel.NeueSzene14, name: "Akt2 Raumschiff2", id: "015" },
            { scene: VisualNovel.NeueSzene15, name: "Akt2 Handelsschiff", id: "016" },
            { scene: VisualNovel.NeueSzene16, name: "Akt2 Krankenstation", id: "017" },
            { scene: VisualNovel.NeueSzene17, name: "Akt2 IG OmegaXV", id: "018" },
            { scene: VisualNovel.NeueSzene18, name: "Akt2 IG OmegaXV - Aufgabe", id: "019" },
            { scene: VisualNovel.NeueSzene19, name: "Akt2 IG OmegaXV - Mei", id: "020" },
            { scene: VisualNovel.NeueSzene20, name: "Akt3 Reise zurück nach Trojoko - Schlafzimmer", id: "021" },
            { scene: VisualNovel.NeueSzene21, name: "Akt3 Reise zurück nach Trojoko - Brücke", id: "022" },
            { scene: VisualNovel.NeueSzene22, name: "Akt3 IG Neutrales Ende - Der Kampf", id: "023" },
            { scene: VisualNovel.NeueSzene23, name: "Akt3 IG Neutrales Ende - Büro", id: "024" },
            { scene: VisualNovel.NeueSzene24, name: "Akt3 IG Neutrales Ende - ENDE", id: "025" },
            { scene: VisualNovel.SceneEndPositive, name: "Akt3 Positives Ende - Trojoko - Brücke", id: "end-positive" },
            { scene: VisualNovel.SceneEndPositive2, name: "Akt3 Positives Ende - Trojoko - Rebellenschiff", id: "end-positive2" },
            { scene: VisualNovel.SceneEndPositive3, name: "Akt3 Positives Ende - Trojoko - Absturz", id: "end-positive3" },
            { scene: VisualNovel.SceneEndPositive4, name: "Akt3 Positives Ende - Trojoko - Monster", id: "end-positive4" },
            { scene: VisualNovel.SceneEndPositive5, name: "Akt3 Positives Ende - Trojoko - Vor dem Versteck", id: "end-positive5" },
            { scene: VisualNovel.SceneEndPositive6, name: "Akt3 Positives Ende - Trojoko - Im Versteck", id: "end-positive6" },
            { scene: VisualNovel.SceneEndPositive7, name: "Akt3 Positives Ende - Trojoko - Der Angriff", id: "end-positive7" },
            { scene: VisualNovel.SceneEndPositive8, name: "Akt3 Positives Ende - Trojoko - Der Angtiff", id: "end-positive8" },
            { scene: VisualNovel.SceneEndPositive9, name: "Akt3 Positives Ende - Trojoko - Der Virus", id: "end-positive9" },
            { scene: VisualNovel.SceneEndPositive10, name: "Akt3 Positives Ende - Trojoko - Das Ende", id: "end-positive10" },
            { scene: VisualNovel.SceneEndNegative, name: "Akt3 Negatives Ende - Hand von DoS - Schiff", id: "end-negative" },
            { scene: VisualNovel.SceneEndNegative2, name: "Akt3 Negatives Ende - Hand von DoS - Zentrale", id: "end-negative2" },
            { scene: VisualNovel.SceneEndNegative3, name: "Akt3 Negatives Ende - Hand von DoS - Ende", id: "end-negative3" },
            { scene: VisualNovel.SceneGameOver, name: "Game Over", id: "game-over" },
            { scene: VisualNovel.ThanksForPlaying, name: "Thanks for playing", id: "thanks-for-playing" },
        ];
        // Enables game menu
        gameMenu = VisualNovel.ƒS.Menu.create(inGameMenuButtons, menuButtonsFunctionality, "gameMenuCSSclass");
        menuButtonsFunctionality("Close");
        // Enables to change the meter bar via gameProgress.playerScore
        let meterBar = document.querySelector("[type=interface]");
        VisualNovel.gameProgress = VisualNovel.ƒS.Progress.setData(VisualNovel.gameProgress, meterBar);
        // Hides meter bar on start screen / splash screen
        meterBar.style.display = "none";
        // Starts the sequence of scenes
        VisualNovel.ƒS.Progress.go(scenes);
    }
    // ###################################################################
    // ###################################################################
    // Defines all locations
    VisualNovel.locations = {
        subway_: {
            name: "Subway",
            background: "images/locations/Subway_1.png",
        },
        school_: {
            name: "School",
            background: "images/locations/Windows.png",
        },
        lab: {
            name: "Labor",
            background: "images/locations/Lab_3.png",
        },
        vaikoZuhause: {
            name: "Vor Aiko ihr Zuhause",
            background: "images/locations/Hallway_3.png",
        },
        zuhause: {
            name: "Zuhause",
            background: "images/locations/Couch_I.png",
        },
        weg1: {
            name: "Die Stadt",
            background: "images/locations/Smokestacks.png",
        },
        verlassen1: {
            name: "Verlassene Zone1",
            background: "images/locations/bg19.png",
        },
        verlassen2: {
            name: "Verlassene Zone2",
            background: "images/locations/bg8.png",
        },
        ig: {
            name: "IG Zentrale",
            background: "images/locations/Table_2.png",
        },
        dos: {
            name: "Hand von DoS Zentrale",
            background: "images/locations/Table_1.png",
        },
        schiff: {
            name: "Transportschiff",
            background: "images/locations/hallway.png",
        },
        hschiff: {
            name: "Handelsschiff",
            background: "images/locations/Hospital_2.png",
        },
        krankenhaus: {
            name: "Krankenhaus",
            background: "images/locations/Hospital_1.png",
        },
        omegaXV: {
            name: "OmegaXV",
            background: "images/locations/Table_3.png",
        },
        schiffschlaf: {
            name: "Schlafzimmer auf dem Schiff",
            background: "images/locations/Bed_1.png",
        },
        schiffbrücke: {
            name: "Brücke auf dem Schiff",
            background: "images/locations/Computers_I.png",
        },
        igbase: {
            name: "IG Büro",
            background: "images/locations/Office_I.png",
        },
        hvdSchiff: {
            name: "Hand von DoS Schiff",
            background: "images/locations/Tunnel_3.png",
        },
        rebellenSchiff: {
            name: "Rebellen Schiff",
            background: "images/locations/Tunnel_2.png",
        },
        absturz: {
            name: "Absturzstelle",
            background: "images/locations/bg17.png",
        },
        bib: {
            name: "Bibliothek",
            background: "images/locations/bg12.png",
        },
        vorRebellen: {
            name: "Vor der Rebellenbasis",
            background: "images/locations/Tower_2.png",
        },
        rebellenBasis: {
            name: "In der Rebellenbasis",
            background: "images/locations/Workshop_2.png",
        },
        rebellenPC: {
            name: "Rebllen Renchenzentrum",
            background: "images/locations/Computers_II.png",
        },
        end: {
            name: "End",
            background: "images/locations/Park_1.png",
        },
        gameover: {
            name: "Game Over",
            background: "images/locations/16.png",
        },
    };
    // Defines all characters
    VisualNovel.characters = {
        sprecher: {
            name: "Sprecher:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/OLD_MAN_RED_ANGRY.png",
                happy: "images/characters/OLD_MAN_RED_NORMAL.png",
                upset: "images/characters/OLD_MAN_RED_SAD.png",
            },
        },
        sona: {
            name: "Sona V.3Xc5:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Sona_sauer.png",
                happy: "images/characters/Sona_happy.png",
                happy2: "images/characters/Sona_happy2.png",
                upset: "images/characters/Sona_Weinen.png",
                normal: "images/characters/Sona_normal.png",
                red: "images/characters/Sona_red.png",
                ohh: "images/characters/Sona_ohh.png",
            },
        },
        aiko: {
            name: "Aiko:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Aiko_WinterUni_Sad.png",
                angry_red: "images/characters/Aiko_WinterUni_Sad_Red.png",
                happy: "images/characters/Aiko_WinterUni_Happy.png",
                happy_red: "images/characters/Aiko_WinterUni_Happy_Red.png",
                talk: "images/characters/Aiko_WinterUni_Talk.png",
                talk_red: "images/characters/Aiko_WinterUni_Talk_Red.png",
                h_sad: "images/characters/Aiko_Frown_Heart.png",
                h_r_sad: "images/characters/Aiko_Frown_Heart_Blush.png",
                h_talk: "images/characters/Aiko_shout_Heart.png",
                h_r_talk: "images/characters/Aiko_Shout_Heart_Blush.png",
                h_smile: "images/characters/Aiko_Smile_Heart.png",
                h_r_smile: "images/characters/Aiko_Smile_Heart_Blush.png",
            },
        },
        wissenschaftler: {
            name: "Wissenschaftler:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                mysterious: "images/characters/Wissenschaftler_5_mysterious.png",
                happy: "images/characters/Wissenschaftler_5_aha.png",
                upset: "images/characters/Wissenschaftler_5_giveup.png",
                aha: "images/characters/Wissenschaftler_5_aha.png",
                disagree: "images/characters/Wissenschaftler_5_disagree.png",
                disagree2: "images/characters/Wissenschaftler_5_disagree2.png",
                mad_smile: "images/characters/Wissenschaftler_5_mad_smile.png",
                normal: "images/characters/Wissenschaftler_5_normal.png",
                provoke: "images/characters/Wissenschaftler_5_provoke.png",
                sad_smile: "images/characters/Wissenschaftler_5_sad_smile.png",
                sad: "images/characters/Wissenschaftler_5_sad.png",
                sad2: "images/characters/Wissenschaftler_5_sad2.png",
                smile: "images/characters/Wissenschaftler_5_smile.png",
                smile2: "images/characters/Wissenschaftler_5_smile2.png",
                thinking: "images/characters/Wissenschaftler_5_thinking.png",
            },
        },
        wissenschaftlerin: {
            name: "Wissenschaftlerin:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Wissenschaftlerin_angry.png",
                angry2: "images/characters/Wissenschaftlerin_angry2.png",
                cry: "images/characters/Wissenschaftlerin_cry.png",
                happy: "images/characters/Wissenschaftlerin_happy.png",
                happy2: "images/characters/Wissenschaftlerin_happy2.png",
                happy3: "images/characters/Wissenschaftlerin_happy3.png",
                happy4: "images/characters/Wissenschaftlerin_happy4.png",
                normal: "images/characters/Wissenschaftlerin_normal.png",
                ohh: "images/characters/Wissenschaftlerin_ohh.png",
                schocked: "images/characters/Wissenschaftlerin_schocked.png",
                sleepy: "images/characters/Wissenschaftlerin_sleppy.png",
                sleepy2: "images/characters/Wissenschaftlerin_sleepy2.png",
                smug: "images/characters/Wissenschaftlerin_smug.png",
                thinking: "images/characters/Wissenschaftlerin_thinking.png",
                smug2: "images/characters/Wissenschaftlerin_smug2.png",
                sad: "images/characters/Wissenschaftlerin_sad.png",
                annoyed: "images/characters/Wissenschaftlerin_annoyed.png",
            },
        },
        sofi: {
            name: "Sofi:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                smile: "images/characters/Sofi_chool_smile.png",
                embarrassed: "images/characters/Sofi_embarrassed1.png",
                embarrassed2: "images/characters/Sofi_school_embarrassed2.png",
                sad: "images/characters/Sofi_school_sad.png",
                surprised: "images/characters/Sofi_school_surprised.png",
                upset: "images/characters/Sofi_school_upset.png",
                embarrassedA1: "images/characters/hoshi_swim_embarrassed1.png",
                embarrassedA2: "images/characters/hoshi_swim_embarrassed2.png",
                sad2: "images/characters/hoshi_swim_sad.png",
                smile2: "images/characters/hoshi_swim_smile.png",
                surprised2: "images/characters/hoshi_swim_surprised.png",
                upset2: "images/characters/hoshi_swim_upset.png",
            },
        },
        lea: {
            name: "Lea:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "images/characters/Lea_Full_Neutral.png",
                neutral_red: "images/characters/ea_Full_Neutral_Full_Neutral_Blush.png",
                talk: "images/characters/Lea_Full_Neutral_Full_Open.png",
                smile: "images/characters/Lea_Full_Neutral_Full_Smile.png",
                smile_red: "images/characters/Lea_Full_Neutral_Full_Smile_Blush.png",
                talk_red: "images/characters/Lea_Full_Neutrala_Full_Open_Blush.png",
            },
        },
        john: {
            name: "John:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Khalil_01_Side_Uniform_Angry.png",
                happy: "images/characters/Khalil_01_Side_Uniform_Happy.png",
                neutral: "images/characters/Khalil_01_Side_Uniform_Neutral.png",
                sad: "images/characters/Khalil_01_Side_Uniform_Sad.png",
                scared: "images/characters/Khalil_01_Side_Uniform_Scared.png",
                suprised: "images/characters/Khalil_01_Side_Uniform_Suprised.png",
            },
        },
        player: {
            name: "Player:",
        },
        narrator: {
            name: "Sprecher:",
        },
        system: {
            name: "System:",
        },
        unbekannt: {
            name: "Unbekannte Stimme:",
        },
        igPilotin: {
            name: "IG Pilotin:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Veera_02_Side_Armor_Helmet_Angry.png",
                happy: "images/characters/Veera_02_Side_Armor_Helmet_Happy.png",
                neutral: "images/characters/Veera_02_Side_Armor_Helmet_Neutral.png",
                sad: "images/characters/Veera_02_Side_Armor_Helmet_Sad.png",
                scared: "images/characters/Veera_02_Side_Armor_Helmet_Scared.png",
                suprised: "images/characters/Veera_02_Side_Armor_Helmet_Suprised.png",
            },
        },
        Dr_Millier: {
            name: "Dr Miller:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Raymond_01_Side_Uniform_Angry.png",
                happy: "images/characters/Raymond_01_Side_Uniform_Happy.png",
                neutral: "images/characters/Raymond_01_Side_Uniform_Neutral.png",
                sad: "images/characters/Raymond_01_Side_Uniform_Sad.png",
                scared: "images/characters/Raymond_01_Side_Uniform_Scared.png",
                suprised: "images/characters/Raymond_01_Side_Uniform_Suprised.png",
            },
        },
        david: {
            name: "David:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Lochem_01_Side_Uniform_Angry.png",
                happy: "images/characters/Lochem_01_Side_Uniform_Happy.png",
                neutral: "images/characters/Lochem_01_Side_Uniform_Neutral.png",
                sad: "images/characters/Lochem_01_Side_Uniform_Sad.png",
                scared: "images/characters/Lochem_01_Side_Uniform_Scared.png",
                suprised: "images/characters/Lochem_01_Side_Uniform_Suprised.png",
            },
        },
        mike: {
            name: "Mike:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sad: "images/characters/suit_0000.png",
                talk: "images/characters/suit_0001.png",
                angry: "images/characters/suit_0002.png",
                happy: "images/characters/suit_0003.png",
                normal: "images/characters/suit_0004.png",
                superangry: "images/characters/suit_0005.png",
                scared: "images/characters/suit_0006.png",
                eyeclose: "images/characters/suit_0007.png",
                sad2: "images/characters/suit4_0000.png",
                talk2: "images/characters/suit4_0001.png",
                angry2: "images/characters/suit4_0002.png",
                happy2: "images/characters/suit4_0003.png",
                normal2: "images/characters/suit4_0004.png",
                superangry2: "images/characters/suit4_0005.png",
                scared2: "images/characters/suit4_0006.png",
                eyeclose2: "images/characters/suit4_0007.png",
            },
        },
        alice: {
            name: "Alice:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                closedEyes: "images/characters/character_closedEyes.png",
                dark: "images/characters/character_dark.png",
                frightened: "images/characters/character_frightened.png",
                happy: "images/characters/character_happy.png",
                mad: "images/characters/character_mad.png",
                neutral: "images/characters/character_neutral.png",
                sad: "images/characters/character_sad.png",
                terrified: "images/characters/character_terrified.png",
            },
        },
        mei: {
            name: "Mei Misaki Noranus:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/FWH_angry01.png",
                annoyed: "images/characters/FWH_annoyed01.png",
                caring: "images/characters/FWH_caring01.png",
                confused: "images/characters/FWH_confused01.png",
                neutral: "images/characters/FWH_neutral01.png",
                sinister: "images/characters/FWH_sinister01.png",
                smile: "images/characters/FWH_smile01.png",
                surprised: "images/characters/FWH_surprised01.png",
                worried: "images/characters/FWH_worried01.png",
                sad: "images/characters/FWH_sad01.png",
            },
        },
        natascha: {
            name: "Natascha:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Mayvheen_01_Side_Uniform_Angry.png",
                happy: "images/characters/Mayvheen_01_Side_Uniform_Happy.png",
                neutral: "images/characters/Mayvheen_01_Side_Uniform_Neutral.png",
                sad: "images/characters/Mayvheen_01_Side_Uniform_Sad.png",
                scared: "images/characters/Mayvheen_01_Side_Uniform_Scared.png",
                surprised: "images/characters/Mayvheen_01_Side_Uniform_Suprised.png",
            },
        },
        skarana: {
            name: "Skarana:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Lahkhadia_01_Side_Uniform_Angry.png",
                happy: "images/characters/Lahkhadia_01_Side_Uniform_Happy.png",
                neutral: "images/characters/Lahkhadia_01_Side_Uniform_Neutral.png",
                sad: "images/characters/Lahkhadia_01_Side_Uniform_Sad.png",
                scared: "images/characters/Lahkhadia_01_Side_Uniform_Scared.png",
                surprised: "images/characters/Lahkhadia_01_Side_Uniform_Suprised.png",
            },
        },
        skasskas: {
            name: "Skaskas:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Lahnkush_01_Side_Uniform_Angry.png",
                happy: "images/characters/Lahnkush_01_Side_Uniform_Happy.png",
                neutral: "images/characters/Lahnkush_01_Side_Uniform_Neutral.png",
                sad: "images/characters/Lahnkush_01_Side_Uniform_Sad.png",
                scared: "images/characters/Lahnkush_01_Side_Uniform_Scared.png",
                suprised: "images/characters/Lahnkush_01_Side_Uniform_Suprised.png",
            },
        },
        blau: {
            name: "Blau:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                mad: "images/characters/Sprite_Monster Slime_BlueA_Mad.png",
                sad: "images/characters/Sprite_Monster_Slime_BlueA_Sad.png",
            },
        },
        hblau: {
            name: "Hellblau:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                mad: "images/characters/Sprite_Monster_Slime_BlueC_Mad.png",
                sad: "images/characters/Sprite_Monster Slime BlueC_Sad.png",
                blue: "images/characters/Sprite_Monster_Slime_BlueC.png",
            },
        },
        rot: {
            name: "Rot:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                mad: "images/characters/Sprite_Monster_Slime _LavaA_Mad.png",
                red: "images/characters/Sprite_Monster_Slime_LavaA.png",
                saf: "images/characters/Sprite_Monster_Slime_LavaA_Sad.png",
            },
        },
        orange: {
            name: "Orange:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                orange: "images/characters/Sprite_Monster_Slime_LavaB.png",
                mad: "images/characters/Sprite_Monster_Slime_LavaB_Mad.png",
                sad: "images/characters/Sprite_Monster_Slime_LavaB_Sad.png",
            },
        },
        stev: {
            name: "Stev:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                fown: "images/characters/ethan_openeyes_browdown_frown.png",
                neutral: "images/characters/ethan_openeyes_browdown_neutral.png",
                ohh: "images/characters/ethan_openeyes_browdown_oh.png",
                pout: "images/characters/ethan_openeyes_browdown_pout.png",
                smile: "images/characters/ethan_openeyes_browdown_smile.png",
                frown: "images/characters/ethan_openeyes_browmid_frown.png",
            },
        },
        laura: {
            name: "Laura:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                ee: "images/characters/kaya_crossed_ee.png",
                blush: "images/characters/kaya_crossed_ee_blush.png",
                sweat: "images/characters/kaya_crossed_ee_sweat.png",
                trear: "images/characters/kaya_crossed_ee_tear.png",
            },
        },
        luna: {
            name: "Luna:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                frown: "images/characters/girl_openeyes_frown.png",
                grin: "images/characters/girl_openeyes_grin.png",
                oh: "images/characters/girl_openeyes_oh.png",
                pout: "images/characters/girl_openeyes_pout.png",
                smile: "images/characters/girl_openeyes_smile.png",
            },
        },
        chan: {
            name: "Chan:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "images/characters/Chan1.png",
                happy: "images/characters/Chan2.png",
                sad: "images/characters/Chan3.png",
                veryhappy: "images/characters/Chan4.png",
                ohh: "images/characters/Chan5.png",
                angry: "images/characters/Chan6.png",
            },
        },
        jin: {
            name: "Jin:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "images/characters/Jin1.png",
                happy: "images/characters/Jin2.png",
                sad: "images/characters/Jin3.png",
                ohh: "images/characters/Jin4.png",
            },
        },
        sun: {
            name: "Sun:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "images/characters/Sun1.png",
                normal2: "images/characters/Sun2.png",
                happy: "images/characters/Sun3.png",
                ohh: "images/characters/Sun4.png",
            },
        },
        braun: {
            name: "Braun:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/Sprite_Monster_Slime_Mud.png",
                happy: "images/characters/Sprite_Monster_Slime_Mud_Mad.png",
                happy2: "images/characters/Sprite_Monster_Slime_Mud_Sad.png",
            },
        },
        game: {
            name: "Game Over:",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "images/characters/game.png",
            },
        },
    };
    // Defines items that player can obtain and use
    VisualNovel.items = {
        usb: {
            name: "USB-Stick",
            description: "Ein USB-Stick",
            image: "images/items/usb-g57d43e2c2_1280.png",
            static: true, // true, item is still in inventory after use; and item exists only once
        },
        greenPill: {
            name: "Grüne Pille",
            description: "Eine grüne Pille",
            image: "images/items/green-pill.png",
        },
    };
    // Defines all sounds
    VisualNovel.sounds = {
        Light_Ambience_2: "sounds/themes/1_Light_Ambience_2.mp3",
        Normal_Amience: "sounds/themes/2_You_re_in_the_Future.ogg",
        Lab_Ambience: "sounds/themes/2_You_re_in_the_Future.ogg",
        Way_Ambience: "sounds/themes/Ambient_7.mp3",
        ig1: "sounds/themes/14_Netro_Noir.wav",
        hvd1: "sounds/themes/Surveillance.wav",
        space: "sounds/themes/Race_to_Mars.mp3",
        space2: "sounds/themes/Waiting_game_loop.mp3",
        ig2: "sounds/themes/10_Laser_Party.wav",
        Light_Ambience_4: "sounds/themes/Light_Ambience_4.mp3",
        space3: "sounds/themes/Action_3.wav",
        hvd2: "sounds/themes/Dawn_slow_scary.mp3",
        ig3: "sounds/themes/Action_2.mp3",
        tro: "sounds/themes/DarkZombieSC.wav",
        tro2: "sounds/themes/Ludum_Dare_38_Track_10.wav",
        tro3: "sounds/themes/04 _Lufus_Space_Time.mp3",
        tro4: "sounds/themes/The_Story_Continues.wav",
        buttonClick: "sounds/effects/button-click.wav",
        ex: "sounds/effects/hq-explosion-6288.mp3",
    };
    // Defines object to 'save' game progress
    VisualNovel.gameProgress = {
        playername: "",
        inventoryOpen: false,
        playerScore: 0,
        gameOverSceneId: "",
    };
    // Defines credits
    function showCredits() {
        VisualNovel.ƒS.Text.setClass("credits");
        VisualNovel.ƒS.Text.print("Weltraumgeschichten - Manuel Kasperzack: (265013)");
    }
    VisualNovel.showCredits = showCredits;
    // ###################################################################
    // ###################################################################
    // Defines all animations
    function scaling(start_scale, end_scale) {
        return {
            start: {
                scaling: new VisualNovel.ƒS.Position(start_scale, start_scale),
            },
            end: {
                scaling: new VisualNovel.ƒS.Position(end_scale, end_scale),
            },
            duration: 2,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    VisualNovel.scaling = scaling;
    function rightToLeft(start_x, start_y, end_x, end_y) {
        return {
            start: { translation: VisualNovel.ƒS.positionPercent(start_x, start_y) },
            end: { translation: VisualNovel.ƒS.positionPercent(end_x, end_y) },
            duration: 2,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    VisualNovel.rightToLeft = rightToLeft;
    function leftToRight(start_x, start_y, end_x, end_y) {
        return {
            start: { translation: VisualNovel.ƒS.positionPercent(start_x, start_y) },
            end: { translation: VisualNovel.ƒS.positionPercent(end_x, end_y) },
            duration: 2,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    VisualNovel.leftToRight = leftToRight;
    function middleToRight(start_x, start_y, end_x, end_y) {
        return {
            start: { translation: VisualNovel.ƒS.positionPercent(start_x, start_y) },
            end: { translation: VisualNovel.ƒS.positionPercent(end_x, end_y) },
            duration: 2,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    VisualNovel.middleToRight = middleToRight;
    function middleToLeft(start_x, start_y, end_x, end_y) {
        return {
            start: { translation: VisualNovel.ƒS.positionPercent(start_x, start_y) },
            end: { translation: VisualNovel.ƒS.positionPercent(end_x, end_y) },
            duration: 2,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    VisualNovel.middleToLeft = middleToLeft;
    function rightToMiddle(start_x, start_y, end_x, end_y) {
        return {
            start: { translation: VisualNovel.ƒS.positionPercent(start_x, start_y) },
            end: { translation: VisualNovel.ƒS.positionPercent(end_x, end_y) },
            duration: 2,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    VisualNovel.rightToMiddle = rightToMiddle;
    function leftToMiddle(start_x, start_y, end_x, end_y) {
        return {
            start: { translation: VisualNovel.ƒS.positionPercent(start_x, start_y) },
            end: { translation: VisualNovel.ƒS.positionPercent(end_x, end_y) },
            duration: 2,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    VisualNovel.leftToMiddle = leftToMiddle;
    // Defines all transitions of images
    VisualNovel.transitions = {
        wipeRightToLeft: {
            duration: 1.5,
            alpha: "images/transitions/wipe-right-to-left.png",
            edge: 0.4,
        },
        wipeLeftToRight: {
            duration: 1.5,
            alpha: "images/transitions/wipe-left-to-right.png",
            edge: 0.4,
        },
        wipeToMiddle: {
            duration: 1,
            alpha: "images/transitions/wipe-to-middle.png",
            edge: 0.3,
        },
        wipeTopToBottom: {
            duration: 1,
            alpha: "images/transitions/wipe-top-to-bottom.png",
            edge: 0.2,
        },
        wipeBottomToTop: {
            duration: 2,
            alpha: "images/transitions/wipe-bottom-to-top.png",
            edge: 0.2,
        },
    };
    // Defines keydown event listener to open inventory when pressing key "i"
    window.addEventListener("keydown", openInventory);
    async function openInventory(_event) {
        if (_event.key == "i") {
            if (VisualNovel.gameProgress.inventoryOpen) {
                VisualNovel.gameProgress.inventoryOpen = false;
                VisualNovel.ƒS.Inventory.close();
            }
            else {
                VisualNovel.gameProgress.inventoryOpen = true;
                await VisualNovel.ƒS.Inventory.open();
            }
        }
    }
    // Defines menu
    // Menu buttons and menu buttons functionality
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits",
    };
    let gameMenu;
    let menuIsOpen = true;
    async function menuButtonsFunctionality(_option) {
        switch (_option) {
            case inGameMenuButtons.save:
                await VisualNovel.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await VisualNovel.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                showCredits();
        }
    }
    // Menu key shortcuts
    document.addEventListener("keydown", menuKeyPress);
    async function menuKeyPress(_event) {
        switch (_event.code) {
            case VisualNovel.ƒ.KEYBOARD_CODE.F8:
                await VisualNovel.ƒS.Progress.save();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.F9:
                await VisualNovel.ƒS.Progress.load();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene00() {
        // Shows meter bar
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.Light_Ambience_2, 0.6, true);
        let meterBar = document.querySelector("[type=interface]");
        meterBar.style.display = "";
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.subway_);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(2);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Es war einmal ein junger Mann namens ...");
        // Animates character
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.middleToLeft(50, 100, 20, 100));
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.leftToRight(20, 100, 80, 100));
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.rightToMiddle(80, 100, 50, 100));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Wie ist eigentlich dein Name?");
        VisualNovel.gameProgress.playername = await VisualNovel.ƒS.Speech.getInput(); // Gets player name
        VisualNovel.characters.player.name = VisualNovel.gameProgress.playername + ":"; // Saves player name
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sehr gut, ich werde auf die alten Jahre etwas vergesslich.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Hier sind 2 Pillen, sie könnten dir auf deinem Weg nützlich sein.");
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.greenPill);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.greenPill);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Misst, ich habe dir meine Herzpillen gegeben.");
        do {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Öffne bitte mit i dein Inventar und gebe die Pillen mir bitte zurück.");
        } while (VisualNovel.ƒS.Inventory.getAmount(VisualNovel.items.greenPill) != 0);
        VisualNovel.gameProgress.playerScore += 30;
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Tut mir leid für die Unterbrechung.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Es war einmal ein junger Mann namens " +
            VisualNovel.gameProgress.playername +
            " in einer Stadt im Sternensystem XV-43 auf dem Planeten Trojoko im Jahre 2123.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Trojoko besitzt 150 Milliarden Einwohner und ist bis in die letzte Ecke bewohnt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Bewohner leiden unter der starken Umweltverschmutzung und der Überbevölkerung.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Schneller technologischer Fortschritt sorgt dafür, dass Technologien den Großteil der Wirtschaft und Entwicklung selbstständig übernehmen, ohne Zutun der Menschen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Seit den letzten Monaten verbreitet sich mehr und mehr ein mysteriöser Computervirus, der die Kontrolle über das gesamte Netzwerk übernimmt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Infrastruktur fällt aus und die Fraktionen stehen kurz vor einem Bürgerkrieg.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername +
            " sitz auf einer Bank vor der Schule und macht ein Nickerchen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "He.. He…. HEEEEE!!!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sona, VisualNovel.characters.sona.pose.normal, VisualNovel.ƒS.positionPercent(92, 30) // x, y
        );
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(2);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sona);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sona, VisualNovel.characters.sona.pose.happy, VisualNovel.ƒS.positionPercent(92, 30) // x, y
        );
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(2);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Wenn du weiter schläfst, kommst zu spät zum Unterricht.");
        let choices = {
            a: "Wer redet hier?",
            b: "Lass mich in Ruhe Sona!",
            c: "*Das Geräusch ignorieren*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sona);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sona, VisualNovel.characters.sona.pose.angry, VisualNovel.ƒS.positionPercent(92, 30));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Wer wohl? Ich bin es Sona, du hast doch nicht etwa die coolste KI der Welt vergessen.");
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Damit du mir später wieder Vorwürfe machen kannst, NEIN. AUFSTEHEN LALALALALA");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen - ich kann so den ganzen Tag weiter machen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen, aufstehen.");
        }
        choices = {
            a: "Tut mir leid Sona, ich hatte mal wieder vergessen, dass ich die Kontaktlinse noch drin habe.",
            b: "Ist ja schon gut, ich geh ja.",
            c: "Du hast gewonnen, ich geh ja schon los.",
        };
        selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision"); // Meaningless choice
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sona);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sona, VisualNovel.characters.sona.pose.happy2, VisualNovel.ƒS.positionPercent(92, 30));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Du würdest deinen Kopf vergessen, wenn er nicht auf deinem Hals wäre. Du musst los, sonst kommst du schon wieder zu spät.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, " Leider wahr, ich geh ja schon.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sona);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sona, VisualNovel.characters.sona.pose.normal, VisualNovel.ƒS.positionPercent(92, 30));
        await VisualNovel.ƒS.update(1);
        // ƒS.Speech.clear(); // Clears speech field
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.Light_Ambience_2, 0, 1, false);
    }
    VisualNovel.NeueSzene00 = NeueSzene00;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene01() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.Normal_Amience, 0.4, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.school_);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Da bist du ja endlich, ich habe dich schon überall gesucht.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(50, 150));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du weißt ganz genau, dass du nicht schon wieder zu spät kommen darfst.");
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.scaling(1.0, 1.2));
        // Animates character
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.middleToLeft(50, 150, 40, 150));
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.leftToRight(40, 150, 60, 150));
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.rightToMiddle(60, 150, 50, 150));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich versteh nicht, wie du so gut in Wissenschaften sein kannst, wobei du die Hälfte der Zeit mit Schlafen verbringst.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Bestimmt musste Sona dich wieder wecken.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sona);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sona, VisualNovel.characters.sona.pose.happy2, VisualNovel.ƒS.positionPercent(92, 30));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sona);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sona, VisualNovel.characters.sona.pose.normal, VisualNovel.ƒS.positionPercent(92, 30));
        await VisualNovel.ƒS.update(1);
        let choices = {
            a: "Als hätte ich verschlafen, ich half noch jemandem.",
            b: "Ja, Sona musste mich wieder wecken, lass uns gehen.",
            c: "Hab von dir geträumt, da wollte ich nicht aufwachen.",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.angry, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Ich kenn dich schon viel zu lange, lüg mich doch nicht an. Los gehen wir.");
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du kleine Schlafmütze, auf lass uns gehen.");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy_red, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sona, "Ich hatte heute auch einen Traum von dir, jetzt lass uns aber los, sonst kommen wir zu spät.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene01 = NeueSzene01;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene02() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.lab);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeTopToBottom.duration, VisualNovel.transitions.wipeTopToBottom.alpha, VisualNovel.transitions.wipeTopToBottom.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.happy, VisualNovel.ƒS.positionPercent(70, 110));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Hallo zusammen, ich habe heute noch meine Kollegin mitgebracht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Hallo zusammen, ich freu mich heut mit dabei sein zu dürfen.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftlerin, VisualNovel.characters.wissenschaftlerin.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Ich habe eure Projekte von letzter Woche bereits angeschaut und muss sagen, " +
            VisualNovel.gameProgress.playername +
            " seine Arbeit gefällt mir bis jetzt am besten.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.smile2, VisualNovel.ƒS.positionPercent(70, 110));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Heute geht es um ein anderes Thema, ihr habt vermutlich alle mitbekommen, dass der Zugverkehr die letzte Woche komplett ausgefallen ist. ");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.sad, VisualNovel.ƒS.positionPercent(70, 110));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(30, 100));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ja, mein Vater meinte, dass dieser neuartige Computervirus, was damit zu tun haben soll.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftlerin, VisualNovel.characters.wissenschaftlerin.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Das ist korrekt, das ist auch der Grund, warum ich heute mit dabei bin, ich befasse mich mit neuartigen Computerviren.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Aus uns unerklärlichen Gründen wurde dieser Virus modifiziert und unerlaubt in das Hauptnetz hochgeladen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftlerin, VisualNovel.characters.wissenschaftlerin.pose.sad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Soweit wir das in der aktuellen Situation beurteilen können, handelt es sich um eine veraltete künstliche Intelligenz - basierend auf einer vergessenen Technologie der Vorzeit.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Ich und mein Kollege wurden von der IG beauftrag, eine Gruppe zusammenzustellen. Leider konnten die Besten unserer Leute keinen Fortschritt erzielen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftlerin, VisualNovel.characters.wissenschaftlerin.pose.angry, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Das ist korrekt. Wir hatten die Hoffnung schon verloren, bis mir bei der Korrektur der letzten Aufgaben, als es um die Entwicklung primitiver künstlicher Intelligenz ging, einige vielversprechende Konzepte aufgefallen sind. ");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.mysterious, VisualNovel.ƒS.positionPercent(70, 110));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Um die Sache kurz zu machen, Aiko, Sofi, Lea und " + VisualNovel.gameProgress.playername + ", wir würden gern mit euch nach der Stunde alleine sprechen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Was? Mit mir?");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Okay.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.lea, VisualNovel.characters.lea.pose.neutral, VisualNovel.ƒS.positionPercent(70, 170));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.lea, "Alles klar.");
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.lea);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        let choices = {
            a: "Ich kann nachher leider nicht, hab vergessen, meinen Goldfisch zu füttern.",
            b: "Alles klar.",
            c: "Wa wa wass? Tut mir leid, ich habe gerade nicht aufgepasst.",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision"); // Meaningless choice
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        console.log(selectedChoice);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.mysterious, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Kommt nach der Stunde bitte kurz zu uns.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene02 = NeueSzene02;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene03() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.school_);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.lea, VisualNovel.characters.lea.pose.neutral, VisualNovel.ƒS.positionPercent(70, 170));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.lea, "Ich weiß nicht, ob ich in diesem Team mit machen möchte, das ist doch bestimmt gefährlich.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.lea);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(30, 100));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Da muss ich Lea Recht geben, das ist sicherlich nichts für Studenten.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich weiß auch nicht so recht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        let choices = {
            a: "Bleibt cool, lasst uns die Zwei mal  anhören.",
            b: "Ich habe auch ein sehr mulmiges Gefühl im Bauch.",
            c: "Ich würde dafür alles geben, mit solch bezaubernden Damen zusammen zu arbeiten.",
            d: "*Nichts sagen*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a ||
            selectedChoice == choices.b ||
            selectedChoice == choices.d) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
            // Draws character on canvas (updates entire canvas)
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Tut mir leid, dass ihr warten musstet.");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Kleiner Schmeichler.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.lea, "Mhhh ... Das ist doch kein Spaß!");
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
            // Draws character on canvas (updates entire canvas)
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Tut mir leid, dass ihr warten musstet.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.lea);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Nach einer langen Diskussion mit den Wissenschaftlern sagten alle bis auf Aiko der Gruppe zu.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftler, VisualNovel.characters.wissenschaftler.pose.happy, VisualNovel.ƒS.positionPercent(70, 110));
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Wir sind sehr dankbar, dass ihr uns helfen werdet, wie bereits erwähnt, glaubt die Internationale Gemeinschaft, dass Rebellen der Trojoko Fraktion etwas damit zu tun haben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Die Hauptaufgabe besteht nun darin, Hinweise zu sichern und den Computervirus auszuschalten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, VisualNovel.gameProgress.playername +
            " bitte nimm zuerst Kontakt zu Lea auf und versuch sie zu überzeugen, der Gruppe beizutreten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Danach meldest du dich bei diesen IG Kontakten.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftler);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.Normal_Amience, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene03 = NeueSzene03;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene04() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.Way_Ambience, 2.2, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.vaikoZuhause);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positions.bottomcenter);
        // Draws character on canvas (updates entire canvas)
        await VisualNovel.ƒS.update(2);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko wohnte 2 Häuser weg von ihm, sie kennen sich schon ihr ganzes Leben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Wenn Aiko bei einer guten Sache nicht mit machen will, hatte das meist einen Grund.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername + " kommt bei Aikos Wohnung an.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(2);
        let choices = {
            a: "*Gegen die Tür hämmern*",
            b: " *Klingeln*",
            c: "*Versuchen, die Tür aufzubrechen*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a || selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Was willst du denn hier?");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positions.bottomcenter);
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko erwischt dich dabei, wie du in ihre Wohnung einbrechen möchtest. Sie redet kein Wort mehr mit dir und ruft die Polizei!");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.update(1);
            // Jumps to game over scence
            let currentScenceId = "005";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        choices = {
            a: "Warum willst du uns nicht helfen?",
            b: "Wie geht es dir?",
            c: "*Keine Worte finden*",
        };
        selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Es ist kompliziert.");
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Gut, ich weiß, warum du hier bist, kann dir aber nicht helfen.");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich weiß warum du hier bist, kann dir aber nicht helfen.");
        }
        choices = {
            a: "Ist es nicht immer kompliziert?",
            b: "Du kannst mir alles erzählen.",
            c: "*Keine Worte finden*",
        };
        selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a || selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Aiko vertraut dir nicht mehr und schickt dich weg.");
            let currentScenceId = "005";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich erzähl dir etwas, es muss aber unser Geheimnis bleiben, hast du verstanden!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ja, natürlich.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du weißt es vermutlich nicht, aber meine Eltern gehören zu einer Gruppe der Rebellen von Trojoko.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich wollte nie etwas mit den Rebellen zu tun haben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Wenn ich mich jetzt in die Sache einmische, sind meine Eltern bestimmt sauer.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Besonders, weil die IG die Rebellen unter Verdacht haben.");
        let choices2 = {
            a: "Wenn du uns hilfst, kannst du beweisen, dass die Rebellen unschuldig sind.",
            b: "Stell dich nicht so an, es leiden unschuldige Menschen unter diesem Virus.",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Aber, was ist, wenn sie wirklich etwas damit zu tun haben?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich weiß nicht, es werden aber Unschuldige verletzt.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du hast Recht, ich helfe euch.");
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du hast Recht, ich helfe euch!");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Nach dem Aiko zustimmt zu helfen, verabschiedete sich " +
            VisualNovel.gameProgress.playername +
            " und ging nach Hause. Es war schon Nacht geworden und bei Nacht sind die Straßen noch unsicherer als bei Tag.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, VisualNovel.gameProgress.playername +
            " vermied es bei Nacht noch auf den Straßen zu sein.");
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene04 = NeueSzene04;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene05() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.zuhause);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeToMiddle.duration, VisualNovel.transitions.wipeToMiddle.alpha, VisualNovel.transitions.wipeToMiddle.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Zuhause angekommen legte " +
            VisualNovel.gameProgress.playername +
            " die Kontaktlinse mit Sona ab und ging ins Bett.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sona);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Am nächsten Morgen klingelt das Telefon.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ja Hallo?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Guten Morgen, mein Name ist John, ich bin Offizier bei der IG.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Mir wurde angewiesen, nachzufragen, ob sie Aiko für unsere Sache gewinnen konnten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, " Ja, Aiko hilft uns.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Sehr gut, dann hol bitte Aiko ab und kommt zur Adresse, die ich dir später schicken werde.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Bis später.");
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene05 = NeueSzene05;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene06() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.vaikoZuhause);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeToMiddle.duration, VisualNovel.transitions.wipeToMiddle.alpha, VisualNovel.transitions.wipeToMiddle.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, VisualNovel.gameProgress.playername +
            " holt Aiko ab und sie machen sich zu Fuß auf den Weg zur Adresse, die ihnen John mitgeteilt hat.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Was denkst du, wo dieser Platz ist?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich kenne diese Zone aus der Zeitung, sie besteht überwiegend aus Regierungsbüros der IG.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Kennst du den Weg?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich bin mir nicht ganz sicher, ich habe heute Morgen leider vergessen Sona einzupacken.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du und deiner Vergesslichkeit wieder.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich habe gerade Lea geschrieben, wir treffen uns mit ihr und Sofi am Eingang der Zone.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Kennst du den Weg bis dorthin?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Bis zur Zone kenn ich den Weg, sind aber nicht die besten Straßen, durch die wir müssen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Mit der Bahn können wir nicht fahren, das Netz ist schon wieder ausgefallen. Sollen wir zu Fuß gehen?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ja, lass uns den Weg zu Fuß gehen!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Alles klar, lass uns gehen.");
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene06 = NeueSzene06;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene07() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.weg1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Der Weg, den " +
            VisualNovel.gameProgress.playername +
            " und Aiko gehen mussten, war weit. Entfernt von den riesigen Hochhäusern vorbei an den Biotronikfarmen und Öl-Förderanlagen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Durch Neon erfüllte Straßen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Werbung für Glücksspiel und Erotik erleuchtet morgens wie abends die Gassen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "In manchen Zonen gab es den ganzen Tag kein leicht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Viel zu groß ist die Luftverschmutzung und die Megabauten blockieren dann auch noch den letzten Lichtstrahl.");
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene07 = NeueSzene07;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene08() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.verlassen1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Kurz vor ihrer Zielzone kommen sie an einen Ort, an dem sie noch nie waren.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Ein leichter Hauch von Natur in der Stadt aus Beton und Neon.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Wo sind wir ?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich glaube, das ist eine verlassene Zone, die durch die Verschmutzung nicht mehr belebt wird, lass uns schnell weiter.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Gut, lass uns weiter.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene08 = NeueSzene08;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene09() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.verlassen2);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "HALT STOP!!!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.angry, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Was macht ihr hier?");
        let choices = {
            a: "Was geht dich das an?",
            b: "Wir wollen nur in die nächste Zone.",
            c: "Was bist du denn für eine Kreatur? ",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Ich bin eine der eingeborenen dieses Planeten und das ist eines der letzten echten Trojoko Gebiete auf diesem Planeten.");
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Dann gehört ihr als zu IG - egal, das ist Trojoko Gebiet. Verlasst dieses Land. IG hat schon viel zu viel kaputt gemacht hier.");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Die „Kreatur“, die du meinst, ist eine der letzten stolzen Trojoko Eingeborenen, verlass dieses Land.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.neutral, VisualNovel.ƒS.positionPercent(30, 100));
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.neutral, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Sei nicht so unfreundlich, du Grummelkopf.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Entschuldigt meinen Begleiter, er ist manchmal etwas komisch zu Menschen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(30, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Wir müssen uns entschuldigen, wir sollten nicht hier sein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Ich habe gehört, ihr wollt in die IG Zone, dafür müsst ihr nur diesem Weg hier folgen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Meinen sie die kaputte Straße da drüben?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Ja, das war einst ein wundervoller Ort für jede Spezies, jetzt kann man die Luft kaum noch atmen. Die anliegende Industriezone arbeitet mit Natur schädlichen Chemikalien, welche immer häufiger in den Boden gelangen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Die Luft ist schädlich?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Normalerweise ja, aber aktuell sind die Fabriken durch den Virus ausgefallen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Seit dem Computervirus regeneriert sich diese Zone wieder.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.neutral, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Vielen Dank für ihre Hilfe, wir müssen jetzt los.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Wir müssen jetzt leider gehen, vielen Dank für die Wegbeschreibung.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(30, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Kein Problem Aiko.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Woher kennst du meinen Namen?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Doch Aiko bekam keine Antwort mehr, die 2 Eingeborenen waren bereits verschwundenen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Aiko und " +
            VisualNovel.gameProgress.playername +
            " folgten dem Weg, welchen ihnen die Eingeborenen gezeigt hatten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Sie kamen nach einer Zeit am Rande der Zone an und trafen nicht viel später Lea und Sofi.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Sofi führte die Gruppe zu einem großen Gebäude mit Wachposten davor.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Sie gingen in den Eingangsbereich und meldeten sich an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Kurz nach ihrer Anmeldung wurden sie von John in ein Labor gebracht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.Way_Ambience, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene09 = NeueSzene09;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene10() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ig1, 0.5, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.ig);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.happy, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Schön, dass ihr alle hier erschienen seid.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Für die, die es nicht wissen, mein Name ist John.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.neutral, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Ich bin hier für die organisatorischen Dinge zuständig.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Falls ihr etwas braucht, meldet euch bei mir.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Der alte Sack da hinten im Eck ist Dr. Miller und ist zuständig für all unsere Forschungsprojekte.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.happy, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Er ist über das Projekt hinweg euer und mein Boss.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.Dr_Millier, VisualNovel.characters.Dr_Millier.pose.neutral, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Schön, dass ihr hier seid.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Über den alten Sack reden wir noch mal John.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.Dr_Millier);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.Dr_Millier, VisualNovel.characters.Dr_Millier.pose.happy, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Neben mir werden euch auch noch David und Natascha unter die Arme greifen.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Hallo zusammen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.david, VisualNovel.characters.david.pose.sad, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.david, "Hi.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Wir haben aber gar nicht so viel Zeit, uns jetzt alle vorzustellen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, VisualNovel.gameProgress.playername +
            ", du bleibst bitte mit mir hier, der Rest geht mit John mit.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.david);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.Dr_Millier);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.Dr_Millier, VisualNovel.characters.Dr_Millier.pose.neutral, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Ich komme gleich zur Sache.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Wir konnten heute bei einem weiteren Angriff des Virus auf unsere Chemiefabriken einen kleinen Teil des Virus fangen und auf einer externen Einheit einsperren.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Es handelt sich hierbei um einen kleinen Teil der künstlichen Intelligenz, aus dem der Virus besteht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Sie ähnelt stark der KI, die dein Vater dir damals geschenkt hatte, als er noch für uns gearbeitet hatte. Sona war glaube ich der Name des Programms.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Es besteht eine große Ähnlichkeit mit dem Projekt, welches du letztens eingereicht hast.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Deine Aufgabe ist es jetzt, dich näher mit dieser KI zu befassen und uns mehr Informationen zu besorgen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Setz dich einfach hier an meinen Computer, jemand wie du wird schon wissen, was er tun muss.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.Dr_Millier, "Ich komm später wieder.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.Dr_Millier);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene10 = NeueSzene10;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene11() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.ig);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Bitte Passwort eingeben.");
        let choices = {
            a: "*Gib „Passwort123“ ein*",
            b: "*Drück Enter*",
            c: "*Öffne das Tippfenster*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "System gesperrt, alle Daten werden gelöscht.");
            let currentScenceId = "012";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Willkommen zurück, heißester Doktor auf dem Planeten.");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Drücken sie Enter");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername + " drückt Enter.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Willkommen zurück, heißester Doktor auf dem Planeten.");
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Du bist neugierig und liest erst einmal auf dem Rechner Dr. Millers Tagebuch.");
        // Creates a novel page
        let pages = [
            "<strong>Tagebuch von Dr. Miller:</strong><br>Finger weg!!!<br><br><br><br><br><br><br>Seite 1",
            "<strong>1. September:</strong><br>Ich frag mich schon den ganzen Tag, was war wohl zuerst da, das Ei oder das Huhn? <br><br><br><br><br><br><br>Seite 2",
            "<strong>22. November:</strong><br> Mir wurde eine richtig dumme Aufgabe gegeben. Ich muss auf eine Gruppe Halbstarker aufpassen. Nur gut, dass Natascha dabei ist. Ohhh Natascha. <br><br><br><br><br><br><br>Seite 3",
            "<strong>20. Dezember::</strong><br> Ich konnte heute ein Blick in die Damenumkleide werfen. Natascha hat mich erwischt und ich bin in der Krankenstation wieder aufgewacht. <br><br><br><br><br><br><br>Seite 4",
            "<strong>10. Januar:</strong><br> Seit dem Vorfall mit Natascha kann ich nicht mehr richtig pfeifen. Das war es wohl mit der musikalischen Laufbahn. <br><br><br><br><br><br><br>---Ende---",
        ];
        let current = 0;
        let flip = { back: "Zurück", next: "Nächste", done: "Schließen" };
        let choice;
        VisualNovel.ƒS.Text.addClass("flip");
        do {
            VisualNovel.ƒS.Text.print(pages[current]);
            choice = await VisualNovel.ƒS.Menu.getInput(flip, "flip");
            switch (choice) {
                case flip.back:
                    current = Math.max(0, current - 1);
                    break;
                case flip.next:
                    current = Math.min(pages.length - 1, current + 1);
                    break;
            }
        } while (choice != flip.done);
        VisualNovel.ƒS.Text.close();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Nach dem du Dr. Millers Tagebuch gelesen hast, öffnest du die Datei mit dem Virus.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Der Code scheint verschlüsselt zu sein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich muss irgendwie diese Sperre umgehen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername + " betrachtet die Zahlenabfolge genauer.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "5 5 5 1 2 3 2");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "5 5 5 1 2 3 2");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "5 5 5 1 2 3 2");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "5 5 5 1 2 3 2");
        let choices1 = {
            a: "*Gib in die Konsole „ 5 5 5 1 3 2 3“ ein*",
            b: "*Gib in die Konsole „ 5 5 5 2 1 3 1“ ein*",
            c: "*Gib in die Konsole „5 5 5 1 2 3 2“ ein*",
        };
        let selectedChoice1 = await VisualNovel.ƒS.Menu.getInput(choices1, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice1 == choices1.a) {
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "ERROR: Alle Daten werden gelöscht! ");
            let currentScenceId = "012";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice1 == choices1.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "ERROR: Alle Daten werden gelöscht! ");
            let currentScenceId = "012";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice1 == choices1.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Unlocked");
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Hallo ...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Hallo?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Nicht schlecht von solch einem Grünschnabel.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Könntest du mir den Gefallen tun und mich auf einen anderen Rechner importieren, irgendwer unterdrückt meinen Zugriff auf das System.");
        let choices2 = {
            a: "*Auf den Rechner nebenan ziehen. *",
            b: "Denkst du echt, dass ich dich auf einen anderen Rechner ziehe.",
            c: "*Lachen*",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Der Virus greift auf das IG-Netzwerk zu und legt alles lahm.");
            let currentScenceId = "012";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.b || selectedChoice2 == choices2.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Man kann es ja mal versuchen, würdest du mir den Gefallen tun und das Fenster im Hintergrund nach vorne holen.");
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, VisualNovel.gameProgress.playername +
            " holt das Fenster im Hintergrund in den Vordergrund.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.neutral, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Schon besser, du bist also " +
            VisualNovel.gameProgress.playername +
            ", hab schon etwas im Netzwerk von dir gesehen, leider habe ich gerade keinen vollständigen Zugriff auf meine Daten. Mein Name ist Alice oder wie ihr mich nennt, der Computervirus!");
        let choices3 = {
            a: "Dann bist du also der Computervirus, weswegen Unschuldige leiden und auch sterben müssen?",
            b: "Na ja, da ist Sona cooler, sie lässt keine Unschuldigen leiden.",
            c: "Mörderin!",
        };
        let selectedChoice3 = await VisualNovel.ƒS.Menu.getInput(choices3, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice3 == choices3.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.frightened, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Unschuldige?");
        }
        else if (selectedChoice3 == choices3.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.frightened, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Was ist eine Sona?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Als ob irgendwas besser ist als ich!");
        }
        else if (selectedChoice3 == choices3.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.frightened, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Die IG zerstört diesen Planeten, seit sie an der macht sind. Pflastern die letzte Natur Stücke für Stück mit Pumpen und Raffinerien zu.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Industrieroboter arbeiten ohne Rücksicht auf Opfer, reißen ganze Wohnblöcke ab, in denen noch Menschen leben.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Abfälle werden einfach in Flüsse abgeleitet und gelangen damit ins Trinkwasser der Slums, worunter tausende Leute leiden müssen und vereinzelt Mutationen auftreten.");
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Warum machst du mir Vorwürfe?");
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, VisualNovel.gameProgress.playername + " dachte drüber nach, was Sona jetzt tun würde.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Ich bin keine Lügnerin.");
        let choicesx = {
            a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
        };
        let selectedChoiceUnused = await VisualNovel.ƒS.Menu.getInput(choicesx, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Was soll das?");
        let choicesxy = {
            a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
        };
        selectedChoiceUnused = await VisualNovel.ƒS.Menu.getInput(choicesxy, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Ich mach die Welt besser!");
        let choicesxyc = {
            a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
        };
        selectedChoiceUnused = await VisualNovel.ƒS.Menu.getInput(choicesxyc, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "AHHHHHHHH!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.terrified, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        let choicescxy = {
            a: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            b: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
            c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin.",
        };
        selectedChoiceUnused = await VisualNovel.ƒS.Menu.getInput(choicescxy, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        console.log(selectedChoiceUnused);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Warnung, System überlastet.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Vollständiger System-Blackout in 10 Sekunden.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.sad, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        let choices4 = {
            a: "Okay, ich hör auf, was ist dein Plan?",
            b: "*Blackout abwarten.*",
            c: "Lügnerin, Lügnerin, Lügnerin, Lügnerin, Lügnerin!",
        };
        let selectedChoice4 = await VisualNovel.ƒS.Menu.getInput(choices4, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice4 == choices4.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Als würde ich euch das verraten!?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "System-Blackout ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Du hast keine Informationen von Alice erhalten.");
            let currentScenceId = "012";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice4 == choices4.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "System-Blackout ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Du hast keine Informationen von Alice erhalten.");
            let currentScenceId = "012";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice4 == choices4.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.mad, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Pass nur auf, sobald ich in OmegaXV die IG vollständig beseitigt habe, werdet ihr schon sehen, wer der Lügner ist!!!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "System-Blackout");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Nachdem Alice einen Teil von sich selbst löscht, kontaktiert " +
            VisualNovel.gameProgress.playername +
            " Dr. Miller und informierte ihn über OmegaXV. ");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Dr. Miller schickte daraufhin Sofi und " +
            VisualNovel.gameProgress.playername +
            " nach OmegaXV, um sich einen Überblick über die Situation zu machen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sprecher, "Lea und Aiko blieben auf Trojoko und arbeiteten an einer anderen heißen Spur.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.ig1, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene11 = NeueSzene11;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene12() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.hvd1, 1, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.dos);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Ich weiß nicht, ob ihr schon mitbekommen habt, aber die LG schickt eine Gruppe Forscher nach OmegaXV.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.normal, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Ich möchte, dass dieses Schiff das Ziel nie erreicht, habt ihr das verstanden?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.talk, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.chan, VisualNovel.characters.chan.pose.normal, VisualNovel.ƒS.positionPercent(30, 130));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Wir haben verstanden, ich habe bereit unseren Kontakt informiert.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Ich mach mich mit den Jungs gleich auf den Weg.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jin, VisualNovel.characters.jin.pose.normal, VisualNovel.ƒS.positionPercent(15, 130));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Alles klar, wir werden sie nicht enttäuschen.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sun, VisualNovel.characters.sun.pose.normal, VisualNovel.ƒS.positionPercent(45, 130));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sun, "Auf keinen Fall!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "In der Zwischenzeit sind Sofi, David und " +
            VisualNovel.gameProgress.playername +
            " am Raumhafen angekommen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Am Raumhafen wartet ein Schiff auf sie, welches sie auf den Planeten OmegaXV bringt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.jin);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sun);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.hvd1, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene12 = NeueSzene12;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene13() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.space, 1, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.schiff);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.igPilotin, VisualNovel.characters.igPilotin.pose.happy, VisualNovel.ƒS.positionPercent(15, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Der Flug zu OmegaXV wird etwa 3 Stunden dauern.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Ist das euer erster Flug mit einem Raumschiff?");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Nicht wirklich, mein Vater ist ein erfolgreicher Geschäftsmann!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.igPilotin);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.igPilotin, VisualNovel.characters.igPilotin.pose.neutral, VisualNovel.ƒS.positionPercent(15, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Somit hatte ich schon einige Möglichkeiten, verschiedene Planeten zu besuchen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        let choices = {
            a: "Ja, das ist mein erster Flug.",
            b: "Nein, ich habe schon mindestens 100 Stunden im Flugsimulator verbracht.",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Keine Angst, bis auf Weltraumpiraten, Asteroiden oder Sabotage gibt es nichts, wovor du Angst haben musst.");
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.igPilotin);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.igPilotin, VisualNovel.characters.igPilotin.pose.happy, VisualNovel.ƒS.positionPercent(15, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Nicht schlecht, dann kannst du den Vogel ja fliegen?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Lieber nicht.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ja, bitte fliegen sie den Vogel, wenn " +
                VisualNovel.gameProgress.playername +
                " fliegt, kommen wir sicher nicht heil an.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Okay, besser ist es, wenn ich flieg.");
        }
        let choices1 = {
            a: "Sofi, was wartet wohl auf OmegaXV auf uns?",
            b: "*Ein Nickerchen machen*",
        };
        let selectedChoice1 = await VisualNovel.ƒS.Menu.getInput(choices1, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice1 == choices1.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ich weiß nicht, mein Vater meinte, dass auf diesem Planeten so gut wie das gesamte Erdöl der Internationalen Gemeinschaft gefördert wird.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich habe davon schon mal gelesen, angeblich ist die Luft durch die Förderanlagen total verunreinigt.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Wenn interessiert die Luft, stell dir mal vor, wie viel Geld man mit den Förderanlagen verdienen kann.");
        }
        else if (selectedChoice1 == choices1.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Wie kannst du jetzt schlafen? Es könnte dein letztes Nickerchen gewesen sein");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Was meinst du damit?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ach nichts, das habe ich nur so gesagt.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.igPilotin);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene13 = NeueSzene13;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene14() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.schiff);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.igPilotin);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du nutzt die Zeit und schaust die auf dem Schiff um.");
        // Gives player answer choices and lets player choose
        let choices = {
            a: "*Mit der Pilotin reden*",
            b: "*Auf dem Passagierdeck umschauen*",
            c: "*Im Rechenzentrum umschauen*",
            d: "*Im Frachtraum umschauen*",
            e: "*Im Tankraum umschauen*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wie lange arbeiten sie schon für IG");
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.igPilotin, VisualNovel.characters.igPilotin.pose.sad, VisualNovel.ƒS.positionPercent(15, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Ich war im großen Krieg, bevor Trojoko zu einer friedlichen Stadt wurde, Kampfpilotin eines ZPF-3 Kampffliegers.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Nach dem Krieg kam ich zu der IG und wurde Transportpilotin, das müsste jetzt auch schon wieder 25 Jahre her sein.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.igPilotin);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.igPilotin, VisualNovel.characters.igPilotin.pose.neutral, VisualNovel.ƒS.positionPercent(15, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Sind sie gern Pilotin?");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.igPilotin);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.igPilotin, VisualNovel.characters.igPilotin.pose.happy, VisualNovel.ƒS.positionPercent(15, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Ich liebe das fliegen, als Kampfpilotin war es etwas merkwürdig, aber jetzt als Transportpilotin gibt es nichts Schöneres.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wie lang brauchen wir noch bis OmegaXV?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wir haben die hälfte geschafft, noch etwas Geduld.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Plötzlich eine Explosion.");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.igPilotin);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "015";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du betrachtest Sofi näher.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sofi verhält sich anders als sonst.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sofi sitzt in einer Ecke und hämmert etwas in ihren Computer.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Süß die Kleine.");
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Was hast du alter Sack gerade gesagt?");
            // Animates character
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.middleToLeft(50, 100, 20, 100));
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.leftToRight(20, 100, 80, 100));
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.rightToMiddle(80, 100, 50, 100));
            await VisualNovel.ƒS.update();
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Nichts nichts, ich muss los.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Scheint schlechte Laune zu haben, ich lasse sie lieber in Ruhe.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Plötzlich eine Explosion.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.update(1);
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            let currentScenceId = "015";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.c) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername + " fühlt sich hier sehr familiär.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Überall Server und bunte Lichter die blinken.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Frag mich nichts Genaues, ich kenn mich damit nichts aus ...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Im letzten Semester habe ich Raumfahrttechnik gegen Hauswirtschaft getauscht.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du gehst an einen der PCs und versuchst dich einzuloggen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Log-in Daten fehlerhaft, System gesperrt.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Könntest du die Finger bitter vom Hauptrechner lassen!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Plötzlich eine Explosion.");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "015";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.d) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Ein Raum voller Kisten.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "In den Kisten befindet sich Werkzeug, mit dem " +
                VisualNovel.gameProgress.playername +
                " nichts anfangen kann.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Plötzlich eine Explosion.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
            await VisualNovel.ƒS.update(1);
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            let currentScenceId = "015";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.e) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Ein riesiger Tank erstreckt sich durch den kompletten Raum.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Ins Auge sticht ein großes, leicht entzündliches Zeichen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Am Mittelpunkt des Tanks ist ein kleiner 4-eckiger Kasten befestigt.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "5:00");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "4:59");
            // Animates character
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.middleToLeft(50, 100, 20, 100));
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.leftToRight(20, 100, 80, 100));
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.rightToMiddle(80, 100, 50, 100));
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "4:58");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "4:57");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "4:56");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername +
                " kennt sich überhaupt nicht mit Bomben aus, er erkennt aber, dass es eine ist.");
        }
        let choices2 = {
            a: "Bombe entschärfen",
            b: "*Zurück zum Passagierdeck*",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du hast keine Ahnung, wie das geht, die Bombe explodiert.");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            let currentScenceId = "015";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Zurück auf dem Passagierdeck bemerkt " +
                VisualNovel.gameProgress.playername +
                ", dass Sofi und David verschwunden sind.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "2:40");
        }
        let choices3 = {
            a: "*Pilotin informieren*",
            b: "*Fluchtkapsel suchen*",
        };
        let selectedChoice3 = await VisualNovel.ƒS.Menu.getInput(choices3, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice3 == choices3.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "2:00");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Hinten im Flieger ist eine Bombe.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Wo hinten? Wir müssen das Schiff sofort verlassen!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "0:50");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Hinten an den Tanks, okay, wo sind die Fluchtkapseln?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "0:10");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Hinten auf dem le….");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "0:00");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.igPilotin, "Du bist in den Weiten des Weltalls gestorben.");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            let currentScenceId = "015";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices3.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "2:00");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du kennst dich auf dem Schiff nicht aus.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "1:00");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Ganz hinten im Schiff findet " +
                VisualNovel.gameProgress.playername +
                " eine von 3 Fluchtkapseln.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Zwei sind bereits weg.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "0:10");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername +
                " schafft es im letzten Moment mit der Fluchtkapsel sich in Sicherheit zu bringen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Durch die massive Schockwelle stößt er seinen Kopf und wir bewusstlos.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.space, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene14 = NeueSzene14;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene15() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.space2, 1, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.hschiff);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.neutral, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "He dude, wach auf ...");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.luna, VisualNovel.characters.luna.pose.oh, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.luna, "Lasst ihn doch erstmal wieder langsam zu Bewusstsein kommen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.luna, "Er sieht süß aus.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.laura, VisualNovel.characters.laura.pose.sweat, VisualNovel.ƒS.positionPercent(25, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.laura, "Du mal wieder, nicht alle Zuckerstücke sind für dich.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Ich glaub, er wacht langsam auf.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wo bin ich?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.laura);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.laura, VisualNovel.characters.laura.pose.ee, VisualNovel.ƒS.positionPercent(25, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.laura, "Du bist auf einem neutralen Handelskreuzer");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.laura, "Wir sind gerade auf dem Weg Waren auf OmegaXV abzuholen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.laura, "Dort werden wir dich am IG Weltraum-Hafen absetzen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.smile, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Wir haben dich im Weltall aufgesammelt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Unser System hat eine massive Explosion gemeldet.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Unser Radar hatte 3 Signale ausgemacht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.neutral, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Bei einem der 3 Signale haben wir dich gefunden.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Den anderen Zwei werden vermutlich andere Schiffe geholfen haben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du bist noch nicht bei Kräften und wirst wieder bewusstlos.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.laura);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.luna);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene15 = NeueSzene15;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene16() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.krankenhaus);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du kommst langsam wieder zu Bewusstsein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Das Handelsschiff hat dich bei der Krankenstation abgeliefert.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Bei der Krankenstation wirst du von Natascha abgeholt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sie und John sind nach dem Zwischenfall sofort nach OmegaXV gefolgen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Wie konnte das passieren?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Es war eine Bombe am Tank angebracht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.angry, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.neutral, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Sabotage - muss ein Insider gewesen sein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Ja. Von diesem Flug wussten nur die Leute aus der Besprechung und Mei.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Wenn du gerade von Mei sprichst, wir sollten sie nicht warten lassen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich hätte noch Fragen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Die restlichen Fragen klären wir in der Zentrale.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Dort warten Mei, David und Sofi auf uns.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.space2, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene16 = NeueSzene16;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene17() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ig2, 0.2, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.omegaXV);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Zentrale der IG auf OmegaXV liegt genau im Zentrum der IG Fabrikstadt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Natascha und John bringen " + VisualNovel.gameProgress.playername + " in ein Büro.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Sehr schön, jetzt wo alle hier sind, würde ich mich kurz vorstellen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.surprised, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Mein Name ist Mei und ich bin die Anführerin der IG.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Es ist sehr bedauerlich, dass wir unter solchen Umständen zusammenkommen müssen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.sad, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Daher mach ich es kurz.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "John, Natascha - nehmen sie David fest.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Er steht unter dem Verdacht, die Bombe auf das Schiff gebracht zu haben.");
        // Animates character
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.middleToLeft(70, 110, 20, 110));
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.neutral, VisualNovel.ƒS.positionPercent(78, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Du Drecksau, ich hab dich meiner Frau und den Kindern vorgestellt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.leftToRight(20, 110, 70, 110));
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.david, VisualNovel.characters.david.pose.angry, VisualNovel.ƒS.positionPercent(25, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.david, "Ich bin unschuldig!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.sad, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Klar, die Pilotin hat sich selbst in die Luft gesprengt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Oder willst du mir sagen, die Kinder waren es?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Deine Fluchtkapsel war die erste, die das Schiff verlassen hat.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Bringt ihn weg! Ich möchte ihn nicht mehr sehen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Wie sie befehlen!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.david, "Ihr seid nicht besser als wir!!!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.david, "Es ist zu spät! Der Virus ist bereits im System.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Die Sau lädt gerade etwas ins System, zieht den USB-Stick aus dem RECHNER!!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.david, "Viel zu spät, der Virus ist bereits im System und braucht nur noch einen kurzen Moment, bis er sich entfaltet.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.david);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Sofi, " + VisualNovel.gameProgress.playername + ", unternehmt etwas!!!");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ich weiß nicht, was.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene17 = NeueSzene17;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene18() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.omegaXV);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.update(1);
        let choices = {
            a: "Ich weiß nicht, was.",
            b: "*Das Problem näher betrachten*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Virus breitet sich im System aus.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Puffff ... das war es mit den Öl beständen.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Computer wirkt noch normal, vereinzelt kommt es zu einem eingefrorenen Bildschirm.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Konsole ist offen.");
        }
        let choices1 = {
            a: "*In die Konsole System.out.println(Hello World!) eingeben.*",
            b: "*Verschieden Methoden ausprobieren, die du kennst.*",
        };
        let selectedChoice1 = await VisualNovel.ƒS.Menu.getInput(choices1, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice1 == choices1.a) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Ist das dein Ernst?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Netter versuch, verabschiedet euch schon mal voneinander, ihr werdet hier alle sterben.");
        }
        else if (selectedChoice1 == choices1.b) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Netter versuche, verabschiede euch schon mal voneinander, ihr werdet hier alle sterben.");
        }
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "WAS!!!! Sterben? Mir ist doch etwas eingefallen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Weg da jetzt, ich habe keine Lust zu sterben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Unternehmt doch etwas ... das wäre nicht nur das Ende von uns, sondern auch für die gesamte Internationale Gemeinschaft.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "HA! Ich habe es.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Was zum Teufel ist das ...");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.dark, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Hier sollte es so was nicht geben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ahm, ich meine, hier ist etwas, was ich nicht verstehe ...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Es sieht aus wie ein Rätsel.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, VisualNovel.gameProgress.playername +
            ", helf mir SCHNELL. Da die Sicherheits-Verschlüsslung des Kernprogramms offen ist, können wir die Ausbreitung verhindern.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Versuch es nur. Das wird euch dieses Mal nicht gelingen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Über den Stick wurde eine Kopie meines Hauptprogramms importiert.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Die Installation ist fast abgeschlossen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Auf dem Bildschirm ist ein Rätsel zu erkennen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Du hast eine gefüllte Streichholzschachtel und kommst in einen leeren, kalten Raum, in dem sich nur ein Kohleofen, eine Petroleumlampe und ein Kamin steht. Was zündest du zuerst an?");
        // Gives player answer choices and lets player choose
        let choices2 = {
            a: "Kohleofen",
            b: "Petroleumlampe",
            c: "Streichholzschachtel",
            d: "Das Holz der Streichhölzer",
            e: "Ein Streichholz",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Um den Ofen zu entzünden, zündest du ein Streichholz an, oder nicht?");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Um die Petroleumlampe zu entzünden, zündest du ein Streichholz an, oder nicht?");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Um die Streichholzschachtel zu entzünden, zündest du ein Streichholz an, oder nicht?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.d) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Um das Holz zu entzünden, zündest du ein Streichholz an, oder nicht?");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.e) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Nicht schlecht, das Nächste wird nicht so einfach.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.dark, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Wer hat mich auf den Rechner geladen?");
        // Gives player answer choices and lets player choose
        let choices3 = {
            a: "John",
            b: "Natascha",
            c: "David",
            d: "Dr. Miller",
        };
        let selectedChoice3 = await VisualNovel.ƒS.Menu.getInput(choices3, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice3 == choices3.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch!");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice3 == choices3.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch!");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice3 == choices3.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.terrified, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Mist Mist Mist ...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Mist!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Verdammter Mist.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Das bekommst du nie raus!");
        }
        else if (selectedChoice3 == choices3.d) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Echt jetzt? Der war schon lang nicht mehr dabei!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch!");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Verschlüsselung wurde zur Hälfte gelöst.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Ist das Glas halb leer oder ist es halb voll?");
        let choices4 = {
            a: "Halb voll.",
            b: "Halb leer.",
        };
        let selectedChoice4 = await VisualNovel.ƒS.Menu.getInput(choices4, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice4 == choices4.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Mit gefällt deine Einstellung.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Verdammt!");
        }
        else if (selectedChoice4 == choices4.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch.");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Okay, pass auf, ich wette, das bekommst du nicht raus.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Welche Farbe hat ein Spiegel?");
        // Gives player answer choices and lets player choose
        let choices5 = {
            a: "Weiß",
            b: "Rot",
            c: "Blau",
            d: "Schwarz",
            e: "Gelb",
            f: "Grün",
            g: "Pink",
            h: "Mischung aus Blau und Pink",
            i: "Morgen esse ich Äpfel.",
        };
        let selectedChoice5 = await VisualNovel.ƒS.Menu.getInput(choices5, "decision"); // This choice does not influence game progress
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        console.log(selectedChoice5);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "HAHAHAHA");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch ...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Du hast verloren.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "GAME OVER!!!!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Fehler, unlösbare Frage festgestellt, Anfrage auf komplette Zerstörung des Planeten verwehrt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Bitte noch mal versuche.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Verdammt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.dark, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Glück gehabt, okay letzter Versuch.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, VisualNovel.gameProgress.playername +
            " hält Strauße und Schafe. Insgesamt 80 Stück. Zusammen haben alle Tiere 220 Beine. Wie viele Strauße hat " +
            VisualNovel.gameProgress.playername +
            "?");
        // Gives player answer choices and lets player choose
        let choices6 = {
            a: "30",
            b: "40",
            c: "50",
            d: "60",
        };
        let selectedChoice6 = await VisualNovel.ƒS.Menu.getInput(choices6, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice6 == choices6.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch!");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice6 == choices6.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch!");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice6 == choices6.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.terrified, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "NEEEEIIIIIIIIINNNNN.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Wie konntest du nur diese Aufgabe lösen ...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Verdammter Mist.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Kernprogamm wurde entschlüsselt.");
        }
        else if (selectedChoice6 == choices6.d) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch!");
            VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine gewaltige Explosion erschüttert den Planeten.");
            let currentScenceId = "019";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Sehr gut, weg da, ich übernehme das von hier an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Du? Was machst du ...");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Programm abgeschaltet.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Sehr gut, Sofi, ich konnte gar nicht mehr klar denken vor lauter Angst.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Du und " + VisualNovel.gameProgress.playername + " habt unser Leben gerettet.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ja ja, ich wollt selber auch nicht sterben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Wir sind fertig hier? Ich würde gern zurück nach Trojoko.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Das trifft sich gut, ich möchte gern, dass ihr diesen USB-Stick den Wissenschaftlern in Trojoko gebt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Kein Problem, ich nehme ihn.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Eigentlich hätte ich gern, dass " +
            VisualNovel.gameProgress.playername +
            " ihn nimmt und sich nochmals genauer anschaut.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Mhh ... okay.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ich geh dann schon mal raus, ich brauch etwas Luft.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Sehen uns auf dem Schiff.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sofi verlässt den Raum und du bist mit Mei Misaki Noranus allein.");
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene18 = NeueSzene18;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene19() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.omegaXV);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Ich muss sagen, ich vertrau Sofi nicht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Sie wusste auf einmal, als es um ihr Leben ging, viel zu gut, was zu tun ist.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.neutral, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Bevor ich dir den USB-Stick gebe, der vermutlich das Schicksal von Trojoko entscheidet, hätte ich noch ein paar Fragen, um zu verstehen, wie du eigentlich zu uns stehst.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername +
            " war etwas angespannt, als würden diese Fragen sein weiteres Schicksal beeinflussen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Wie ist deine Einstellung zu unserem Abbau von Öl hier auf diesem Planeten?");
        // Gives player answer choices and lets player choose
        let choices = {
            a: "Hauptsache Kohle.",
            b: "Ich habe hierzu keine wirkliche Meinung.",
            c: "Ihr zerstört die Natur mit den Fabriken.",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
            VisualNovel.gameProgress.playerScore -= 30;
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
            VisualNovel.gameProgress.playerScore += 30;
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.neutral, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Ich weiß, dass du keiner Fraktion angehörst, welche interessiert dich am meisten?");
        let choices2 = {
            a: "Trojoko",
            b: "Internationale Gemeinschaft ",
            c: "Eine andere Organisation",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
            VisualNovel.gameProgress.playerScore += 30;
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
        }
        else if (selectedChoice2 == choices2.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.sad, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
            VisualNovel.gameProgress.playerScore -= 30;
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.neutral, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Aus was für einem Impuls handelst du?");
        let choices3 = {
            a: "Schütz die Natur ",
            b: "Hauptsache Kohle ",
            c: "Wie es das Gesetz möchte.",
        };
        let selectedChoice3 = await VisualNovel.ƒS.Menu.getInput(choices3, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice3 == choices3.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
            VisualNovel.gameProgress.playerScore += 40;
        }
        else if (selectedChoice3 == choices3.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.sad, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
            VisualNovel.gameProgress.playerScore -= 40;
        }
        else if (selectedChoice3 == choices3.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Interessant.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Du brauchst nicht angespannt zu sein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Du bekommst den Stick von mir, du warst sehr ehrlich.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.caring, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Bist du eigentlich noch single? Du bist wirklich sexy!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Hättest du nicht mal Lust, mit mir auszugehen, sobald die Sache hier erledigt ist?");
        let choices4 = {
            a: "Klar geh ich mit dir aus!",
            b: "Ich will nur frische, knackige Frauen.",
            c: "Mein Herz gehört leider schon einer Anderen",
        };
        let selectedChoice4 = await VisualNovel.ƒS.Menu.getInput(choices4, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice4 == choices4.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
        }
        else if (selectedChoice4 == choices4.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            VisualNovel.gameProgress.playerScore -= 50;
        }
        else if (selectedChoice4 == choices4.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.sad, VisualNovel.ƒS.positionPercent(70, 110));
            await VisualNovel.ƒS.update(1);
            VisualNovel.gameProgress.playerScore += 50;
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.neutral, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Okay, das werde ich mir merken.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Hier ist der USB-Stick.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername + " hat nun einen USB-Stick im Inventar.");
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.usb);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Eines noch, gebe den USB-stick auf keinen Fall Sofi.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.surprised, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Ich hatte sie anfangs auch im Verdacht bezüglich der Bombe.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Ihre Rettungskapsel ist kurz nach Davids gestartet.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.neutral, VisualNovel.ƒS.positionPercent(70, 110));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Fliege mit John und Natascha zurück nach Trojoko und gib den USB-stick den Wissenschaftlern und keinem Anderen!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Mithilfe des USB-Sticks sollten die Wissenschaftler in der Lage sein, den Virus unschädlich zu machen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Aiko und Lea haben mit den Wissenschaftlern ein Programm geschrieben, welches in der Lage ist, den Virus vollständig zu scannen und eine Gegenmaßnahme einzuleiten. ");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Geh jetzt bitte zu Sofi, sie wartet unten beim Schiff.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Zudem wurde der Netzzugang neu verschlüsselt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Geh jetzt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.ig2, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene19 = NeueSzene19;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene20() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.Light_Ambience_4, 0.7, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.schiffschlaf);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Es ist Abend, als ihr losfliegt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Dieses Mal fliegen sie mit einem  Handelsschiff zurück.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Alle sind auf ihrem Zimmer und schlafen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "He, bist du noch wach?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ich fand es supermännlich von dir, als du uns alle gerettet hast.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassed2, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Deswegen wollte ich mich nochmals bei dir bedanken.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassed, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Würdest du mir kurz den USB-Stick geben? Ich würde gern etwas prüfen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassed2, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        // Gives player answer choices and lets player choose
        let choices = {
            a: "Was machst du um die Uhrzeit noch? Kann das nicht warten?",
            b: "Das habe ich doch gern gemacht.",
            c: "Das habe ich nur für dich gemacht.",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Nein, ich musste dich unbedingt sehen und gleich noch etwas Arbeit mit aufs Zimmer nehmen.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassed, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Du bist ja so unglaublich süß!");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassed, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Du bist ja so unglaublich süß!");
            VisualNovel.gameProgress.playerScore -= 10;
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Gibst du mir noch den USB-Stick?");
        // Gives player answer choices and lets player choose
        let choices1 = {
            a: "Lass uns das Morgen klären.",
            b: "Kommt drauf an, was ich dafür bekomme.",
            c: "Nein.",
        };
        let selectedChoice1 = await VisualNovel.ƒS.Menu.getInput(choices1, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice1 == choices1.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Wie wäre es denn, wenn ich dich anderweitig überzeuge.");
            VisualNovel.gameProgress.playerScore += 10;
        }
        else if (selectedChoice1 == choices1.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Wie wäre es denn, wenn ich dich anderweitig überzeuge.");
            VisualNovel.gameProgress.playerScore -= 20;
        }
        else if (selectedChoice1 == choices1.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Wie wäre es denn, wenn ich dich anderweitig überzeuge.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassedA2, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Gefällt es dir?");
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassedA2, VisualNovel.leftToRight(20, 100, 30, 100));
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassedA2, VisualNovel.rightToMiddle(30, 100, 20, 100));
        await VisualNovel.ƒS.update();
        // Gives player answer choices and lets player choose
        let choices2 = {
            a: "Du siehst verdammt scharf aus.",
            b: "Nein, mein Herz gehört einer Anderen.",
            c: "Rede weiter ...",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassedA1, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Das kann noch viel schärfer werden!.");
            VisualNovel.gameProgress.playerScore -= 20;
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassedA1, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Bist du dir sicher, du kannst heute von mir haben, was du willst, wenn du mir den USB-Stick gibst ...");
            VisualNovel.gameProgress.playerScore += 20;
        }
        else if (selectedChoice2 == choices2.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.embarrassedA1, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ich gebe dir eine unvergessliche Nacht und du mir den USB-Stick.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile2, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Deine Entscheidung, gibst du mir den USB-Stick?");
        // Gives player answer choices and lets player choose
        let choices3 = {
            a: "*Sofi den USB-Stick geben*",
            b: "*Sofi belügen, um zu bekommen, was sie verspricht, ihr aber nicht den USB-Stick geben.*",
            c: "*Sofi aus dem Zimmer werfen*",
        };
        let selectedChoice3 = await VisualNovel.ƒS.Menu.getInput(choices3, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice3 == choices3.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sofi flüchtet mit dem USB-Stick.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "021";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice3 == choices3.b) {
            VisualNovel.gameProgress.playerScore -= 100;
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Na, wie hat dir das gefallen?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Gibst du mir den USB-Stick noch?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Nein, und jetzt geh!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Du ekelhaftes Schwein!!!");
        }
        else if (selectedChoice3 == choices3.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(20, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Du kannst mich mal!");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Als Sofi gegangen war, legte sich " +
            VisualNovel.gameProgress.playername +
            " hin und schläft ein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Bis plötzlich ein Geräusch über die Sprechanlage zu hören war.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.Light_Ambience_4, 0, 1, false);
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.space3, 1, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Alle auf die Brücke!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Tut mir leid für die Störung, aber wir werden angegriffen!!!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Das ist korrekt! Ergebt euch oder wir eröffnen das Feuer!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Wer spricht da?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Das braucht dich nicht zu kümmern, du Lackaffe.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sun, "Genau, ergebt euch oder sterbt!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sun, "Ihr habt 10 Minuten Zeit!");
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene20 = NeueSzene20;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene21() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.schiffbrücke);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Alle finden sich auf der Brücke ein, um eine Entscheidung zu treffen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Doch egal was die Entscheidung bringen sollte, das Schicksal hatte bereits entschieden!");
        // Gives player answer choices and lets player choose
        let choices2 = {
            a: "Gebt ihnen den USB-Sick!",
            b: "Wir kämpfen bis auf den letzten Mann!",
            c: "Lasst uns versuchen zu fliehen, Trojoko braucht den USB-Stick!",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        console.log("--------- Player score", VisualNovel.gameProgress.playerScore, "---------");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            // Depending on the gameProgress.playerScore, the positive or negative end is shown
            if (VisualNovel.gameProgress.playerScore <= 0) {
                return "end-negative";
            }
        }
        else if (selectedChoice2 == choices2.b) {
            if (VisualNovel.gameProgress.playerScore >= 0 && VisualNovel.gameProgress.playerScore <= 100) {
                return "023";
            }
        }
        else if (selectedChoice2 == choices2.c) {
            if (VisualNovel.gameProgress.playerScore >= 100) {
                return "end-positive";
            }
        }
        let currentScenceId = "022";
        VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
        return "game-over";
    }
    VisualNovel.NeueSzene21 = NeueSzene21;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene22() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.schiffbrücke);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.neutral, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Ja, in den Kampf!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.angry, VisualNovel.ƒS.positionPercent(25, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Ihr seid nicht die Hellsten, was?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Falls ihr es bemerkt habt, sind wir nur auf einem Handelsschiff.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Mist, du hast Recht, tut mir leid Schnucki.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Sehe ich aus wie dein Schnucki?");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.luna, VisualNovel.characters.luna.pose.smile, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.luna, "Das bringt uns alles nicht weiter.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.luna, "Das Stimmt! Wie brauchen ein Wunder.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Hier spricht die Sternenflotte Misaki, fliegen sie zu unserer Position.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Wir tauchen in wenigen Sekunden in ihrem D1 Sektor mit Verstärkung auf.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.happy, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Wir sind gerettet, das ist der Boss.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Habe ich das richtig verstanden? Die Misaki?");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.neutral, VisualNovel.ƒS.positionPercent(60, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Es handelt sich hier um ein Schiff der Alphaklasse mit regulärem Geleitschutz von mindestens 100 Schiffen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.happy, VisualNovel.ƒS.positionPercent(25, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Absolut korrekt, da hat jemand seine Hausaufgaben gemacht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Gut, dann steuer ich mal Richtung D1 und hoffe, dass die Schilde das aushalten.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.luna);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(50, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ich halte das für keine gute Idee, lass uns lieber ergeben.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.angry, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Die IG ergibt sich nicht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.neutral, VisualNovel.ƒS.positionPercent(60, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Alles klar, ab geht die Post.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Ihr wählt also den Tod, FEUER!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "FEUER!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.luna, VisualNovel.characters.luna.pose.smile, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.luna, "Stev, die Schilde halten den Beschuss nicht aus.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.luna, "Das unbekannte Schiff hat viel zu viel Feuerkraft.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.luna);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(50, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Wir werden alle sterben!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.neutral, VisualNovel.ƒS.positionPercent(60, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Was soll ich tun?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Dem Beschuss im Asteroidenfeld ausweichen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Sehr gute Idee, sie treffen uns nicht mehr so häufig.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Sind in Sichtweite, eröffnen das Feuer!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Capitain, dahinten ist gerade ein riesiges Schlachtschiff aufgetaucht, gefolgt von hunderten Jagtschiffen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Sofort den Rückzug einleiten!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sun, "Sie laden die Laser!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Schneller!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "FEUER!!!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.luna);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Ein Lichtstrahl hell wie die Sonne erleuchtet den dunklen, leeren Raum.");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Gefolgt von einer unbeschreiblichen Explosion.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mit diesem Laser hätte ein gesamter Planet ausgelöscht werden können.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Hier spricht die Misaki, Feind wurde erfolgreich eliminiert.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Wir werden ihr Schiff jetzt mit unserem Traktorstrahl auf unser Schiff ziehen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Bleiben sie alle auf ihrem Schiff, bis wir in Trojoko gelandet sind.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Misaki brachte alle wohlbehalten nach Trojoko. Auf einem Militärstützpunkt gelandet, werden alle Passagierin bis auf Stev, Laura und Luna in einen großen Raum gebracht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.space3, 0, 1, false);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene22 = NeueSzene22;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene23() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ig3, 1, true);
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.igbase);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Das ist ja noch mal gut gegangen, " +
            VisualNovel.gameProgress.playername +
            " du hast hoffentlich noch den USB-Stick.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.surprised, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ja, den habe ich noch.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Sehr gut.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(40, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, VisualNovel.gameProgress.playername + ", dir geht es gut, ich bin ja so froh.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Können wir kurz das Wiedersehen verschieben, wir müssen noch kurz die ein oder andere Sache klären.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Solang wir die Sachen klären, sichern die Wissenschaftler bitte kurz die Daten auf diesen Stick, den " +
            VisualNovel.gameProgress.playername +
            " hat.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftlerin, VisualNovel.characters.wissenschaftlerin.pose.happy, VisualNovel.ƒS.positionPercent(40, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Wird erledigt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftler, "Ich bin gespannt, ob unser Programm funktioniert.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.lea, VisualNovel.characters.lea.pose.smile, VisualNovel.ƒS.positionPercent(20, 200));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.lea, "Ich hoffe, unsere Arbeit hat sich gelohnt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.surprised, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, VisualNovel.gameProgress.playername +
            ", ist dir die Reise über noch etwas Merkwürdige aufgefallen?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.lea);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.smile, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        let choices2 = {
            a: "Nein mir ist nichts aufgefallen.",
            b: "Sofi hat sehr offensiv versucht, an den USB-Stick heranzukommen.",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sofi kann unbemerkt wichtige Zugangsdaten stehlen und fliehen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Eine fremde Organisation übernimmt die Kontrolle über das gesamte Netz. Die Gesellschaft stürzt ins Chaos.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Was habe ich? Rede dich kein Müll!");
        }
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Er hat mich unsittlich angefasst, das hat er.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Erspar mich das Affentheater, John, nimm sie fest, bis wir genauere wissen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Wird gemacht Madam.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftlerin, VisualNovel.characters.wissenschaftlerin.pose.happy, VisualNovel.ƒS.positionPercent(40, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Ja, wir haben es.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Das Programm konnte den Virus fast vollständig analysieren. Hier gibt es nur noch eine kleine Hürde. Das sollte aber für " +
            VisualNovel.gameProgress.playername +
            " kein Problem sein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, VisualNovel.gameProgress.playername +
            " löse die letzte Hürde und sicher dir ein Platz ganz oben in der IG.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wird erledigt!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Du hast mich vielleicht zwei Mal ausgetrickst, dieses Mal wirst du es nicht schaffen");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Kritisches Programm blockiert bitte wählen sie die Korrekten antworten zur Freigabe.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.dark, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Verrat doch gleich die Lösungen, dumme Kuh.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Welches Tierkreiszeichen läuft vom 23. August bis 22. September?");
        let choices = {
            a: "Löwe",
            b: "Jungfrau",
            c: "Wage",
            d: "Scorpion",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Wild Wahl leider falsch. Verloren ");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.dark, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Sehr gut, das Nächste wird schwerer.");
        }
        else if (selectedChoice == choices.c) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch. Verloren ");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.d) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch. Verloren ");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Wie viele Zähne hat ein erwachsener Mensch normalerweise?");
        let choices3 = {
            a: "26",
            b: "30",
            c: "32",
            d: "36",
        };
        let selectedChoice3 = await VisualNovel.ƒS.Menu.getInput(choices3, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice3 == choices3.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Tut mir leid, du hast Zuwenig Biss.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice3 == choices3.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Tut mir leid, du hast Zuwenig Biss.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice3 == choices3.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.dark, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Du hast ziemlich biss.");
        }
        else if (selectedChoice3 == choices3.d) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Tut mir leid, du hast Zuviel Biss.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Wie ist der richtige Name deiner neuen Anführerin?");
        let choices4 = {
            a: "Mei Misaki Hippiebus",
            b: "Mei Misaki Uranus",
            c: "Mei Misaki Noranus",
            d: "Mei Misaki Noranis",
        };
        let selectedChoice4 = await VisualNovel.ƒS.Menu.getInput(choices4, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice4 == choices4.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch. Verloren ");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice4 == choices4.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch. Verloren ");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice4 == choices4.c) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.terrified, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Nein! Das kann nicht sein!");
        }
        else if (selectedChoice4 == choices4.d) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.alice, "Leider falsch. Verloren ");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "024";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.dark, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Kritische Programmebene wurde erfolgreich freigegeben.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(30, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Unglaublich, wie du das gemacht hast.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich übernehme von hier an.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.wissenschaftlerin, VisualNovel.characters.wissenschaftlerin.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.wissenschaftlerin, "Unglaublich, das hätte ich niemals hinbekommen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.wissenschaftlerin);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Der Junge hat Pfiff!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(30, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich habe jetzt die vollständige Kontrolle, " +
            VisualNovel.gameProgress.playername +
            ", was soll ich tun.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich deaktiviere den Virus.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.alice, VisualNovel.characters.alice.pose.terrified, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Leite Gegenmaßnahmen ein.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Bitte warten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Antikörper gegen den Virus werden ins System geladen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Virus wurde erfolgreich eingegrenzt und eingesperrt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.alice);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.system, "Gegenmaßnahmen sind erfolgreich,");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mei, VisualNovel.characters.mei.pose.angry, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mei, "Ihr habt es geschafft!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mei);
        await VisualNovel.ƒS.update(1);
    }
    VisualNovel.NeueSzene23 = NeueSzene23;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function NeueSzene24() {
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.weg1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeLeftToRight.duration, VisualNovel.transitions.wipeLeftToRight.alpha, VisualNovel.transitions.wipeLeftToRight.edge);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Virus wurde erfolgreich mit der Hilfe von " +
            VisualNovel.gameProgress.playername +
            " beseitigt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Wissenschaftler programmierten den Virus für ihre Zwecke um.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mei bietet Aiko und " +
            VisualNovel.gameProgress.playername +
            " einen Job bei der IG an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sie nehmen das Angebot dankend an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Kurze Zeit später gelang es der IG mithilfe von Alice eine unbekannte Organisation im Schatten aufzuspüren und zu beseitigen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Es stellte sich heraus, dass diese Organisation die Schuldigen hinter den Angriffen waren. Sofi und David gehörten dieser Organisation an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko verließ die IG und " +
            VisualNovel.gameProgress.playername +
            " verlor den Kontakt, als die IG begann, ihre Industrie-Leistung zu verdreifach – mit der Hilfe von Alice. ");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Darunter litten die Bewohner und der Plant stark, was Aiko nicht unterstützen wollte.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.gameProgress.playername +
            " fand gefallen an der Rolle bei der IG. Ein Bürgerkrieg begann und die Rebellen lehnten sich gegen die Machthaber auf.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sie hatten aber keine Chance gegen die IG und Alice.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Doch hat sich nichts wirklich verändert seit dem Beginn der Reise.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die größte Veränderung durchzog " +
            VisualNovel.gameProgress.playername +
            ". " +
            VisualNovel.gameProgress.playername +
            " ist nicht mehr dieselbe Person wie vor den Erlebnissen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Alte Gewohnheiten kamen nach und nach wieder und das Leben fuhr fort, nur unter einer unangefochtenen Führung.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mit der Verdreifachung der Leistung der Fabriken kippte das fragile Ökosystem von Trojoko vollständig!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Nach einem Jahr im Paradis brach die Umwelt vollständig zusammen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Auf dem Planeten brachen tiefe Felsspalten auf. Und sobald nur die Haut mit der Luft in Kontakt kam, gab es schreckliche chemische Verbrennungen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Menschen verkrochen sich in gefilterten Bunkern und warteten auf ein Wunder.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Doch für ein Wunder war es jetzt zu spät.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(1);
        return "thanks-for-playing";
    }
    VisualNovel.NeueSzene24 = NeueSzene24;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndNegative() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.hvdSchiff);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.chan, VisualNovel.characters.chan.pose.angry, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Nehmt sie alle gefangen bis auf " + VisualNovel.gameProgress.playername);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Du hast dich mehr als nützlich erwiesen, der Boss würde dich gern sprechen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Das hat " + VisualNovel.gameProgress.playername + " wirklich mehr oder weniger ...");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jin, VisualNovel.characters.jin.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Wie ich gehört hab, durftest du Sofi etwas freizügiger sehen, nicht schlecht.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(70, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Halt die Schnauze!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du fliegst mit Chan zurück nach Trojoko.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.jin);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.space3, 0, 1, false);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the negative end
    }
    VisualNovel.SceneEndNegative = SceneEndNegative;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndNegative2() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.dos);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.hvd2, 2, true);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.chan, VisualNovel.characters.chan.pose.happy, VisualNovel.ƒS.positionPercent(20, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Da sind wir im Herzstück unserer Organisation. ");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Willkommen in der Zentrale von der Hand von DoS.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, VisualNovel.gameProgress.playername);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, VisualNovel.gameProgress.playername);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, VisualNovel.gameProgress.playername);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.normal, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Du warst mir fast nützlicher als Sofi.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(40, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Auf keinen Fall!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Halt deine Schnauze, hat irgendjemand mit dir geredet?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Du redest nur, wenn du gefragt wirst.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Hast du das verstanden?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.smile, VisualNovel.ƒS.positionPercent(40, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "JA BOSS!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Das will ich doch hoffen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Tut mir leid, dass David dich fast getötet hätte.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.normal, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Chan, bring mir die Gefangenen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.chan, VisualNovel.characters.chan.pose.normal, VisualNovel.ƒS.positionPercent(20, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Wird gemacht Boss!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Du musst mir noch einen Gefallen tun.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Diese Dummnudel namens Aiko hat mit den Wissenschaftlern den Zugang zum Hauptnetz neu verschlüsselt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Ein helles Köpfchen wie du, hat vermutlich schon bemerkt, dass wir den Virus neu aufbereitet haben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Leider sind meine Jungs nicht die Hellsten und David, der ein Händchen dafür hat, sitzt auf OmegaXV im Gefängnis.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Knacke den Code oder überzeug Aiko, dass sie dir verrät, wie man ins System kommt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.normal, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Ich muss wohl nicht erwähnen, dass ein Misserfolg inakzeptabel wäre!!!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Oder vielleicht doch?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich Regel die Sache Boss!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Sehr gut!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Jin schickt Aiko hier rein, wir warten draußen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Was ist hier los?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich habe so furchtbare Angst.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.angry, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Was werden die mit uns tun? Wo ist Lea und Sofi?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Sofi ist draußen und Lea habe ich bis jetzt noch nicht gesehen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, " Kannst du mir sagen, was ihr da genau entwickelt habt die letzten Tage?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.talk, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Warum willst du in so einer Situation über so etwas reden?");
        let choices2 = {
            a: "Wir zwei sind doch beste Freude oder nicht? Vertrau mir einfach und sag mir, wie ich eure Sperre umgehen kann.",
            b: "*Aiko drohen*",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.happy, VisualNovel.ƒS.positionPercent(70, 150));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Okay, du hast Recht, vermutlich hast du einen Plan, aber nicht die Zeit, ihn mir zu erklären.");
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko bemerkt, dass es dir nur um den Netzzugang geht.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sie redet nicht mehr mit dir.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Was für eine Enttäuschung.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mike schickt dich mit Chan vor dir Tür, du kommst nicht zurück. ");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "end-negative2";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko erzählt dir, wie man die Sperre umgehen kann und Skarn nutz die Informationen, um den Virus endgültig ins System einzuschleusen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.angry, VisualNovel.ƒS.positionPercent(70, 150));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Wie kannst du nur!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Sehr gut gemacht " + VisualNovel.gameProgress.playername);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Du wirst es bei uns bis nach ganz oben schaffen!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Wir haben gesiegt!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the negative end
    }
    VisualNovel.SceneEndNegative2 = SceneEndNegative2;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndNegative3() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.weg1);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Alice hat nun Zugriff auf alles, was in Trojoko geschieht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Unter der Kontrolle von Skarn manipulieren sie nun alles und jeden, wie es ihnen gefällt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Unter der Behauptung Trojoko Rebellen seien schuld, begann IG eine großangelegte Säuberung, worauf hin ein Bürgerkrieg ausbrach.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Bei mehreren Anschlägen auf beiden Seiten vielen die führenden Persönlichkeiten - und was zurückblieb waren Chaos, Leid und Verderben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Im Moment der Verzweiflung erhob sich Skarn aus dem Schatten und konnte die Probleme, die er selbst verursacht hatte, beheben.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Durch das gewonnen Vertrauen wählten sie ihn zum Oberhaupt der Neuen Welt mit dir an seiner Seite.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Das Leben war gut. Geld, Frauen, Ansehen. Wirklich nichts, was euch sorgen bereiten würde.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Doch hat sich nichts verändert.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Alte Gewohnheiten kamen nach und nach wieder und das Leben fuhr fort, nur unter einer anderen Führung.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mit der Wiederaufnahme der Fabriken der IG kippte alles!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Nach einem Jahr im Paradis brach die Umwelt vollständig zusammen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Auf dem Planeten brachen tiefe Felsspalten auf. Und sobald nur die Haut mit der Luft in Kontakt kam, gab es schreckliche chemischen Verbrennungen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Menschen verkrochen sich in gefilterten Bunkern und warteten auf ein Wunder.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Doch für ein Wunder war es jetzt zu spät.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the negative end
        return "thanks-for-playing";
    }
    VisualNovel.SceneEndNegative3 = SceneEndNegative3;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.schiffbrücke);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Der Meinung bin ich überhaupt nicht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Gebt den Leuten den USB-Stick.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.sad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Ich stimme Sofi zu, fliehen wäre Selbstmord.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.neutral, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Ich finde seine Idee gar nicht so schlecht. Ein paar Klicks weiter treibt Weltraumschrott, wodurch wir vor dem Beschuss geschützt sind.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.neutral, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Flucht ist für mich keine Option.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.natascha, VisualNovel.characters.natascha.pose.sad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.natascha, "Ich schlage vor, dass die Leute, die keine Lust haben zu sterben, die Fluchtkapseln bemannen und sich entweder ergeben oder versuchen, das Schiff zu übernehmen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.john, VisualNovel.characters.john.pose.sad, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.john, "Ich bin voll und ganz Nataschas Meinung.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ich komme mit euch.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.neutral, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "So soll es sein, wir versuchen zu flüchten!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "John, Natascha und Sofi verlassen das Schiff.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Alle festhalten, wünscht uns Glück.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Chan, das Schiff versucht zu flüchten und mehrere bemannte Fluchtkapseln kommen auf uns zu.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Ignoriert die Kapseln, verfolgt das Schiff.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sun, "Wird gemacht!");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.luna, VisualNovel.characters.luna.pose.smile, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.luna, "Das Schiff nimmt die Verfolgung auf.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "FEUER!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Sie feuern auf uns.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Keine Sorge, wie helfen euch.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sun, "Chan, ein weiteres Schiff taucht im Sektor auf.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Es sind Trojoko Rebellen, was sollen wir tun.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Zudem nährt sich eine IG Flotte.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Gut, wir drehen ab!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.stev, VisualNovel.characters.stev.pose.smile, VisualNovel.ƒS.positionPercent(80, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Sie drehen ab!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.unbekannt, "Kommt auf unser Schiff, eine große IG Flotte ist auf dem Weg hierher.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.stev, "Was sollen wir tun?");
        let choices = {
            a: "*Auf die IG Flotte warten*",
            b: "*Auf das Rebellenschiff gehen*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Ihr werden von einer gewaltigen IG Flotte nach Trojoko begleitet.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mei vertraut euch aber nicht und erklärt Sofi zur Leiterin des Projektes.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sofi missbraucht ihre Macht und spielt einer fremden Organisation zu");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.luna);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "end-positive";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.natascha);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.stev);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.john);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.luna);
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du begibst dich auf das Rebellenschiff, die restliche Crew bleibt auf dem Handelsschiff.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sie warten auf die IG Flotte.");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive = SceneEndPositive;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive10() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.end);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Doch schon einige Wochen nach der Abschaltung kam eine unglaubliche Furchtbarkeit zurück auf den Planeten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Bewohner bemerkten den Unterschied und stellten sich nach und nach auf die Seite der Rebellen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "IG musste einsehen, dass sie hier nicht mehr willkommen war und floh auf OmegaXV, der einige Monate später kollabierte und so gut wie die komplette Organisation auslöschte.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Unter der Führung Skaranas erlebte der Planet einen bisher nicht vorstellbaren Wohlstand, und das im Einklang mit der Natur.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die unbewohnbaren Zonen wurden nicht nur bewohnbar, sie brachten mehr landwirtschaftliche Güter als je zuvor hervor.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Menschen und Monster lebten glücklich miteinander.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko und " +
            VisualNovel.gameProgress.playername +
            " kamen zusammen und wenn sie nicht gestorben sind, dann leben sie noch heute.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
        return "thanks-for-playing";
    }
    VisualNovel.SceneEndPositive10 = SceneEndPositive10;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive2() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.rebellenSchiff);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Das war eine gute Entscheidung, wir müssen hier so schnell wie möglich weg. Eine gewaltige IG Flotte ist auf dem Weg hierher.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.suprised, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Sobald sie ein Rebellenschiff bemerken, eröffnen sie, ohne zu warten, das Feuer.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Wir müssen von hier weg.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die IG Flotte bemerkt eure Anwesenheit und eröffnet aus der Ferne das Feuer.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Kurz vor Trojoko werdet ihr multiple Male getroffen und stürzt über einem dir unbekannten Gebiet ab.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.space3, 0, 1, false);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive2 = SceneEndPositive2;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive3() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.absturz);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.tro, 1, true);
        // Shows background image / transitions into background image
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.angry, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Geht es dir gut?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Mehr oder weniger.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.scared, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Stell dich nicht so an, du bist ab heute ein Rebell.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Wir sind kurz vor der Maga City abgestürzt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Die Bewohner nennen das auch die alte Zone.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Das hier war damals der Regierungsbereich, bis das Gebiet durch die Luftverschmutzung der anliegenden Zonen unbewohnbar wurde.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Seit der Virus die Wirtschaft stagnieren lässt, kann man hier Gott sei Dank wieder atmen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.scared, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Wir müssen aufpassen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Aufgrund langanhaltender Verschmutzung haben sie ansässige Kreaturen stark verändert, um sich der menschenfeindlichen Umgebung anzupassen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Sobald wir aus dem Zentrum sind, können wir uns abholen lassen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "In der Basis wartet ein dir bekanntes Gesicht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wen meinst du?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Lass dich überraschen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Euer Weg führt euch durch eine menschenleere Stadt - leicht angewuchert von der zurückkommenden Natur.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Vorbei an verlassenen Häusern, Läden und Kaffees.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Ruinen aus einer Zeit, als alles noch etwas überschaubarer war und nicht überdimensioniert.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Plötzlich hört ihr stimmen aus einer verlassenen Bibliothek.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive3 = SceneEndPositive3;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive4() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.bib);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Sets speech speed in characters per millisecond
        VisualNovel.ƒS.Speech.setTickerDelays(60, 5000);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.blau, VisualNovel.characters.blau.pose.mad, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Halt Stopp!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Genau Stopp oder wir fressen euch auf.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.braun, VisualNovel.characters.braun.pose.happy, VisualNovel.ƒS.positionPercent(50, 90));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.braun, "Wir fressen doch keine Menschen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Schnauze, das wissen die doch nicht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Könnt ihr euch auch mal nicht streiten.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.blau);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.rot);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.braun);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.scared, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Bleib ruhig, das sind Abfallmonster.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Eine Reaktion der Natur auf die Verschmutzung.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Sie fressen eigentlich nur Müll, sind aber sehr launisch.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Dadurch können sie auch gefährlich werden, falls sie einen nicht mögen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Kein Problem, lass mich mit ihnen reden!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        await VisualNovel.ƒS.update(1);
        // Gives player answer choices and lets player choose
        let choices = {
            a: "Verschwindet ihr komischen Schleimkreaturen!",
            b: "Was macht ihr hier?",
            c: "Wir sind friedlich und nur auf der Durchreise.",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Den Monstern gefällt nicht, wie du sie genannt hast, sie greifen an.");
            let currentScenceId = "end-positive3";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.blau, VisualNovel.characters.blau.pose.mad, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Blau: Die bessere Frage ist, was macht ihr hier?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Wir haben hier schon seit Jahre keinen Menschen mehr gesehen.");
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(30, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Wir wollen hier keine Menschen");
        }
        else if (selectedChoice == choices.c) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.blau, VisualNovel.characters.blau.pose.mad, VisualNovel.ƒS.positionPercent(70, 100));
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(30, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Ich vertraue den Menschen nicht mehr.");
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Die letzten Menschen haben auf uns gefeuert.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wir haben nichts gegen euch. Wir wurden beim Anflug auf den Planeten abgeschossen und sind hier abgestützt.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.braun, VisualNovel.characters.braun.pose.happy, VisualNovel.ƒS.positionPercent(50, 90));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.braun, "Ich glaub, er sagt die Wahrheit, das muss die Explosion von vorher gewesen sein.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.blau);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.rot);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.braun);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Wir sind Trojoko Rebellen und kämpfen auch für euch.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Was meint er mit, wir kämpfen auch für euch.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wie Kämpfen gegen die Umweltverschmutzung des Planeten.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.blau);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.rot);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.braun);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.braun, VisualNovel.characters.braun.pose.angry, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.braun, "Habt ihr gehört, sie haben die gleiche Mission wie wir.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Wie wollt ihr das alleine machen?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wir haben einen USB-Stick, auf dem ist der Auslöser der Industrie ausfälle.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Ihr steht tatsächlich für dieselbe Sache ein wie wir.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Wir helfen euch!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.rot);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.blau);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Unfassbar, egal wo du hingehst, findest du Freunde.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.braun);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Müllmonster führen die Zwei durch eine einst so feindliche Zone.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Auf dem Weg freundeten sie sich mehr und mehr an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Unter der Führung der Monster und Skaskas kommt ihr schlussendlich am Rebellenversteck an.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.tro, 0, 1, false);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive4 = SceneEndPositive4;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive5() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.vorRebellen);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.tro2, 1, true);
        // Shows background image / transitions into background image
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Wir mögen keine geschlossenen Räume");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.blau, VisualNovel.characters.blau.pose.mad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Falls ihr uns sucht, wir sind draußen und essen etwas Müll.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.rot);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.blau);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive5 = SceneEndPositive5;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive6() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.rebellenBasis);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_r_smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Dir geht es gut, ich habe mir so große Sorgen um dich gemacht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Was machst du hier im Rebellenlager?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_talk, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Wir sind diesen Leuten schon mal begegnet.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Als wir auf dem Weg zur IG Zentrale waren.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Das ist korrekt. Aikos Eltern hatten uns mitgeteilt, dass ihr Kind an einem wichtigen IG Projekt arbeitet.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.scared, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Wir hatten schon früher nachgedacht, sie von unserer Sache zu überzeugen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Als du nach OmegaXV geflogen bist, nahm Skarana Kontakt zu mir auf.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.happy, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Wir hatten mitbekommen, dass auf dem Flug ein Attentat geplant war, leider waren wir zu spät. Wir sind froh, dass dir nichts passiert ist.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Eine unbekannte Organisation zieht hier die Fäden.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko erzählte " +
            VisualNovel.gameProgress.playername +
            " die komplette Geschichte, wie sie rausfand, dass die IG nur ihren eigenen Vorteil im Sinn hat und dass die Rebellen mit der Hilfe des Virus jetzt in der Lag sind, das Machtgefüge zu verändern.");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.ex, 1, false);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.tro2, 0, 1, false);
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.tro3, 1, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Plötzlich eine laute Explosion.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sprecher);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.angry, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Wir werden angegriffen, alle nach draußen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive6 = SceneEndPositive6;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive7() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.vorRebellen);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Du bist also der kleine Pisser, der mir die ganze Zeit auf der Nase rumtanzt.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Darf ich mich vorstellen, ich bin Mike und ich leite die Hand von DoS.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Ihr habt da einen USB-Stick, der mir gehört und die kleine Aiko darf mir noch beim Entschlüsseln des neuen Zuganges helfen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Gebt mir den USB-Stick und Aiko oder meine Leuten werden euch den Arsch aufreiße!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(15, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "So sieht's aus. Her mit dem verdammten USB-Stick.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.chan, VisualNovel.characters.chan.pose.angry, VisualNovel.ƒS.positionPercent(30, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Hört auf die Kleine, sonst gibt es ein paar.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jin, VisualNovel.characters.jin.pose.sad, VisualNovel.ƒS.positionPercent(40, 125));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Die pissen sich ja schon vor Angst fast ein.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sun, VisualNovel.characters.sun.pose.normal, VisualNovel.ƒS.positionPercent(60, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sun, "Gebt uns den USB-Stick und Aiko!");
        // Gives player answer choices and lets player choose
        let choices = {
            a: "*Mike den USB-Stick und Aiko aushändigen.*",
            b: "*Wieder nach drinnen flüchten.*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mike kann mithilfe von Aiko seinen finsteren Plan in die Tat umsetzten.");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.jin);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sun);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "end-positive7";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Los, rein!");
        }
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.jin);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sun);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive7 = SceneEndPositive7;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive8() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.rebellenBasis);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Wir verstecken uns jetzt hier. Gibt es hier irgendwo einen Rechner?");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skarana, VisualNovel.characters.skarana.pose.scared, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skarana, "Ja im Büro.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Aiko, ich habe auf dem Handelsschiff ein Back-up vom USB-Stick erstellt, nimm es und versuche die KI umzuprogrammieren.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ich weiß, dass du das kannst.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_r_smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Das habe ich noch nie gemacht.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Keine Angst, es ist genau dasselbe, als würdest du Veränderungen an Sona vornehmen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_talk, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Wirklich?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ja, wir halten die Leute so lang wie möglich auf.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Aber ...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Geh schon!!!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skarana);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Ihr könnt nicht vor uns flüchten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Warum tut ihr so etwas?");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Der Grund ist recht simpel, GELD, MACHT und FRAUEN!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.happy2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Wir haben schon viel zulange angeschaut, wie die IG sie bereichert, jetzt sind wir dran.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Da kam es mir recht, dass einer unsere Wissenschaftler diesen Virus gefunden hat und modifiziert. ");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Mithilfe dieses Virus übernehmen wir den ganzen Planeten.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Genug geredet, ladet die Laser!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.chan, VisualNovel.characters.chan.pose.angry, VisualNovel.ƒS.positionPercent(50, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Wird gemacht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "FEUER!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.skasskas, VisualNovel.characters.skasskas.pose.angry, VisualNovel.ƒS.positionPercent(20, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.skasskas, "Ihr seid nicht die Hellsten, wir haben um diesen Bereich soeben eine Energie-Freizone errichtet, eure Waffen funktionieren hier nicht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.skasskas);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.jin, VisualNovel.characters.jin.pose.sad, VisualNovel.ƒS.positionPercent(30, 120));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.jin, "Noch besser, wir brauchen keine Waffen. Auf sie!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du wirst von Jin mit einem rechten Haken angegriffen.");
        // Gives player answer choices and lets player choose
        let choices = {
            a: "*Den rechten Haken einstecken und selber einen austeilen.*",
            b: "*Ausweichen*",
        };
        let selectedChoice = await VisualNovel.ƒS.Menu.getInput(choices, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice == choices.a) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.jin);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du hast ihm eine verpasst.");
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "end-positive7";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice == choices.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.jin);
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du bist ihm erfolgreich ausgewichen.");
        }
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du stehst nun neben Mike.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mike holt zu einem gewaltigen Schlag aus.");
        // Gives player answer choices and lets player choose
        let choices1 = {
            a: "*Einstecken und selber austeilen.*",
            b: "*Ausweichen*",
        };
        let selectedChoice1 = await VisualNovel.ƒS.Menu.getInput(choices1, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice1 == choices1.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mike ist viel zu erfahren und stark. Er schlägt dich bewusstlos");
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
            await VisualNovel.ƒS.update(1);
            let currentScenceId = "end-positive8";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice1 == choices1.b) {
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du hast einen kurzen Moment Ruhe.");
        }
        // Gives player answer choices and lets player choose
        let choices2 = {
            a: "*Direkt wieder in den Kampf*",
            b: "*Schauen, wie sich die Situation entwickelt.*",
        };
        let selectedChoice2 = await VisualNovel.ƒS.Menu.getInput(choices2, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice2 == choices2.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du bist doch erschöpfter als gedacht, Chan schlägt dich bewusstlos ");
            let currentScenceId = "end-positive8";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice2 == choices2.b) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du merkst, wie dir die Kraft zum Weiterkämpfen fehlt.");
        }
        // Gives player answer choices and lets player choose
        let choices3 = {
            a: "*Gebt auf, es gab schon genug verletzte*",
            b: "*Auf ein Wunder hoffen*",
        };
        let selectedChoice3 = await VisualNovel.ƒS.Menu.getInput(choices3, "decision");
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.buttonClick, 1, false); // Plays this sound once
        // Does something depending on player choice
        if (selectedChoice3 == choices3.a) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mike akzeptiert eure Kapitulation nicht und schlägt dich bewusstlos.");
            let currentScenceId = "end-positive8";
            VisualNovel.gameProgress.gameOverSceneId = currentScenceId;
            return "game-over";
        }
        else if (selectedChoice3 == choices3.b) {
            // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
            await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(30, 100));
            await VisualNovel.ƒS.update(1);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Heee, sucht euch Leute aus, die auch aussehen wie ihr.");
        }
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.angry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Was zum Teufel bist du für eine Kreatur!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Wir sind die Antikörper des Planeten, um gegen Verschmutzer wie euch vorzugehen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.rot);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.blau, VisualNovel.characters.blau.pose.mad, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Attacke!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.rot, VisualNovel.characters.rot.pose.mad, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.rot, "Auf sie!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.blau);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.rot);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.braun, VisualNovel.characters.braun.pose.angry, VisualNovel.ƒS.positionPercent(30, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.braun, "Zeigt ihnen, wo der Hammer hängt!");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.orange, VisualNovel.characters.orange.pose.mad, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.orange, "Lasst sie nicht entkommen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.orange);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.braun);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.chan, VisualNovel.characters.chan.pose.sad, VisualNovel.ƒS.positionPercent(20, 130));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.chan, "Scheiße Boss, was sollen wir tun.");
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.sad2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Ich weiß auch ...");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mike, VisualNovel.characters.mike.pose.superangry2, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mike, "Verdammt, ich steh in irgendwas.");
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.blau, VisualNovel.characters.blau.pose.mad, VisualNovel.ƒS.positionPercent(90, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.blau, "Habe ich dich!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Mithilfe der Müllmonster konnten die Rebellen den Angriff der Geheimenorganisation zurückschlagen.");
        VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.tro3, 0, 1, false);
        VisualNovel.ƒS.Sound.play(VisualNovel.sounds.tro4, 1, true);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sofi, VisualNovel.characters.sofi.pose.sad, VisualNovel.ƒS.positionPercent(50, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sofi, "Ihhh ... Das ist so ekelhaft!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Du rennst panisch in das Zimmer, in dem Aiko ist, um zu prüfen, dass es ihr gut geht.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sofi);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.blau);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.chan);
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mike);
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive8 = SceneEndPositive8;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneEndPositive9() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.rebellenPC);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        // Hides text box
        VisualNovel.ƒS.Speech.hide();
        // Shows background image / transitions into background image
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_r_smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Ich habe es geschafft.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Dir geht es Gott sei Dank gut.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_talk, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du siehst nicht unbedingt gut aus, sind sie weg?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Ja, ohne die Hilfe der Müllmonster hätten wir das nicht geschafft.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Müllmonster?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.player, "Das erzähle ich dir später.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aiko, VisualNovel.characters.aiko.pose.h_r_smile, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aiko, "Du hast recht, ich muss das hier unbedingt Skarana zeigen.");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.aiko);
        await VisualNovel.ƒS.update(1);
        // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sprecher, VisualNovel.characters.sprecher.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko hatte den Virus umprogrammiert, sodass Alice jetzt keine Infrastrukturen lahmlegte, sondern sich ausschließlich mit der Abschaltung der IG Fabriken befasste.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Aiko hatte zuvor an einer Verschlüsslung des Hauptnetzes gearbeitet, wodurch sie in der Lage war, eine Hintertür zum System offenzulassen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Darüber konnten die Rebellen erfolgreich den Virus, den " +
            VisualNovel.gameProgress.playername +
            " besorgt hatte, in das Netz einspielen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Unter der Kontrolle von Alice sorgten die Rebellen dafür, dass die Fabriken sich selbst zerstörten.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Im ersten Moment brach Panik auf dem Planeten aus.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Bewohner fürchteten sich, ihren Luxus und Wohlstand zu verlieren.");
        await VisualNovel.ƒS.update(1);
        // Visual novel has reached the positive end
    }
    VisualNovel.SceneEndPositive9 = SceneEndPositive9;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function SceneGameOver() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.gameover);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.game, VisualNovel.characters.game.pose.angry, VisualNovel.ƒS.positions.center);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Schade, war wohl nix!");
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.game);
        await VisualNovel.ƒS.update(1);
        // Jumps to this scence
        return VisualNovel.gameProgress.gameOverSceneId;
    }
    VisualNovel.SceneGameOver = SceneGameOver;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function ThanksForPlaying() {
        // Shows background image / transitions into background image
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.end);
        await VisualNovel.ƒS.update(VisualNovel.transitions.wipeRightToLeft.duration, VisualNovel.transitions.wipeRightToLeft.alpha, VisualNovel.transitions.wipeRightToLeft.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Danke für das Spielen. Wir sind fertig!");
    }
    VisualNovel.ThanksForPlaying = ThanksForPlaying;
})(VisualNovel || (VisualNovel = {}));
//# sourceMappingURL=Main.js.map