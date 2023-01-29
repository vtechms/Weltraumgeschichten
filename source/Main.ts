namespace VisualNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("### Start of Main ###");

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      // Scenes are executed in given order OR can jump directly to the scene via id
      { scene: NeueSzene00, name: "Einleitung", id: "001" },
      { scene: NeueSzene01, name: "Akt1 Schule im Gang", id: "002" },
      { scene: NeueSzene02, name: "Akt1 Klassenzimmer", id: "003" },
      { scene: NeueSzene03, name: "Akt1 Schule im Gang", id: "004" },
      { scene: NeueSzene04, name: "Akt1 Bei Aiko", id: "005" },
      { scene: NeueSzene05, name: "Akt1 Zuhause", id: "006" },
      { scene: NeueSzene06, name: "Akt1 Aiko abholen", id: "007" },
      { scene: NeueSzene07, name: "Akt1 Der Weg 1", id: "008" },
      { scene: NeueSzene08, name: "Akt1 Der Weg 2", id: "009" },
      { scene: NeueSzene09, name: "Akt1 Der Weg 3", id: "010" },
      { scene: NeueSzene10, name: "Akt2 IG Zentrale", id: "011" },
      { scene: NeueSzene11, name: "Akt2 Alice", id: "012" },
      { scene: NeueSzene12, name: "Akt2 Hand von DoS", id: "013" },
      { scene: NeueSzene13, name: "Akt2 Raumschiff", id: "014" },
      { scene: NeueSzene14, name: "Akt2 Raumschiff2", id: "015" },
      { scene: NeueSzene15, name: "Akt2 Handelsschiff", id: "016" },
      { scene: NeueSzene16, name: "Akt2 Krankenstation", id: "017" },
      { scene: NeueSzene17, name: "Akt2 IG OmegaXV", id: "018" },
      { scene: NeueSzene18, name: "Akt2 IG OmegaXV - Aufgabe", id: "019" },
      { scene: NeueSzene19, name: "Akt2 IG OmegaXV - Mei", id: "020" },
      { scene: NeueSzene20, name: "Akt3 Reise zurück nach Trojoko - Schlafzimmer", id: "021" },
      { scene: NeueSzene21, name: "Akt3 Reise zurück nach Trojoko - Brücke", id: "022" },
      { scene: NeueSzene22, name: "Akt3 IG Neutrales Ende - Der Kampf", id: "023" },
      { scene: NeueSzene23, name: "Akt3 IG Neutrales Ende - Büro", id: "024" },
      { scene: NeueSzene24, name: "Akt3 IG Neutrales Ende - ENDE", id: "025" },
      { scene: SceneEndPositive, name: "Akt3 Positives Ende - Trojoko - Brücke", id: "end-positive" },
      { scene: SceneEndPositive2, name: "Akt3 Positives Ende - Trojoko - Rebellenschiff", id: "end-positive2" },
      { scene: SceneEndPositive3, name: "Akt3 Positives Ende - Trojoko - Absturz", id: "end-positive3" },
      { scene: SceneEndPositive4, name: "Akt3 Positives Ende - Trojoko - Monster", id: "end-positive4" },
      { scene: SceneEndPositive5, name: "Akt3 Positives Ende - Trojoko - Vor dem Versteck", id: "end-positive5" },
      { scene: SceneEndPositive6, name: "Akt3 Positives Ende - Trojoko - Im Versteck", id: "end-positive6" },
      { scene: SceneEndPositive7, name: "Akt3 Positives Ende - Trojoko - Der Angriff", id: "end-positive7" },
      { scene: SceneEndPositive8, name: "Akt3 Positives Ende - Trojoko - Der Angtiff", id: "end-positive8" },
      { scene: SceneEndPositive9, name: "Akt3 Positives Ende - Trojoko - Der Virus", id: "end-positive9" },
      { scene: SceneEndPositive10, name: "Akt3 Positives Ende - Trojoko - Das Ende", id: "end-positive10" },
      { scene: SceneEndNegative, name: "Akt3 Negatives Ende - Hand von DoS - Schiff", id: "end-negative" },
      { scene: SceneEndNegative2, name: "Akt3 Negatives Ende - Hand von DoS - Zentrale", id: "end-negative2" },
      { scene: SceneEndNegative3, name: "Akt3 Negatives Ende - Hand von DoS - Ende", id: "end-negative3" },
      { scene: SceneGameOver, name: "Game Over", id: "game-over" },
      { scene: ThanksForPlaying, name: "Thanks for playing", id: "thanks-for-playing" },
    ];

    // Enables game menu
    gameMenu = ƒS.Menu.create(
      inGameMenuButtons,
      menuButtonsFunctionality,
      "gameMenuCSSclass"
    );
    menuButtonsFunctionality("Close");

    // Enables to change the meter bar via gameProgress.playerScore
    let meterBar: HTMLElement = document.querySelector("[type=interface]");
    gameProgress = ƒS.Progress.setData(gameProgress, meterBar);

    // Hides meter bar on start screen / splash screen
    meterBar.style.display = "none";

    // Starts the sequence of scenes
    ƒS.Progress.go(scenes);
  }

  // ###################################################################
  // ###################################################################

  // Defines all locations
  export let locations = {
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
  export let characters = {
    sprecher: {
      name: "Sprecher:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "images/characters/OLD_MAN_RED_ANGRY.png",
        happy: "images/characters/OLD_MAN_RED_NORMAL.png",
        upset: "images/characters/OLD_MAN_RED_SAD.png",
      },
    },
    sona: {
      name: "Sona V.3Xc5:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        mad: "images/characters/Sprite_Monster Slime_BlueA_Mad.png",
        sad: "images/characters/Sprite_Monster_Slime_BlueA_Sad.png",
      },
    },
    hblau: {
      name: "Hellblau:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        mad: "images/characters/Sprite_Monster_Slime_BlueC_Mad.png",
        sad: "images/characters/Sprite_Monster Slime BlueC_Sad.png",
        blue: "images/characters/Sprite_Monster_Slime_BlueC.png",
      },
    },
    rot: {
      name: "Rot:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        mad: "images/characters/Sprite_Monster_Slime _LavaA_Mad.png",
        red: "images/characters/Sprite_Monster_Slime_LavaA.png",
        saf: "images/characters/Sprite_Monster_Slime_LavaA_Sad.png",
      },
    },
    orange: {
      name: "Orange:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        orange: "images/characters/Sprite_Monster_Slime_LavaB.png",
        mad: "images/characters/Sprite_Monster_Slime_LavaB_Mad.png",
        sad: "images/characters/Sprite_Monster_Slime_LavaB_Sad.png",
      },
    },
    stev: {
      name: "Stev:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        ee: "images/characters/kaya_crossed_ee.png",
        blush: "images/characters/kaya_crossed_ee_blush.png",
        sweat: "images/characters/kaya_crossed_ee_sweat.png",
        trear: "images/characters/kaya_crossed_ee_tear.png",
      },
    },
    luna: {
      name: "Luna:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "images/characters/Jin1.png",
        happy: "images/characters/Jin2.png",
        sad: "images/characters/Jin3.png",
        ohh: "images/characters/Jin4.png",
      },
    },
    sun: {
      name: "Sun:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "images/characters/Sun1.png",
        normal2: "images/characters/Sun2.png",
        happy: "images/characters/Sun3.png",
        ohh: "images/characters/Sun4.png",
      },
    },
    braun: {
      name: "Braun:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "images/characters/Sprite_Monster_Slime_Mud.png",
        happy: "images/characters/Sprite_Monster_Slime_Mud_Mad.png",
        happy2: "images/characters/Sprite_Monster_Slime_Mud_Sad.png",
      },
    },
    game: {
      name: "Game Over:",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "images/characters/game.png",

      },
    },
  };

  // Defines items that player can obtain and use
  export let items = {
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
  export let sounds = {
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
  export let gameProgress = {
    playername: "",
    inventoryOpen: false,
    playerScore: 0,
    gameOverSceneId: "",
  };

  // Defines credits
  export function showCredits(): void {
    ƒS.Text.setClass("credits");
    ƒS.Text.print("Weltraumgeschichten - Manuel Kasperzack: (265013)");
  }

  // ###################################################################
  // ###################################################################

  // Defines all animations
  export function scaling(
    start_scale: number,
    end_scale: number
  ): ƒS.AnimationDefinition {
    return {
      start: {
        scaling: new ƒS.Position(start_scale, start_scale),
      },
      end: {
        scaling: new ƒS.Position(end_scale, end_scale),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function rightToLeft(
    start_x: number,
    start_y: number,
    end_x: number,
    end_y: number
  ): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(start_x, start_y) },
      end: { translation: ƒS.positionPercent(end_x, end_y) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function leftToRight(
    start_x: number,
    start_y: number,
    end_x: number,
    end_y: number
  ): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(start_x, start_y) },
      end: { translation: ƒS.positionPercent(end_x, end_y) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function middleToRight(
    start_x: number,
    start_y: number,
    end_x: number,
    end_y: number
  ): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(start_x, start_y) },
      end: { translation: ƒS.positionPercent(end_x, end_y) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function middleToLeft(
    start_x: number,
    start_y: number,
    end_x: number,
    end_y: number
  ): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(start_x, start_y) },
      end: { translation: ƒS.positionPercent(end_x, end_y) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function rightToMiddle(
    start_x: number,
    start_y: number,
    end_x: number,
    end_y: number
  ): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(start_x, start_y) },
      end: { translation: ƒS.positionPercent(end_x, end_y) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function leftToMiddle(
    start_x: number,
    start_y: number,
    end_x: number,
    end_y: number
  ): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(start_x, start_y) },
      end: { translation: ƒS.positionPercent(end_x, end_y) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  // Defines all transitions of images
  export let transitions = {
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
  async function openInventory(_event: KeyboardEvent): Promise<void> {
    if (_event.key == "i") {
      if (gameProgress.inventoryOpen) {
        gameProgress.inventoryOpen = false;
        ƒS.Inventory.close();
      } else {
        gameProgress.inventoryOpen = true;
        await ƒS.Inventory.open();
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
  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true;
  async function menuButtonsFunctionality(_option: string): Promise<void> {
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
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
  async function menuKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          gameMenu.close();
          menuIsOpen = false;
        } else {
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }
}
